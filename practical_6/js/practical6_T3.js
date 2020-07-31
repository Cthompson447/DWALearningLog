var averageMark;
var grade;

function calculateAverage() {

    let mark1 = validateNumberInput(parseFloat(document.getElementById("mark1").value));
    let mark2 = validateNumberInput(parseFloat(document.getElementById("mark2").value));
    let mark3 = validateNumberInput(parseFloat(document.getElementById("mark3").value));
    let mark4 = validateNumberInput(parseFloat(document.getElementById("mark4").value));

    averageMark = ((mark1 + mark2 + mark3 + mark4) /4);
}

function validateNumberInput(number) {
    if(isNaN(number)){
        alert("Please enter a suitable number for marks");
        return 0;
    } else {
        return number;
    }

}


function calculateClassification() {

    if(averageMark >= 90){
        grade = "a";
        return "You got an A, your average mark is " + averageMark;
    } else if (averageMark < 90 && averageMark >= 80){
        grade = "b";
        return "You got an B, your average mark is " + averageMark;
    } else if (averageMark < 80 && averageMark >= 70){
        grade = "c";
        return "You got an C, your average mark is " + averageMark;
    } else if (averageMark < 70 && averageMark >= 60){
        grade = "d";
        return "You got an D, your average mark is " + averageMark;
    } else {
        grade = "e";
        return "You got an E, failed, your average mark is " + averageMark;
    }
}

function calculateFeedback() {
    switch (grade) {
        case "a":
            return ", Outstanding!";
            break;
        case "b":
            return ", Very good!";
            break;
        case "c":
            return ", Fairly good!";
            break;
        case "d":
            return ", Doing ok!";
            break;
        case "e":
            return ", Need to work much harder!";
            break;
    }
}

function calculateResultAndFeedback() {
        calculateAverage();
        alert(calculateClassification() + calculateFeedback());
}
