$(function(){

    $('.outdoor__slider-list').slick({
        prevArrow: '<svg class="slider__arrow slider__arrow-left" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.463 13.2122L15.29 20.1822L23.463 27.1522" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20.6143" cy="20.1821" r="19" stroke="#6E6E6E" stroke-width="2"/></svg>',
        nextArrow: '<svg class="slider__arrow slider__arrow-right" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1454 13.2122L26.3184 20.1822L18.1454 27.1522" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle r="19" transform="matrix(-1 0 0 1 20.9941 20.1821)" stroke="#6E6E6E" stroke-width="2"/></svg>',
        fade: true,
    });

    $('.menu__button').on('click', function(){
        $('.header__menu-list').toggleClass('header__menu-list--active');
      });
    
      $('.poligraph__inner1').slick({          
        prevArrow: '<svg class="slider__arrow slider__arrow-left" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.463 13.2122L15.29 20.1822L23.463 27.1522" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20.6143" cy="20.1821" r="19" stroke="#6E6E6E" stroke-width="2"/></svg>',
        nextArrow: '<svg class="slider__arrow slider__arrow-right" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1454 13.2122L26.3184 20.1822L18.1454 27.1522" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle r="19" transform="matrix(-1 0 0 1 20.9941 20.1821)" stroke="#6E6E6E" stroke-width="2"/></svg>',
        fade: true,
    });  

    $('.poligraph__inner').slick({
        responsive: [
        {
          breakpoint: 100000,
          settings: "unslick"
        },
        {
          breakpoint: 700,
          settings: {            
            slidesToShow: 1,
            arrows: false
          }
        }
        ]
      });

      $('.answers__item').on('click', function(){
        $(this).next().toggleClass('answers__text-show');
      });

      $('.open__btn').on('click', function(){
        $('.answers__text').addClass('answers__text-show');
        $(this).addClass('active__btn');
        $('.close__btn').removeClass('active__btn');
      });

      $('.close__btn').on('click', function(){
        $('.answers__text').removeClass('answers__text-show');
        $(this).addClass('active__btn');
        $('.open__btn').removeClass('active__btn');
      });
    
})


const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let currentDate = new Date();
const dayBegin = new Date("1/1/2010");
console.log(currentDate);
const oneDay = 24 * 60 * 60 * 1000;

dateFrom = Math.trunc((currentDate.getTime() - dayBegin.getTime())/oneDay);
day.textContent = dateFrom;
let spanDay = document.createElement("span"); 
spanDay.innerText = "дней";
day.append(spanDay);


hour.textContent = currentDate.getHours();
let spanHour = document.createElement("span"); 
spanHour.innerText = "часов";
hour.append(spanHour);

let spanMinute = document.createElement("span"); 
minute.textContent = currentDate.getMinutes();
spanMinute.innerText = "минут";
minute.append(spanMinute);

let spanSecond = document.createElement("span"); 
second.textContent = currentDate.getSeconds();
console.log(second);
spanSecond.innerText = "секунд";
second.append(spanSecond);


console.log(dateFrom);