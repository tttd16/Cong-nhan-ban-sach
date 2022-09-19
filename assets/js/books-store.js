// js-btn-modalbooks
const modalBook = document.querySelector(".modal-book");

// //====================== function hiện và đóng book1 ==============================
const btnBook1 = document.querySelector(".js-btn-modalbook1");
const container_1 = document.querySelector(".js-container-1");
const modalClosebook1 = document.querySelector(".js-modalbook-close1");
function showBook1() {
  modalBook.classList.add("open");
  container_1.classList.add("open-1");
}
btnBook1.addEventListener("click", showBook1);

modalClosebook1.addEventListener("click", function close1() {
  modalBook.classList.remove("open");
  container_1.classList.remove("open-1");
});

// //====================== function hiện và đóng book2 ==============================
const btnBook2 = document.querySelector(".js-btn-modalbook2");
const container_2 = document.querySelector(".js-container-2");
const modalClosebook2 = document.querySelector(".js-modalbook-close2");
function showBook2() {
  modalBook.classList.add("open");
  container_2.classList.add("open-2");
}

btnBook2.addEventListener("click", showBook2);
modalClosebook2.addEventListener("click", function close2() {
  modalBook.classList.remove("open");
  container_2.classList.remove("open-2");
});

// //====================== function hiện và đóng book3 ==============================
const btnBook3s = document.querySelectorAll(".js-btn-modalbook3");
const container_3 = document.querySelector(".js-container-3");
const modalClosebook3 = document.querySelector(".js-modalbook-close3");

for (const btnBook3 of btnBook3s) {
  btnBook3.addEventListener("click", function showBook3() {
    modalBook.classList.add("open");
    container_3.classList.add("open-3");
  });
}

modalClosebook3.addEventListener("click", function close3() {
  modalBook.classList.remove("open");
  container_3.classList.remove("open-3");
});

// //====================== function hiện và đóng book4 ==============================
const btnBook4 = document.querySelector(".js-btn-modalbook4");
const container_4 = document.querySelector(".js-container-4");
const modalClosebook4 = document.querySelector(".js-modalbook-close4");

btnBook4.addEventListener("click", function showBook4() {
  modalBook.classList.add("open");
  container_4.classList.add("open-4");
});
modalClosebook4.addEventListener("click", function close4() {
  modalBook.classList.remove("open");
  container_4.classList.remove("open-4");
});

// //====================== function hiện và đóng book5 ==============================
const btnBook5 = document.querySelector(".js-btn-modalbook5");
const container_5 = document.querySelector(".js-container-5");
const modalClosebook5 = document.querySelector(".js-modalbook-close5");

btnBook5.addEventListener("click", function showBook5() {
  modalBook.classList.add("open");
  container_5.classList.add("open-5");
});
modalClosebook5.addEventListener("click", function close5() {
  modalBook.classList.remove("open");
  container_5.classList.remove("open-5");
});

// // -------------------------function hiện và đóng book6 -------------------
const btnBook6s = document.querySelectorAll(".js-btn-modalbook6");
const container_6 = document.querySelector(".js-container-6");
const modalClosebook6 = document.querySelector(".js-modalbook-close6");

for (const btnBook6 of btnBook6s) {
  btnBook6.addEventListener("click", function showBook6() {
    modalBook.classList.add("open");
    container_6.classList.add("open-6");
  });
}

modalClosebook6.addEventListener("click", function close6() {
  modalBook.classList.remove("open");
  container_6.classList.remove("open-6");
});

// // -------------------------- function hiện và đóng book7 -----------------------
const btnBook7s = document.querySelectorAll(".js-btn-modalbook7");
const container_7 = document.querySelector(".js-container-7");
const modalClosebook7 = document.querySelector(".js-modalbook-close7");

for (const btnBook7 of btnBook7s) {
  btnBook7.addEventListener("click", function showBook7() {
    modalBook.classList.add("open");
    container_7.classList.add("open-7");
  });
}

modalClosebook7.addEventListener("click", function close7() {
  modalBook.classList.remove("open");
  container_7.classList.remove("open-7");
});

// //====================== function hiện và đóng book8 ==============================
const btnBook8 = document.querySelector(".js-btn-modalbook8");
const container_8 = document.querySelector(".js-container-8");
const modalClosebook8 = document.querySelector(".js-modalbook-close8");

