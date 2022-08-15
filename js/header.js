function animateIcon() {
    // change X to E in burger icon
    let x = document.getElementById("burger-icon");
    x.classList.toggle("change");
  }
  
  
  function mobileMenu() {
    animateIcon();
   
    // +/-  class .mobile to  class .header-cont
    let headerTop = document.getElementById("header-cont");
    headerTop.classList.toggle("mobile");
  
    // +/- class .hide to class .header-main
    let headerMain = document.getElementById("header-main");
    headerMain.classList.toggle("hide");
  
    let navMenuLinks = document.getElementById("links");
    let body = document.getElementById("body");

    if (navMenuLinks.style.display === "flex") {
      // case press on  ===X=== icon
      navMenuLinks.style.display = "none";
      // on/off visibility of mobile version of nav-links:
      // (+/- class .noscroll to body (id="body")
      body.classList.toggle("noscroll"); 

      //for-of ====> on/off visibility of main (no-header) blocks
    } else {
      // case press on  ===E=== icon
      navMenuLinks.style.display = "flex";
      body.classList.toggle("noscroll");
    }
  }
  