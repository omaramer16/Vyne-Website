import React, { useState } from "react";
import "./Contact.css";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", service: "Advertising Campaign", message: "", website: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!CONTACT_EMAIL) {
      setStatus({ type: "error", message: "The contact email has not been configured yet. Please try again later." });
      return;
    }
    if (formData.website) return;

    setStatus({ type: "sending", message: "SENDING YOUR PROJECT DETAILS..." });
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New VYNE project inquiry — ${formData.name}`,
          _template: "table",
          _captcha: "true",
        }),
      });
      const result = await response.json();
      if (!response.ok || !(result.success === "true" || result.success === true)) throw new Error(result.message || "Submission failed");
      setStatus({ type: "success", message: "THANK YOU. YOUR BRIEF HAS BEEN SENT — WE'LL BE IN TOUCH." });
      setFormData({ name: "", email: "", service: "Advertising Campaign", message: "", website: "" });
    } catch {
      setStatus({ type: "error", message: "WE COULDN'T SEND YOUR BRIEF. PLEASE TRY AGAIN OR EMAIL US DIRECTLY." });
    }
  };

  const emailLabel = CONTACT_EMAIL || "EMAIL NOT CONFIGURED";

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-top">
            <span className="contact-label"><span className="contact-dot"></span> HAVE A PROJECT IN MIND?</span>
            <span className="contact-number">008 / CONTACT</span>
          </div>

          <div className="contact-heading">
            <h2>LET'S MAKE<br />SOMETHING<br /><span>MATTER.</span></h2>
            <div className="contact-heading-side">
              <p>From the first idea to the final frame. Tell us what your brand needs.</p>
              <a href={CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "#contact-form"}>LET'S TALK <span>↗</span></a>
            </div>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-content">
            <div className="contact-info">
              <span className="contact-small-label">BRIEF US</span>
              <h3>Have a campaign<br />in mind?</h3>
              <p>Tell us about your brand, audience, and the result you want to create. We'll take it from there.</p>
              <div className="contact-details">
                <div><span>EMAIL</span><a href={CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "#contact-form"}>{emailLabel}</a></div>
                <div><span>WHAT WE CREATE</span><div className="contact-socials"><span>CAMPAIGNS</span><span>BRAND FILMS</span><span>PHOTO / VIDEO</span></div></div>
              </div>
            </div>

            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group"><label htmlFor="contact-name">01 / YOUR NAME</label><input id="contact-name" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} autoComplete="name" required /></div>
              <div className="form-group"><label htmlFor="contact-email">02 / EMAIL ADDRESS</label><input id="contact-email" type="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} autoComplete="email" required /></div>
              <div className="form-group"><label htmlFor="contact-service">03 / WHAT DO YOU NEED?</label><select id="contact-service" name="service" value={formData.service} onChange={handleChange}><option>Advertising Campaign</option><option>Brand Film / Commercial</option><option>Photography / Video Production</option><option>Social Media Content</option><option>Creative Direction</option><option>Brand Identity</option><option>Other</option></select></div>
              <div className="form-group"><label htmlFor="contact-message">04 / TELL US ABOUT THE PROJECT</label><textarea id="contact-message" name="message" placeholder="The idea, the goal, the timeline..." rows="4" value={formData.message} onChange={handleChange} required /></div>
              <div className="form-honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty</label><input id="contact-website" name="website" tabIndex="-1" autoComplete="off" value={formData.website} onChange={handleChange} /></div>
              <button type="submit" className="contact-submit" disabled={status.type === "sending"}>{status.type === "sending" ? "SENDING..." : "SEND PROJECT DETAILS"}<span>↗</span></button>
              {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
              {!CONTACT_EMAIL && <p className="form-config-note">Set VITE_CONTACT_EMAIL in your deployment environment to activate email delivery.</p>}
            </form>
          </div>

          <div className="contact-bottom"><span>NO BORING PROJECTS. JUST GREAT IDEAS.</span><span>LET'S BUILD SOMETHING DIFFERENT.</span></div>
        </div>
      </section>

    </>
  );
};

export default Contact;
