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

let startAnimation = window.scrollY;
let endAnimation = window.scrollY;

addEventListener('DOMContentLoaded', function scrollPage() {
    if (startAnimation > 100) {
        return alert('Parabéns');
    }
})

// function scrollPage() {
//     if (startAnimation > 100) {
//         console.log(startAnimation);
//     }
// }