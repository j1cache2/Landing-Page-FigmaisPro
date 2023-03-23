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

// // var container = document.getElementById('container');
// var container = document.getElementById('1');
// var windowHeight = window.innerHeight;
// var windowWidth = window.innerWidth;
// // var windowWidth = '4rem';
// var scrollArea = 1000 - windowHeight;
// var square1 = document.getElementById('2');

// // update position of square 1 and square 2 when scroll event fires.
// window.addEventListener('scroll', function () {
//     var scrollTop = window.pageYOffset || window.scrollTop;
//     var scrollPercent = scrollTop / scrollArea || 0;

//     square1.style.top = scrollPercent * window.innerWidth + 'px';
//     // square1.style.top = window.innerWidth + 'px';
//     // square1.style.top = 4+ 'rem';
// });

// // seleciona o elemento que será movido
// const elemento = document.getElementById("2");

// // adiciona um evento de rolagem na página
// window.addEventListener("scroll", function () {
//     // obtém a quantidade de rolagem na vertical
//     const scrollVertical = window.scrollY;

//     // calcula a nova posição do elemento
//     const novaPosicao = scrollVertical / 4;

//     // utiliza requestAnimationFrame para criar uma animação suave
//     requestAnimationFrame(function () {
//         elemento.style.transform = `translateY(${novaPosicao}rem)`;
//     });
// });


// const elemento = document.querySelector('.elementsimg');

// // Adicione um listener ao evento de rolagem da página
// window.addEventListener('scroll', () => {
//   // Obtenha a quantidade de rolagem atual da página em pixels
//   const scrollTop = window.pageYOffset;

//   // Converta a quantidade de rolagem para rem
//   const scrollRem = scrollTop / parseFloat(getComputedStyle(document.documentElement).fontSize);

//   // Calcule a quantidade de deslocamento horizontal que deseja aplicar
//   const deslocamentoRem = Math.min(4, scrollRem);

//   // Aplique o deslocamento horizontal ao elemento
//   elemento.style.transform = `translateY(${deslocamentoRem}rem)`;
// });


// 5074

// 6092

// // Selecione o elemento que deseja mover
// const elemento = document.querySelector('.elementsimg');

// // Defina as constantes para os valores de início e fim do evento
// // const inicioEvento = 5000;
// // const fimEvento = 6000;
// const inicioEvento = 5000;
// const fimEvento = 6000;

// // Adicione um listener ao evento de rolagem da página
// window.addEventListener('scroll', () => {
//     // Obtenha a quantidade de rolagem atual da página em pixels
//     const scrollTop = window.pageYOffset;

//     // Verifique se a quantidade de rolagem está dentro do intervalo do evento
//     if (scrollTop >= inicioEvento && scrollTop <= fimEvento) {
//         // Calcule a distância em pixels do topo do evento até a posição atual de rolagem
//         const distanciaEvento = scrollTop - inicioEvento;

//         // Calcule a quantidade de deslocamento vertical que deseja aplicar
//         const deslocamentoRem = Math.min(4, distanciaEvento / 250);

//         // Determine a direção da rolagem da página
//         const direcaoRolagem = scrollTop > window._ultimaPosicaoScrollTop ? 'paraCima' : 'paraBaixo';
//         window._ultimaPosicaoScrollTop = scrollTop;

//         // Inverta a direção da rolagem se o elemento estiver fora do eixo X da tela
//         const { top, bottom } = elemento.getBoundingClientRect();
//         const estaForaDoEixoX = top > 0 || bottom < window.innerHeight;
//         const direcaoMovimento = estaForaDoEixoX ? (direcaoRolagem === 'paraCima' ? 'paraBaixo' : 'paraCima') : direcaoRolagem;

