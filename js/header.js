// (function () {

function animateIcon() {
  // change symbol X <=> E in burger icon
  const iconBurger = document.getElementById("burger-icon");
  iconBurger.classList.toggle("change");
}

function mobileMenu() {  //open/close burger
  const navMenuLinks = document.getElementById("links");
  const body = document.getElementById("body");
  const headerTop = document.getElementById("header-cont");
  
  if (window.screen.width <= 992) {
    animateIcon();

    headerTop.classList.toggle("mobile");
    //  .header-cont +/- class .mobile

    if (navMenuLinks.style.display === "flex") {
      // case press on  ===X=== icon:
      navMenuLinks.style.display = "none";
      body.classList.toggle("noscroll");
      // on/off nav-links visibility in mobile version
      // body (id="body") +/- class .noscroll

    } else {
      // case press on  ===E=== icon:
      navMenuLinks.style.display = "flex";
      body.classList.toggle("noscroll");
    }
  }
}

// })()