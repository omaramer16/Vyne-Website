
import { Link } from "react-router-dom";
import Hero3D from "../components/Hero3D.jsx";
import BrandScroll from "../components/BrandScroll.jsx";
import Contact from "./Contact.jsx";
import useScrollReveal from "./useScrollReveal";

import { projects } from "../data/projects.js";
const services = [
  "Advertising Campaigns",
  "Creative Direction & Concepts",
  "Commercial Film Production",
  "Photography & Social Content",
];

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="vyne-hero" id="home">
        <div className="vyne-hero-top">
          <span className="hero-location">CAIRO / EGYPT</span>
          <span className="hero-3d-label">
            INDEPENDENT CREATIVE AGENCY
          </span>
        </div>

        <div className="hero-3d-wrap">
          <Hero3D />
        </div>

        <div className="vyne-hero-bottom">
          <div className="hero-headline">
            <span className="eyebrow">
              ADVERTISING / CAMPAIGNS / PRODUCTION
            </span>

            <h1>
              WE MAKE
              <br />
              BRANDS MOVE.
            </h1>

            <p>
              We create advertising campaigns, films, and visual content that make brands move.
            </p>

            <div className="hero-actions">
              <a href="#work" className="hero-cta">
                VIEW OUR WORK <span></span>
              </a>

              <a href="#contact" className="text-link">
                START A PROJECT 
              </a>
            </div>
          </div>

          <div className="hero-scroll">
            <span className="scroll-line" />
            <span>SCROLL TO EXPLORE</span>
            <span>001 / 004</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="services-top">
          <span className="services-index">01 — WHAT WE DO</span>
          <span className="eyebrow">OUR SERVICES</span>
        </div>

        <div className="services-intro" data-reveal>
          <h2>
            WHAT WE
            <br />
            <span>DO BEST.</span>
          </h2>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <article
              className="service-row"
              key={service}
              data-reveal
              data-delay={String((index % 3) + 1)}
            >
              <span className="service-number">
                0{index + 1}
              </span>

              <div className="service-main">
                <h3>{service}</h3>
              </div>

              <span className="service-arrow"></span>
            </article>
          ))}
        </div>

        <div className="services-bottom">
          <span className="eyebrow">
            ONE TEAM. ONE CLEAR DIRECTION.
          </span>

          <Link to="/services" className="text-link">
            MORE ABOUT OUR SERVICES 
          </Link>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 — SELECTED WORK</span>

            <h2 data-reveal>
              MADE TO
              <br />
              <span>MAKE AN IMPACT.</span>
            </h2>
          </div>

          <p className="muted" data-reveal="right">
            Advertising, brand campaigns, and visual content made to move businesses forward.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link
              to={`/work/${project.slug}`}
              className="project-card"
              key={project.number}
              data-reveal="scale"
              data-delay={String((index % 3) + 1)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} loading="lazy" />
                <span className="project-number">{project.number} / 03</span>
                <span className="project-open-label">VIEW PROJECT ↗</span>
              </div>

              <div className="project-info">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>

                <span className="project-location">
                  {project.location}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="work-bottom">
          <p>SELECTED PROJECTS / 2026</p>

          <Link to="/work" className="text-link">
            VIEW ALL WORK 
          </Link>
        </div>
      </section>

      {/* BRAND SCROLL */}
      <BrandScroll />

      {/* CONTACT */}
      <Contact />
    </>
  );
}
