window.addEventListener("scroll", () => {
  document
    .querySelectorAll(".section")
    .forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("fade-up");
      }
    });
});
