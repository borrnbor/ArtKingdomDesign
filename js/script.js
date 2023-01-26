document.addEventListener('DOMContentLoaded', function() {
  const opener = document.querySelector('.proj__open');
  const closer = document.querySelector('.close');
  const closerbtn = document.querySelector('.proj__open')
  opener.addEventListener('click', () => {
   closer.classList.remove('close') });
   opener.addEventListener('click', () => {
    closerbtn.classList.add('close') });
    const anchors = document.querySelectorAll('a[href*="#"]')

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
    var options = {
      offset: 250
    }
  })
// document.querySelectorAll('.faq__icon').forEach((item)=>
//   item.addEventListener('click',()=>{
//     const parent = item.parentNode;
//     parent.classList.toggle('faq__title_active');
//     item.classList.toggle('faq__icon_active');
//   })
// )
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__nav');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
let header__btn = document.querySelector('.header__nav-btnContacts')

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function() {
  header_menu.classList.toggle('active');
  back.classList.toggle('lock');
  header__burger.classList.toggle('active');
}

header__btn.onclick = function() {
  header_menu.classList.toggle('active');
  back.classList.toggle('lock');
  header__burger.classList.toggle('active');
}

let popupPrice = document.querySelector('.popup-price__link');
let pricePopup = document.querySelector('.price-popup');
let priceclose = document.querySelector('.popup__close')
let pricePopupContent = document.querySelector('.price-popup__content');
popupPrice.onclick = function () {
  pricePopup.classList.add('open')
  pricePopupContent.classList.add('animate__animated')
  pricePopupContent.classList.add('animate__backInDown')
  pricePopupContent.classList.add('wow')
}
priceclose.onclick = function() {
  pricePopup.classList.remove('open')
  pricePopupContent.classList.remove('animate__animated')
  pricePopupContent.classList.remove('animate__backInDown')
  pricePopupContent.classList.remove('wow')
}

let popupInfo1 = document.getElementById('price__info1')
let popupInfo2 = document.getElementById('price__info2')
let popupInfo3 = document.getElementById('price__info3')
let Info1popup = document.querySelector('.price__info1')
let Info2popup = document.querySelector('.price__info2')
let Info3popup = document.querySelector('.price__info3')
let infoClose1 = document.querySelector('.close__info1')
let infoClose2 = document.querySelector('.close__info2')
let infoClose3 = document.querySelector('.close__info3')
let contentInfo1 = document.querySelector('.content__info1')
let contentInfo2 = document.querySelector('.content__info2')
let contentInfo3 = document.querySelector('.content__info3')
popupInfo1.onclick = function() {
  Info1popup.classList.add('open')
  contentInfo1.classList.add('animate__animated')
  contentInfo1.classList.add('animate__backInDown')
  contentInfo1.classList.add('wow')
}
infoClose1.onclick = function() {
  Info1popup.classList.remove('open')
  contentInfo1.classList.remove('animate__animated')
  contentInfo1.classList.remove('animate__backInDown')
  contentInfo1.classList.remove('wow')
}
popupInfo2.onclick = function() {
  Info2popup.classList.add('open')
  contentInfo2.classList.add('animate__animated')
  contentInfo2.classList.add('animate__backInDown')
  contentInfo2.classList.add('wow')
}
infoClose2.onclick = function() {
  Info2popup.classList.remove('open')
  contentInfo2.classList.remove('animate__animated')
  contentInfo2.classList.remove('animate__backInDown')
  contentInfo2.classList.remove('wow')
}
popupInfo3.onclick = function() {
  Info3popup.classList.add('open')
  contentInfo3.classList.add('animate__animated')
  contentInfo3.classList.add('animate__backInDown')
  contentInfo3.classList.add('wow')
}
infoClose3.onclick = function() {
  Info3popup.classList.remove('open')
  contentInfo3.classList.remove('animate__animated')
  contentInfo3.classList.remove('animate__backInDown')
  contentInfo3.classList.remove('wow')
}

var element = document.getElementById('PhoneInput');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

var element = document.getElementById('PhoneInput2');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);


const popupLinks = document.querySelectorAll('.proj__link')
const body = document.querySelector('body')

let unlock = true;

if(popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click",function(e){
      const popupName = popupLink.getAttribute('href').replace('#','')
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.projPopup__close');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function(e) {
      popupClose(el.closest('.projPopup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.projPopup.open');
    if(popupActive) {
      popupClose(popupActive, false);
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click",function(e){
      if (!e.target.closest('popup__content')){
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}
function popupClose(popupActive) {
  if (unlock) {
    popupActive.classList.remove('open');
  }
}
