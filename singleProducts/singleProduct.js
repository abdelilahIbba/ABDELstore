let imageOfProduct = document.getElementById("imageOfProduct")
let categoryOfProduct = document.getElementById("categoryOfProduct")
let titleOfProduct = document.getElementById("titleOfProduct")
let descrOfProduct = document.getElementById("descrOfProduct")
let priceOfProduct = document.getElementById("priceOfProduct")
let priceProduct = document.getElementById("priceOfProduct")



let result = document.getElementById("result")
let resultOF = document.getElementById("resultOF")
let priceBtn = document.querySelector(".priceBtn")
let updatePrice
let count = 1


document.getElementById("btnAdd").onclick = () => {
    count += 1
    result.innerHTML = count
    priceProduct.style.display = "none"
    let originalPrice = Number(document.getElementById("priceOfProduct").textContent)
    updatePrice = originalPrice * count
    resultOF.innerHTML = updatePrice.toFixed(2)
}

document.getElementById("btnless").onclick = () => {
    if (count > 1) {
        count -= 1
        result.innerHTML = count;
        let originalPrice = Number(document.getElementById("priceOfProduct").textContent)
        let resultOFContent = Number(document.getElementById("resultOF").textContent)
        updatePrice = resultOFContent - originalPrice
        resultOF.innerHTML = updatePrice.toFixed(2)
    }
}


priceBtn.addEventListener("click", () => {
    let resultOFF = document.getElementById("resultOF").textContent
    let originalPriceHT = document.getElementById("priceOfProduct").textContent
    let titleOfProduct = document.getElementById("titleOfProduct").textContent
    let finalResultF = document.getElementById("finalResultF")
    let finalResultS = document.getElementById("finalResultS")
    let titleFinal = document.getElementById("titleFinal")

    if (resultOFF === "") {
        finalResultF.innerHTML = originalPriceHT
        finalResultS.innerHTML = originalPriceHT
        titleFinal.innerHTML = titleOfProduct
    } else {
        finalResultF.innerHTML = resultOFF
        finalResultS.innerHTML = resultOFF
        titleFinal.innerHTML = titleOfProduct
    }
})




let dataLink = new URLSearchParams(window.location.search)
let imageIndex = dataLink.get("image")
let categoryIndex = dataLink.get("category")
let titleIndex = dataLink.get("title")
let descrIndex = dataLink.get("descr")
let priceIndex = dataLink.get("price")

categoryOfProduct.innerHTML = categoryIndex
titleOfProduct.innerHTML = titleIndex
descrOfProduct.innerHTML = descrIndex
priceOfProduct.innerHTML = priceIndex
imageOfProduct.setAttribute("src", imageIndex)



// hide payment section by click on body
//payment script
let paymentSection = document.querySelector(".payment")
let btnPayment = document.querySelector(".priceBtn")
let btnclose = document.querySelector(".close")
btnPayment.addEventListener("click", () => {
    paymentSection.classList.add("displayPay")
})

btnclose.addEventListener("click", () => {
    paymentSection.classList.remove("displayPay")
})




// successfull payment alert
let payBtn = document.getElementById("payBtn")
payBtn.addEventListener("click", function () {
    Swal.fire({
        title: "Payment was completed successfully!",
        text: "Thank you for choosing our website!",
        icon: "success",
    }).then((result) => {
        setTimeout(() => {
            if (result.isConfirmed) {
                window.location.href = "../index.html";
            }
        }, 1000);
    });
});




// fetch('https://fakestoreapi.com/products/categories')
//     .then(res => res.json())
//     .then(json => console.log(json))