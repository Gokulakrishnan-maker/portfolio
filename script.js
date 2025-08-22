
const backToTopBtn = document.getElementById("backToTop");


window.addEventListener("scroll", () => {
  const scrollY = document.body.scrollTop || document.documentElement.scrollTop;
  backToTopBtn.style.display = scrollY > 20 ? "block" : "none";
});


backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

