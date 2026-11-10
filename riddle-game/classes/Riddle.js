import readline from "readline-sync";

class Riddle{
    constructor(id, name, taskDescription, correctAnswer, difficulty, timeLimit, hint){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
        this.difficulty = difficulty;
        this.timeLimit = timeLimit;
        this.hint = hint;
    }

    ask() {
    let penalty = 0;
    let hintUsed = false;
    console.log(`Riddle ${this.id}: ${this.name}`);
    const start = Date.now();
    let answer = readline.question(this.taskDescription + " ");
    while (answer !== this.correctAnswer)
    {
        if (answer === "hint"  && this.hint && !hintUsed) {
        console.log(this.hint);
        penalty+= 10;
        hintUsed = true;
    }else if (answer === "hint" && hintUsed) {
        console.log("Hint already used!");
    }
     else {
        console.log("Wrong answer!");
    } 
        answer = readline.question(this.taskDescription + " ");
    }
    const end = Date.now();
    console.log("Correct!");
     const duration = (end -start)/1000;

    if (duration > this.timeLimit) {
        console.log("Too slow! 5 seconds penalty applied.");
        penalty+= 5;
    }

    return penalty;
}

}
export default Riddle;