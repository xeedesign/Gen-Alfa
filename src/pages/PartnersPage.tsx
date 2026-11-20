import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/GenAlfaLogo";
import { PageHero } from "../components/Layout";
import { PartnerLogoGrid } from "../components/PartnerLogoGrid";
import { images, partnerBrands } from "../data/siteData";

export function PartnersPage() {
  return (
    <>
      <PageHero
        title="Our Partners"
        image={images.partnersBanner}
        alt="Technology partner ecosystem connecting servers, cloud, security and devices"
        breadcrumbs={[{ label: "Our Partners" }]}
      />

      <section className="content-section partner-reference pp-page">
        <div className="section-shell">
          <blockquote className="pp-statement reveal">
            As an advanced technology service provider, we keep abreast of the
            latest technology to securely enhance your business. Our in-depth
            knowledge and expertise ensure we are able to provide guidance as to
            what is possible, practical and cost-efficient.
          </blockquote>

          <PartnerLogoGrid partners={partnerBrands} />

          <div className="pp-cta reveal">
            <div>
              <span>Can You find Now</span>
              <h2>Looking for the Best IT Business Solutions?</h2>
            </div>
            <Link className="button button--orange" to="/contact">
              Contact our team
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
