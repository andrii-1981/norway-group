(function () {

  function animateIcon() {
    // change X <=> E in burger icon
    const x = document.getElementById("burger-icon");
    x.classList.toggle("change");
  }
  
  function mobileMenu() {
    animateIcon();  // change X <=> E in burger icon
    
    const headerTop = document.getElementById("header-cont");// class .header-cont +/- class .mobile
    headerTop.classList.toggle("mobile");
    
    const navMenuLinks = document.getElementById("links");
    const body = document.getElementById("body");
    
    if (navMenuLinks.style.display === "flex") {
    // case press on  ===X=== icon
    navMenuLinks.style.display = "none";// on/off nav-links visibility in mobile version
    body.classList.toggle("noscroll"); // body (id="body") +/- class .noscroll
    
  } else {
    // case press on  ===E=== icon
    navMenuLinks.style.display = "flex";
    body.classList.toggle("noscroll");
  }
}

function hrefAndCloseBurger (anchor){

  
  mobileMenu();  //close Burger (change icon E to icon X)
  document.location.href = anchor;  // forward user to anchor
}  

})();