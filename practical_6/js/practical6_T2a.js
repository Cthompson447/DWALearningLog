var universitiesNI = ["Ulster University", "Queen's University"];
var universityOfUlsterCampus = ["Belfast", "Coleraine", "Magee", "Jordanstown"];
var courses = ["Software Engineering", "Computer Science", "Interactive Multimedia Design",
    "Communication Technology"];

function DisplayText() {

    if (shouldDisplay() == true) {
        alert(getTextBoxValueAndDisplayWelcome() + getDropDownValues());
    }
}

function shouldDisplay() {
    if (document.getElementById("universitiesNI").value !== "" &&
        document.getElementById("universityOfUlsterCampus").value !== "" &&
        document.getElementById("courses").value !== "") {
        return true;
    } else {
        return false;
    }
}

function getTextBoxValueAndDisplayWelcome() {
    const textBoxValue = document.getElementById("name").value;

    if (textBoxValue !== ("")) {
        return (textBoxValue + ",");
    } else {
        alert("Please check the dropdown lists and select a valid value!");
    }
}

function getDropDownValues() {
    return ("Student at " + document.getElementById("universitiesNI").value
        + " " + document.getElementById("universityOfUlsterCampus").value + " studying " +
        document.getElementById("courses").value + ". Welcome to the javascript site!");
}

function populateDropDown(array, id) {
    var dropdown = document.getElementById(id);

    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.text = array[i].valueOf();
        dropdown.add(option);
    }
}
