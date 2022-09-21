// ==================== Cart ===============

let modalWrapper = document.querySelector(".js-modal-wrapper");
let modalCart = document.querySelector(".js-modal-cart");
let cartIcon = document.getElementById("js-cart-modal");
let cartX = document.getElementById("cart-icon");

cartIcon.addEventListener("click", function showCart() {
  modalCart.classList.add("open-cart");
  modalWrapper.classList.add("open-cart__wrapper");
});

cartX.addEventListener("click", function closeCart() {
  modalCart.classList.remove("open-cart");
  modalWrapper.classList.remove("open-cart__wrapper");
});


// NAV

// let navbar = document.querySelector("#header__nav").querySelectorAll("a")

// navbar.forEach(element => {
//   element.addEventListener('click', function() {
//     navbar.forEach(nav=>nav.classList.remove("active"))

//     this.classList.add("active")
//   })
// })