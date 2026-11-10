// Exercise 1 – Extract Numbers Only
function extractNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    return arr.filter(item =>
        typeof item === "number" && !Number.isNaN(item)
    );
}


// Exercise 2 – Sum of Numbers with Error Handling
function sumNumbersSafe(arr) {
    try {
        const numbers = extractNumbers(arr);

        return numbers.reduce((sum, num) => sum + num, 0);
    } catch (error) {
        console.warn("Warning:", error.message);
        return 0;
    }
}


// Exercise 3 – Filter Large Sums
function filterLargeSums(arrList, minTotal) {
    if (!Array.isArray(arrList)) {
        throw new Error("Input must be an array of arrays");
    }

    return arrList.filter(arr => {
        const sum = sumNumbersSafe(arr);
        return sum >= minTotal;
    });
}


// Exercise 4 – Stats Summary with Error-Proof Flow
function summaryStats(arrList) {
    const filtered = filterLargeSums(arrList, 10);

    return filtered.map(arr => {
        const sum = sumNumbersSafe(arr);
        const validNumbers = extractNumbers(arr);

        const average = validNumbers.length > 0
            ? sum / validNumbers.length
            : 0;

        return {
            sum: sum,
            average: average
        };
    });
}


// Tests
console.log("Exercise 1:");
console.log(extractNumbers([1, "hi", 5]));

console.log("Exercise 2:");
console.log(sumNumbersSafe([2, 4, "bad"]));
console.log(sumNumbersSafe("fail"));

console.log("Exercise 3:");
console.log(
    filterLargeSums([[1, 2, 3], [10, "bad", 5], "fail"], 10)
);

console.log("Exercise 4:");
console.log(
    summaryStats([[1, 2, 3], [5, 5, 5], [100], "bad"])
);


// Exercise 5 – Safe Calculator
function safeCalculator(a, b, operation) {
    if (typeof a !== typeof b) {
        throw new TypeError("Operands must have the same type");
    }

    if (
        typeof a !== "number" ||
        !Number.isFinite(a) ||
        !Number.isFinite(b)
    ) {
        throw new TypeError("Operands must be valid numbers");
    }

    switch (operation) {
        case "add":
            return a + b;

        case "subtract":
            return a - b;

        case "multiply":
            return a * b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        default:
            throw new Error("Invalid operation");
    }
}


// Tests
try {
    console.log(safeCalculator(10, 5, "add"));       // 15
    console.log(safeCalculator(10, 5, "subtract"));  // 5
    console.log(safeCalculator(10, 5, "multiply"));  // 50
    console.log(safeCalculator(10, 5, "divide"));    // 2
    console.log(safeCalculator(10, "5", "add"));     // Error
} catch (error) {
    console.log("Error:", error.message);
}