const { log } = require('console');
const fs = require('fs');
function readFilePromise(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err.message);
                return ;
            }
            resolve(data);
});
    });
}


async function readFileAsync(path) {
    return  fs.promises.readFile(path, 'utf8');
}

readFileAsync('./test.txt')
    .then(console.log)
    .catch(console.error);



async function getFileSize(path) {
    const stats = await fs.promises.stat(path);
    return stats.size;
    
}
getFileSize('./test.txt')
    .then(console.log)
    .catch(console.error);




async function listFiles(dir) {
    return fs.promises.readdir(dir);
}

listFiles('./')
    .then(console.log)
    .catch(console.error);



async function readFilesInOrder(files) {

    for (const path of files) {

        const content = await fs.promises.readFile(path, 'utf8');
        console.log(content);
    }

}

readFilesInOrder(['a.txt', 'b.txt'])
    .catch(console.error);






async function readFilesParallel(files) {
    const promises = files.map(path => {
    return fs.promises.readFile(path, 'utf8');
});
const results = await Promise.all(promises);
results.forEach(res=>{console.log(res)});

}


readFilesParallel(['a.txt', 'b.txt'])
    .catch(console.error);





function fileExists(path) {
    return new Promise((resolve, reject) => {

        fs.access(path, (err) => {

            if (!err) {
                resolve(true);
            } else {
                resolve(false);
            }

        });
    });
}

fileExists('./test.txt')
    .then(result => console.log(result))
    .catch(err => console.error(err));







async function copyFile(src, dest) {

    const content = await fs.promises.readFile(src,'utf8' );
    await  fs.promises.writeFile(dest,content );
    return;  
}
copyFile('./test.txt','./test1.txt').catch(console.error);



async function mergeFiles(files, output) {
     const promises = files.map(path => 
         fs.promises.readFile(path, 'utf8'))
    const contents = await Promise.all(promises);
    const result = contents.join('\n');
    await  fs.promises.writeFile(output,result );
    return;

}



async function searchWordInFiles(dir, word) {

    const files = await fs.promises.readdir(dir);

    for (const file of files) {

        const fullPath = path.join(dir, file);

        const content = await fs.promises.readFile(fullPath, 'utf8');

        if (content.includes(word)) {
    console.log(file);
}
    }
}

searchWordInFiles('./texts', 'important')
    .catch(console.error);