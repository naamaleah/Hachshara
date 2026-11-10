
const fs = require("fs");

function fileReaderWithStats(filePath) {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File Content:");
        console.log(data);

        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.log("Error getting stats:", err.message);
                return;
            }

            console.log("Size:", stats.size, "bytes");
            console.log("Created At:", stats.birthtime.toISOString());
        });
    });
}

fileReaderWithStats("test.txt");





const path = require("path");

function listFiles(directoryPath) {
    fs.readdir(directoryPath, (err, items) => {
        if (err) {
            console.log("Error:", err.message);
            return;
        }

        items.forEach(item => {
            const fullPath = path.join(directoryPath, item);

            fs.lstat(fullPath, (err, stats) => {
                if (err) {
                    console.log("Error:", err.message);
                    return;
                }

                if (stats.isFile()) {
                    console.log("File:", item);
                }
            });
        });
    });
}

listFiles(".");




function countDown(num) {
    console.log(num);

    if (num > 0) {
        setTimeout(() => {
            countDown(num -1);
        }, 1000);
    } else {
        console.log("Time's up!");
    }
}

countDown(5);




import fs from "node:fs";

function appendLog() {
    const timeStamp = new Date().toISOString();
    const logLine = `${timeStamp} - Log entry\n`;

    fs.appendFile("log.txt", logLine, (err) => {
        if (err) {
            console.log("Error:", err);
            return;
        }

        console.log("Text added successfully");
    });
}

appendLog();


import path from "node:path";

function createBackupFolder() {
    const basePath = process.cwd();
    const folderPath = path.join(basePath, "backup");

    fs.access(folderPath, fs.constants.F_OK, (err) => {
        if (!err) {
            console.log("Folder already exists.");
            return;
        }

        if (err.code !== "ENOENT") {
            console.log("Error checking folder:", err);
            return;
        }

        fs.mkdir(folderPath, (err) => {
            if (err) {
                console.log("Error creating folder:", err);
                return;
            }

            console.log("Folder created successfully.");
        });
    });
}

createBackupFolder();



