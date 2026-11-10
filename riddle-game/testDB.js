
import { getOrCreatePlayer, loadPlayers } from "./players/playerDB.js";

const player1 = getOrCreatePlayer("Sarah");
console.log("First call:", player1);

const player2 = getOrCreatePlayer("Sarah");
console.log("Second call:", player2);

console.log("All players:", loadPlayers());
