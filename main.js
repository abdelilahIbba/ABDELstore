let templateProducts = document.querySelector(".template_products");
let productShow = document.querySelector(".product_show");
let imgOfproduct = document.querySelector(".imgOfproduct")
let categoryProduct = document.querySelector(".category_product")
let titleProduct = document.querySelector(".title_product")
let priceProduct = document.querySelector(".price")
let shopButton = document.querySelector(".btnLink")



fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(productsData => {
        displayProducts(productsData)
    })
    .catch(error => {
        console.error("error here", error);
    })

function displayProducts(Data) {
    Data.forEach(element => {
        let productshow = productShow.cloneNode(true)
        productShow.className = `product_show`
        imgOfproduct.src = element.image
        categoryProduct.innerHTML = element.category
        titleProduct.innerHTML = element.title.slice(0, 20)
        priceProduct.innerHTML = element.price
        shopButton.setAttribute("href", "singleProducts/singleproduct.html?name=" + element.title + "&price=" + element.price + "&category=" + element.category + "&descr=" + element.description + "&image=" + element.image)
        templateProducts.appendChild(productshow)
    });
}




// this function is about to scroll to top
let scrollTop = document.getElementById("btnTop")
let toTop = document.querySelector('.toTop')
window.onscroll = function () {
    if (scrollY >= 1000) {
        toTop.classList.add("show")
        scrollTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
            })
        })
    }
    else {
        toTop.classList.remove("show")
    }
}




let boxs = document.querySelectorAll(".box")
boxs.forEach((box) => {
    box.addEventListener("mouseover", () => {
        removeActive()
        box.classList.add("boxActive")
        box.classList.remove("box1")
    })
})

function removeActive() {
    boxs.forEach((box) => {
        box.classList.remove("boxActive")
    })
}



// FAQ section
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
