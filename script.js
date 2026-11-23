document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.querySelector(".hero-img.main");
  const thumbs = document.querySelectorAll(".thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const full = thumb.dataset.full;
      if (full && mainImg) {
        mainImg.src = full;
        mainImg.alt = thumb.alt;
        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      }
    });
  });
});
