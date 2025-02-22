// creating vars
let links = document.querySelectorAll(".nav_container ul li a");
let menu = document.querySelector(".nav_container .menu");
let ul = document.querySelector(".nav_container ul");
let landing = document.querySelector(".text_con")
// toggle click class to nav bar

links.forEach((link) => {
  link.onclick = function () {
    links.forEach((li) => {
      li.classList.remove("click");
    });
    link.classList.add("click");
  };
});

// clicking on the menu
menu.addEventListener("click", function () {
  menu.classList.toggle("fa-xmark");
  if (menu.classList.contains("fa-xmark")) {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});
