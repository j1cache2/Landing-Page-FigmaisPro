"use strict";

// let resultConstMobileTouch = 0;
let spans = document.querySelectorAll(".slidenavigation span");

spans.forEach(span => {
    span.addEventListener('click', () => {
        document.querySelectorAll('span').forEach(span => {
            span.classList.remove('active');
        });
        span.classList.add('active');
        clearInterval(slideInterval);
        clearInterval(slideIntervalMobile);
    });
});
// function spanActive() {
//     // if (resultConstMobileTouch >= 0 && resultConstMobileTouch <= 9) {
//     let autoSpan = Array.from(document.querySelectorAll(".slidenavigation span"));
//     let currentIndexMobile = autoSpan.findIndex(span => span.classList.contains('active'));
//     // autoSpan[currentIndexMobile].classList.remove('active');
//     // autoSpan[resultConstMobileTouch].classList.add('active');
//     let resultConstMobileTouch = currentIndexMobile;
// };

let counterSlide;
let idOnClick;
let result;
let slide;
let selectedSlide;

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
    let slide = Array.from(document.querySelectorAll(".container20 .slidesgroup"));
    slide.forEach(selectedSlide => {
        selectedSlide.style.transform = 'translateX(' + (-100 * resultConst) + '%';
        selectedSlide.style.transition = "transform 1s ease";
    });
}

let currentIndex = 0;
let newIndex = 0;

function transformSpanAuto() {
    let autoSpan = Array.from(document.querySelectorAll(".container20 .slidenavigation span"));
    let currentIndex = autoSpan.findIndex(span => span.classList.contains('active'));
    autoSpan[currentIndex].classList.remove('active');
    newIndex = (currentIndex + 1) % autoSpan.length;
    autoSpan[newIndex].classList.add('active');
};

let resultConstMobileTouch = 0;

const slideIntervalMobile = setInterval(slideAutoMobile, 3000);

function slideAutoMobile() {
    transformSlideAutoMobile();
    transformSpanAutoMobile();
}

let resultConstMobile = 0;
let currentIndexMobile = 0;
let newIndexMobile = 0;

function transformSlideAutoMobile() {
    if (resultConstMobile <= 8) {
        resultConstMobile++
        resultConstMobileTouch++;
    } else {
        resultConstMobile = 0;
        resultConstMobileTouch = 0;
    };
    let slide = Array.from(document.querySelectorAll(".container20mobile .slidesgroup"));
    slide.forEach(selectedSlide => {
        selectedSlide.style.transform = 'translateX(' + (-100 * resultConstMobile) + '%';
        selectedSlide.style.transition = "transform 1s ease";
    });
}

function transformSpanAutoMobile() {
    let autoSpan = Array.from(document.querySelectorAll(".container20mobile .slidenavigation span"));
    let currentIndexMobile = autoSpan.findIndex(span => span.classList.contains('active'));
    autoSpan[currentIndexMobile].classList.remove('active');
    newIndexMobile = (currentIndexMobile + 1) % autoSpan.length;
    autoSpan[newIndexMobile].classList.add('active');
};

let slidesMobile = document.getElementById("slidescontainermobile");
slidesMobile.addEventListener("touchstart", touchStartHandler, false);
slidesMobile.addEventListener("touchend", touchEndHandler, false);

let touchesInAction = [];
let theTouchInfo;

function touchStartHandler(event) {
    var touches = event.changedTouches;

    for (var j = 0; j < touches.length; j++) {
        touchesInAction["$" + touches[j].identifier] = {
            identifier: touches[j].identifier,
            pageX: touches[j].pageX,
        };
    }
}

