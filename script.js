// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const nav = document.querySelector(".nav")

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex"

    // Toggle menu button animation
    mobileMenuBtn.classList.toggle("active")
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        nav.style.display = "none"
      }
    }
  })
})

// Form submission handler
const contactForm = document.querySelector(".contact-form")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // In a real application, you would send this data to a server
    console.log("Form submitted:", data)

    // Show success message
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

// Add scroll effect to header
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})
