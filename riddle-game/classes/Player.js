class Player {
    constructor(name) {
        this.name = name;
        this.times = [];
        this.solvedRiddles = [];
    }

    recordTime(start, end, penalty) {
        this.times.push(((end - start) / 1000)+penalty);
    }

    showStats() {
        if (this.times.length === 0) {
            console.log("No riddles completed yet.");
            return;
        }
        const total = this.times.reduce((sum, num) => sum + num, 0);
        console.log(`Total time: ${total} seconds`);
        console.log(`Average per riddle: ${total / this.times.length} seconds`);
        }
}

export default Player;