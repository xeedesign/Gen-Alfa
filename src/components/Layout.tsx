import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contactInfo, navLinks } from "../data/siteData";
import { ArrowIcon, Brand, GenAlfaLogo } from "./GenAlfaLogo";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`site-header is-scrolled ${menuOpen ? "menu-open" : ""}`}
    >
      <Brand mode={menuOpen ? "dark" : "light"} />

      <nav
        className={`site-nav${menuOpen ? " is-open" : ""}`}
        id="main-navigation"
        aria-label="Main navigation"
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a className="header-contact" href={`tel:${contactInfo.mobile}`}>
        <span>Talk to our team</span>
        <strong>{contactInfo.mobileDisplay}</strong>
        <ArrowIcon />
      </a>

      <button
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function QuickContact() {
  const message = encodeURIComponent(
    "Hello GenAlfa Technologies, I would like to know more about your IT services."
  );

  return (
    <aside className="quick-contact" aria-label="Quick contact">
      <a
        className="quick-contact__button quick-contact__button--call"
        href={`tel:${contactInfo.mobile}`}
        aria-label={`Call GenAlfa at ${contactInfo.mobileDisplay}`}
      >
        <span className="quick-contact__label">Call Us</span>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>

      <a
        className="quick-contact__button quick-contact__button--whatsapp"
        href={`https://wa.me/918271810707?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with GenAlfa Technologies on WhatsApp"
      >
        <span className="quick-contact__label">WhatsApp</span>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.23 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8 1-.15.19-.3.21-.55.08-.25-.12-1.05-.39-2.01-.81-.74-.66-1.24-1.47-1.42-1.78-.18-.31-.02-.48.1-.6.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79 2.12.92 2.55.74 3.01.7.46-.05 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
        </svg>
      </a>
    </aside>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand">
          <Brand mode="dark" />
          <p className="footer-tagline">
            IT solutions, support and services.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick links</h4>
          <nav className="footer-links" aria-label="Footer">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <h4>Office address</h4>
          <address className="footer-contact">{contactInfo.address}</address>
        </div>

        <div className="footer-col">
          <h4>Email</h4>
          <address className="footer-contact">
            <a href={`mailto:${contactInfo.enquiry}`}>{contactInfo.enquiry}</a>
          </address>
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <span>© 2026 GenAlfa Technologies</span>
        <div className="footer-bottom-right">
          <Link to="/contact">
            Get in touch <ArrowIcon />
          </Link>
          <a
            className="footer-credit"
            href="https://xeedesign.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed by XEE Design
          </a>
        </div>
      </div>
    </footer>
  );
}

const pageTitles: Record<string, string> = {
  "/": "Every IT Challenge, Resolved at GenAlfa",
  "/about": "About GenAlfa",
  "/services": "Services",
  "/partners": "Our Partners",
  "/careers": "Careers",
  "/contact": "Contact",
};

export function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const title = pageTitles[location.pathname] ?? "Page Not Found";
    document.title = `${title} | GenAlfa Technologies`;
  }, [location.pathname]);

  return (
    <div className="page">
      <IntroSplash />
      <SiteHeader />
      <main className="route-main" key={location.pathname}>
        <Outlet />
      </main>
      <SiteFooter />
      <QuickContact />
    </div>
  );
}

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero__media image-reveal">
        <img src={image} alt={alt} fetchPriority="high" />
      </div>
      <div className="page-hero__shade" aria-hidden="true" />
      <div className="section-shell page-hero__content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <span className="breadcrumb-part" key={`${crumb.label}-${index}`}>
              <span aria-hidden="true">/</span>
              {crumb.to ? (
                <Link to={crumb.to}>{crumb.label}</Link>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <p className="eyebrow eyebrow--light page-hero__eyebrow">{eyebrow}</p>
        )}
        <h1 className="page-hero__title" id="page-title">
          {title}
        </h1>
        {description && (
          <p className="page-hero__description">{description}</p>
        )}
      </div>
    </section>
  );
}

interface ContactCtaProps {
  title?: string;
  description?: string;
}

export function ContactCta({
  title = "Looking for the right IT solution?",
  description = "Talk to our team about your requirements and the next practical step.",
}: ContactCtaProps) {
  return (
    <section className="contact-cta">
      <div className="section-shell contact-cta__inner">
        <div>
          <p className="eyebrow eyebrow--light">Let's talk</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link className="button button--orange" to="/contact">
          Contact our team
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

function IntroSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-splash" aria-hidden="true">
      <GenAlfaLogo theme="light" className="intro-splash__logo" />
    </div>
  );
}
