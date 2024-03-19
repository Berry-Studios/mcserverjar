/*document.addEventListener('DOMContentLoaded', function() {
  // Get the parent element
  const features = document.getElementById('features');

  // Add a hover event listener to the parent element
  features.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('card')) {
      // When a card is hovered, add a 'dim' class to all other cards
      const cards = features.querySelectorAll('.card');
      cards.forEach(card => {
        if (card !== event.target) card.classList.add('dim');
      });
    }
  });

  features.addEventListener('mouseout', function(event) {
    if (event.target.classList.contains('card')) {
      // Check if the relatedTarget is a child of the card
      let childOfCard = event.target.contains(event.relatedTarget);

      // When the mouse leaves a card, remove the 'dim' class from all cards
      // unless the mouse moved onto a child of the card
      if (!childOfCard) {
        const cards = features.querySelectorAll('.card');
        setTimeout(function() {
          cards.forEach(card => card.classList.remove('dim'));
        }, 100);  // Delay of 100 milliseconds
      }
    }
  });
});*/

window.addEventListener('load', async (event) => {

    const phrases = [
        'The sole website required for obtaining your Minecraft server jars.',
        'The singular website indispensable for locating your Minecraft server jars.',
        'The one-stop website for discovering your Minecraft server jars.',
        'The exclusive website for sourcing your Minecraft server jars.',
        'The primary website for accessing your Minecraft server jars.',
        'The essential website for procuring your Minecraft server jars.',
        'The solitary website for acquiring your Minecraft server jars.'
    ];

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    try {
        new Typewriter('.typing', {
            strings: randomPhrase,
            autoStart: true,
            loop: false,
            delay: 25,
            speed: 15,
            startDelay: 0,
            deleteSpeed: 50,
            pauseFor: 2000,
            cursor: ''
        });
    } catch (e) {
        error("Notice: Service loading issues detected, features may be affected.")
    }
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var acc = document.getElementsByClassName("question");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        for (j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("on");
                acc[j].nextElementSibling.style.maxHeight = null;
            }
        }
        this.classList.toggle("on");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const menu = document.querySelector('.menu');
const nav = document.querySelector('.mobile-nav');
menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});


window.addEventListener('resize', () => {
    if (nav.classList.contains('active') && window.innerWidth > 920) {
        nav.classList.remove('active');
    }
});

if (typeof Swiper !== 'undefined') {
    try {
        var imageSlider = new Swiper('.image-slider', {
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            loop: true,
            spaceBetween: 30,
            slidesPerView: 5,
            breakpoints: {
                // when window is <= 580px
                580: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window is <= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window is <= 992px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window is <= 1200px
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },

            }
        });
    } catch (e) {
        error("Notice: Service loading issues detected, features may be affected.")
    }
}

var header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function error(message) {
    if (document.getElementById("notice")) return;
    var notice = document.createElement("div");
    notice.id = "notice";
    notice.style.backgroundColor = 'rgb(255, 3, 3)';
    notice.style.color = '#fff';
    notice.style.padding = '10px';
    notice.style.textAlign = 'center';
    notice.style.fontWeight = 'bold';
    notice.innerText = message;

    // add an X button to close the notice
    var close = document.createElement("span");
    close.style.float = 'right';
    close.style.cursor = 'pointer';
    close.style.marginLeft = '10px';
    close.innerText = 'X';
    close.addEventListener('click', function () {
        notice.style.display = 'none';
    });

    notice.appendChild(close);

    var nav = document.querySelector(".navbar");
    nav.parentNode.insertBefore(notice, nav);
}