let menu = document.getElementById("menu");
let navitem = document.getElementsByClassName("nav-menu")


menu.addEventListener("click", function () {
    for (let item of navitem) {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            item.classList.add("active");
        }
    }
});
