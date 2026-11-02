
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="vyne-page">
      <section className="inner-hero">
        <div className="inner-hero-top">
          <span className="vyne-page-eyebrow">001 — ABOUT VYNE</span>
          <span className="vyne-page-eyebrow">INDEPENDENT CREATIVE AGENCY</span>
        </div>

        <h1>
          WE THINK.
          <br />
          WE CREATE.
          <br />
          <span>WE MOVE BRANDS.</span>
        </h1>

        <div className="inner-hero-bottom">
          <p>
            VYNE is an independent advertising and creative studio bringing campaign strategy,
            creative direction, and production together to move brands forward.
          </p>
          <span>CAIRO / EGYPT</span>
        </div>
      </section>

      <section className="inner-section about-statement">
        <div className="inner-section-label">
          <span>002 — OUR BELIEF</span>
          <span>WHAT WE STAND FOR</span>
        </div>

        <div className="inner-two-column">
          <h2>
            GOOD WORK
            <br />
            DOESN'T HAPPEN
            <br />
            <span>BY ACCIDENT.</span>
          </h2>

          <div className="inner-copy">
            <p className="inner-lead">
              Strong work starts with a clear direction.
            </p>

            <p>
              We believe effective advertising needs more than a good-looking frame.
              It needs a sharp idea, a clear audience, and production that serves
              the campaign objective.
            </p>

            <p>
              From campaign concepts and commercial films to photography and social content,
              every detail should make the brand message stronger.
            </p>
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-section-label">
          <span>003 — OUR PRINCIPLES</span>
          <span>HOW WE THINK</span>
        </div>

        <div className="inner-principles">
          {[
            ["01", "THINK CLEAR.", "Every move starts with a reason."],
            ["02", "CREATE WITH PURPOSE.", "Ideas should serve a bigger direction."],
            ["03", "EXECUTE WITH INTENT.", "Details matter. Outcomes matter more."],
          ].map(([number, title, description]) => (
            <article className="inner-principle" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="inner-arrow"></span>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-cta">
        <span className="vyne-page-eyebrow">HAVE A CHALLENGE?</span>
        <h2>
          LET'S MAKE
          <br />
          <span>IT MATTER.</span>
        </h2>
        <Link to="/contact" className="vyne-page-link">
          START A PROJECT 
        </Link>
      </section>
    </div>
  );
}
