$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
        
    

    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 350) {
            $(".header-menu").removeClass("sticky");
        } else{
            $(".header-menu").addClass("sticky");
        }
    });
        
    //===== Mobile Menu
    
    $('.mobile-menu-open').on('click', function(){
        $('.mobile-off-canvas-menu').addClass('open')
        $('.overlay').addClass('open')
    });
    
    $('.close-mobile-menu').on('click', function(){
        $('.mobile-off-canvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });
    
    $('.overlay').on('click', function(){
        $('.mobile-off-canvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });
    
    
   
    
    /*Variables*/
    var $offCanvasNav = $('.mobile-main-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.mega-sub-menu, .sub-menu, .submenu-item ');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });
    
});