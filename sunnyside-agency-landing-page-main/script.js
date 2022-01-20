function toggleNav() {
  var mobileNav = document.getElementsByClassName("mobile-nav");

  Array.from(mobileNav).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
}
