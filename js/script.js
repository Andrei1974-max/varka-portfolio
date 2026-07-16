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

// 👁️ СЛЕЖЕНИЕ ЗА ШАПКОЙ
// 👁️ СЛЕЖЕНИЕ ЗА ШАПКОЙ
const header = document.querySelector("header");
const topTrigger = document.querySelector(".top-trigger");

if (header && topTrigger) {
  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // Стили для черной шапки при скролле
          header.style.background = "#000000";
          header.style.borderBottom = "1px solid #007bc4";
          header.style.boxShadow = "0 5px 20px rgba(0, 123, 196, 0.15)";

          // Делаем текст ссылок и логотипа белым, чтобы он не сливался
          header
            .querySelectorAll("a, .header__logo, .header__geo")
            .forEach((el) => {
              el.style.color = "#ffffff";
            });
        } else {
          // Стили для прозрачной шапки в самом верху страницы
          header.style.background = "transparent";
          header.style.borderBottom = "1px solid #1a1a1a";
          header.style.boxShadow = "none";

          // Возвращаем исходный темный цвет текста (замените #1a1a1a на ваш цвет, если нужно)
          header
            .querySelectorAll("a, .header__logo, .header__geo")
            .forEach((el) => {
              el.style.color = "#ffffff";
            });
        }
      });
    },
    { rootMargin: "50px 0px 0px 0px" },
  );

  headerObserver.observe(topTrigger);
} // Скобка закрытия условия if (header && topTrigger) теперь на месте!
