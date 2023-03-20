"use strict";

// const body = document.getElementByClassName('figmaispro');
// // const body = document.getElementByName(body);
// const output = document.querySelector("p#output");
// const elementsImg = document.getElementByClassName('elementsimg');

// body.onscroll = (event) => {
//     elementsImg.style.transform = "translateY(4rem)";
//     elementsImg.style.transition = " all 2s"
// };

// function transformEl() {
//     const body = document.getElementByClassName('figmaispro');
//     // const body = document.getElementByName(body);
//     const output = document.querySelector("p#output");
//     const elementsImg = document.getElementByClassName('elementsimg');

//     if (scroll === true) {
//         elementsImg.style.transform = "translateY(4rem)";
//         elementsImg.style.transition = " all 2s"
//     }

//     // body.onscroll = (event) => {
//     //     elementsImg.style.transform = "translateY(4rem)";
//     //     elementsImg.style.transition = " all 2s"
//     // };
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('form').onsubmit = function () {
//         // fetch('https://api.exchangeratesapi.io/latest?base=USD')
//         fetch('https://v6.exchangerate-api.com/v6/c906f905a0e38d2e6b3e862a/latest/USD')
//             .then(response => response.json())
//             .then(data => {
//                 // console.log(conversion_rates);
//                 const currency = document.querySelector('#currency').value.toUpperCase();
//                 const rate = data.conversion_rates[currency];
//                 if (rate !== undefined) {
//                     document.querySelector('#result').innerHTML = `1 USD is equal to ${rate} ${currency}.`;
//                 } else {
//                     document.querySelector('#result').innerHTML = 'Invalid currency.';
//                 }
//             })
//             .catch(error => {
//                 console.log('Error:', error);
//             });

//         return false;
//     }
// });

// document.addEventListener('DOMContentLoaded', (
//     const body = document.getElementByClassName('figmaispro');
// const elementsImg = document.getElementByClassName('elementsimg');

// body.onscroll = function () {

// })


// document, getElementByClassName('figmaispro')
// {
//     onscroll = function () {
//         const body = document.getElementByClassName('figmaispro');
//         const elementsImg = document.getElementByClassName('elementsimg');
//         if (onscroll === true) {
//             elementsImg.style.transform = "translateY(4rem)";
//             elementsImg.style.transition = " all 2s";
//         }
//     }
// }
// console.log(conversion_rates);

// function myFunction() {

//     const body = document.getElementByClassName('figmaispro');
//     const elementsImg = document.getElementByClassName('elementsimg');
//     body.onscroll;
//     elementsImg.style.transform = "translateY(4rem)";
//     elementsImg.style.transition = " all 2s";
// }

// var container = document.getElementById('container');
var container = document.getElementById('1');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
// var windowWidth = '4rem';
var scrollArea = 1000 - windowHeight;
var square1 = document.getElementById('2');

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop / scrollArea || 0;

    square1.style.top = scrollPercent * window.innerWidth + 'px';
    // square1.style.top = window.innerWidth + 'px';
    // square1.style.top = 4+ 'rem';
});