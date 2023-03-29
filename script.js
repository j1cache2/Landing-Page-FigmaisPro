"use strict";

// let spans = document.querySelectorAll(".slidenavigation span");

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
        clearInterval(slideInterval);
    });
});

// function allFunctions() {
//     transformSlide();
//     changeBtn();
// }

let counterSlide;
let idOnClick;
let result;
let slide;
let selectedSlide;;

function transformSlide(_number) {
    let counterSlide = 1;
    let idOnClick = _number;
    let result = idOnClick - counterSlide;

    if (result >= 0) {
        let slide = Array.from(document.querySelectorAll(".slidesgroup"));
        slide.forEach(selectedSlide => {
            selectedSlide.style.transform = 'translateX(' + (-100 * result) + '%';
            selectedSlide.style.transition = "transform 1s ease";
        });
    }
}

const slideInterval = setInterval(slideAuto, 3000);

function slideAuto() {
    transformSlideAuto();
    transformSpanAuto();
}

let resultConst = 0;

function transformSlideAuto() {
    if (resultConst <= 3) {
        resultConst++
    } else {
        resultConst = 0;
    };
    let slide = Array.from(document.querySelectorAll(".slidesgroup"));
    slide.forEach(selectedSlide => {
        selectedSlide.style.transform = 'translateX(' + (-100 * resultConst) + '%';
        selectedSlide.style.transition = "transform 1s ease";
    });
}

let currentIndex = 0;
let newIndex = 0;

function transformSpanAuto() {
    let autoSpan = Array.from(document.querySelectorAll(".slidenavigation span"));
    let currentIndex = autoSpan.findIndex(span => span.classList.contains('active'));
    autoSpan[currentIndex].classList.remove('active');
    newIndex = (currentIndex + 1) % autoSpan.length;
    autoSpan[newIndex].classList.add('active');

};

//Corrigir grip-column-gap para column-gap!!!

//4998 

//5739

// let startAnimation = window.scrollY;
// let endAnimation = window.scrollY;



// addEventListener('DOMContentLoaded', function scrollPage() {
//     if (startAnimation >= 4998 && startAnimation <= 5739) {
//         return alert('Parabéns');
//     }
// })

// console.log(elementsImg);
//4996 5996
//4339 5339
//5072 and 6128 --> 1056

//A função abaixo já funciona, porém deve ser ajustada a fim de funcionar para diferentes tamanhos de tela. Nesse caso, devemos pegar a altura da <section>> ao invés da quantidade px rolada.

// let scrolled;

// window.addEventListener("scroll", function (event) {

//     let elementsImg = document.querySelector('.elementsimg')

//     // let top = this.scrollY;
//     let top = this.scrollY;

//     let animation = top - 4339;

//     var valueToMove = 4 / 1000;

//     if (animation > 0 && animation <= 1000) {
//         elementsImg.style.transform = 'translateY(' + (animation * valueToMove) + 'rem';
//     }
// }, false); 


window.addEventListener("scroll", function (event) {

    let topRef = this.document.getElementById('startAnimation');
    let bottomRef = this.document.getElementById('endAnimation');
    

    // let parentTop = topRef.offsetTop;
    let parentBottom = bottomRef.offsetTop;

    let elementsImg = document.querySelector('.elementsimg')

    // let top = this.scrollY;
    let top = this.scrollY;

    // console.log(parentTop, parentBottom);

    let animation = parentBottom - top;

    var valueToMove = 4 / (parentBottom - top);

    if (animation > 0 && animation <= 707) {
        elementsImg.style.transform = 'translateY(' + (animation * valueToMove) + 'rem';
    }
}, false); 