function touchEndHandler(event) {
    let touches = event.changedTouches;

    for (var j = 0; j < touches.length; j++) {
        /* access stored touch info on touchend */
        var theTouchInfo = touchesInAction["$" + touches[j].identifier];
        theTouchInfo.dx = touches[j].pageX - theTouchInfo.pageX;  /* x-distance moved since touchstart */
        event.preventDefault();
        // console.log(theTouchInfo.dx);
    }
    if (theTouchInfo.dx <= 0) {
        resultConstMobileTouch++;
    } else {
        resultConstMobileTouch--;
    };
    let slide = Array.from(document.querySelectorAll(".container20mobile .slidesgroup"));
    slide.forEach(selectedSlide => {
        selectedSlide.style.transform = 'translateX(' + (-100 * resultConstMobileTouch) + '%';
        selectedSlide.style.transition = "transform 1s ease";
        clearInterval(slideIntervalMobile);
    });
    if (resultConstMobileTouch > 9) {
        let allSlidesMobile = Array.from(document.querySelectorAll(".container20mobile .slidesgroup"));
        allSlidesMobile.forEach(slide => {
            slide.style.transform = 'translateX(' + (0) + '%';
            slide.style.transition = "transform 1s ease";
            resultConstMobileTouch = 0;
        });
    } if (resultConstMobileTouch < 0) {
        let allSlidesMobile = Array.from(document.querySelectorAll(".container20mobile .slidesgroup"));
        allSlidesMobile.forEach(slide => {
            slide.style.transform = 'translateX(' + (-900) + '%';
            slide.style.transition = "transform 1s ease";
            resultConstMobileTouch = 9;
        });
    }
    if (resultConstMobileTouch >= 0 && resultConstMobileTouch <= 9) {
        let autoSpan = Array.from(document.querySelectorAll(".container20mobile .slidenavigation span"));
        let currentIndexMobile = autoSpan.findIndex(span => span.classList.contains('active'));
        autoSpan[currentIndexMobile].classList.remove('active');
        autoSpan[resultConstMobileTouch].classList.add('active');
    };
    console.log(resultConstMobileTouch);

    // let autoSpan = Array.from(document.querySelectorAll(".container20mobile .slidenavigation span"));
    // let currentIndexMobile = autoSpan.findIndex(span => span.classList.contains('active'));
    // let resultConstMobileTouch = currentIndexMobile;
    // console.log(resultConstMobileTouch);
}


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

window.addEventListener("scroll", function (event) {

    let top = this.scrollY;
    let start = document.querySelector('.welcometofigmaispro').offsetTop * 1.1;
    let end = start + 400;
    let sectionHeight = end - start;

    let animationOne = top - start;
    let webflowLogoImg = document.querySelector('.webflowlogo');
    let webflowLogoImgValueToMove = 4 / sectionHeight;

    let secondStart = start + 100;
    let secondEnd = start + 300;
    let animationTwo = top - secondStart;
    let elementorlogoImg = document.querySelector('.elementorlogo')
    let elementorlogoImgValueToMove = 4 / sectionHeight;

    let thirdStart = start + 200;
    let animationThree = top - thirdStart;
    let animateP = document.querySelector('.animatep')
    let animatePValueToMove = 4 / sectionHeight;

    if (top <= start) {
        webflowLogoImg.style.opacity = 0;
    } else if
        (top >= start && top <= thirdStart) {
        webflowLogoImg.style.transform = 'translateY(' + (-animationOne * webflowLogoImgValueToMove) + 'rem';
        webflowLogoImg.style.opacity = (animationOne * webflowLogoImgValueToMove);
    };

    if (top <= secondStart) {
        elementorlogoImg.style.opacity = 0;
    } else if
        (top >= secondStart && top <= secondEnd) {
        elementorlogoImg.style.transform = 'translateY(' + (-animationTwo * elementorlogoImgValueToMove) + 'rem';
        elementorlogoImg.style.opacity = (animationTwo * elementorlogoImgValueToMove);
    };

    if (top <= thirdStart) {
        animateP.style.opacity = 0;
    } else if (top >= thirdStart && top <= end) {
        animateP.style.transform = 'translateY(' + (-animationThree * animatePValueToMove) + 'rem';
        animateP.style.opacity = (animationThree * animatePValueToMove);
    };
}, false);