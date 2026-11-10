import fs from "node:fs";

const DB_PATH = "./players/players.txt";

export function loadPlayers() {
    const data = fs.readFileSync(DB_PATH, "utf8");
    return JSON.parse(data);
}

export function savePlayers(players) {
    fs.writeFileSync(
        DB_PATH,
        JSON.stringify(players, null, 2)
    );
}


export function getOrCreatePlayer(name){
     const players = loadPlayers();
     let player = players.find(p => p.name === name);

     if (player) {
        return player;
    }
    const newId = players.length > 0
        ? Math.max(...players.map(p => p.id)) + 1
        : 1;

    player = {
        id: newId,
        name: name,
        lowestTime: null
    };

    players.push(player);

    savePlayers(players);

    return player;
}




export function updatePlayerTime(name, newTime) {
    const players = loadPlayers();

    const player = players.find(p => p.name === name);

    if (!player) {
        console.log("Player not found!");
        return;
    }

    if (player.lowestTime === null || newTime < player.lowestTime) {
        player.lowestTime = newTime;

        savePlayers(players);

        console.log("New record! Time updated.");
    } else {
        console.log(
            `Your best time is still ${player.lowestTime} seconds.`
        );
    }
}



export function showLeaderboard() {
    const players = loadPlayers();

    const rankedPlayers = players
        .filter(player => player.lowestTime !== null)
        .sort((a, b) => a.lowestTime - b.lowestTime);

    if (rankedPlayers.length === 0) {
        console.log("No records yet!");
        return;
    }

    console.log("\n🏆 Leaderboard:");

    rankedPlayers.forEach((player, index) => {
        console.log(
            `${index + 1}. ${player.name} - ${player.lowestTime} seconds`
        );
    });
}
