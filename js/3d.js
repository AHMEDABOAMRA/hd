$(document).ready(function(){
    $('.slickSlider').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true, adaptiveWidth: true  });
    });
    $(function () {

      'use strict';

      $('.left-top').hover(function () {

        $(this).find('span').eq(0).animate({
          height:"100%"
        
        },500);
        
        
                        } ,function () {
                          $(this).find('span').eq(0).animate({
                            height:0
        
                          });
                        });
                        $('.border-left').hover(function () {

                          $(this).find('span').eq(0).animate({
                          width:'100%'
                        
                          },500);
                        
                        
                                          } ,function () {
                                            $(this).find('span').eq(0).animate({
                                              width:0
                        
                        
                                            });
                                          });                                          });

