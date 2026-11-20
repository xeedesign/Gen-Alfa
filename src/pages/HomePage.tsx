import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/GenAlfaLogo";
import { GallerySection } from "../components/GallerySection";
import {
  images,
  processSteps,
  services,
} from "../data/siteData";

export function HomePage() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="home-title">
        <div className="hero__media" aria-hidden="true">
          <img src={images.aboutHome} alt="" fetchPriority="high" />
        </div>
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content section-shell">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light hero__eyebrow">
              <span className="eyebrow-line" />
              End-to-end IT solutions
            </p>
            <h1 className="hero__title" id="home-title">
              <span className="hero__line-mask">
                <span className="hero__line">Every IT challenge,</span>
              </span>
              <span className="hero__line-mask">
                <span className="hero__line">
                  resolution at <em>GenAlfa.</em>
                </span>
              </span>
            </h1>
            <p className="hero__description">
              Practical technology, dependable support and infrastructure that
              keep your business moving.
            </p>
            <div className="hero__actions">
              <Link className="button button--orange" to="/services">
                Explore our services
                <ArrowIcon />
              </Link>
              <Link className="text-link text-link--light" to="/contact">
                Talk to our team
                <ArrowIcon diagonal={false} />
              </Link>
            </div>
          </div>
        </div>
        <a
          className="hero__scroll"
          href="#home-about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("home-about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="hero__scroll-line" />
          Scroll to explore
        </a>
      </section>

      <section
        className="about-section"
        id="home-about"
        aria-labelledby="home-about-title"
      >
        <div className="section-shell about-grid">
          <figure className="about-photo image-reveal">
            <img
              src={images.homeAbout}
              alt="Cloud connected to desktop, laptop, tablet and phone inside a data center"
              loading="lazy"
            />
            <figcaption>
              Technology is better when it works for people.
            </figcaption>
          </figure>
          <div className="about-copy">
            <p className="eyebrow reveal">About our company</p>
            <h2 className="reveal" id="home-about-title">
              A steady technology partner. Ready for what's next.
            </h2>
            <p className="about-intro reveal">
              GenAlfa brings enterprise solutions, practical engineering
              expertise and responsive IT support together around your business.
            </p>
            <p className="about-detail reveal">
              The team supports organizations from a Mumbai base and remote
              sites across multiple states. Every solution is shaped to help
              improve productivity and maximize value for our customers.
            </p>
            <Link className="text-link text-link--dark reveal" to="/about">
              Discover GenAlfa
              <ArrowIcon diagonal={false} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="services-section"
        aria-labelledby="home-services-title"
      >
        <div className="section-shell">
          <div className="services-heading">
            <div>
              <p className="eyebrow eyebrow--light reveal">Featured services</p>
              <h2 className="reveal" id="home-services-title">
                Support for every layer of IT.
              </h2>
            </div>
            <p className="services-intro reveal">
              We are qualified resources to support and consult companies on all
              aspects of Information systems.
            </p>
          </div>

          <div className="home-service-list">
            {services.map((service, index) => (
              <Link
                className="home-service-row reveal"
                to="/services"
                key={service.id}
              >
                <span className="service-number">0{index + 1}</span>
                <span className="home-service-copy">
                  <strong>{service.title}</strong>
                  <small>{service.headline}</small>
                </span>
                <ArrowIcon />
              </Link>
            ))}
          </div>

          <Link
            className="text-link text-link--light services-all-link reveal"
            to="/services"
          >
            See all featured services <ArrowIcon diagonal={false} />
          </Link>
        </div>
      </section>

      <GallerySection />

      <section
        className="approach-section"
        aria-labelledby="home-approach-title"
      >
        <div className="section-shell">
          <div className="approach-heading">
            <div>
              <p className="eyebrow reveal">How we work</p>
              <h2 className="reveal" id="home-approach-title">
                A clear process, from challenge to outcome.
              </h2>
            </div>
            <p className="approach-intro reveal">
              Our consultants work with your team to understand the project,
              shape a strategy, implement the solution and monitor progress.
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map((step) => (
              <article className="process-step reveal" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
