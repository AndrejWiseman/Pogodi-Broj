'use strict';

let polje1 = document.querySelector('.pothranjen').innerHTML;
let normalno = document.querySelector('.normalno').innerHTML;
let prekomerno = document.querySelector('.prekomerno').innerHTML;
let pretili = document.querySelector('.pretili').innerHTML;
let izrazito = document.querySelector('.izrazito').innerHTML;
let stisak1 = document.querySelector('.btn1');



// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


//stisak1.addEventListener('click', function(){
//
//    let visina = document.getElementById('visina').value;
////    let decimalni = visina.indexOf('.');
//    if (visina != parseFloat(visina) ){
////        let visina = document.getElementById('visina').value;
//        let tezina = document.getElementById('tezina').value;
//
//        let bmi = (tezina / (visina * visina)).toFixed(1);
//
//        if (bmi <= 18.5){
//            document.querySelector('.pocetna').innerHTML = polje1;
//            document.querySelector('.rezultat').innerHTML = `${bmi}`;
//        } else if(bmi >= 18.6 && bmi <= 24.9){
//            document.querySelector('.pocetna').innerHTML = normalno;
//            document.querySelector('.rezultat').innerHTML = `${bmi}`;
//        } else if(bmi >= 25 && bmi <= 30){
//            document.querySelector('.pocetna').innerHTML = prekomerno;
//            document.querySelector('.rezultat').innerHTML = `${bmi}`;
//        } else if(bmi >= 30.1 && bmi <= 40){
//            document.querySelector('.pocetna').innerHTML = pretili;
//            document.querySelector('.rezultat').innerHTML = `${bmi}`;
//        } else if(bmi >= 40.1){
//            document.querySelector('.pocetna').innerHTML = izrazito;
//            document.querySelector('.rezultat').innerHTML = `${bmi}`;
//        } else {
//            alert('Nije dobar broooj!')
//        }
//    } else {
//        alert('Nije u metrima')
//    }
//
//})

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);





stisak1.addEventListener('click', function(){

    let visina = document.getElementById('visina').value;
    let tezina = document.getElementById('tezina').value;

    let bmi = (tezina / (visina * visina)).toFixed(1);

    if (bmi <= 18.5){
        document.querySelector('.pocetna').innerHTML = polje1;
        document.querySelector('.rezultat').innerHTML = `${bmi}`;
    } else if(bmi >= 18.6 && bmi <= 24.9){
        document.querySelector('.pocetna').innerHTML = normalno;
        document.querySelector('.rezultat').innerHTML = `${bmi}`;
    } else if(bmi >= 25 && bmi <= 30){
        document.querySelector('.pocetna').innerHTML = prekomerno;
        document.querySelector('.rezultat').innerHTML = `${bmi}`;
    } else if(bmi >= 30.1 && bmi <= 40){
        document.querySelector('.pocetna').innerHTML = pretili;
        document.querySelector('.rezultat').innerHTML = `${bmi}`;
    } else if(bmi >= 40.1){
        document.querySelector('.pocetna').innerHTML = izrazito;
        document.querySelector('.rezultat').innerHTML = `${bmi}`;
    } else {
        alert('Nije dobar broooj!')
    }
})


let stisak2 = document.querySelector('.btn2');
let pocetna1 = document.querySelector('.pocetna').innerHTML;

let faq = document.querySelector('.odgovor').innerHTML;
let upitnik = document.querySelector('.upitnik');

stisak2.addEventListener('click', function(){

    document.querySelector('.pocetna').innerHTML = pocetna1;

//    document.querySelector('.dugmad').style.paddingTop = 90;
//    document.querySelector('.dugmad').style.marginTop = 90;

})

upitnik.addEventListener('click', function(){
    document.querySelector('.pocetna').innerHTML = faq;
//    document.querySelector('.btn1', '.btn2').style.marginTop = 0;
    document.querySelector('.dugmad').style.paddingTop = 0;
})





















































//stisak1.addEventListener('click', function(){
//
//    let visina = document.getElementById('visina').value;
//    let tezina = document.getElementById('tezina').value;
//
//    let bmi = (tezina / (visina * visina)).toFixed(1);
//
//    if (bmi <= 18.5){
//        document.querySelector('.pocetna').innerHTML = polje1;
//        document.querySelector('.rezultat').innerHTML = `${bmi}`;
//    } else if(bmi >= 18.6 && bmi <= 24.9){
//        document.querySelector('.pocetna').innerHTML = normalno;
//        document.querySelector('.rezultat').innerHTML = `${bmi}`;
//    } else if(bmi >= 25 && bmi <= 30){
//        document.querySelector('.pocetna').innerHTML = prekomerno;
//        document.querySelector('.rezultat').innerHTML = `${bmi}`;
//    } else if(bmi >= 30.1 && bmi <= 40){
//        document.querySelector('.pocetna').innerHTML = pretili;
//        document.querySelector('.rezultat').innerHTML = `${bmi}`;
//    } else if(bmi >= 40.1){
//        document.querySelector('.pocetna').innerHTML = izrazito;
//        document.querySelector('.rezultat').innerHTML = `${bmi}`;
//    } else {
//        alert('Nije dobar broooj!')
//    }
//})
