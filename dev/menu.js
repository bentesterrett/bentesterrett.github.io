// ...existing code...
// Mobile menu toggle (updated)
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const nav = document.querySelector(".nav")
const header = document.querySelector(".header")

if (mobileMenuBtn && nav) {
  // accessibility
  mobileMenuBtn.setAttribute("aria-expanded", "false")
  mobileMenuBtn.setAttribute("aria-label", "Toggle menu")

  const closeNav = () => {
    nav.classList.remove("open")
    mobileMenuBtn.classList.remove("active")
    mobileMenuBtn.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  const openNav = () => {
    nav.classList.add("open")
    mobileMenuBtn.classList.add("active")
    mobileMenuBtn.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    if (nav.classList.contains("open")) closeNav()
    else openNav()
  })

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("open") &&
      !nav.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      closeNav()
    }
  })

  // Close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && nav.classList.contains("open")) {
      closeNav()
    }
  })

  // Ensure anchors close the menu on mobile
  nav.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 768) closeNav()
    })
  })
}
// ...existing code...