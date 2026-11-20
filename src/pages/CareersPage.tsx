import { useState } from "react";
import { Link } from "react-router-dom";
import { CareerApplicationForm } from "../components/Forms";
import { ArrowIcon } from "../components/GenAlfaLogo";
import { PageHero } from "../components/Layout";
import { careerOpenings, contactInfo, images } from "../data/siteData";

export function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleApplyForRole = (role: string) => {
    setSelectedRole(role);
    document
      .getElementById("career-application-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your next chapter in technology."
        description="Join a team focused on customer service, practical IT solutions and helping organizations work better."
        image={images.careersBanner}
        alt="Candidate profile card surrounded by career growth icons"
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="content-section">
        <div className="section-shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow reveal">Current openings</p>
              <h2 className="section-title reveal">
                Find a role where you can make a difference.
              </h2>
            </div>
            <p className="section-lead reveal">
              Explore current opportunities across IT projects, service and
              sales.
            </p>
          </div>

          <div className="career-list">
            {careerOpenings.map((opening, index) => (
              <details className="career-opening reveal" key={opening.role}>
                <summary>
                  <span className="directory-index">0{index + 1}</span>
                  <span className="career-role">
                    <strong>{opening.role}</strong>
                    <small>
                      {opening.department} / {opening.location}
                    </small>
                  </span>
                  <span className="career-plus" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </summary>
                <div className="career-details">
                  <p>
                    <strong>Skills:</strong> {opening.skills}
                  </p>
                  <p>
                    <strong>Qualifications &amp; experience:</strong>{" "}
                    {opening.qualifications}
                  </p>
                  <div className="career-action-row">
                    <button
                      type="button"
                      className="button button--orange career-apply-btn"
                      onClick={() => handleApplyForRole(opening.role)}
                    >
                      Apply for this role <ArrowIcon diagonal={false} />
                    </button>
                    <a
                      className="text-link text-link--dark"
                      href={`mailto:${contactInfo.enquiry}?subject=${encodeURIComponent(
                        `Career application: ${opening.role}`
                      )}`}
                    >
                      Or apply directly via email <ArrowIcon diagonal={false} />
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="content-section content-section--paper"
        id="career-application-section"
      >
        <div className="section-shell career-application-layout">
          <div className="career-application-copy">
            <p className="eyebrow reveal">Join Our Team</p>
            <h2 className="section-title reveal">Submit Your Application</h2>
            <p className="section-lead reveal">
              Ready to take your career to the next level? Submit your profile
              details below. Our talent acquisition team reviews every
              submission and contacts shortlisted candidates for interview
              rounds.
            </p>

            <div className="career-perks-list reveal">
              <div className="career-perk-item">
                <span className="career-perk-bullet" />
                <div>
                  <strong>Work on Critical Infrastructure</strong>
                  <p>
                    Gain real-world experience across enterprise data centers,
                    network architectures, and multi-OEM hardware.
                  </p>
                </div>
              </div>
              <div className="career-perk-item">
                <span className="career-perk-bullet" />
                <div>
                  <strong>Collaborative &amp; Supportive Culture</strong>
                  <p>
                    Work alongside experienced engineers and managers dedicated
                    to client success and continuous technical learning.
                  </p>
                </div>
              </div>
              <div className="career-perk-item">
                <span className="career-perk-bullet" />
                <div>
                  <strong>Pan-India Career Opportunities</strong>
                  <p>
                    Positions available at corporate headquarters in Vashi, Navi
                    Mumbai, and client operations across major metros.
                  </p>
                </div>
              </div>
            </div>

            <div className="career-direct-contact reveal">
              <span>Have a question or prefer email?</span>
              <p>
                You can also email your CV directly to{" "}
                <a href={`mailto:${contactInfo.enquiry}`}>
                  {contactInfo.enquiry}
                </a>{" "}
                with your target role and contact details.
              </p>
            </div>
          </div>

          <div className="career-form-container reveal">
            <CareerApplicationForm
              key={selectedRole}
              selectedRole={selectedRole}
            />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell editorial-split">
          <div>
            <p className="eyebrow reveal">Our culture</p>
            <h2 className="section-title reveal">
              Service, teamwork and learning.
            </h2>
          </div>
          <div className="editorial-copy reveal">
            <p>
              We value professionalism, transparency, teamwork and a desire for
              excellence. Our work is built around supporting customers and
              finding the most practical path forward.
            </p>
            <Link className="text-link text-link--dark" to="/contact">
              Ask about a role <ArrowIcon diagonal={false} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
