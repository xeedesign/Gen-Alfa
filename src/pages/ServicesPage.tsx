import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/GenAlfaLogo";
import { ContactCta, PageHero } from "../components/Layout";
import { contactInfo, images, services } from "../data/siteData";

function CheckCircleIcon() {
  return (
    <svg
      className="srv-ref-check"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="#ff5e00" strokeWidth="1.8" />
      <path
        d="M8.5 12.2l2.4 2.4 4.6-5"
        stroke="#ff5e00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const artProps = {
  viewBox: "0 0 260 260",
  fill: "none",
  stroke: "#111111",
  strokeWidth: 9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "srv-ref-art",
};

const serviceIllustrations = [
  <svg key="infra" {...artProps}>
    <rect x="72" y="18" width="116" height="206" rx="12" />
    <rect x="88" y="42" width="84" height="38" rx="5" />
    <rect x="88" y="94" width="84" height="38" rx="5" />
    <rect x="88" y="146" width="84" height="38" rx="5" />
    <line x1="100" y1="61" x2="126" y2="61" strokeWidth="6" />
    <line x1="100" y1="113" x2="126" y2="113" strokeWidth="6" />
    <line x1="100" y1="165" x2="126" y2="165" strokeWidth="6" />
    <circle cx="158" cy="61" r="4.5" fill="#111111" stroke="none" />
    <circle cx="158" cy="113" r="4.5" fill="#111111" stroke="none" />
    <circle cx="158" cy="165" r="4.5" fill="#111111" stroke="none" />
    <line x1="96" y1="224" x2="96" y2="240" />
    <line x1="164" y1="224" x2="164" y2="240" />
    <line x1="52" y1="244" x2="208" y2="244" />
  </svg>,
  <svg key="servers" {...artProps}>
    <rect x="52" y="26" width="156" height="52" rx="10" />
    <rect x="52" y="92" width="156" height="52" rx="10" />
    <rect x="52" y="158" width="156" height="52" rx="10" />
    <circle cx="74" cy="52" r="7" strokeWidth="6" />
    <circle cx="74" cy="118" r="7" strokeWidth="6" />
    <circle cx="74" cy="184" r="7" strokeWidth="6" />
    <line x1="100" y1="48" x2="142" y2="48" strokeWidth="5" />
    <line x1="100" y1="60" x2="130" y2="60" strokeWidth="5" />
    <line x1="100" y1="114" x2="142" y2="114" strokeWidth="5" />
    <line x1="100" y1="126" x2="130" y2="126" strokeWidth="5" />
    <line x1="100" y1="180" x2="142" y2="180" strokeWidth="5" />
    <line x1="100" y1="192" x2="130" y2="192" strokeWidth="5" />
    <circle cx="188" cy="52" r="4" fill="#111111" stroke="none" />
    <circle cx="188" cy="118" r="4" fill="#111111" stroke="none" />
    <circle cx="188" cy="184" r="4" fill="#111111" stroke="none" />
  </svg>,
  <svg key="network" {...artProps}>
    <rect x="48" y="148" width="164" height="58" rx="12" />
    <line x1="86" y1="148" x2="68" y2="76" />
    <line x1="174" y1="148" x2="192" y2="76" />
    <circle cx="68" cy="68" r="7" strokeWidth="8" />
    <circle cx="192" cy="68" r="7" strokeWidth="8" />
    <circle cx="130" cy="110" r="5" fill="#111111" stroke="none" />
    <path d="M114 94 Q130 78 146 94" strokeWidth="6" />
    <path d="M104 80 Q130 54 156 80" strokeWidth="6" />
    <rect x="70" y="168" width="22" height="18" rx="3" strokeWidth="6" />
    <rect x="100" y="168" width="22" height="18" rx="3" strokeWidth="6" />
    <rect x="130" y="168" width="22" height="18" rx="3" strokeWidth="6" />
    <circle cx="172" cy="177" r="3.5" fill="#111111" stroke="none" />
    <circle cx="186" cy="177" r="3.5" fill="#111111" stroke="none" />
  </svg>,
  <svg key="fms" {...artProps}>
    <rect x="36" y="100" width="118" height="112" rx="8" />
    <rect x="54" y="122" width="26" height="24" rx="3" strokeWidth="6" />
    <rect x="94" y="122" width="26" height="24" rx="3" strokeWidth="6" />
    <rect x="54" y="158" width="26" height="24" rx="3" strokeWidth="6" />
    <rect x="94" y="158" width="26" height="24" rx="3" strokeWidth="6" />
    <line x1="28" y1="226" x2="162" y2="226" />
    <circle cx="198" cy="78" r="30" />
    <circle cx="198" cy="78" r="11" />
    <line x1="228" y1="78" x2="238" y2="78" strokeWidth="8" />
    <line x1="219" y1="99" x2="226" y2="106" strokeWidth="8" />
    <line x1="198" y1="108" x2="198" y2="118" strokeWidth="8" />
    <line x1="177" y1="99" x2="170" y2="106" strokeWidth="8" />
    <line x1="168" y1="78" x2="158" y2="78" strokeWidth="8" />
    <line x1="177" y1="57" x2="170" y2="50" strokeWidth="8" />
    <line x1="198" y1="48" x2="198" y2="38" strokeWidth="8" />
    <line x1="219" y1="57" x2="226" y2="50" strokeWidth="8" />
  </svg>,
  <svg key="computers" {...artProps}>
    <rect x="30" y="44" width="124" height="88" rx="10" />
    <line x1="50" y1="68" x2="110" y2="68" strokeWidth="5" />
    <line x1="50" y1="84" x2="132" y2="84" strokeWidth="5" />
    <line x1="50" y1="100" x2="96" y2="100" strokeWidth="5" />
    <line x1="92" y1="132" x2="92" y2="152" />
    <line x1="66" y1="162" x2="118" y2="162" />
    <rect x="142" y="108" width="88" height="62" rx="8" />
    <line x1="130" y1="184" x2="242" y2="184" />
  </svg>,
  <svg key="printers" {...artProps}>
    <rect x="88" y="28" width="84" height="66" rx="4" />
    <rect x="48" y="94" width="164" height="84" rx="14" />
    <rect x="88" y="168" width="84" height="58" rx="4" />
    <rect x="150" y="112" width="26" height="14" rx="3" strokeWidth="5" />
    <circle cx="192" cy="119" r="5" strokeWidth="6" />
    <line x1="102" y1="188" x2="158" y2="188" strokeWidth="5" />
    <line x1="102" y1="202" x2="140" y2="202" strokeWidth="5" />
  </svg>,
  <svg key="security" {...artProps}>
    <line x1="44" y1="56" x2="44" y2="184" />
    <line x1="44" y1="112" x2="92" y2="112" />
    <rect x="92" y="84" width="104" height="58" rx="29" />
    <circle cx="182" cy="113" r="15" strokeWidth="8" />
    <circle cx="182" cy="113" r="5" fill="#111111" stroke="none" />
    <line x1="100" y1="74" x2="192" y2="74" />
    <circle cx="118" cy="113" r="4" fill="#111111" stroke="none" />
    <path d="M214 97 Q226 113 214 129" strokeWidth="6" />
    <path d="M226 89 Q244 113 226 137" strokeWidth="6" />
  </svg>,
  <svg key="mps" {...artProps}>
    <rect x="58" y="90" width="62" height="50" rx="3" />
    <rect x="36" y="132" width="108" height="56" rx="10" />
    <rect x="52" y="146" width="30" height="16" rx="3" strokeWidth="5" />
    <circle cx="124" cy="154" r="5" strokeWidth="6" />
    <circle cx="184" cy="90" r="44" />
    <line x1="216" y1="122" x2="246" y2="154" />
    <line x1="166" y1="112" x2="166" y2="96" strokeWidth="7" />
    <line x1="182" y1="112" x2="182" y2="82" strokeWidth="7" />
    <line x1="198" y1="112" x2="198" y2="90" strokeWidth="7" />
    <line x1="158" y1="116" x2="206" y2="116" strokeWidth="6" />
  </svg>,
  <svg key="ewaste" {...artProps}>
    <line x1="62" y1="108" x2="198" y2="108" />
    <path d="M72 108 L188 108 L174 214 L86 214 Z" />
    <line x1="110" y1="130" x2="106" y2="196" strokeWidth="6" />
    <line x1="150" y1="130" x2="154" y2="196" strokeWidth="6" />
    <rect x="104" y="42" width="30" height="24" rx="6" />
    <line x1="112" y1="42" x2="112" y2="30" strokeWidth="6" />
    <line x1="126" y1="42" x2="126" y2="30" strokeWidth="6" />
    <path d="M119 66 Q119 86 136 94" strokeWidth="6" />
    <rect x="160" y="46" width="24" height="38" rx="4" />
    <line x1="172" y1="46" x2="172" y2="38" strokeWidth="6" />
    <circle cx="88" cy="86" r="4" fill="#111111" stroke="none" />
    <circle cx="200" cy="86" r="4" fill="#111111" stroke="none" />
  </svg>,
];

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Information Technology. Redefined."
        description="Comprehensive enterprise lifecycle services, multi-vendor support, precision tech repairs, and turnkey IT infrastructure solutions for organizations across India."
        image={images.infrastructure}
        alt="Modern enterprise data center and IT services infrastructure"
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="srv-ref-list" aria-label="All services">
        {services.map((service, index) => {
          const isFlipped = index % 2 === 1;
          return (
            <article
              key={service.id}
              className={`srv-ref-block${isFlipped ? " is-flipped" : ""}`}
              id={service.id}
              aria-labelledby={`srv-title-${service.id}`}
            >
              <span
                className="srv-ref-deco deco-circle-teal"
                aria-hidden="true"
              />
              <span
                className="srv-ref-deco deco-circle-cream"
                aria-hidden="true"
              />
              <span
                className="srv-ref-deco deco-sq-outline"
                aria-hidden="true"
              />
              <span className="srv-ref-deco deco-sq-fill" aria-hidden="true" />

              <div className="section-shell srv-ref-shell">
                <div className="srv-ref-content">
                  <span className="srv-ref-pill">{service.tag}</span>
                  <h2 className="srv-ref-title" id={`srv-title-${service.id}`}>
                    {service.title}
                  </h2>
                  <p className="srv-ref-lead">{service.headline}</p>
                  <p className="srv-ref-desc">{service.description}</p>
                  <ul className="srv-ref-points">
                    {service.features.map((feature) => (
                      <li className="srv-ref-point" key={feature}>
                        <CheckCircleIcon />
                        <strong>{feature}</strong>
                      </li>
                    ))}
                  </ul>
                  <div className="srv-ref-cta">
                    <a
                      className="srv-ref-btn"
                      href={`tel:${contactInfo.mobile}`}
                    >
                      Schedule a Call
                    </a>
                    <Link className="srv-ref-link" to="/contact">
                      Enquire about this service <ArrowIcon diagonal={false} />
                    </Link>
                  </div>
                </div>

                <figure
                  className="srv-ref-media"
                  role="img"
                  aria-label={service.imageAlt}
                >
                  {serviceIllustrations[index]}
                </figure>
              </div>
            </article>
          );
        })}
      </section>

      <ContactCta
        title="Looking for dependable enterprise IT services?"
        description="Connect with our technical consultants to discuss managed infrastructure, multi-vendor support, or custom SLA frameworks."
      />
    </>
  );
}
