// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener("scroll", (e) => {
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.querySelector("body").classList.add("scroll");
  } else {
    document.querySelector("body").classList.remove("scroll");
  }
});

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll("#cs-navigation .cs-dropdown"),
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("cs-active");
  };
  item.addEventListener("click", onClick);
}

function setActiveLink() {
  const currentPagePath = window.location.pathname.replace(/\/$/, "");
  const navLinks = document.querySelectorAll(".cs-li-link");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").replace(/\/$/, "");

    // Remove active class from all links
    link.classList.remove("cs-active");

    // Check if link's href matches current page path
    if (linkPath === currentPagePath) {
      link.classList.add("cs-active");
    }
  });
}

setActiveLink();
