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

