
import { Link } from "react-router-dom";

const articles = [
  {
    number: "01",
    category: "STRATEGY",
    type: "FIELD NOTE",
    title: "GOOD STRATEGY STARTS WITH BETTER QUESTIONS.",
    description: "Before making anything, understand what needs to change and why it matters."
  },
  {
    number: "02",
    category: "CREATIVE",
    type: "PERSPECTIVE",
    title: "CREATIVITY NEEDS A CLEAR DIRECTION.",
    description: "A strong creative idea is not just something that looks different. It needs a reason to exist."
  },
  {
    number: "03",
    category: "EXECUTION",
    type: "FIELD NOTE",
    title: "CONSISTENCY IS BUILT, NOT PROMISED.",
    description: "Great execution happens when every part of the process moves toward the same outcome."
  }
];

export default function Journal() {
  return (
    <div className="vyne-page">
      <section className="inner-hero">
        <div className="inner-hero-top">
          <span className="vyne-page-eyebrow">004 — THE JOURNAL</span>
          <span className="vyne-page-eyebrow">THOUGHTS / PERSPECTIVES</span>
        </div>

        <h1>
          IDEAS INTO
          <br />
          <span>POINT OF VIEW.</span>
        </h1>

        <div className="inner-hero-bottom">
          <p>
            Perspectives on strategy, creativity, and the decisions
            that make brands move forward.
          </p>
          <span>VYNE / JOURNAL</span>
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-section-label">
          <span>001 — LATEST THINKING</span>
          <span>NOTES / IDEAS / PERSPECTIVES</span>
        </div>

        <div className="inner-journal-list">
          {articles.map((article) => (
            <article className="inner-journal-item" key={article.number}>
              <div className="inner-journal-meta">
                <span>{article.number} / {article.category}</span>
                <span>{article.type}</span>
              </div>

              <div className="inner-journal-content">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>

              <span className="inner-arrow"></span>
            </article>
          ))}
        </div>

        <p className="work-note">
          MORE THOUGHTS AND STORIES COMING SOON.
        </p>
      </section>

      <section className="inner-cta">
        <span className="vyne-page-eyebrow">HAVE AN IDEA?</span>
        <h2>
          LET'S START
          <br />
          <span>A CONVERSATION.</span>
        </h2>
        <Link to="/contact" className="vyne-page-link">
          GET IN TOUCH 
        </Link>
      </section>
    </div>
  );
}
