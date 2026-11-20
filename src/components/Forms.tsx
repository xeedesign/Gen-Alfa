import { type ChangeEvent, type FormEvent, useState } from "react";
import { contactInfo } from "../data/siteData";
import { ArrowIcon } from "./GenAlfaLogo";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const subject = encodeURIComponent(
      `GenAlfa website enquiry: ${String(formData.get("interest") ?? "General enquiry")}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${String(formData.get("email") ?? "")}\nPhone: ${String(
        formData.get("phone") ?? ""
      )}\nInterested in: ${String(formData.get("interest") ?? "")}\n\n${String(
        formData.get("message") ?? ""
      )}`
    );

    setFirstName(name.split(" ")[0] || "there");
    setSubmitted(true);
    window.location.href = `mailto:${contactInfo.enquiry}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="eyebrow">Your enquiry</p>
        <h3>How can we help?</h3>
      </div>

      {submitted && (
        <p className="form-status" role="status">
          Thanks, {firstName}. Your email app should open with your enquiry. If
          it doesn't, write to{" "}
          <a href={`mailto:${contactInfo.enquiry}`}>our team</a>.
        </p>
      )}

      <div className="form-fields">
        <label>
          <span>Full name</span>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          <span>Work email</span>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </label>
        <label>
          <span>Phone number</span>
          <input
            name="phone"
            type="tel"
            placeholder="Your phone number"
            autoComplete="tel"
            required
          />
        </label>
        <label>
          <span>I'm interested in</span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>
              Select a requirement
            </option>
            <option>IT infrastructure</option>
            <option>Servers</option>
            <option>Network Devices</option>
            <option>Facility management services</option>
            <option>Laptops and Desktops</option>
            <option>Printer and Periferals</option>
            <option>Security and Services</option>
            <option>Managed Print Services</option>
            <option>E- waste</option>
            <option>Careers</option>
            <option>Other enquiry</option>
          </select>
        </label>
        <label className="form-message">
          <span>Tell us a little more</span>
          <textarea
            name="message"
            rows={3}
            placeholder="What would you like help with?"
          />
        </label>
      </div>

      <button className="button button--orange form-submit" type="submit">
        Send enquiry
        <ArrowIcon />
      </button>
      <p className="form-note">
        Submitting opens a pre-addressed email with your details.
      </p>
    </form>
  );
}

export function CareerApplicationForm({
  selectedRole = "",
}: {
  selectedRole?: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState(selectedRole);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const appliedRole = String(
      formData.get("role") ?? (role || "General Application")
    );
    const experience = String(formData.get("experience") ?? "");
    const location = String(formData.get("location") ?? "");

    const subject = encodeURIComponent(
      `Job Application: ${appliedRole} - ${name}`
    );
    const body = encodeURIComponent(
      `Candidate Application Details:\n--------------------------------\nFull Name: ${name}\nPosition Applied: ${appliedRole}\nEmail: ${email}\nPhone Number: ${phone}\nTotal Experience: ${experience}\nCurrent Location: ${location}\nAttached Document: ${
        fileName || "Document ready to attach"
      }\n\n[Note: Please verify that your document (${
        fileName || "PDF / PNG / JPG / Word file"
      }) is attached before clicking Send.]`
    );

    setFirstName(name.split(" ")[0] || "there");
    setSubmitted(true);
    window.location.href = `mailto:${contactInfo.enquiry}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form career-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="eyebrow">Career Application</p>
        <h3>Apply for a Position</h3>
      </div>

      {submitted && (
        <p className="form-status" role="status">
          Thank you, {firstName}! Your application draft has been created. Your
          email app will open addressed to{" "}
          <a href={`mailto:${contactInfo.enquiry}`}>{contactInfo.enquiry}</a>.
          Please attach your document{" "}
          {fileName ? `("${fileName}")` : "(PDF, PNG, JPG, or Word)"} and click
          Send.
        </p>
      )}

      <div className="form-fields">
        <label>
          <span>Full name *</span>
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          <span>Email address *</span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
        <label>
          <span>Phone number *</span>
          <input
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            autoComplete="tel"
            required
          />
        </label>
        <label>
          <span>Position applied for *</span>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>
              Select position
            </option>
            <option value="Marketing Executive">Marketing Executive</option>
            <option value="Sr Customer Service Engineer">
              Sr Customer Service Engineer
            </option>
            <option value="Customer Service Engineer">
              Customer Service Engineer
            </option>
            <option value="IT Support Engineer">IT Support Engineer</option>
            <option value="Network / Infrastructure Technician">
              Network / Infrastructure Technician
            </option>
            <option value="Facility Management Specialist">
              Facility Management Specialist
            </option>
            <option value="Other / General Application">
              Other / General Application
            </option>
          </select>
        </label>
        <label>
          <span>Total experience *</span>
          <select name="experience" defaultValue="" required>
            <option value="" disabled>
              Select experience level
            </option>
            <option value="Fresher / Entry level">
              Fresher / Entry level (0-1 year)
            </option>
            <option value="1 - 3 years">1 - 3 years</option>
            <option value="3 - 5 years">3 - 5 years</option>
            <option value="5+ years">5+ years (Senior level)</option>
          </select>
        </label>
        <label>
          <span>Current location *</span>
          <input
            name="location"
            type="text"
            placeholder="City, State"
            required
          />
        </label>

        <div className="form-file-field form-message">
          <label htmlFor="attached-document">
            <span>Attach Document (PDF, PNG, JPG, Word) *</span>
          </label>
          <div className="file-upload-wrapper">
            <input
              id="attached-document"
              name="document"
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,application/pdf,image/png,image/jpeg,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="file-upload-input"
              required
            />
            <div className="file-upload-display">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
              <span className="file-upload-text">
                {fileName ? (
                  <strong>Selected: {fileName}</strong>
                ) : (
                  <>
                    Choose a document or drag &amp; drop{" "}
                    <em>(PDF, PNG, JPG, DOC, DOCX up to 10MB)</em>
                  </>
                )}
              </span>
            </div>
          </div>
          <span className="file-upload-hint">
            Supported file types: PDF, PNG, JPG, JPEG, DOC, DOCX
          </span>
        </div>
      </div>

      <button className="button button--orange form-submit" type="submit">
        Submit Application
        <ArrowIcon />
      </button>
      <p className="form-note">
        Submitting opens your email client pre-populated with your application
        details addressed to {contactInfo.enquiry}.
      </p>
    </form>
  );
}
