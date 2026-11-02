import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects.js";
import ProjectMedia from "../components/ProjectMedia.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-detail-page project-not-found">
        <span className="vyne-page-eyebrow">PROJECT NOT FOUND</span>
        <h1>THIS PROJECT<br /><span>ISN'T HERE.</span></h1>
        <Link to="/work" className="vyne-page-link"><ArrowLeft size={15} /> BACK TO WORK</Link>
      </section>
    );
  }

  const video = project.videos?.[0];

  return (
    <div className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-topline">
          <Link to="/work" className="project-back-link"><ArrowLeft size={14} /> ALL PROJECTS</Link>
          <span className="vyne-page-eyebrow">{project.number} / SELECTED CASE STUDY</span>
        </div>
        <div className="project-detail-heading">
          <div>
            <span className="vyne-page-eyebrow">{project.category}</span>
            <h1>{project.name.split(" ").slice(0, -1).join(" ")}<br /><span>{project.name.split(" ").slice(-1)}</span></h1>
          </div>
          <div className="project-client-mark">
            {project.logo ? <img src={project.logo} alt={`${project.name} logo`} /> : <span>CLIENT<br />LOGO</span>}
            <small>BRAND / CLIENT MARK</small>
          </div>
        </div>
        <div className="project-detail-meta">
          <p>{project.summary}</p>
          <span>{project.location}</span>
        </div>
      </section>

      <section className="project-feature-media" aria-label="Project film">
        <div className="project-media-heading"><span>01 — PROJECT FILM</span><span>HOVER OR MOVE INTO VIEW TO PLAY</span></div>
        <ProjectMedia src={video?.src} poster={video?.poster || project.image} title={project.name} className="project-detail-video" />
      </section>

      <section className="project-detail-services">
        <span className="vyne-page-eyebrow">WHAT WE DID</span>
        <div className="project-service-tags">{project.services.map((service) => <span key={service}>{service}</span>)}</div>
      </section>

      <section className="project-gallery-section">
        <div className="project-media-heading"><span>02 — VISUAL ASSETS</span><span>CAMPAIGN / PRODUCTION / DETAILS</span></div>
        <div className="project-detail-gallery">
          {project.gallery.map((image, index) => (
            <figure key={image}>
              <img src={image} alt={`${project.name} visual ${index + 1}`} loading="lazy" />
              <figcaption><span>FRAME {String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="project-detail-next">
        <span className="vyne-page-eyebrow">HAVE A PROJECT LIKE THIS?</span>
        <Link to="/contact">LET'S TALK <ArrowUpRight size={18} /></Link>
        <Link to="/work" className="project-back-link">BACK TO ALL WORK</Link>
      </section>
    </div>
  );
}
