// =========================================================
// Murusanza — chi-siamo.js
// Header scroll state, menu mobile a scomparsa
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
});