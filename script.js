const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (slides.length > 0) {
  let current = 0;
  let timerId;

  const showSlide = (index) => {
    slides[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");
  };

  const nextSlide = () => showSlide(current + 1);
  const prevSlide = () => showSlide(current - 1);

  const restartTimer = () => {
    window.clearInterval(timerId);
    timerId = window.setInterval(nextSlide, 5000);
  };

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    restartTimer();
  });

  nextBtn?.addEventListener("click", () => {
    nextSlide();
    restartTimer();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      restartTimer();
    });
  });

  restartTimer();
}
