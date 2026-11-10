
import fs from "node:fs";
import readline from "readline-sync";

const DB_PATH = "./riddles/db.txt";

export function createRiddle() {
    const data = fs.readFileSync(DB_PATH, "utf8");
    const riddles = JSON.parse(data);

    const name = readline.question("Enter riddle name: ");
    const taskDescription = readline.question("Enter description: ");
    const correctAnswer = readline.question("Enter correct answer: ");
    const difficulty = readline.question("Enter difficulty: easy / medium / hard: ");
    const timeLimit = Number(readline.question("Enter time limit in seconds: "));
    const hint = readline.question("Enter hint: ");

    const newId = riddles.length > 0
        ? Math.max(...riddles.map(riddle => riddle.id)) + 1
        : 1;

    const newRiddle = {
        id: newId,
        name,
        taskDescription,
        correctAnswer,
        difficulty,
        timeLimit,
        hint
    };

    riddles.push(newRiddle);

    fs.writeFileSync(DB_PATH, JSON.stringify(riddles, null, 2));

    console.log("Riddle created successfully!");
}


export function readRiddles(){
    const data = fs.readFileSync(DB_PATH, "utf8");
    const riddles = JSON.parse(data);

    if(riddles.length == 0){
        console.log("No riddles found.");
        return;
    }

    riddles.forEach(riddle => {

        console.log("------------------------");
        console.log(`ID: ${riddle.id}`);
        console.log(`Name: ${riddle.name}`);
        console.log(`Description: ${riddle.taskDescription}`);
        console.log(`Answer: ${riddle.correctAnswer}`);
        console.log(`Difficulty: ${riddle.difficulty}`);
        console.log(`Time Limit: ${riddle.timeLimit} seconds`);
        console.log(`Hint: ${riddle.hint}`);
        
    });

}




export function updateRiddle(){
    const data = fs.readFileSync(DB_PATH, "utf8")
    const riddles = JSON.parse(data);

    const id = Number(readline.question("Enter riddle ID to update: "));

    const riddle = riddles.find(r => r.id === id);

    if(!riddle){
        console.log("Riddle not found!");
        return;
    }

    console.log(`Updating riddle: ${riddle.name}`);
    console.log("Press Enter to keep the current value.");

    const name = readline.question(`Name (${riddle.name}): `);
    const description = readline.question(`Description (${riddle.taskDescription}): `);
    const answer = readline.question(`Answer (${riddle.correctAnswer}): `);
    const difficulty = readline.question(`Difficulty (${riddle.difficulty}): `);
    const timeLimit = readline.question(`Time limit (${riddle.timeLimit}): `);
    const hint = readline.question(`Hint (${riddle.hint}): `);

    if (name.trim() !== "") {
        riddle.name = name;
    }

    if (description.trim() !== "") {
        riddle.taskDescription = description;
    }

    if (answer.trim() !== "") {
        riddle.correctAnswer = answer;
    }

    if (["easy", "medium", "hard"].includes(difficulty.trim().toLowerCase())) {
        riddle.difficulty = difficulty.trim().toLowerCase();
    }

    if (timeLimit.trim() !== "" &&
        Number.isFinite(Number(timeLimit)) &&
        Number(timeLimit) > 0) {
        riddle.timeLimit = Number(timeLimit);
    }

    if (hint.trim() !== "") {
        riddle.hint = hint;
    }

    fs.writeFileSync(DB_PATH, JSON.stringify(riddles, null, 2));
    console.log("Riddle updated successfully!");

}


export function deleteRiddle(){
    const data = fs.readFileSync(DB_PATH, "utf8");
    const riddles = JSON.parse(data);

    const id = Number(readline.question("Enter riddle ID to delete: "));

    const riddle = riddles.find(r => r.id === id);

    if(!riddle){
        console.log("Riddle not found!");
        return;
    }

    const confirm = readline.question(
        `Are you sure you want to delete "${riddle.name}"? yes / no: `
    ).trim().toLowerCase();

    if (confirm !== "yes") {
        console.log("Deletion cancelled.");
        return;
    }

    const updatedRiddles = riddles.filter(r => r.id !== id);
    fs.writeFileSync(DB_PATH, JSON.stringify(updatedRiddles, null, 2));

    console.log("Riddle deleted successfully!");
}