btnBook8.addEventListener("click", function showBook8() {
  modalBook.classList.add("open");
  container_8.classList.add("open-8");
});
modalClosebook8.addEventListener("click", function close8() {
  modalBook.classList.remove("open");
  container_8.classList.remove("open-8");
});

// //====================== function hiện và đóng book9 ==============================
const btnBook9 = document.querySelector(".js-btn-modalbook9");
const container_9 = document.querySelector(".js-container-9");
const modalClosebook9 = document.querySelector(".js-modalbook-close9");

btnBook9.addEventListener("click", function showBook9() {
  modalBook.classList.add("open");
  container_9.classList.add("open-9");
});
modalClosebook9.addEventListener("click", function close9() {
  modalBook.classList.remove("open");
  container_9.classList.remove("open-9");
});

// //====================== function hiện và đóng book10 ==============================
const btnBook10 = document.querySelector(".js-btn-modalbook10");
const container_10 = document.querySelector(".js-container-10");
const modalClosebook10 = document.querySelector(".js-modalbook-close10");

btnBook10.addEventListener("click", function showBook10() {
  modalBook.classList.add("open");
  container_10.classList.add("open-10");
});
modalClosebook10.addEventListener("click", function close10() {
  modalBook.classList.remove("open");
  container_10.classList.remove("open-10");
});

// =============== ADD to Card ==================

const btnBuy = document.querySelectorAll(".btn-buy");
btnBuy.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    let btnItem = event.target;
    let cardProduct = btnItem.parentElement.parentElement;
    let productImg = cardProduct.querySelector(".card-product > img").src;
    let productName = cardProduct.querySelector(
      ".card-product__title h4 button"
    ).innerText;
    let productPrice = cardProduct.querySelector(
      ".card-product__title ins span"
    ).innerText;
    addcart(productPrice, productName, productImg);
  });
});

function addcart(productPrice, productName, productImg) {
  let cartShopping = document.createElement("div");
  cartShopping.classList = "cart__wrapper--shopping";
  let cartItem = document.querySelectorAll(
    ".cart__body .cart__wrapper--shopping"
  );
  for (let i = 0; i < cartItem.length; i++) {
    let productBook = document.querySelectorAll(".cart__name");
    if (productBook[i].innerHTML == productName) {
      alert("Sản phẩm đã có trong giỏ");
      return;
    }
  }


  let cartContent =
    '<div class="cart__shopping"><div class="cart__close"><ion-icon class="icon__close" name="close-outline"></ion-icon></div><div class="cart__name">' +
    productName +
    '</div><img class="cart__img" src="' +
    productImg +
    '" alt=""></img></div><div class="cart__quantity"><input class="cart__amount" type="number" value="1" min="0"> <div><strong> $</strong>  <span>' +
    productPrice +
    "</span></div></div>";
  cartShopping.innerHTML = cartContent;
  let cartBody = document.querySelector(".cart__body");
  cartBody.append(cartShopping);
  cartTotal();
  deleteCart()
}

//  ============================ TOTAL Price ======================

function cartTotal() {
  let cartItem = document.querySelectorAll(
    ".cart__body .cart__wrapper--shopping"
  );
  let result = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let inputValue = cartItem[i].querySelector(
      ".cart__quantity .cart__amount"
    ).value;
    let spanPrice = cartItem[i].querySelector(".cart__quantity span").innerHTML;
    totalCart = inputValue * spanPrice;
    result = result + totalCart;
  }

  let subTotal = document.querySelector(".cart__total span");
  subTotal.innerHTML = result;
}

// ================== Delete cart ==================
function deleteCart() {
  let cartItem = document.querySelectorAll(
    ".cart__body .cart__wrapper--shopping"
  );
  for (let i = 0; i < cartItem.length; i++) {
    let cartClose = document.querySelectorAll(".icon__close");
    cartClose[i].addEventListener("click", function(event) {
      let cartDelete = event.target
      let cartCloseDelete = cartDelete.parentElement.parentElement.parentElement
      cartCloseDelete.remove()
      cartTotal()
    })
  }

  inputChange();
}

//=================== Total change input ========
function inputChange() {
  let cartItem = document.querySelectorAll(
    ".cart__body .cart__wrapper--shopping"
  );
  for (let i = 0; i < cartItem.length; i++) {
    let inputChangeValue = cartItem[i].querySelector(
      ".cart__quantity .cart__amount"
    );
    inputChangeValue.addEventListener("change", function () {
      cartTotal();
    });
  }
}

//
