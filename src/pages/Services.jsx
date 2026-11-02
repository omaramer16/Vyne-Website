
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Advertising Strategy & Campaigns",
    description: "Build a clear campaign direction around the brand, audience, message, and business objective."
  },
  {
    number: "02",
    title: "Creative Direction & Concepts",
    description: "Develop campaign ideas, visual concepts, and art direction that give every message a recognizable point of view."
  },
  {
    number: "03",
    title: "Commercial Film & Video Production",
    description: "Produce commercials, brand films, product videos, and motion-led content built for real audiences."
  },
  {
    number: "04",
    title: "Photography & Social Content",
    description: "Create campaign photography, reels, social assets, and consistent content systems for digital platforms."
  },
  {
    number: "05",
    title: "Brand Activations & Campaign Execution",
    description: "Bring the idea to life across the right channels, formats, and customer touchpoints."
  }
];

export default function Services() {
  return (
    <div className="vyne-page">
      <section className="inner-hero">
        <div className="inner-hero-top">
          <span className="vyne-page-eyebrow">002 — CAPABILITIES</span>
          <span className="vyne-page-eyebrow">WHAT WE DO</span>
        </div>

        <h1>
          BUILT AROUND
          <br />
          <span>THE BRIEF.</span>
        </h1>

        <div className="inner-hero-bottom">
          <p>
            We create advertising that connects a clear idea with strong visuals and purposeful execution.
          </p>
          <span>STRATEGY / CREATIVE / EXECUTION</span>
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-section-label">
          <span>001 — OUR CAPABILITIES</span>
          <span>FIVE CONNECTED DISCIPLINES</span>
        </div>

        <div className="inner-service-list">
          {services.map((service) => (
            <article className="inner-service" key={service.number}>
              <span className="inner-service-number">{service.number}</span>

              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>

              <span className="inner-arrow"></span>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-section service-process">
        <div className="inner-section-label">
          <span>002 — THE PROCESS</span>
          <span>HOW WE MAKE IT HAPPEN</span>
        </div>

        <div className="inner-principles">
          <article className="inner-principle">
            <span>01</span>
            <h3>UNDERSTAND.</h3>
            <p>We start by understanding the brief and the business objective.</p>
          </article>

          <article className="inner-principle">
            <span>02</span>
            <h3>CONNECT.</h3>
            <p>We bring the right specialists together around one direction.</p>
          </article>

          <article className="inner-principle">
            <span>03</span>
            <h3>EXECUTE.</h3>
            <p>We turn the plan into purposeful work and connected outcomes.</p>
          </article>
        </div>
      </section>

      <section className="inner-cta">
        <span className="vyne-page-eyebrow">HAVE SOMETHING IN MIND?</span>
        <h2>
          LET'S TALK
          <br />
          <span>ABOUT IT.</span>
        </h2>
        <Link to="/contact" className="vyne-page-link">
          START A PROJECT 
        </Link>
      </section>
    </div>
  );
}
