var letters = /^[A-Za-z]+$/;


function validateInputs() {
    if (!document.getElementById('firstName').value.match(letters)) {
        alert("Please enter valid first name");
        document.getElementById('firstName').focus();
        return false;
    }
    if (!document.getElementById('surname').value.match(letters)) {
        alert("Please enter valid surname");
        document.getElementById('surname').focus();
        return false;
    }
    if (document.getElementById('age').value < 17 || isNaN(parseInt(document.getElementById('age').value))) {
        alert("Please enter valid age");
        document.getElementById('age').focus();
        return false;
    }
    return true;

}

function calculateInsuranceClassification() {
    const age = parseInt(document.getElementById("age").value);
    const status = document.getElementById("maritalStatus").value.toString();

    if (age >= 30 && status === "Married") {
        return "class 1";
    } else if (age >= 30 && status === "Single") {
        return "class 2";
    } else if (age < 30 && status === "Married") {
        return "class 3";
    } else if (age < 30 && status === "Single") {
        return "class 4";
    }
}

function getClassification() {
    alert(calculateInsuranceClassification());
}

