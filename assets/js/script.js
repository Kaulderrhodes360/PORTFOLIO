// Load Header and Footer
document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("header").innerHTML = data;
      });
  
    // Load Footer
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer").innerHTML = data;
      });
  
    // Back to Top Button
    const backToTopButton = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  