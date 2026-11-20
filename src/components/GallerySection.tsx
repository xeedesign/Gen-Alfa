import { useEffect, useRef, useState } from "react";
import { pexelsPortraitHD } from "../data/siteData";

interface GalleryTile {
  src: string;
  alt: string;
  label: string;
}

/* Swap any `src` below with your own facility / team photos
   (e.g. import teamPhoto from "../assets/team.jpg") and the layout adapts. */
const tiles: GalleryTile[] = [
  {
    src: pexelsPortraitHD("17367708"),
    alt: "Business laptop on an office desk",
    label: "Laptop",
  },
  {
    src: pexelsPortraitHD("990423"),
    alt: "Row of desktop computers in a modern office",
    label: "Desktop",
  },
  {
    src: pexelsPortraitHD("11833899"),
    alt: "Modern office printer",
    label: "Printer",
  },
  {
    src: pexelsPortraitHD("2881227"),
    alt: "Network switch with ethernet cables connected",
    label: "Network",
  },
  {
    src: pexelsPortraitHD("13156207"),
    alt: "CCTV security camera mounted on a wall",
    label: "Camera",
  },
];

export function GallerySection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  /* Staggered reveal when the grid scrolls into view */
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const items = Array.from(grid.children) as HTMLElement[];
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach((el, i) => {
      el.style.setProperty("--d", `${i * 90}ms`);
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* Lightbox keyboard controls */
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i! + 1) % tiles.length);
      if (e.key === "ArrowLeft")
        setActive((i) => (i! - 1 + tiles.length) % tiles.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="section-shell">
        <div className="gallery-heading">
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow-line" />
            Our product range
          </p>
          <h2 id="gallery-title">
            Powering Businesses with Complete IT Solutions
          </h2>
          <p className="gallery-intro">
            Discover our extensive range of reliable IT hardware, networking, printing, and security solutions designed to enhance business productivity, strengthen connectivity, and support seamless operations.
          </p>
        </div>

        <div className="gallery-grid" ref={gridRef}>
          {tiles.map((tile, i) => (
            <button
              type="button"
              key={tile.label}
              className="gallery-tile"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${tile.label}`}
            >
              <img src={tile.src} alt={tile.alt} loading="lazy" />
              <span className="gallery-tile__shade" aria-hidden="true" />
              <span className="gallery-tile__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="gallery-tile__meta">
                <strong>{tile.label}</strong>
              </span>
              <span className="gallery-tile__zoom" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={tiles[active].label}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            ✕
          </button>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active - 1 + tiles.length) % tiles.length);
            }}
          >
            ‹
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={tiles[active].src} alt={tiles[active].alt} />
          </figure>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 1) % tiles.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
