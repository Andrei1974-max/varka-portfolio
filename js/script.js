document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const btnMap = document.getElementById("btn-map");

  btnMenu.addEventListener("click", () => {
    alert(
      "Тут будет плавный скролл к блоку меню, который мы напишем следующим!",
    );
  });

  btnMap.addEventListener("click", () => {
    alert("Тут будет скролл вниз к Яндекс.Карте у кинотеатра Октябрь!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. ПЕРЕКЛЮЧЕНИЕ ТАБОВ МЕНЮ
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");
    });
  });

  // 2. ИНТЕРАКТИВНЫЙ СЛАЙДЕР
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((s) => s.classList.remove("active"));
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add("active");
  };

  document.getElementById("next-slide").addEventListener("click", () => {
    currentSlide++;
    showSlide(currentSlide);
  });

  document.getElementById("prev-slide").addEventListener("click", () => {
    currentSlide--;
    showSlide(currentSlide);
  });

  // 3. ВАЛИДАЦИЯ ФОРМЫ ПРЕДЗАКАЗА
  const form = document.getElementById("order-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value;
    const phone = document.getElementById("form-phone").value;
    const time = document.getElementById("form-time").value;

    // Имитация отправки данных на сервер
    messageBox.style.color = "#D4A373";
    messageBox.style.marginTop = "15px";
    messageBox.innerHTML = `🎉 Спасибо, ${name}! Предзаказ принят. Ждем вас ${time}.`;

    form.reset();
  });

  // 4. АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ (Intersection Observer)
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

document.addEventListener("DOMContentLoaded", () => {
  // 1. ДИНАМИЧЕСКИЕ ТАБЫ МЕНЮ
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");
    });
  });

  // 2. СЛАЙДЕР ОТЗЫВОВ
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  const changeSlide = (index) => {
    slides.forEach((s) => s.classList.remove("active"));
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add("active");
  };

  document.getElementById("next-slide").addEventListener("click", () => {
    currentSlide++;
    changeSlide(currentSlide);
  });

  document.getElementById("prev-slide").addEventListener("click", () => {
    currentSlide--;
    changeSlide(currentSlide);
  });

  // 3. ОБРАБОТКА И ВАЛИДАЦИЯ ФОРМЫ ЗАКАЗА
  const form = document.getElementById("order-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Запрещаем стандартную перезагрузку страницы

    const name = document.getElementById("form-name").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const time = document.getElementById("form-time").value;

    // Показываем красивый кастомный ответ пользователю
    messageBox.style.color = "#D4A373";
    messageBox.style.marginTop = "20px";
    messageBox.innerHTML = `🎉 Спасибо, ${name}! Наш бариста свяжется по номеру ${phone}. Заказ будет готов ${time}!`;

    form.reset(); // Очищаем поля формы после успешной отправки
  });

  // 4. ПРОДВИНУТАЯ АНИМАЦИЯ ПРИ СКРОЛЛЕ (Intersection Observer API)
  const itemsToAnimate = document.querySelectorAll(
    ".feature-card, .menu-item, .order-box",
  );

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Добавляем класс, когда блок в зоне видимости
        }
      });
    },
    {
      threshold: 0.12, // Элемент начнет анимацию, когда появится в экране на 12%
    },
  );

  itemsToAnimate.forEach((item) => scrollObserver.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. УПРАВЛЕНИЕ ГЛАВНЫМ СЛАЙДЕРОМ (HERO)
  const heroSlides = document.querySelectorAll(".hero-slide");
  let currentHeroSlide = 0;

  const showHeroSlide = (index) => {
    heroSlides.forEach((slide) => slide.classList.remove("active"));
    if (index >= heroSlides.length) currentHeroSlide = 0;
    if (index < 0) currentHeroSlide = heroSlides.length - 1;
    heroSlides[currentHeroSlide].classList.add("active");
  };

  document.getElementById("hero-next").addEventListener("click", () => {
    currentHeroSlide++;
    showHeroSlide(currentHeroSlide);
  });

  document.getElementById("hero-prev").addEventListener("click", () => {
    currentHeroSlide--;
    showHeroSlide(currentHeroSlide);
  });

  // Автоматическое переключение слайдера каждые 6 секунд
  setInterval(() => {
    currentHeroSlide++;
    showHeroSlide(currentHeroSlide);
  }, 6000);

  // 2. ТАБЫ МЕНЮ
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      document
        .getElementById(tab.getAttribute("data-tab"))
        .classList.add("active");
    });
  });

  // 3. ОТПРАВКА ФОРМЫ
  const form = document.getElementById("order-form");
  const msg = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value;
    msg.innerHTML = `🎉 Спасибо, ${name}! Менеджер школы скоро свяжется с вами.`;
    form.reset();
  });
});

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.add("active");
  });
});
