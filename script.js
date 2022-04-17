$(document).ready(function(){
    $(window).scroll(function(){
        // navbar sticky; scroll transition script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
// Note: This is a simple if/else conditional javascript statement. If user scrolls below specified threshold, the "sticky" class will activate, else it`ll stay deactivated. 

  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});
$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});
// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Assignment Analysis & Brainstorming", "Implementation & Modification", "Project Review & Evaluation"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Assignment Analysis & Brainstorming", "Implementation & Modification", "Project Review & Evaluation"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
})


// Reference; https://www.codingnepalweb.com/responsive-personal-portfolio-website/# - The website from which this jaascript code was extracted.

