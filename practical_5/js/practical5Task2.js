var universitiesNI = ["Ulster University", "Queen's University"];
var universityOfUlsterCampus = ["Belfast", "Coleraine", "Magee", "Jordanstown"];

function addUniversityButtons() {
    var radioAnchor = document.getElementById("radioAnchor");

    for (var i = 0; i < universitiesNI.length; i++) {
        var radioButton = radioAnchor.appendChild(document.createElement("input"));
        radioButton.type = "radio";
        radioButton.id = universitiesNI[i].valueOf();

        var label = document.createElement("label");
        label.htmlFor = universitiesNI[i].valueOf();
        label.innerHTML = universitiesNI[i].valueOf();

        radioButton.parentNode.insertBefore(label, radioButton);

    }
}

function addCampusCheckboxes() {
    var campusAnchor = document.getElementById("campusAnchor");

    for (var i = 0; i < universityOfUlsterCampus.length; i++) {

        var checkbox = campusAnchor.appendChild(document.createElement("input"));
        checkbox.type = "checkbox";
        checkbox.id = universityOfUlsterCampus[i].valueOf();

        var label = document.createElement("label");
        label.htmlFor = universityOfUlsterCampus[i].valueOf();
        label.innerHTML = universityOfUlsterCampus[i].valueOf();

        checkbox.parentNode.insertBefore(label, checkbox);
    }
}
