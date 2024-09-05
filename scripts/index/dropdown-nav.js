function displayMenu() {
    // alert("clicked button!");

    var menu = document.getElementById('dropdown-nav');

    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}