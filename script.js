"use strict";

let spans = document.querySelectorAll(".slidenavigation span");

spans.forEach(span => {
    span.addEventListener('click', () => {
        document.querySelectorAll('span').forEach(span => {
            span.classList.remove('active');
        });
        span.classList.add('active');
    });
});

function allFunctions() {
    transformSlide();
}

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