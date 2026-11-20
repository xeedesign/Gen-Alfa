import { Link } from "react-router-dom";

import blackLogo from "../assets/genalfa-logo-black.png";
import whiteLogo from "../assets/genalfa-logo-white.png";

interface GenAlfaLogoProps {
  theme?: "auto" | "light" | "dark";
  className?: string;
  width?: number | string;
  height?: number | string;
}

/* "light" = black logo (for light/white backgrounds), "dark" = white logo (for dark backgrounds) */
export function GenAlfaLogo({
  theme = "auto",
  className = "",
  width,
  height,
}: GenAlfaLogoProps) {
  return (
    <img
      src={theme === "dark" ? whiteLogo : blackLogo}
      alt="GenAlfa Technologies - Resolve. Rebuild. Rise."
      className={`genalfa-logo genalfa-logo--${theme} ${className}`}
      width={width}
      height={height}
      draggable={false}
    />
  );
}

export function Brand({ mode }: { mode?: "auto" | "light" | "dark" }) {
  return (
    <Link className="brand" to="/" aria-label="GenAlfa Technologies home">
      <GenAlfaLogo theme={mode || "auto"} />
    </Link>
  );
}

export function ArrowIcon({ diagonal = true }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 15.5 15.5 4.5M6 4.5h9.5V14" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}
