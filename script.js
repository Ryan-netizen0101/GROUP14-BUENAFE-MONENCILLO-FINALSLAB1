// ANOSKORMO? - CCS114 Finals Laboratory 1

// Get the elements from the page
document.getElementById("startBtn").addEventListener("click", programStart);

function programStart() {
    alert("Welcome to the ANOSKORMO!");

    // Ask for name
    let name = prompt("Please enter your name");
    if (name === null) return;

    if (name.trim() === "") {
        alert("Invalid input! Name cannot be empty.");
        return;
    }

    // Ask for score
    let scoreInput = prompt("Please enter your score (1 to 100)");
    if (scoreInput === null) return;

    if (scoreInput.trim() === "") {
        alert("Invalid input! Score cannot be empty.");
        return;
    }

    let score = Number(scoreInput);

    if (isNaN(score)) {
        alert("Invalid input! Score must be a number.");
        return;
    }
    if (score <= 0) {
        alert("Invalid input! Score cannot be zero or negative.");
        return;
    }
    if (score > 100) {
        alert("Invalid input! Score cannot be more than 100.");
        return;
    }

    // Confirm
    if (!confirm("Do you want to continue?")) {
        return;
    }
    
    document.getElementById("showName").textContent = name;
    document.getElementById("showScore").textContent = score;
    document.getElementById("showRemark").textContent = evaluateScore(score);
    document.getElementById("message").textContent = "Here is your result!";
}

// remarks
function evaluateScore(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 75) {
        return "Passed";
    } else {
        return "Failed";
    } 
}


