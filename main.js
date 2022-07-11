function welcomeText() {
    var name = localStorage.getItem("name");
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    if (!name) {
        name = prompt("Hello dear! welcome to ExploreDebbie. Please what is your name?").toUpperCase();
        document.getElementById("name").innerHTML = name;
        console.log(localStorage.setItem("name", name));
    }
    if (name == null || name == undefined) {
        document.getElementById("name").innerHTML = "dear";
    }
    
}
welcomeText();