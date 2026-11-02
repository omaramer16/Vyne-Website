import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function Work() {
  return (
    <div className="vyne-page">
      <section className="inner-hero">
        <div className="inner-hero-top">
          <span className="vyne-page-eyebrow">003 — SELECTED WORK</span>
          <span className="vyne-page-eyebrow">CAMPAIGNS / FILMS / BRAND CONTENT</span>
        </div>
        <h1>IDEAS BUILT<br /><span>TO BE SEEN.</span></h1>
        <div className="inner-hero-bottom">
          <p>Advertising campaigns, brand films, photography, and digital content designed to make brands impossible to ignore.</p>
          <span>VYNE / PROJECT ARCHIVE</span>
        </div>
      </section>

      <section className="inner-section work-archive-section">
        <div className="inner-section-label">
          <span>001 — PROJECT ARCHIVE</span>
          <span>{String(projects.length).padStart(2, "0")} SELECTED PROJECTS</span>
        </div>
        <div className="inner-work-grid">
          {projects.map((project) => (
            <Link className="inner-project" to={`/work/${project.slug}`} key={project.slug}>
              <div className="inner-project-image">
                <img src={project.image} alt={project.name} loading="lazy" />
                <span>{project.number} / {String(projects.length).padStart(2, "0")}</span>
                <span className="archive-view">OPEN CASE STUDY ↗</span>
              </div>
              <div className="inner-project-info">
                <div><h2>{project.name}</h2><p>{project.category}</p></div>
                <span>{project.location}</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="work-note">EACH PROJECT OPENS ITS OWN VISUAL CASE STUDY.</p>
      </section>

      <section className="inner-section film-archive-section">
        <div className="inner-section-label">
          <span>002 — FILM ARCHIVE</span>
          <span>10 FILM / VIDEO SLOTS</span>
        </div>
        <div className="film-archive-intro">
          <h2>MADE TO<br /><span>MOVE.</span></h2>
          <p>Campaign films, product videos, brand stories, and motion-led content. Select a film poster to explore its project.</p>
        </div>
        <div className="film-poster-grid">
          {Array.from({ length: 10 }, (_, index) => {
            const project = projects[index % projects.length];
            const hasPoster = index < projects.length;
            return (
              <Link
                className={`film-poster-card${hasPoster ? " has-poster" : " is-placeholder"}`}
                to={hasPoster ? `/work/${project.slug}` : "/contact"}
                key={`film-${index + 1}`}
                aria-label={hasPoster ? `Explore ${project.name} film project` : `Discuss a film project, slot ${index + 1}`}
              >
                <div className="film-poster-visual">
                  {hasPoster ? (
                    <img src={project.image} alt={`${project.name} film poster`} loading="lazy" />
                  ) : (
                    <div className="film-poster-placeholder-art">
                      <span>VYNE / FILM</span>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                      <small>YOUR NEXT<br />FRAME STARTS HERE</small>
                    </div>
                  )}
                  <span className="film-poster-index">FILM {String(index + 1).padStart(2, "0")}</span>
                  <span className="film-poster-open">{hasPoster ? "VIEW PROJECT ↗" : "START A FILM ↗"}</span>
                </div>
                <div className="film-poster-caption">
                  <span>{hasPoster ? project.name : `FILM PROJECT ${String(index + 1).padStart(2, "0")}`}</span>
                  <small>{hasPoster ? project.category : "CAMPAIGN / BRAND FILM / CONTENT"}</small>
                </div>
              </Link>
            );
          })}
        </div>
        <p className="work-note">POSTER ARTWORK AND FILM FILES CAN BE REPLACED WITH FINAL PROJECT ASSETS.</p>
      </section>

      <section className="inner-cta">
        <span className="vyne-page-eyebrow">HAVE A BRAND TO MOVE?</span>
        <h2>LET'S MAKE<br /><span>IT VISIBLE.</span></h2>
        <Link to="/contact" className="vyne-page-link">START A PROJECT</Link>
      </section>
    </div>
  );
}
