import { useState } from "react";
import type { PartnerBrand } from "../data/siteData";

interface PartnerLogoGridProps {
  partners: PartnerBrand[];
}

export function PartnerLogoGrid({ partners }: PartnerLogoGridProps) {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  return (
    <div className="pp-brands" aria-label="Our technology partners">
      <div className="pp-brands-head reveal">
        <p className="eyebrow">Our partners</p>
        <h3>Trusted technology &amp; OEM partners.</h3>
      </div>

      <ul className="pp-brands-grid" role="list">
        {partners.map((brand) => (
          <li key={brand.id} className="pp-brand reveal">
            <div className="pp-brand-logo">
              {failedLogos[brand.id] ? (
                <span className="pp-brand-fallback">{brand.name}</span>
              ) : (
                <img
                  src={brand.logo}
                  alt={brand.alt}
                  style={{ width: brand.width }}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  onError={() =>
                    setFailedLogos((prev) => ({ ...prev, [brand.id]: true }))
                  }
                />
              )}
            </div>
            <span className="pp-brand-name">{brand.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
