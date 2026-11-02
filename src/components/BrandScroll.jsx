
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BrandScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function BrandScroll() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const captionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const caption = captionRef.current;

    if (!section || !logo || !caption) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logo,
        {
          scale: 0.24,
        },
        {
          scale: 2.8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.to(caption, {
        opacity: 0,
        y: -15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "35% top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="brand-scroll-section" ref={sectionRef}>
      <div className="brand-scroll-stage">
        <div className="brand-scroll-content">
          <span className="brand-scroll-index">
            INDEPENDENT CREATIVE AGENCY
          </span>

          <h2 className="brand-scroll-logo" ref={logoRef}>
            VYNE<span></span>
          </h2>

          <div className="brand-scroll-caption" ref={captionRef}>
            <span>ONE DIRECTION.</span>
            <span>INFINITE POSSIBILITIES.</span>
          </div>
        </div>

        <div className="brand-scroll-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span>001 — VYNE IDENTITY</span>
        </div>
      </div>
    </section>
  );
}
