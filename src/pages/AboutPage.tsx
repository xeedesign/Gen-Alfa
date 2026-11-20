import { ContactCta, PageHero } from "../components/Layout";
import { images } from "../data/siteData";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GenAlfa"
        title="Creating practical IT solutions for business."
        description="A full-service technology partner focused on cost-efficient support, useful guidance and long-term customer relationships."
        image={images.aboutBanner}
        alt="Global network connecting cloud, security, server and analytics services"
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="content-section">
        <div className="section-shell editorial-split">
          <div>
            <p className="eyebrow reveal">Our company</p>
            <h2 className="section-title reveal">
              Technology that keeps your business moving forward.
            </h2>
          </div>
          <div className="editorial-copy reveal">
            <p>
              In a technology-driven marketplace, it is important to keep pace
              with new solutions and make the most of your investments. GenAlfa
              brings cost-efficient support, guidance and practical technology
              together to help businesses stay productive.
            </p>
            <p>
              The company is based in Mumbai and supports remote sites across
              multiple states. Its focus is on rapid deployment, emerging
              technologies and service agreements shaped around customer needs
              and budgets.
            </p>
          </div>
        </div>

        <div className="section-shell about-photos about-photos--company">
          <figure className="about-photo-tile">
            <img
              src={images.aboutPresence}
              alt="Map of a Mumbai head office connected to remote sites"
              loading="lazy"
            />
            <figcaption>
              <small>01</small>
              <strong>Mumbai base, multi-state reach</strong>
            </figcaption>
          </figure>
          <figure className="about-photo-tile">
            <img
              src={images.aboutDeploy}
              alt="Checklist illustrating rapid deployment"
              loading="lazy"
            />
            <figcaption>
              <small>02</small>
              <strong>Rapid deployment</strong>
            </figcaption>
          </figure>
          <figure className="about-photo-tile">
            <img
              src={images.aboutSla}
              alt="Service agreement checklist with quality seal"
              loading="lazy"
            />
            <figcaption>
              <small>03</small>
              <strong>Service agreements built around you</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="content-section content-section--paper">
        <div className="section-shell editorial-split">
          <div>
            <p className="eyebrow reveal">Our Philosophy</p>
            <h2 className="section-title reveal">
              Customer service comes first.
            </h2>
          </div>
          <div className="editorial-copy reveal">
            <p>
              We believe in building trust, confidence and lasting relationships
              through responsive support, transparency, teamwork and
              professional ethics.
            </p>
            <p>
              Our team takes pride in understanding our clients' requirements
              and ensuring they get the most effective and dependable technology
              support for their business operations.
            </p>
          </div>
        </div>

        <div className="section-shell about-photos about-photos--philosophy">
          <figure className="about-photo-tile">
            <img
              src={images.aboutSupport}
              alt="Modern data center cabinets with servers and structured cabling"
              loading="lazy"
            />
            <figcaption>
              <small>01</small>
              <strong>Support that stays on site</strong>
            </figcaption>
          </figure>
          <figure className="about-photo-tile">
            <img
              src={images.aboutTechnology}
              alt="Workstation beside telecom racks in a modern data center"
              loading="lazy"
            />
            <figcaption>
              <small>02</small>
              <strong>Technology that works for people</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <ContactCta title="Let's build a long-term technology partnership." />
    </>
  );
}
