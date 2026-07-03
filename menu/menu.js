// =========================================================
// Murusanza — menu.js
// Header scroll state, menu mobile off-canvas, scroll-spy
// categorie, pulsante torna-su
// =========================================================
 
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Header: trasparente -> bianco allo scroll ---------- */
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
 
  /* ---------- Menu mobile a scomparsa ---------- */
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
 
  /* ---------- Pillole categoria: evidenziazione durante lo scroll ---------- */
  const categoryPills = document.querySelectorAll(".category-pill");
  const menuSections = document.querySelectorAll(".menu-section, .menu-info");
 
  if (categoryPills.length && menuSections.length) {
    const setActivePill = (id) => {
      categoryPills.forEach((pill) => {
        pill.classList.toggle("active", pill.getAttribute("href") === `#${id}`);
      });
    };
 
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePill(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
 
    menuSections.forEach((section) => spyObserver.observe(section));
  }
 
  /* ---------- Pulsante torna su ---------- */
  const backToTop = document.getElementById("backToTop");
 
  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    };
 
    toggleBackToTop();
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
 
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
 