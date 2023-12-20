'use strict';

document.addEventListener('DOMContentLoaded', () => {

	$('.menu-toggle-cont').click(function (e) {
   e.preventDefault();
    if (!$(this).hasClass('menu-toggle-cont_active')) { 
      $(this).addClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideDown(300); 
      $('body').addClass('hidden-body'); 
      $('.catalog-button').removeClass('active');
      $('.calalog-block').fadeOut();
      $('body').removeClass('hidd');
    } else { 
      $(this).removeClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideUp(300);
      $('body').removeClass('hidden-body');
     
    } 
  }); 

  const swiper1 = new Swiper(".main-slider", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".main-next",
      prevEl: ".main-prev",
    },
  });

  const menuItem = document.querySelectorAll('.catalog-menu__item');
  
  const getMenu = () => {
    menuItem.forEach(element => {
      element.addEventListener('mouseenter', e => {
        menuItem.forEach(el => el.classList.remove('item-active'))  
        document.querySelectorAll('.catalog-menu__submenu').forEach(el => el.classList.remove('show'))  
        element.classList.add('item-active');
        element.querySelector('.catalog-menu__submenu').classList.add('show');
      });
    });
  };

  const getMenuMobile = () => {
    document.querySelector('body').addEventListener('click', e => {
      if (e.target.closest('.catalog-menu__button')) {
        e.preventDefault();
        const targetBlock =  e.target.closest('.catalog-menu__item').querySelector('.catalog-menu__submenu');
        const targeLink = e.target.closest('.catalog-menu__item');

        document.querySelectorAll('.catalog-menu__item').forEach(element => {if(element!=targeLink) {element.classList.remove('active-button')}})
        document.querySelectorAll('.catalog-menu__submenu').forEach(element => {if(element!=targetBlock) {element.classList.remove('open-mobile')}})
        e.target.closest('.catalog-menu__item').classList.toggle('active-button');
        e.target.closest('.catalog-menu__item').querySelector('.catalog-menu__submenu').classList.toggle('open-mobile');
      }
    });
  };
  
  if (window.innerWidth >= 992) {
    getMenu();
  } else {
    getMenuMobile();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      getMenu();
    } else {
      getMenuMobile();
    }
  });

  $('.catalog-button').click(function (e) {
    $(this).toggleClass('active'); 
    $('.calalog-block').slideToggle(); 
    $('body').toggleClass('hidd'); 
    $('.menu-toggle-cont').removeClass('menu-toggle-cont_active'); 
    $('.fixed-menu').fadeOut();
    $('body').removeClass('hidden-body');
    const heightHeader = document.querySelector('.header').clientHeight;
    document.querySelector('.calalog-block').style.top = `${heightHeader}px`;

    menuItem.forEach((el,index) => {
      el.classList.remove('item-active');
      if (index === 0) {
        el.classList.add('item-active');
      }
    }); 
    document.querySelectorAll('.catalog-menu__submenu').forEach((el, index) => {
      el.classList.remove('show');
      if (index === 0) {
        el.classList.add('show');
      }
    });
  });

  $('.catalog-button__fixed').click(function (e) {
    const heightHeader = document.querySelector('.header-fixed').clientHeight;
    document.querySelector('.calalog-block').style.top = `${heightHeader}px`;
  });
  
  jQuery(function($){
    $(".phone").mask("+7 (999) 999 - 99 - 99");
  });

  const headHeight =  document.querySelector('.header').clientHeight;

 

  $(window).scroll(function () {
    if ($(this).scrollTop() > headHeight) {
      document.querySelector('.header-fixed').classList.add('show');
    } else {
      document.querySelector('.header-fixed').classList.remove('show');
    }
  });

  document.querySelector('body').addEventListener('click', e => {
    if (e.target.closest('.main-menu__button')) {
      e.preventDefault();
      const targetBlock =  e.target.closest('.main-menu__item').querySelector('.main-menu__list');
		  const targeLink = e.target.closest('.main-menu__item');

      document.querySelectorAll('.main-menu__item').forEach(element => {if(element!=targeLink) {element.classList.remove('active')}})
      document.querySelectorAll('.main-menu__list').forEach(element => {if(element!=targetBlock) {element.classList.remove('open')}})
      e.target.closest('.main-menu__item').classList.toggle('active');
      e.target.closest('.main-menu__item').querySelector('.main-menu__list').classList.toggle('open');
    }
    
  });

  $('.search-button').click(function (e) {
    $('.searh-block-mobile').addClass('show'); 
    $('body').addClass('hidd'); 
  });

  $('.searh-block-mobile__close').click(function (e) {
    $('.searh-block-mobile').removeClass('show'); 
    $('body').removeClass('hidd'); 
  });

});
