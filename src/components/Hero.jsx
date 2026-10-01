import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const cursorRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // HERO ENTRANCE ANIMATION
      // =========================
      const tl = gsap.timeline();

      tl.from(".nav-item", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      })
        .from(".hero-title", {
          y: 100,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power4.out",
        })
        .from(".hero-description", {
          y: 30,
          opacity: 0,
          duration: 0.6,
        })
        .from(".hero-buttons", {
          y: 30,
          opacity: 0,
          duration: 0.6,
        });

      // =========================
      // SCROLL BACKGROUND MOTION
      // =========================
    gsap.utils.toArray("section").forEach((section) => {
  gsap.fromTo(
    section,
    {
      backgroundSize: "110% 110%",
      backgroundPositionY: "0%",
    },
    {
      backgroundSize: "100% 100%",
      backgroundPositionY: "20%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    }
  );
});
gsap.utils.toArray("section").forEach((section) => {
  const content = section.querySelector(".section-content");

  if (!content) return;

  gsap.fromTo(
    content,
    {
      y: 40,
      opacity: 0.85,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 45%",
        scrub: 1,
      },
    }
  );
});
      // =========================
      // CUSTOM CURSOR
      // =========================
      const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.25,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", moveCursor);

      // =========================
      // CURSOR HOVER EFFECT
      // =========================
      const hoverElements = document.querySelectorAll("a, button");

      hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          gsap.to(cursorRef.current, {
            scale: 1.8,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // =========================
      // MAGNETIC BUTTONS
      // =========================
      const magneticElements =
        document.querySelectorAll(".magnetic");

      magneticElements.forEach((element) => {
        element.addEventListener("mousemove", (e) => {
          const rect = element.getBoundingClientRect();

          const x =
            e.clientX - (rect.left + rect.width / 2);

          const y =
            e.clientY - (rect.top + rect.height / 2);

          gsap.to(element, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });

      // =========================
      // BLOOD PARTICLES
      // =========================
      const particleContainer =
        document.querySelector("#blood-particles");

      if (particleContainer) {
        for (let i = 0; i < 35; i++) {
          const particle = document.createElement("span");

          particle.className =
            "absolute h-2 w-2 rounded-full bg-red-500 opacity-80";

          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;

          particleContainer.appendChild(particle);

          gsap.to(particle, {
            opacity: Math.random() * 0.5 + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 2,
          });
        }

        // =========================
        // BLOOD PARTICLE CURSOR REACTION
        // =========================
        const moveParticles = (e) => {
          const particles = particleContainer.children;

          Array.from(particles).forEach((particle) => {
            const rect = particle.getBoundingClientRect();

            const particleX =
              rect.left + rect.width / 2;

            const particleY =
              rect.top + rect.height / 2;

            const dx = particleX - e.clientX;
            const dy = particleY - e.clientY;

            const distance = Math.sqrt(
              dx * dx + dy * dy
            );

            if (distance < 180) {
              const force = (180 - distance) / 180;

              gsap.to(particle, {
                x: dx * force * 0.5,
                y: dy * force * 0.5,
                duration: 0.4,
                ease: "power2.out",
              });
            } else {
              gsap.to(particle, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            }
          });
        };

        window.addEventListener(
          "mousemove",
          moveParticles
        );
      }

      // =========================
      // HERO BACKGROUND MOUSE MOTION
      // =========================
      const moveBackground = (e) => {
        const x =
          (e.clientX / window.innerWidth - 0.5) * 20;

        const y =
          (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(heroRef.current, {
          backgroundPosition: `${50 + x / 10}% ${
            50 + y / 10
          }%`,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      window.addEventListener(
        "mousemove",
        moveBackground
      );

      // =========================
      // CLEANUP
      // =========================
      return () => {
        window.removeEventListener(
          "mousemove",
          moveCursor
        );

        window.removeEventListener(
          "mousemove",
          moveBackground
        );
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/kratos.jpg')",
        backgroundPosition: "center",
      }}
    >
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80"
      >
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-0 bg-black/45" />

      {/* CINEMATIC VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]" />

      {/* BLOOD PARTICLES */}
      <div
        id="blood-particles"
        className="pointer-events-none absolute inset-0 z-10"
      />

      {/* NAVIGATION */}
      <nav className="absolute left-0 top-0 z-30 flex w-full items-center justify-between px-8 py-6 text-white md:px-16">
        <div className="nav-item text-xl font-bold tracking-widest">
          AJAI
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-widest">
          <a className="nav-item" href="#skills">
            Skills
          </a>

          <a className="nav-item" href="#experience">
            Experience
          </a>

          <a className="nav-item" href="#projects">
            Projects
          </a>

          <a className="nav-item" href="#education">
            Education
          </a>

          <a className="nav-item" href="#certifications">
            Certifications
          </a>

          <a className="nav-item" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex min-h-screen items-center px-8 pt-20 pb-24 md:px-16">
        <div className="max-w-4xl text-white">
          <h1 className="hero-title text-5xl font-bold uppercase leading-[0.95] md:text-7xl lg:text-8xl">
            Java Developer
            <br />
            & Software Engineer
          </h1>

          <p className="hero-description mt-8 max-w-xl text-lg text-gray-200">
            Building reliable backend systems and AI-powered applications.
          </p>

          <div className="hero-buttons mt-8 flex gap-4">
           <a
  href="#projects"
  className="magnetic rounded-full border border-white px-6 py-3"
>
  View My Work
</a>
 <a
  href="/resume/Ajai_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="magnetic rounded-full bg-white px-6 py-3 text-black"
>
  Resume
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;