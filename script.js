
// ----------------------------------------------------------section3 btn ----------------------------------------------
function readMore () {
    let dots = document.getElementById('dots');
    let moreText = document.getElementById('moreText');
    let btn = document.getElementById('btn');

    if (dots.style.display === "none"){
            dots.style.display = "inline";
            btn.innerHTML = "Learn more";
            moreText.style.display = "none";
    } else {
            dots.style.display = "none";
            btn.innerHTML = "Close";
            moreText.style.display = "inline";
    }
}

// --------------------------------------------------------- section6 switсh ------------------------------------------

let off = document.getElementById('off');
let on = document.getElementById('on');
let radio = document.querySelector('.radio');

off.addEventListener('click', () => {
    radio.classList.add('off');
});

on.addEventListener('click', () => {
    radio.classList.remove('off');
});

// --------------------------------------------------------section6 boxShadow-------------------------------------------------

function addShadow() {
    var card = document.querySelector('.card-shadow');
    card.classList.toggle('shadow');
  }

function addShadow2() {
    var card2 = document.querySelector('.card-shadow2');
    card2.classList.toggle('shadow');
}

// --------------------------------------------------------section8 moreInfo-------------------------------------------------

    let id = document.querySelectorAll('s8-id');
    let dopInfos = document.querySelectorAll('.s8__content-box');
    
    for ( let i = 0; i < dopInfos.length; i++){
        let dopInfo = dopInfos[i];

        let btn = dopInfo.querySelector('.s8-id');
        let content = dopInfo.querySelector('.section8__desc-moreInfo');
        // let element = document.getElementById('s8-style');
        
        btn.addEventListener("click", () => {
            
            let isOpen = content.classList.contains('section8__desc-moreInfo');
            if (isOpen){
                btn.innerHTML = "&#8722;"
                content.classList.remove('section8__desc-moreInfo')
                btn.style.color = "#07073e7a"
            } else {
                btn.innerHTML = "&#43;"
                content.classList.add('section8__desc-moreInfo')
                btn.style.color = "#07073e"
            }
        });
    };

// ---------------------------------------------------------section7 slider--------------------------------------------------

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', () => {
    offset += 500;
    if (offset > 1000){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'
});

document.querySelector('.slider-prev').addEventListener('click', () => {
    offset -= 500;
    if (offset < 0){
        offset = 1000;
    }
    sliderLine.style.left = -offset + 'px'
})
