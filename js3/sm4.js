function delayedGreet(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, delay);
    });
}

delayedGreet("Alice", 2000)
    .then((message) => {
       console.log(message);
    });

const { rejects } = require("assert");
const fs = require("fs");
function readFileContent(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if(err){
                reject(err);
            }else{
resolve(data);
            }        

});
    });
   
}

readFileContent("test.txt").then(data =>{
console.log(data);
}).catch(err =>{
console.log(err);
});




function randomOperation(){
    const num = Math.random();
    return new Promise((resolve, reject) => {
        if (num <0.5)
            resolve("Success!");
        else
            reject("Failure!")
    })
}

randomOperation().then(result =>{
    console.log(result);
}).catch(err =>{
    console.log(err);
});




function raceTimers() {
    const a = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Timer A finished!");
        }, 2000);
    });

    const b = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Timer B finished!");
        }, 3000);
    });

    return Promise.race([a, b]);
}

raceTimers().then(result => {
    console.log(result);
});









const https = require("https");

function fetchData(url) {
    return new Promise((resolve, reject) => {

        https.get(url, (response) => {

            let data = "";

            response.on("data", (chunk) => {
                data += chunk;
            });

            response.on("end", () => {
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    resolve(data);
                } else {
                    reject(new Error(`HTTP Error: ${response.statusCode}`));
                }
            });

            response.on("error", (err) => {
                reject(err);
            });

        }).on("error", (err) => {
            reject(err);
        });

    });
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then((result) => {
        console.log("Received data:");
        console.log(result);
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });





function waitAll(){
    const  first  = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First");
        }, 1000);
    });
    const  second  = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second");
        }, 2000);
    });

    const  third  = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Third");
        }, 3000);
    });

    return Promise.all([first, second, third]);
}

waitAll().then(result =>{
    console.log(result);
});



function  checkFileExists(path){
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            
        if(!err){
            resolve(true);
        }else{
            reject(false);
        }
    });
    
});
}

checkFileExists("cdbsbcj.txt").then(result=>{
    console.log("File exists: true");
}).catch(err =>{
    console.log("File exists: false");
});


function chainedGreetings() {
    const first = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi!");
        }, 1000);
    });

    return first
        .then(message => {
            console.log(message);

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("How are you?");
                }, 2000);
            });
        })

        .then(message => {
    console.log(message);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Goodbye!");
        }, 1000);
    });
});
}
chainedGreetings().then(message=>
{
    console.log(message);
}
);


const fs = require("fs");

function processFile(inputPath, outputPath) {
    const step1 = new Promise((resolve, reject) => {
        fs.readFile(inputPath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

    return step1
        .then(data => {
            if (data.trim() === "") {
                return 0;
            }

            const words = data.trim().split(/\s+/);
            return words.length;
        })
        .then(words => {
            return new Promise((resolve, reject) => {
                const content = `Word count: ${words}`;

                fs.writeFile(outputPath, content, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(content);
                    }
                });
            });
        });
}

processFile("input.txt", "result.txt")
    .then(result => {
        console.log("Saved successfully!");
        console.log(result);
    })
    .catch(err => {
        console.log("Error:", err.message);
    });



function getUserTitle(userId){

}

const https = require("https");

function getUserTitle(userId) {
    const url = `https://jsonplaceholder.typicode.com/todos/${userId}`;

    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = "";

            response.on("data", (chunk) => {
                data += chunk;
            });

            response.on("end", () => {
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    resolve(data);
                } else {
                    reject(new Error(`HTTP Error: ${response.statusCode}`));
                }
            });

            response.on("error", (err) => {
                reject(err);
            });
        }).on("error", (err) => {
            reject(err);
        });
    })
    .then(data => {
        return JSON.parse(data);
    })
    .then(obj => {
        return obj.title;
    });
}

getUserTitle(4)
    .then(title => {
        console.log("User 4's title:", title);
    })
    .catch(err => {
        console.log("Error:", err.message);
    });
