// ==================== Cart ===============

// let modalWrapper = document.querySelector(".js-modal-wrapper");
// let modalCart = document.querySelector(".js-modal-cart");
// let cartIcon = document.getElementById("js-cart-modal");
// let cartX = document.getElementById("cart-icon");

// cartIcon.addEventListener("click", function showCart() {
//   modalCart.classList.add("open-cart");
//   modalWrapper.classList.add("open-cart__wrapper");
// });

// cartX.addEventListener("click", function closeCart() {
//   modalCart.classList.remove("open-cart");
//   modalWrapper.classList.remove("open-cart__wrapper");
// });


// ===============NAV===========




/** ============================SIGN UP=========================================== */
const signUp = (e) => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;

  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => 
          data.fname.toLowerCase() == fname.toLowerCase() && 
          data.lname.toLowerCase() == lname.toLowerCase()
      );

  if(!exist){
      formData.push({ fname, lname, email, pwd });
      localStorage.setItem('formData', JSON.stringify(formData));
      document.querySelector('form').reset();
      document.getElementById('fname').focus();
      alert("Account Created.\n\nPlease Sign In using the link below.");
  }
  else{
      alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
  }
  e.preventDefault();
}
/** ======================================================================= */

/** ============================SIGN IN=========================================== */
function signIn(e) {
  let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
  let formData = JSON.parse(localStorage.getItem('formData')) || [];
  let exist = formData.length && 
  JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
  if(!exist){
      alert("Incorrect login credentials");
  }
  else{
      location.href = "";
  }
  e.preventDefault();
}

/** ======================================================================= */
// const signUp = e => {
//     let fname = document.getElementById('fname').value,
//         lname = document.getElementById('lname').value,
//         email = document.getElementById('email').value,
//         pwd = document.getElementById('pwd').value;

//     let formData = JSON.parse(localStorage.getItem('formData')) || [];

//     let exist = formData.length && 
//         JSON.parse(localStorage.getItem('formData')).some(data => 
//             data.fname.toLowerCase() == fname.toLowerCase() && 
//             data.lname.toLowerCase() == lname.toLowerCase()
//         );

//     if(!exist){
//         formData.push({ fname, lname, email, pwd });
//         localStorage.setItem('formData', JSON.stringify(formData));
//         document.querySelector('form').reset();
//         document.getElementById('fname').focus();
//         alert("Account Created.\n\nPlease Sign In using the link below.");
//     }
//     else{
//         alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
//     }
//     e.preventDefault();
// }

// function signIn(e) {
//     let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
//     let formData = JSON.parse(localStorage.getItem('formData')) || [];
//     let exist = formData.length && 
//     JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
//     if(!exist){
//         alert("Incorrect login credentials");
//     }
//     else{
//         location.href = "/";
//     }
//     e.preventDefault();
// }