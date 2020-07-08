var universitiesNI = ["Ulster University", "Queen's University"];
var universityOfUlsterCampus = ["Belfast", "Coleraine", "Magee", "Jordanstown"];
var courses = ["Software Engineering", "Computer Science", "Interactive Multimedia Design",
    "Communication Technology"];

function DisplayText (){
    alert(getTextBoxValueAndDisplayWelcome() + getDropDownValues());
}

function getTextBoxValueAndDisplayWelcome() {
    var textBoxValue = document.getElementById("name").value;
    return (textBoxValue + ",");
}

function getDropDownValues(){
    return ("Student at " + document.getElementById("universitiesNI").value
        + " " + document.getElementById("universityOfUlsterCampus").value + " studying " +
        document.getElementById("courses").value + ". Welcome to the javascript site!");
}

function populateDropDown(array, id) {
    var dropdown = document.getElementById(id);

    for (var i=0; i< array.length; i++){
         var option = document.createElement("option");
        option.text = array[i].valueOf();
        dropdown.add(option);
    }
}
