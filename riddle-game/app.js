
import readline from "readline-sync";
import Riddle from "./classes/Riddle.js";
import Player from "./classes/Player.js";
import fs from "node:fs";

import {
    getOrCreatePlayer,
    updatePlayerTime,
    showLeaderboard
} from "./players/playerDB.js";
import { showMenu } from "./menu.js";

import {
    createRiddle,
    readRiddles,
    updateRiddle,
    deleteRiddle
} from "./riddles/riddleDB.js";


// Load riddles from database
function loadRiddles() {
    const data = fs.readFileSync("./riddles/db.txt", "utf8");
    return JSON.parse(data);
}


// Shuffle riddles
function shuffleRiddles(riddles) {
    const shuffled = [...riddles];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// Save game progress
function saveProgress(player, level, riddleOrder) {
    const progress = {
        playerName: player.name,
        difficulty: level,
        solvedRiddles: player.solvedRiddles,
        times: player.times,
        riddleOrder: riddleOrder
    };

    fs.writeFileSync(
        "progress.json",
        JSON.stringify(progress, null, 2)
    );
}


// Main game function
function playGame() {
    console.log("\nWelcome to the Riddle Game!");

    let savedProgress = null;

    // Load saved progress
    if (fs.existsSync("progress.json")) {
        try {
            const data = fs.readFileSync(
                "progress.json",
                "utf8"
            );

            savedProgress = JSON.parse(data);

        } catch (error) {
            console.log("Could not load saved progress.");
        }
    }

    let player;
    let level;
    let riddleOrder;

    // Offer to continue saved game
    if (savedProgress) {
        let choice = readline.question(
            "Saved game found! Continue? yes / no: "
        ).trim().toLowerCase();

        while (choice !== "yes" && choice !== "no") {
            console.log("Invalid choice. Try again.");

            choice = readline.question(
                "Continue? yes / no: "
            ).trim().toLowerCase();
        }

        if (choice === "yes") {
            player = new Player(savedProgress.playerName);

            player.solvedRiddles =
                savedProgress.solvedRiddles || [];

            player.times =
                savedProgress.times || [];

            level = savedProgress.difficulty;
            riddleOrder = savedProgress.riddleOrder;

            console.log(`Welcome back, ${player.name}!`);
        }
    }

    // Start a new game
    if (!player) {
        const name = readline.question(
            "What is your name? "
        ).trim();

        player = new Player(name);

        console.log(`Hello, ${player.name}!`);

        level = readline.question(
            "Choose difficulty: easy / medium / hard: "
        ).trim().toLowerCase();

        while (
            level !== "easy" &&
            level !== "medium" &&
            level !== "hard"
        ) {
            console.log("Invalid difficulty. Try again.");

            level = readline.question(
                "Choose difficulty: easy / medium / hard: "
            ).trim().toLowerCase();
        }
    }


    // Get player from player database
    const playerData = getOrCreatePlayer(player.name);

    // Show previous best time
    if (
        playerData.lowestTime !== null &&
        playerData.lowestTime !== undefined
    ) {
        console.log(
            `Hi ${player.name}! Your previous lowest time was ${playerData.lowestTime} seconds.`
        );
    } else {
        console.log(
            `Hi ${player.name}! You don't have a record yet.`
        );
    }


    // Load latest riddles from database
    const allRiddles = loadRiddles();

    // Filter riddles by difficulty
    const levelRiddles = allRiddles.filter(
        riddle => riddle.difficulty === level
    );

    // Handle empty difficulty
    if (levelRiddles.length === 0) {
        console.log(
            "No riddles available for this difficulty."
        );
        return;
    }


    // Shuffle riddles for new games
    if (!Array.isArray(riddleOrder)) {
        riddleOrder = shuffleRiddles(levelRiddles).map(
            riddle => riddle.id
        );
    }


    // Keep saved riddle order
    const orderedRiddles = riddleOrder
        .map(id =>
            levelRiddles.find(riddle => riddle.id === id)
        )
        .filter(riddle => riddle !== undefined);


    // Skip completed riddles
    const filteredRiddles = orderedRiddles.filter(
        riddle =>
            !player.solvedRiddles.includes(riddle.id)
    );


    // Check if all riddles were completed
    if (filteredRiddles.length === 0) {
        console.log(
            "You have already completed all riddles!"
        );

        player.showStats();
        return;
    }


    // Save initial progress
    saveProgress(player, level, riddleOrder);


    // Play riddles
    filteredRiddles.forEach(riddleData => {
        const riddle = new Riddle(
            riddleData.id,
            riddleData.name,
            riddleData.taskDescription,
            riddleData.correctAnswer,
            riddleData.difficulty,
            riddleData.timeLimit,
            riddleData.hint
        );

        const start = Date.now();

        const penalty = riddle.ask();

        const end = Date.now();

        // Record time including penalties
        player.recordTime(start, end, penalty);

        // Mark riddle as completed
        player.solvedRiddles.push(riddle.id);

        // Save progress after every riddle
        saveProgress(player, level, riddleOrder);
    });


    // Show final statistics
    
player.showStats();

const totalTime = player.times.reduce(
    (sum, time) => sum + time,
    0
);

updatePlayerTime(player.name, totalTime);

console.log(`Great job, ${player.name}!`);

}


// Main menu
console.log("Welcome to the Riddle Game!");

let running = true;

while (running) {
    const choice = showMenu();

    switch (choice) {
        case "1":
            playGame();
            break;

        case "2":
            createRiddle();
            break;

        case "3":
            readRiddles();
            break;

        case "4":
            updateRiddle();
            break;

        case "5":
            deleteRiddle();
            break;

        case "6":
            showLeaderboard();
            break;

        case "7":
            console.log("Goodbye!");
            running = false;
            break;

        default:
            console.log("Invalid choice. Try again.");
    }
}
