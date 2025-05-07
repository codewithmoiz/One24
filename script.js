gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const speedElements = document.querySelectorAll('[data-speed]');

lenis.on('scroll', ({ scroll }) => {
  speedElements.forEach((element) => {
    const speedMultiplier = parseFloat(element.dataset.speed) || 1;
    const direction = element.dataset.direction || 'y';
    const movement = (scroll * speedMultiplier) / 25;

    if (direction.toLowerCase() === 'x') {
      element.style.transform = `translateX(${movement}px)`;
    } else {
      element.style.transform = `translateY(${movement}px)`;
    }

  });
});


gsap.to(".icon",{
    rotate: "360deg",
    x: "400px",
    scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
    }
})

gsap.from(".dark-line",{
    width: 0,
    scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const tiltButtons = document.querySelectorAll('[data-tilt]');

    tiltButtons.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            let x = (e.offsetX - btn.offsetWidth / 2) * 0.3;
            let y = (e.offsetY - btn.offsetHeight / 2) * 0.3;

            gsap.to(btn, {
                x: x,
                y: y,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let marquee = document.querySelector(".marquee-content");
    let items = Array.from(marquee.children);

    // Duplicate items once for seamless scroll
    items.forEach(item => {
        let clone = item.cloneNode(true);
        marquee.appendChild(clone);
    });

    function setupMarqueeAnimation() {
        gsap.killTweensOf(marquee); // Remove existing animation if any

        if (window.innerWidth >= 1024) {
            // Vertical marquee
            gsap.set(marquee, { y: "0%", x: "0%" });
            gsap.to(marquee, {
                y: "-50%",
                duration: 10,
                ease: "none",
                repeat: -1
            });
        } else {
            // Horizontal marquee
            gsap.set(marquee, { x: "0%", y: "0%" });
            gsap.to(marquee, {
                x: "-50%",
                duration: 10,
                ease: "none",
                repeat: -1
            });
        }
    }

    setupMarqueeAnimation();

    // Re-run animation setup on screen resize
    window.addEventListener("resize", function () {
        setupMarqueeAnimation();
    });
});



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
        // markers: true
    }
});

tl.to('.hero-sections-container .hero', {
    x: "-200%",
})
.to('.hero-section-3 .rotate-top',{
    rotateX: '90deg',
    opacity: 0,
    duration: 1
}, "a")
.to('.hero-section-3 .rotate-bottom',{
    rotateX: '-90deg',
    opacity: 0,
    duration: 1
}, "a")
.to('.hero-section-3 video',{
    height: "100vh",
    width: "100vw",
    top: "0",
}, '-=0.3')


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out'
    });
});

document.addEventListener('mouseenter', () => {
    gsap.to(cursor, { opacity: 1, duration: 0.2 });
});
document.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, duration: 0.2 });
});

const buttons = document.querySelectorAll('.change-cursor');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 3.5,
            opacity: 0.6,
            mixBlendMode: "difference",
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    button.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            mixBlendMode: "normal",
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Footer Button
const footerButton = document.querySelector('footer .change-cursor');
footerButton.addEventListener('mouseenter', () => {
    gsap.to(".footer-overlay", {
        opacity: 0.1,
    })
})

footerButton.addEventListener('mouseleave', () => {
    gsap.to(".footer-overlay", {
        opacity: 0.3,
    })
})





const marqueeData = [
    {
        text: "Hiring updates",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/668ba8d1139c87fb487aa776_users.svg"
    },
    {
        text: "Recent news",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/668ba2b7d77f6c8b23cc4fa0_book-open.svg"
    },
    {
        text: "Technology spend",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/669e9890776f6105e24abab0_cpu.svg"
    },
    {
        text: "Prospect overview",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/668ba8f755cfbdd7d084ae38_folder.svg"
    },
    {
        text: "Podcasts",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/669e9916c6fc5e08814a5dc5_headphones.svg"
    },
    {
        text: "Industry insights",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/669e9938776f6105e24b5ef7_activity.svg"
    },
    {
        text: "Social posts",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/668ba8e57900bc7490db7dcc_monitor.svg"
    },
    {
        text: "Funding data",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/669e980495c687caa44329a3_database.svg"
    },
    {
        text: "Prospect challenges",
        image: "https://cdn.prod.website-files.com/6686cf67c6204e07ccbbd28f/669e98e1460020d063559918_cloud-lightning.svg"
    }

];


// Marquee Section
document.addEventListener('DOMContentLoaded', () => {
    const createIconBox = (data) => {
      const div = document.createElement('div');
      div.className = "change-cursor icon-box flex items-center md:gap-[16px] gap-[10px] shrink-0 bg-[#ede8dc] py-[8px] px-[10px] rounded-[16px]";
      div.innerHTML = `
        <span class="flex items-center justify-center bg-white md:w-[42px] w-[40px] md:h-[42px] h-[40px] rounded-[13px]">
          <img class="w-[22px]" src="${data.image}" />
        </span>
        <h6 class="untitled md:text-[20px] text-[20px] text-[#6c6758] font-medium">${data.text}</h6>
      `;
      return div;
    };
  
    const setupMarquee = (trackId, speed = 50, reverse = false) => {
        const track = document.getElementById(trackId);
        track.innerHTML = '';
      
        for (let i = 0; i < 2; i++) {
          marqueeData.forEach(data => {
            track.appendChild(createIconBox(data));
          });
        }
      
        const totalWidth = track.scrollWidth / 2;
      
        gsap.set(track, { x: reverse ? -totalWidth : 0 });
      
        gsap.to(track, {
          x: reverse ? 0 : -totalWidth,
          duration: (totalWidth / speed) * 2,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
          }
        });
      };
      
  
    setupMarquee('marquee1', 50, false);
    setupMarquee('marquee2', 50, true);
  });
  



// Work Section
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".work-card");
    cards.forEach((card, i) => {
      card.style.setProperty("--i", i);
    });

  });



//   Details Section
document.addEventListener('DOMContentLoaded', () => {

    if(window.matchMedia('(min-width: 1024px)').matches){

        gsap.from('.details-section .details-head h3', {
            x: "25%",
            scrollTrigger: {
                trigger: ".details-section",
                start: "20% bottom",
                end: "65% center",
                scrub: true,
                // markers: true
            }
        })
        gsap.to('.details-section .details-side', {
            y: "-27.5%",
            scrollTrigger: {
                trigger: ".details-section",
                start: "20% bottom",
                end: "65% center",
                scrub: true,
                // markers: true
            }
        })
    
        gsap.to('.details-section .detail-mask-img-container img', {
            height: "115%",
            y: "7%",
            scrollTrigger: {
                trigger: ".detail-mask-img-container",
                start: "20% bottom",
                end: "65% center",
                scrub: 2,
                // markers: true
            }
        });

    }
    

})


document.addEventListener('DOMContentLoaded', () => {

    const toggleBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const drawer = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('menu-backdrop');
  
    toggleBtn.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full');
      backdrop.classList.remove('hidden');
    });
  
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    });
  
    backdrop.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    });

})