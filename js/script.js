document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     1. ГЛАВНЫЙ СЛАЙДЕР HERO
     ========================================================= */
  const heroSlides = document.querySelectorAll(".hero-slide");
  let currentHero = 0;

  const showHero = (index) => {
    heroSlides.forEach((s) => s.classList.remove("active"));

    if (index >= heroSlides.length) index = 0;
    if (index < 0) index = heroSlides.length - 1;

    currentHero = index; // ← ключевой момент
    heroSlides[currentHero].classList.add("active");
  };

  document.getElementById("hero-next").addEventListener("click", () => {
    currentHero++;
    showHero(currentHero);
  });

  document.getElementById("hero-prev").addEventListener("click", () => {
    currentHero--;
    showHero(currentHero);
  });

  setInterval(() => {
    currentHero++;
    showHero(currentHero);
  }, 6000);

  /* =========================================================
     2. ГАМБУРГЕР
     ========================================================= */

  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.querySelector(".nav-links");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", (e) => {
      hamburgerBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  /* =========================================================
     3. ТАБЫ МЕНЮ
     ========================================================= */
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      const id = tab.getAttribute("data-tab");
      document.getElementById(id).classList.add("active");
    });
  });

  /* =========================================================
     4. СЛАЙДЕР ОТЗЫВОВ
     ========================================================= */
  const reviewSlides = document.querySelectorAll(".slide");
  let currentReview = 0;

  const showReview = (index) => {
    reviewSlides.forEach((s) => s.classList.remove("active"));
    if (index >= reviewSlides.length) currentReview = 0;
    if (index < 0) currentReview = reviewSlides.length - 1;
    reviewSlides[currentReview].classList.add("active");
  };

  const nextReview = document.getElementById("next-slide");
  const prevReview = document.getElementById("prev-slide");

  if (nextReview && prevReview) {
    nextReview.addEventListener("click", () => {
      currentReview++;
      showReview(currentReview);
    });

    prevReview.addEventListener("click", () => {
      currentReview--;
      showReview(currentReview);
    });
  }

  /* =========================================================
     5. ФОРМА ПРЕДЗАКАЗА
     ========================================================= */
  const form = document.getElementById("order-form");
  const msg = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value.trim();
      const phone = document.getElementById("form-phone").value.trim();

      msg.style.color = "#bc987e";
      msg.innerHTML = `🎉 Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone}.`;

      form.reset();
    });
  }

  /* =========================================================
     6. АНИМАЦИЯ ПОЯВЛЕНИЯ (Intersection Observer)
     ========================================================= */
  const animatedItems = document.querySelectorAll(
    ".feature-card, .menu-item, .order-box",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  animatedItems.forEach((item) => observer.observe(item));
});
