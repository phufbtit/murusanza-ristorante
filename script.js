// =========================================================
// Murusanza — script.js
// Nav scroll state + gallery slider
// =========================================================
 
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Header: transparent -> white on scroll ---------- */
  const header = document.querySelector(".main-header");
  const SCROLL_THRESHOLD = 40;
 
  const updateHeader = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
 
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
 
  /* ---------- Mobile off-canvas menu ---------- */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNavPanel = document.getElementById("mobileNavPanel");
  const mobileNavBackdrop = document.getElementById("mobileNavBackdrop");
 
  const openMobileNav = () => {
    hamburgerBtn.classList.add("open");
    mobileNavPanel.classList.add("open");
    mobileNavBackdrop.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
 
  const closeMobileNav = () => {
    hamburgerBtn.classList.remove("open");
    mobileNavPanel.classList.remove("open");
    mobileNavBackdrop.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
 
  if (hamburgerBtn && mobileNavPanel && mobileNavBackdrop) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = mobileNavPanel.classList.contains("open");
      isOpen ? closeMobileNav() : openMobileNav();
    });
 
    mobileNavBackdrop.addEventListener("click", closeMobileNav);
 
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });
 
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileNav();
    });
  }
 
  /* ---------- Gallery slider ---------- */
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
 
  if (slides.length) {
    let current = 0;
    let autoplayTimer = null;
    const AUTOPLAY_DELAY = 5000;
 
    const showSlide = (index) => {
      slides[current].classList.remove("active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("active");
    };
 
    const nextSlide = () => showSlide(current + 1);
    const prevSlide = () => showSlide(current - 1);
 
    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY);
    };
 
    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };
 
    nextBtn?.addEventListener("click", () => {
      nextSlide();
      startAutoplay();
    });
 
    prevBtn?.addEventListener("click", () => {
      prevSlide();
      startAutoplay();
    });
 
    startAutoplay();
  }
});
 