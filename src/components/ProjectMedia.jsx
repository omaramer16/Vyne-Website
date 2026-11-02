import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function ProjectMedia({ src, poster, title, className = "" }) {
  const videoRef = useRef(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setNearViewport(entry.isIntersecting),
      { rootMargin: "140px", threshold: 0.15 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    if (nearViewport || isHovered) {
      const playPromise = video.play();
      if (playPromise?.catch) playPromise.catch(() => {});
    } else {
      video.pause();
    }
  }, [nearViewport, isHovered, src]);

  if (!src || failed) {
    return (
      <div className={`project-media project-media-placeholder ${className}`}>
        {poster && <img src={poster} alt={title} loading="lazy" />}
        <span className="project-media-play"><Play size={18} fill="currentColor" /></span>
        <span className="project-media-note">FILM PREVIEW / ADD VIDEO SOURCE</span>
      </div>
    );
  }

  return (
    <div className={`project-media ${className}`}>
      <video
        ref={videoRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${title} video preview`}
        onError={() => setFailed(true)}
      />
      <span className="project-media-play"><Play size={18} fill="currentColor" /></span>
    </div>
  );
}
