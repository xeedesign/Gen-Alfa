import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/GenAlfaLogo";

export function NotFoundPage({ title = "Page not found" }: { title?: string }) {
  return (
    <section className="not-found-section">
      <div className="section-shell">
        <p className="eyebrow">404</p>
        <h1>{title}</h1>
        <p>
          The page may have moved. Explore the site or return to the homepage.
        </p>
        <Link className="button button--orange" to="/">
          Back to home <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
