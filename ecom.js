let serch = document.querySelector('#serrrr');
let close = document.querySelector('#xx');
let SerchBTn = document.querySelector('#sss');
let quickview =document.querySelector('.quickview');
// let c = document.getElementsByClassName("carttttt");
let c = document.getElementsByClassName("carttttt")[0];
let black =document.querySelector('#colorr1');
let orange =document.querySelector('#colorr2');
let white =document.querySelector('#colorr3');
let photoOne =document.getElementById('photoOne');
let photoOOne =document.getElementById('photoOOne');
let minus = document.getElementById('minus');
let number = document.getElementById("number");
let plus = document.getElementById("plus");
let ADDD =document.getElementById("ADDD");
let overflowDes=document.getElementById("overflowDes");
let reviewDesc = document.getElementById("reviewDesc");



/////////////////////menu bar responsive
const cloose =document.getElementById('cloose');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbarr');
 
if(bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
 
if(cloose){
    cloose.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}


///////////////////////////


// console.log(nav);+
// console.log(ADDD);
// console.log(plus);

serch.addEventListener("click", srch);
function srch(){
    document.querySelector(".grey").classList.add("active");
}


close.addEventListener("click", clo);

function clo(){
    document.querySelector(".grey").classList.remove("active");
}

SerchBTn.addEventListener("click", ser);

function ser(){
    location.href='search.html';
}

// ccc.addEventListener("click",  addToCart);




// black.addEventListener("click", bla);
// orange.addEventListener("click", or);
// white.addEventListener("click",whi);
// minus.addEventListener("click" , min);
// plus.addEventListener("click" , pl);
// ADDD.addEventListener("click", addToCart)

let no =0;
let ShopCart = [];

function addToCart(){

};

function bla(){

    photoOne.style.backgroundImage = "url('./product-001-b.jpg')";
    // photoOOne.style.backgroundImage = "url('./product-001-b.jpg')";
   
};
function or(){

    photoOne.style.backgroundImage = "url('./product-01-c.jpg')";
    // photoOOne.style.backgroundImage = "url('./product-01-c.jpg')";
   

};
function whi(){

    photoOne.style.backgroundImage = "url('./product-01-d.jpg')";
    // photoOOne.style.backgroundImage = "url('./product-01-d.jpg')";


};

function min(){
    no -=1 ;

    number.textContent = no;
};
function pl(){
    no += 1;

    number.textContent = no;
};

function showover(){

    overflowDes.style.display= "block";
    let mini =document.getElementById("mini");
    mini.style.backgroundImage ="url('./icons8-minus-48.png')"

}
function sho(){
    reviewDesc.style.display = "block";
    let mi =document.getElementById("mi");
    mi.style.backgroundImage = "url('./icons8-minus-48.png)"
}






function go1(){
    location.href="product1.html";
}
function go2(){
    location.href="product2.html";

}
function go3(){
    location.href="product3.html";

}
function go4(){
    location.href="product4.html";

}
function go5(){
    location.href="product5.html";

}
function go6(){
    location.href="product6.html";

}
function go7(){
    location.href="product7.html";

}
function go8(){
    location.href="product8.html";

}
function go9(){
    location.href="product9.html";

}
function go10(){
    location.href="product10.html";
}




/////////////////////////////////////////
// let cartshop = document.querySelectorAll('.cartshop');
// let products =[
//     {
//         name: 'grey top',
//         tag: 'grey top',
//         price:15,
//         inCart:0
//     },
//     {
//         name: 'black top',
//         tag: 'black top',
//         price:14,
//         inCart:0
//     },
//     {
//         name: 'grey top',
//         tag: 'grey top',
//         price:15,
//         inCart:0
//     },
//     {
//         name: 'grey top',
//         tag: 'grey top',
//         price:15,
//         inCart:0
//     }
// ];
// for (let i=0; i < cartshop.length; i++){
//     cartshop[i].addEventListener('click', () => {
//         cartNumbers(products[i]);
//     })
// }


// function onLoadCartNumbers(){

//     let productNumber = localStorage.getItem('cartNumbers');

//     if( productNumber ) {
//         document.querySelector('#total').textContent = productNumber;
//     }
// }


// function cartNumbers(product){
//     let productNumber = localStorage.getItem('cartNumbers');
    
//     productNumber = parseInt(productNumber);
//     if( productNumber ) {
//         localStorage.setItem('cartNumbers', productNumber + 1);
//         document.querySelector('#total').textContent = productNumber + 1;

//     } else{
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('#total').textContent = 1;
//     }
//     setItems(product);
// }
// function setItems(product) {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if(cartItems != null){
//         if(cartItems[product.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]: product
//             }

//         }
//         cartItems[product.tag].inCart += 1;
//     } else{
//         product.inCart = 1;
//         cartItems ={
//             [product.tag]: product
//         }

//     }
   
     
//     localStorage.setItem("productsInCart", JSON.stringify
//     (cartItems));

// }
//////////////////////////cart 

let car = document.querySelector("#car");
let cartTwo = document.querySelector(".cartTwo");
let bobo = document.querySelector("#bobo");
let qlose = document.querySelector("#qlose");
let her = document.querySelector('#hero');

    if(car){
        car.addEventListener("click",() =>{
            cartTwo.classList.add("active");
        })
    }

    if(bobo){
        bobo.addEventListener("click",() =>{
            cartTwo.classList.add("active");
        })
    }
    if(qlose){
        qlose.addEventListener("click",() =>{
            cartTwo.classList.remove("active");
        })
    }

    if(her){
        her.addEventListener("click",() =>{
            cartTwo.classList.remove("active");
        })
    }
console.log(her);
console.log(qlose);
console.log(bobo);
console.log(car);
    