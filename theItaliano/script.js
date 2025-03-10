//animate on scroll initialize
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  
  // menu toggle
  const navbarlinks = document.getElementById("navbar-links");
  const home = document.getElementById("height");
  navbarlinks.style.maxHeight = "0px";
  
  function menuToggle() {
    if (navbarlinks.style.maxHeight == "0px") {
      navbarlinks.style.display = "block";
      navbarlinks.style.maxHeight = "300px";
      home.style.marginTop = "calc(100% + 62.4px)";
    } else {
      navbarlinks.style.maxHeight = "0px";
      home.style.marginTop = "0";
    }
  }
  
  //click function toggle off
  navbarlinks.addEventListener("click", () => {
    navbarlinks.style.maxHeight = "0px";
    home.style.marginTop = "0";
  });
  