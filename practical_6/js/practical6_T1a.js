function displayName() {
    const name = document.getElementById("nameBox").value;

    if (name !== "") {
        alert(name + ", Welcome to my webpage!");
    } else{
        alert("please enter a valid value");
    }
}
