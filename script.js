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


// window.addEventListener("scroll", function (event) {

//     let top = this.scrollY;
//     let figmaisProSection = document.querySelector('.modules').offsetTop;
//     let welcomeToFigmaisProSection = document.querySelector('.welcometofigmaispro').offsetTop;
//     let animation = top - figmaisProSection;
//     let sectionHeight = welcomeToFigmaisProSection - figmaisProSection

//     let elementsImg = document.querySelector('.elementsimg')
//     let elementsimgValueToMove = 3.5 / sectionHeight;

//     if (top >= figmaisProSection && top <= welcomeToFigmaisProSection) {
//         elementsImg.style.transform = 'translateY(' + (animation * elementsimgValueToMove) + 'rem';
//     };

//     let resourcesImg = document.querySelector('.resourcesimg')
//     let resourcesImgValueToMove = 4.5 / sectionHeight;

//     if (top >= figmaisProSection && top <= welcomeToFigmaisProSection) {
//         resourcesImg.style.transform = 'translateX(' + (animation * resourcesImgValueToMove) + 'rem';
//     };

//     let classesImg = document.querySelector('.classesimg')
//     let classesImgValueToMove = 3 / sectionHeight;

//     if (top >= figmaisProSection && top <= welcomeToFigmaisProSection) {
//         classesImg.style.transform = 'translateX(' + (-animation * classesImgValueToMove) + 'rem';
//     };

//     let modulesImg = document.querySelector('.modulesimg')
//     let modulesImgValueToMove = 3 / sectionHeight;

//     if (top >= figmaisProSection && top <= welcomeToFigmaisProSection) {
//         modulesImg.style.transform = 'translateX(' + (animation * modulesImgValueToMove) + 'rem';
//     };

//     let studentsImg = document.querySelector('.studentsimg')
//     let studentsImgValueToMove = 2.5 / sectionHeight;

//     if (top >= figmaisProSection && top <= welcomeToFigmaisProSection) {
//         studentsImg.style.transform = 'translateX(' + (-animation * studentsImgValueToMove) + 'rem';
//     };

//     let updatesImg = document.querySelector('.updatesimg')
//     let updatesImgValueToMove = 3.5 / sectionHeight;

//     if (top >= figmaisProSection && top <= welcomeToFigmaisProSection) {
//         updatesImg.style.transform = 'translateY(' + (-animation * updatesImgValueToMove) + 'rem';
//     };
// }, false);

window.addEventListener("scroll", function (event) {

    let top = this.scrollY;
    let start = document.querySelector('.modules').offsetTop;
    let end = document.querySelector('.welcometofigmaispro').offsetTop;
    let animation = top - start;
    let sectionHeight = end - start;

    let elementsImg = document.querySelector('.elementsimg');
    let elementsimgValueToMove = 3.5 / sectionHeight;

    let resourcesImg = document.querySelector('.resourcesimg')
    let resourcesImgValueToMove = 4.5 / sectionHeight;

    let classesImg = document.querySelector('.classesimg')
    let classesImgValueToMove = 3 / sectionHeight;

    let modulesImg = document.querySelector('.modulesimg')
    let modulesImgValueToMove = 3 / sectionHeight;

    let studentsImg = document.querySelector('.studentsimg')
    let studentsImgValueToMove = 2.5 / sectionHeight;

    let updatesImg = document.querySelector('.updatesimg')
    let updatesImgValueToMove = 3.5 / sectionHeight;

    if (top >= start && top <= end) {
        elementsImg.style.transform = 'translateY(' + (animation * elementsimgValueToMove) + 'rem';
        resourcesImg.style.transform = 'translateX(' + (animation * resourcesImgValueToMove) + 'rem';
        classesImg.style.transform = 'translateX(' + (-animation * classesImgValueToMove) + 'rem';
        modulesImg.style.transform = 'translateX(' + (animation * modulesImgValueToMove) + 'rem';
        studentsImg.style.transform = 'translateX(' + (-animation * studentsImgValueToMove) + 'rem';
        updatesImg.style.transform = 'translateY(' + (-animation * updatesImgValueToMove) + 'rem';
    };
}, false);