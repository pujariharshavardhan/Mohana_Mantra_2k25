

function showDay(day) {
    let contents = document.querySelectorAll('.content_');
    let tabs = document.querySelectorAll('.tab_');
  
    // Remove active class from all contents
    contents.forEach(content => content.classList.remove('active_'));
    
    // Remove active-tab class from all tabs
    tabs.forEach(tab => tab.classList.remove('active-tab_'));
  
    // Show selected day's content
    document.getElementById(day).classList.add('active_');
  
    // Add active class to the clicked tab
    document.querySelector([onclick="showDay('${day}')"]).classList.add('active-tab_');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab_");
    const contents = document.querySelectorAll(".content_");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active-tab_"));
        // Hide all content
        contents.forEach(c => c.classList.remove("active_"));
  
        // Add active class to clicked tab
        this.classList.add("active-tab_");
        // Show corresponding content
        contents[index].classList.add("active_");
      });
    });
  
    // Set the default active tab and content
    tabs[0].classList.add("active-tab_"); // Make the first tab active
    contents[0].classList.add("active_"); // Show the first content
  });

let originalSrc = "images/hii_1920x1056.mp4"; // Default video source
        let hoverSrc = "images/2nd.mp4"; // Dimmed hover video
        let clickSrc = "images/3rd.mp4"; // Normal brightness video
        let timeoutId;

        function changeVideoSource(newSrc, isClicked = false) {
            let video = $("#videoPlayer");

            // Smooth fade-out
            video.css("opacity", "0");

            setTimeout(function () {
                video.attr("src", newSrc); // Change video source
                video[0].load();
                video[0].play(); // Ensure it plays immediately
                
                // Restore visibility
                video.css("opacity", "1");

                // Apply brightness filter (dim for first two videos, normal for clicked one)
                if (isClicked) {
                    video.css("filter", "brightness(100%) contrast(100%)"); // Normal brightness
                } else {
                    video.css("filter", "brightness(50%) contrast(90%)"); // Dim effect
                }
            }, 500); // Delay for smooth transition
        }

        $(".layers").mouseenter(function () {
            changeVideoSource(hoverSrc);
        });
        $(".layers").mouseleave(function () {
            changeVideoSource(originalSrc);
        });

        $(".layers").click(function () {
            clearTimeout(timeoutId); // Clear any existing timeout
            changeVideoSource(clickSrc, true); // Normal brightness when clicked

            // Revert to hover video (dimmed) after 5 seconds
            timeoutId = setTimeout(function () {
                changeVideoSource(hoverSrc);
            }, 4000);
        });
// opening








// headerr

// window.addEventListener("scroll", function() {
//     let header = document.querySelector(".header");
//     if (window.scrollY > window.innerHeight) {
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
// });

// headerr


// footerrr
// $(document).ready(function(){
    // $('.accordion-header').click(function(){
    //     let body = $(this).next('.accordion-body');
        
    //     // Check if the clicked question is already open
    //     if (body.is(':visible')) {
    //         body.slideUp();
    //         $(this).children('span').text('+');
    //     } else {
    //         $('.accordion .accordion-body').slideUp();
    //         $('.accordion .accordion-header span').text('+');
    //         body.slideDown();
    //         $(this).children('span').text('-');
    //     }
    // });
// });

// footerrr



// login js

const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const overlay = document.getElementById("overlay");
const loginForm = document.getElementById("form-container");
const signupForm = document.getElementById("signup-container");
const switchToSignup = document.getElementById("switch-to-signup");
const switchToLogin = document.getElementById("switch-to-login");

openModalBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});

switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});


// login js








// headerrres
// $(document).ready(function(){
//     $('.fa-bars').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toogle');
//     });
//    $(window).on('load scroll',function(){
//     $('.fa-bars').removeClass('fa-times');
//     $('.navbar').removeClass('nav-toogle');

//    if($(window).scrollTop() > 30){
//     $('.header').css({'background':'#6C5CE7','box-shadow':'0.2rem .5rem rgba(0,0,0,.4)'});
//    }else{
//     $('.header').css({'background':'none','box-shadow':'none'});
//    }
// });

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp();
    $(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});
// });

// headerrres
