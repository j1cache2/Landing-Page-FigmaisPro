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

// Selecione o elemento que deseja mover
const elemento = document.querySelector('.elementsimg');

// Defina as constantes para os valores de início e fim do evento
// const inicioEvento = 5000;
// const fimEvento = 6000;
const inicioEvento = 5000;
const fimEvento = 6000;

// Adicione um listener ao evento de rolagem da página
window.addEventListener('scroll', () => {
    // Obtenha a quantidade de rolagem atual da página em pixels
    const scrollTop = window.pageYOffset;

    // Verifique se a quantidade de rolagem está dentro do intervalo do evento
    if (scrollTop >= inicioEvento && scrollTop <= fimEvento) {
        // Calcule a distância em pixels do topo do evento até a posição atual de rolagem
        const distanciaEvento = scrollTop - inicioEvento;

        // Calcule a quantidade de deslocamento vertical que deseja aplicar
        const deslocamentoRem = Math.min(4, distanciaEvento / 250);

        // Determine a direção da rolagem da página
        const direcaoRolagem = scrollTop > window._ultimaPosicaoScrollTop ? 'paraCima' : 'paraBaixo';
        window._ultimaPosicaoScrollTop = scrollTop;

        // Inverta a direção da rolagem se o elemento estiver fora do eixo X da tela
        const { top, bottom } = elemento.getBoundingClientRect();
        const estaForaDoEixoX = top > 0 || bottom < window.innerHeight;
        const direcaoMovimento = estaForaDoEixoX ? (direcaoRolagem === 'paraCima' ? 'paraBaixo' : 'paraCima') : direcaoRolagem;

        // Aplique o deslocamento vertical ao elemento
        elemento.style.transform = `translateY(${deslocamentoRem * (direcaoMovimento === 'paraCima' ? -1 : 1)}rem)`;
    }
});
