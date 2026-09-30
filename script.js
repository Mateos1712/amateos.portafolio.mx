"use strict";

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector("#theme-color");
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector("#primary-navigation");
const navLinks = [...document.querySelectorAll(".nav-list a")];
const sections = [...document.querySelectorAll("main section[id]")];

function getTheme() {
  return root.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(theme, persist = true) {
  root.dataset.theme = theme;
  themeToggle?.setAttribute(
    "aria-label",
    theme === "dark" ? "Activar modo claro" : "Activar modo oscuro",
  );
  themeToggle?.setAttribute(
    "title",
    theme === "dark" ? "Activar modo claro" : "Activar modo oscuro",
  );
  themeColor?.setAttribute("content", theme === "dark" ? "#07111f" : "#f5f7fb");

  if (persist) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // El tema continúa funcionando aunque el almacenamiento esté bloqueado.
    }
  }
}

function closeMenu() {
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Abrir menú");
  navList?.removeAttribute("data-open");
  root.classList.remove("nav-open");
}

function openMenu() {
  navToggle?.setAttribute("aria-expanded", "true");
  navToggle?.setAttribute("aria-label", "Cerrar menú");
  navList?.setAttribute("data-open", "true");
  root.classList.add("nav-open");
}

applyTheme(getTheme(), false);

themeToggle?.addEventListener("click", () => {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
});

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    navToggle?.focus();
  }
});

document.addEventListener("click", (event) => {
  const clickTarget = event.target;
  if (
    clickTarget instanceof Node &&
    navList?.hasAttribute("data-open") &&
    !navList.contains(clickTarget) &&
    !navToggle?.contains(clickTarget)
  ) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if ("IntersectionObserver" in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          if (isCurrent) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-30% 0px -60%", threshold: 0 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