//         // Aplique o deslocamento vertical ao elemento
//         elemento.style.transform = `translateY(${deslocamentoRem * (direcaoMovimento === 'paraCima' ? -1 : 1)}rem)`;
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {

//     document.querySelector('slidenavigation').onsubmit = function () {
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

// var navigatorR = document.getElementById("navigator");

// var spans = document.querySelectorAll(".slidenavigator .span");
// var spans = document.getElementsByClassName(".slidenavigator .span");
// var spans = document.getElementsByClassName(".slidenavigator .span");

// var spans = document.querySelectorAll(".slidenavigator > span");

// const slides = document.querySelectorAll("slidesgroup");
// const numberp = document.querySelector(".percentage");


// span.forEach(span => {
//     span.addEventListener("click", () => {
//         span.classList.toggle("active");
//     });
// });

// document.querySelectorAll('li.dot').forEach(li => {
//     li.addEventListener('click', () => {
//         document.querySelectorAll('li.dot').forEach(li => {
//             li.classList.remove('active');
//         });
//         li.classList.add('active');
//     });
// });

// let spans = document.querySelectorAll("span");

// spans.forEach(span => {
//     span.addEventListener('click', () => {
//         document.querySelectorAll('span').forEach(span => {
//             span.classList.remove('active');
//         });
//         span.classList.add('active');
//     });
// });

let spans = document.querySelectorAll(".slidenavigation span");

spans.forEach(span => {
    span.addEventListener('click', () => {
        document.querySelectorAll('span').forEach(span => {
            span.classList.remove('active');
        });
        span.classList.add('active');
    });
});

// let slides = document.querySelector("slidesgroup");
// let spanBtn = document.getElementById("firstspan");

// function slideTranslate() {
//     // document.getElementById("slidescontainer").style.transform = "translateX(-972px)";
//     document.getElementsByClassName("slidesgroup").style.transform = "translateX(-972px)";
// }

// function slideTranslate(id) {
//     let slideB = document.getElementById(id);
//     let spanB = document.getElementById(id);

//     slideB.style.transform = "translateX(-972px)";
// };

// function slideTranslate(id) {
//     let slideB = document.getElementById(id);
//     let activeSpan = document.getElementById

//     slideB.classList.add('active');
// }


//Funciona, porém altera todos os grupos ao mesmo tempo
// function slideTranslate() {
//     let slideB = document.querySelectorAll(".slidesgroup");
//     slideB.forEach(slide => slide.classList.add('active'));
// }


// function slideTranslate() {
//     let allSlide = document.querySelectorAll(".slidesgroup"); // use dot notation to select by class
//     allSlide.forEach(slide => slide.classList.add('active')); // use forEach to loop over selected elements
// }


// function getActiveIndex() {
//     const slides = document.querySelectorAll(".slidesgroup");
//     const activeSlide = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
//     return activeSlide;
// }

// const activeIndex = getActiveIndex();

// console.log(activeIndex);

function allFunctions() {
    // slideTranslate();
    // getActiveSpanIndex();
    transformSlide();
    // getActiveIndex();
}

// function getActiveSpanIndex() {
//     const spans = document.querySelectorAll(".slidenavigation span");
//     const activeSpan = Array.from(spans).findIndex(span => span.classList.contains("active"));
//     return activeSpan;
// }
// const activeSpan = getActiveSpanIndex();

// console.log(activeSpan);

// const indiceAtivo = getIndiceAtivo();

// spanBtn.forEach(span => {
//     span.addEventListener('click', () => {
//         document.querySelectorAll('span').forEach(span => {
//             span.classList.remove('active');
//             // document.querySelector("slidesgroup").style.transform = "translate(-972px)";
//         })
//     }
// function translateFunction() {
//     document.getElementById("theDiv").style.transform = "translateX(100px)";
//     document.getElementById("theDiv").style.transition = " all 2s"
// }

let counterSlide;
let idOnClick;
let result;
let slide;
let slideToGetWidth;
let slideWidth;
let sWidth;

function transformSlide(_number) {
    let counterSlide = 1;
    let idOnClick = _number;
    let result = idOnClick - counterSlide;
    let slide = document.getElementById("slidescontainer");
    // let slideToGetWidth = document.querySelector(".slide").getComputedStyle(slideToGetWidth).width;
    // let slideToGetWidth = document.getElementById("slide1");
    // let slideWidth = window.getComputedStyle(slideToGetWidth).width;

    // let slideWidth = 80;

    // let slideToGetWidth = document.getElementById("slide1");
    // let width = window.getComputedStyle(slideToGetWidth).width;

    // var popupDiv = document.getElementsByClassName("popup")[0],
    //    width = window.getComputedStyle(popupDiv).width;

    // return result;

    if (result >= 0) {
        counterSlide = counterSlide + result;
        // slide.style.transform = 'translateX(' + (-100 * result) + '%)';
        slide.style.transform = 'translateX(' + (-80 * result) + '%';
        // slide.style.transform = 'translateX(' + (-972 * result) + 'px)';
        slide.style.transition = "transform 1s ease";
    }
    // var slide = document.getElementById("slide" + id);
    // let slideActive = document.getElementById(number);
    // let slideActive = number;
    // slide.classList.add('active');

    // counterSlide = counterSlide + resultOperation;
    // return slideActive;

    // slidesecond.style.transform = 'translateX(' + (-sizes * counter) + 'px)';

    // let spanB = document.getElementById(id);
    // spanB.onclick.sty
    // const slideB = button.classList.contains("active");
    // if (slideB = button.classList.contains("active")) {
    //     slideB.style.visibility = "hidden";
    //     spanB.classList.toggle('active');
    // } else {
    //     slideB.style.visibility = "visible";
    //     spanB.classList.toggle('active');
    // }
}

// console.log(width);

// console.log(slideActive);

// function showImage(id) {
//     var image = document.getElementById(id);
//     var btn = document.getElementById("btn" + id);
//     var circle = document.getElementById("circle" + id);
//     if (image.style.visibility === "visible") {
//         image.style.visibility = "hidden";
//         btn.classList.toggle('active');
//         circle.classList.toggle('active');
//     } else {
//         image.style.visibility = "visible";
//         btn.classList.toggle('active');
//         circle.classList.toggle('active');
//     }
// };