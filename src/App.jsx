
import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Journal from "./pages/Journal.jsx";
import Contact from "./pages/Contact.jsx";

import "./pages/InnerPages.css";

function NotFound() {
  return (
    <section className="vyne-page not-found-page">
      <span className="vyne-page-eyebrow">
        404 — PAGE NOT FOUND
      </span>

      <h1>
        NOTHING<br />
        <span>HERE.</span>
      </h1>

      <p>The page you're looking for doesn't exist.</p>

      <Link to="/" className="vyne-page-link">
        BACK TO HOME 
      </Link>
    </section>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <AnimatedRoutes />
      </main>

      <Footer />
    </>
  );
}
