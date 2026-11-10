{
    let a = "some string";
    let b = "other string";
    [a,b]=[b,a];
}

{
const grid = [
    ["X", "O", "x", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["x", "O", "X", "O", "O"],
    ["O", "O", "O", "X", "x"],
    ["X", "O", "O", "O", "X"]
];
let count =0;
for(let i =0;i< 5 ; i++)
{
    for(let j =0; j<5 ; j++)
    {
        if (grid[i][j]==="X")
        {
            count ++;
            console.log(i+","+j);
        }
    }
}
console.log(count);

}

{
    let family = 
    { parents: {}, 
    children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
    const children=family.children;
    console.log(children[2].name);
    console.log(children[0].name+","+children[1].name+","+children[2].name);
}

{
    const word="sdhaj";
    let newword="";
    for (let i =word.length-1; i>=0;i--)
    {
        newword+=word[i];
    }
    console.log(newword);
}

{
    const arr = [
    10, "hello", true, 25,
    null, {name: "Ali"},
    "world", false, [1, 2], 50
];
    const counts = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    null: 0
};
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i] == null){
                counts[null]++;
        }
        else{
        const type= typeof arr[i];
        counts[type]++;
        }
    }
    console.log(counts);
}

{
    const arr=[1,2,123,1234,111,1232];
    const arrn=[];
    let count=0;
    for (let i =0;i<arr.length; i++){
        count++;
        if(arr[i]>100)
        {
            arrn.push(arr[i]);

        }
    }
    console.log(arrn);
    console.log(count);

}

{
    const numbers={
        even:[],
        odd:[]
    };
    let count =0;
    for (let i =1; i<=50; i+=2)
    {
        numbers.odd.push(i);
        if(i%2 == 0 && i%3==0)
            count++;
        numbers.even.push(i+1);
        if((i+1)%2 == 0 && (i+1)%3==0)
            count++;

    }
    console.log(count);
    console.log(numbers.even, numbers.odd);
}

{
 const arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === j || i + j === 2) {
            arr[i][j] = "#";
        }
    }
}

console.log(arr);
}

{
    const word = "Hello World!";
    const counts={};
    for (let i =0; i<word.length; i++){
        const letter = word[i].toLowerCase();
        if (letter >= "a" && letter <= "z"){
        if (counts[letter] == null){
            counts[letter] = 1;

        }
        else {
            counts[letter]++;
        }}
    }
    
    console.log(counts);
}

{
    const arr=[
        [1,2,3],
        [1,2,3]
    ];
    const result = [];
    for (let i =0 ; i<arr.length;i++)
    {
        for(let j=0 ;j<arr[i].length; j++)
        {
            if (arr[i][j]>=0)
            {
                result.push(arr[i][j]);
            }
        }
    }
console.log(result);
}


{
    const person = {
    name: "Ali",
    age: 25,
    city: "Jerusalem"
};
const result = {};
for (const key in person) {
    const upperKey = key.toUpperCase();
    result[upperKey]=person[key];
}
const sortedKeys = Object.keys(result).sort();
for (let i = 0; i < sortedKeys.length; i++) {
    console.log(sortedKeys[i], result[sortedKeys[i]]);
}
}

{
    const size =4;
    const symbol="*";
    for(let i=0; i<size; i++)
    {
        let string ="";
        for (let j=0; j<i; j++)
        {
            string+=symbol;
        console.log(string);
        }

    }
}

{

  const A = [1, 2, 3];
const B = [1, 2, 4, 5];

const colection = {};
let count = 0;

for (let i = 0; i < A.length; i++) {
    colection[A[i]] = 1;
}

for (let i = 0; i < B.length; i++) {

 if (colection[B[i]] === 1) {
        colection[B[i]] = 2;
        count++;
    }
}

console.log(count);
}


{
    const person = {
    name: "Ali",
    age: 25,
    city: "Jerusalem",
    active: true
};
const reversed = {};
for (const key in person )
{
    if (typeof person[key] === "string" || typeof person[key] == "number" )
    {
        reversed[person[key]]=key;
    }
}
console.log(reversed);
}

{
    const grid = [];

for (let i = 0; i < 5; i++) {
    const row = [];

    for (let j = 0; j < 5; j++) {
        if (i === 2) {
            row.push(9);
        } else if (i === j) {
            row.push(1);
        } else {
            row.push(0);
        }
    }

    grid.push(row);
}

console.log(grid);
}

{
    const users = [
    { name: "Ali", age: 25, status: "active" },
    { name: "Lea", age: 17, status: "inactive" },
    { name: "Dan", age: 30, status: "active" },
    { name: "Mona", age: 16, status: "inactive" },
    { name: "David", age: 15, status: "active" }
];

let count = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].status === "active" && users[i].age > 18) {
        console.log(users[i].name);
    }

    if (users[i].status === "inactive" && users[i].age < 18) {
        count++;
    }
}

console.log("Inactive under 18:", count);
}

{
    const arr = [15, 3, 87, 22, -5, 40];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }

    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Min:", min);
console.log("Max:", max);
}

{
    const arr = [1, 2, 3];

for (let i = 0; i < 3; i++) {
    const first = arr[0];

    for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
    }

    arr[arr.length - 1] = first;

    console.log(arr);
}
}
{
    const person = {
    name: "Ali",
    age: 25,
    city: "Jerusalem"
};

let result = "{ ";
let count = 0;

for (const key in person) {
    if (count > 0) {
        result += ", ";
    }

    result += '"' + key + '": ';

    if (typeof person[key] === "string") {
        result += '"' + person[key] + '"';
    } else {
        result += person[key];
    }

    count++;
}

result += " }";

console.log(result);
}
{
    const board = [
    ["O", "X", "O", "X"],
    ["X", "O", "X", "O"],
    ["O", "O", "X", "X"],
    ["X", "O", "O", "O"]
];

let valid = true;

for (let i = 0; i < 4; i++) {
    let rowCount = 0;
    let colCount = 0;

    for (let j = 0; j < 4; j++) {
        if (board[i][j] === "O") {
            rowCount++;
        }

        if (board[j][i] === "O") {
            colCount++;
        }
    }

    if (rowCount > 2) {
        console.log("Row", i, "has too many O's");
        valid = false;
    }

    if (colCount > 2) {
        console.log("Column", i, "has too many O's");
        valid = false;
    }
}

if (valid) {
    console.log("Valid board");
} else {
    console.log("Invalid board");
}
}