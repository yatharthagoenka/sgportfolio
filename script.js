const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.active").classList.remove("active");
    item.classList.add("active");
  });
});

//typing animation script
var typed = new Typed(".typing", {
    strings: [ "second year IT student at NSUT.", "member of Mirage Western Dance Crew.", "Tech Enthusiast."],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true
});

