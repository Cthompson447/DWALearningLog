function displayName() {
    const name = document.getElementById("nameBox").value;

    if (name !== "") {
        alert(name + ", Welcome to my webpage!");
    } else {
        alert("Please enter your name before clicking display!");
    }
}
