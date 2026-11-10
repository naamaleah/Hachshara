const e = require("cors");

function doubleValues(arr){
    arr.map((num)=>{
        return num*2;
    });
}

function onlyEvenValues(arr){
    const result=[];
    arr.forEach(element => {
        if (element%2 ==0)
            result.push(element);
    });
    return result ;
}

function showFirstAndLast(arr){
    const result=[];
    arr.forEach((element, index)=>{
        if(index ==0 || index == arr.length -1 )
            if (typeof element ==="string")
                result.push(element);
    });
    return result;
}

function vowelCount(str){
    const counts={
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    };
    const vowels = "aeiou";
    str = str.toLowerCase();
    str.split("").forEach(letter=>{
        if (vowels.includes(letter))
            counts[letter]+=1;
    })


    return counts;
}

function capitalize(str) {
    return str.split("")
              .map(letter => letter.toUpperCase())
              .join("");
}

function shiftLetters(str) {
    return str.split("").map(letter => {

        if (letter === "z") {
            return "a";
        }

        return String.fromCharCode(letter.charCodeAt(0) + 1);

    }).join("");
}


function capitalize(str) {
    return str.toUpperCase();
}

function swapCase(str) {
    const words = str.split(" ");

    return words.map((word, index) => {
        if (index % 2 === 1)
            return capitalize(word);
        else
            return word;
    }).join(" ");
}
function getNames(data){
    return data.map(person=>{
        arrNames.push(person.name);
    });
}

function old(data){
    return data.forEach(person=>{
        if(Number(person.birthday.split("-")[2])<1990)
            return person ;
    });
}

function countFoods(data)
{
    const counts = {};
    data.array.forEach(person => {
        (person.favoriteFoods.meats).forEach(food=>{
            if(counts[food] === undefined)
                counts[food]=1
            else
                counts[food]+=1
        });

        (person.favoriteFoods.fish).forEach(food=>{
            if(counts[food] === undefined)
                counts[food]=1
            else
                counts[food]+=1
        });
        
    });
    return counts;
}   

