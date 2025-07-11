// Mobile menu toggle
const checkbox = document.getElementById("check");
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    checkbox.checked = false; // Close menu when link is clicked
  });
});

// Menu category filter
const categoryItems = document.querySelectorAll(".category li");
const menuItems = document.querySelectorAll(".menu-item");

categoryItems.forEach(category => {
  category.addEventListener("click", () => {
    categoryItems.forEach(c => c.classList.remove("active"));
    category.classList.add("active");

    const selected = category.textContent.toLowerCase();
    menuItems.forEach(item => {
      const title = item.querySelector(".title").textContent.toLowerCase();
      if (selected === "all" || title.includes(selected)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
      // JS to show/hide back to top button
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

    });
  });
});

