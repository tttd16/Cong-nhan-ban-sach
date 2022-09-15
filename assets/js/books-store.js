const btnBuy = document.querySelectorAll('.btn-buy');
// console.log(btnBuy)

btnBuy.forEach(function(button,index) {
    button.addEventListener("click", function(event) {
        let btnItem = event.target
        let cardProduct = btnItem.parentElement.parentElement
        let productImg = cardProduct.querySelector("img").src
        let productName = cardProduct.querySelector("h4 a").innerText
        let productPrice = cardProduct.querySelector("ins").innerText

        addcart(productPrice,productName,productImg)
    })
})

function addcart(productPrice,productName,productImg) {
    let addtr = document.createElement("tr")
    let trcontent = productPrice
    
}
