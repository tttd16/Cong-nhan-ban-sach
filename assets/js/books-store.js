// js-btn-modalbooks
const modalBook = document.querySelector(".modal-book");

// function hiện và đóng book1
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

// function hiện và đóng book2
const btnBook2 = document.querySelector(".js-btn-modalbook2");
const container_2 = document.querySelector(".js-container-2");
const modalClosebook2 = document.querySelector(".js-modalbook-close2");
function showBook2() {
  modalBook.classList.add("open");
  container_2.classList.add("open-2");
}

btnBook2.addEventListener("click", showBook2);
modalClosebook2.addEventListener('click', function close2() {
  modalBook.classList.remove("open");
  container_2.classList.remove("open-2");
});

// // function hiện và đóng book3
const btnBook3 = document.querySelector(".js-btn-modalbook3");
const container_3 = document.querySelector(".js-container-3");
const modalClosebook3 = document.querySelector(".js-modalbook-close3");

btnBook3.addEventListener("click", function showBook3() {
    modalBook.classList.add("open");
    container_3.classList.add("open-3");
});
modalClosebook3.addEventListener('click', function close3() {
  modalBook.classList.remove("open");
  container_3.classList.remove("open-3");
});

// // function hiện và đóng book4
const btnBook4 = document.querySelector(".js-btn-modalbook4");
const container_4 = document.querySelector(".js-container-4");
const modalClosebook4 = document.querySelector(".js-modalbook-close4");

btnBook4.addEventListener("click", function showBook4() {
    modalBook.classList.add("open");
    container_4.classList.add("open-4");
});
modalClosebook4.addEventListener('click', function close4() {
  modalBook.classList.remove("open");
  container_4.classList.remove("open-4");
});

// // function hiện và đóng book5
const btnBook5 = document.querySelector(".js-btn-modalbook5");
const container_5 = document.querySelector(".js-container-5");
const modalClosebook5 = document.querySelector(".js-modalbook-close5");

btnBook5.addEventListener("click", function showBook5() {
    modalBook.classList.add("open");
    container_5.classList.add("open-5");
});
modalClosebook5.addEventListener('click', function close5() {
  modalBook.classList.remove("open");
  container_5.classList.remove("open-5");
});

// // function hiện và đóng book6
const btnBook6 = document.querySelector(".js-btn-modalbook6");
const container_6 = document.querySelector(".js-container-6");
const modalClosebook6 = document.querySelector(".js-modalbook-close6");

btnBook6.addEventListener("click", function showBook6() {
    modalBook.classList.add("open");
    container_6.classList.add("open-6");
});
modalClosebook6.addEventListener('click', function close6() {
  modalBook.classList.remove("open");
  container_6.classList.remove("open-6");
});

// // function hiện và đóng book7
const btnBook7 = document.querySelector(".js-btn-modalbook7");
const container_7 = document.querySelector(".js-container-7");
const modalClosebook7 = document.querySelector(".js-modalbook-close7");

btnBook7.addEventListener("click", function showBook7() {
    modalBook.classList.add("open");
    container_7.classList.add("open-7");
});
modalClosebook7.addEventListener('click', function close7() {
  modalBook.classList.remove("open");
  container_7.classList.remove("open-7");
});

// // function hiện và đóng book8
const btnBook8 = document.querySelector(".js-btn-modalbook8");
const container_8 = document.querySelector(".js-container-8");
const modalClosebook8 = document.querySelector(".js-modalbook-close8");

btnBook8.addEventListener("click", function showBook8() {
    modalBook.classList.add("open");
    container_8.classList.add("open-8");
});
modalClosebook8.addEventListener('click', function close8() {
  modalBook.classList.remove("open");
  container_8.classList.remove("open-8");
});

// // function hiện và đóng book9
const btnBook9 = document.querySelector(".js-btn-modalbook9");
const container_9 = document.querySelector(".js-container-9");
const modalClosebook9 = document.querySelector(".js-modalbook-close9");

btnBook9.addEventListener("click", function showBook9() {
    modalBook.classList.add("open");
    container_9.classList.add("open-9");
});
modalClosebook9.addEventListener('click', function close9() {
  modalBook.classList.remove("open");
  container_9.classList.remove("open-9");
});

// // function hiện và đóng book10
const btnBook10 = document.querySelector(".js-btn-modalbook10");
const container_10 = document.querySelector(".js-container-10");
const modalClosebook10 = document.querySelector(".js-modalbook-close10");

btnBook10.addEventListener("click", function showBook10() {
    modalBook.classList.add("open");
    container_10.classList.add("open-10");
});
modalClosebook10.addEventListener('click', function close10() {
  modalBook.classList.remove("open");
  container_10.classList.remove("open-10");
});




// const btnBuy = document.querySelectorAll('.btn-buy');
// // console.log(btnBuy)

// btnBuy.forEach(function(button,index) {
//     button.addEventListener("click", function(event) {
//         let btnItem = event.target
//         let cardProduct = btnItem.parentElement.parentElement
//         let productImg = cardProduct.querySelector("img").src
//         let productName = cardProduct.querySelector("h4 a").innerText
//         let productPrice = cardProduct.querySelector("ins").innerText

//         addcart(productPrice,productName,productImg)
//     })
// })

// function addcart(productPrice,productName,productImg) {
//     let addtr = document.createElement("tr")
//     let trcontent = productPrice

// }
