function welcomeText() {
    var name = localStorage.getItem("name");
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    if (!name) {
        name = prompt("Hello dear! welcome to ExploreDebbie. Please what is your name?").toUpperCase();
        document.getElementById("name").innerHTML = name;
        console.log(localStorage.setItem("name", name));
    }
    if (name == null || name == "") {
        document.getElementById("name").innerHTML = "dear";
    }
    
}
welcomeText();

function del() {
    if (localStorage.getItem("name") !== "") {
        window.localStorage.clear();
        document.location.reload()
       
    }
 
    // document.location.reload();
    // window.scroll(0,0);
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    window.scroll(0,0);
}
window.scroll(0,0);


