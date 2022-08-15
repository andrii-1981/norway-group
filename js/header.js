function animateIcon() {
    // change X to E in burger icon
    let x = document.getElementById("burger-icon");
    x.classList.toggle("change");
  }
  
  function mobileMenu() {
    animateIcon();
   
    // +/- .mobile to .header-cont
    let headerTop = document.getElementById("header-cont");
    headerTop.classList.toggle("mobile");
  
    // +/- .hide to .header-main
    let headerMain = document.getElementById("header-main");
    headerMain.classList.toggle("hide");
  
    let navMenuLinks = document.getElementById("links");
    let main = document.getElementsByClassName("noheader");
  
    if (navMenuLinks.style.display === "flex") {
      // case press on  ===X=== icon
      navMenuLinks.style.display = "none";
      //on/off visibility of mobile version of nav-links
      for (const x of main) {
        x.style.display = "block";
      }
      //for-of ====> on/off visibility of main (no-header) blocks
    } else {
      // case press on  ===E=== icon
      navMenuLinks.style.display = "flex";
      for (const x of main) {
        x.style.display = "none";
      }
    }
  }
  