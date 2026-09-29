// ANOSKORMO? - CCS114 Finals Laboratory 1

    document.getElementById("startBtn").addEventListener("click", startProgram);

    function startProgram() {
        alert("Welcome to the ANOSKORMO!");

        // Ask for name
        let name = prompt("Please enter your name");
        if (name === null){
            return;
        } 
        
        if (name.trim() === "") {
            alert("Invalid input! Name cannot be empty.");
            return;
        }

        // Ask for score
        let scoreInput = prompt("Please enter your score (1 to 100)");
        if (scoreInput === null){
            return;
        } 

        if (scoreInput.trim() === "") {
            alert("Invalid input! Score cannot be empty.");
            return;
        }

        let score = Number(scoreInput);

        if (isNaN(score) || score <=0 || score > 100) {
            alert("Invalid Score!");
            return;
        }

        // Confirm
        if (!confirm("Do you want to continue?")) {
            return;
        }

        let remark = evaluateScore(score);
        
        // display
        document.getElementById("showName").textContent = name;
        document.getElementById("showScore").textContent = score;
        document.getElementById("showRemark").textContent = remark;
        document.getElementById("message").textContent = "Here is your result!";
    }

    // remarks
    function evaluateScore(score) {
        if (score >= 90) {
            return "Excellent";
        } else if (score >= 75) {
            return "Passed";
        } else{
            return "Failed";
        } 
    }



