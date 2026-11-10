import fs from "node:fs";


if (fs.existsSync("progress.json")) {
    const data = fs.readFileSync("progress.json", "utf8");
    const progressData = JSON.parse(data);

    console.log(progressData.playerName);
    console.log(progressData.solvedRiddles);
} else {
    console.log("No saved progress found.");
}