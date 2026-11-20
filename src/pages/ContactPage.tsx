import { Link } from "react-router-dom";
import { ContactForm } from "../components/Forms";
import { ArrowIcon } from "../components/GenAlfaLogo";
import { PageHero } from "../components/Layout";
import { contactInfo, images } from "../data/siteData";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Keep in touch"
        title="Get in touch with our team."
        description="Talk with us about enterprise services, managed support, infrastructure and technology maintenance."
        image={images.contactBanner}
        alt="Communication channels connecting customers with the GenAlfa support team"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="contact-section contact-page-section">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--light reveal">Find us</p>
            <h2 className="reveal">
              Let's start with what your business needs.
            </h2>
            <p className="contact-intro reveal">
              Our team can help you scope the requirement and find a practical
              next step.
            </p>

            <div className="contact-details reveal">
              <div>
                <span>Head office</span>
                <address>{contactInfo.address}</address>
              </div>
              <div>
                <span>Mobile no.</span>
                <a href={`tel:${contactInfo.mobile}`}>
                  {contactInfo.mobileDisplay}
                </a>
              </div>
              <div>
                <span>Email address</span>
                <a href={`mailto:${contactInfo.enquiry}`}>
                  {contactInfo.enquiry}
                </a>
              </div>
              <div className="contact-details-full">
                <span>Branch Network (Major Metro Cities)</span>
                <div className="contact-branches-grid">
                  {contactInfo.branches.map((branch, index) => (
                    <div className="contact-branch-badge" key={branch}>
                      <span className="contact-branch-rank">0{index + 1}</span>
                      <strong className="contact-branch-name">{branch}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <a
                className="text-link text-link--light contact-map-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  contactInfo.address
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Get directions <ArrowIcon diagonal={false} />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <div className="contact-bottom-link">
        <div className="section-shell">
          <Link to="/services">
            Explore our services spectrum <ArrowIcon diagonal={false} />
          </Link>
        </div>
      </div>
    </>
  );
}
