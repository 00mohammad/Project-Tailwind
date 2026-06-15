const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const cartOpenBtn = document.querySelector(".cart-icon");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cart = document.querySelector(".cart");

toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

if (submenuOpenBtn && submenu) {
  submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("submenu--open");
  });
}

function closeNav() {
  if (nav) {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
  }
  if (overlay) {
    overlay.classList.remove("overlay--visible");
  }
}

function closeCart() {
  if (cart) {
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");
  }
  if (overlay) {
    overlay.classList.remove("overlay--visible");
  }
}

if (navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    if (nav) {
      nav.classList.remove("-right-64");
      nav.classList.add("right-0");
    }
    if (overlay) {
      overlay.classList.add("overlay--visible");
      overlay.addEventListener("click", closeNav);
    }
  });
}

if (cartOpenBtn) {
  cartOpenBtn.addEventListener("click", () => {
    if (cart) {
      cart.classList.remove("-left-64");
      cart.classList.add("left-0");
    }
    if (overlay) {
      overlay.classList.add("overlay--visible");
      overlay.addEventListener("click", closeCart);
    }
  });
}

if (navCloseBtn) {
  navCloseBtn.addEventListener("click", closeNav);
}

if (cartCloseBtn) {
  cartCloseBtn.addEventListener("click", closeCart);
}
