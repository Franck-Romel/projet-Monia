"use client";

import { FormEvent, useState } from "react";

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="button-icon">
    <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function LeadForm() {
  const [opened, setOpened] = useState(false);

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = "New Lavish Rental vehicle partner inquiry";
    const body = [
      `Full name: ${form.get("Full name") ?? ""}`,
      `Phone number: ${form.get("Phone number") ?? ""}`,
      `Email: ${form.get("Email") ?? ""}`,
      `Vehicle: ${form.get("Vehicle") ?? ""}`,
      `Mileage: ${form.get("Mileage") ?? ""}`,
      "",
      `Message: ${form.get("Message") ?? ""}`,
    ].join("\n");

    setOpened(true);
    window.location.href = `mailto:lavishrental514@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="lead-form" onSubmit={submitLead}>
      <label>Full name<input name="Full name" type="text" placeholder="Your name" autoComplete="name" required /></label>
      <div className="two-fields">
        <label>Phone number<input name="Phone number" type="tel" placeholder="(514) 000-0000" autoComplete="tel" required /></label>
        <label>Email<input name="Email" type="email" placeholder="you@email.com" autoComplete="email" required /></label>
      </div>
      <div className="two-fields">
        <label>Vehicle<input name="Vehicle" type="text" placeholder="2021 Mercedes-Benz GLC" required /></label>
        <label>Mileage<input name="Mileage" type="text" placeholder="45,000 km" required /></label>
      </div>
      <label>Anything else?<textarea name="Message" rows={3} placeholder="Condition, availability, or questions" /></label>
      <label className="consent-row">
        <input name="Consent" type="checkbox" required />
        <span>I agree that Lavish Rental may contact me about my vehicle inquiry.</span>
      </label>
      <button className="form-button" type="submit">
        Prepare my inquiry <ArrowIcon />
      </button>
      <div className="form-status" aria-live="polite">
        {opened && <p className="success-message">Your email app has been opened. Review the prepared message and press Send.</p>}
      </div>
      <p className="form-note">Submitting opens a prepared email addressed directly to Lavish Rental.</p>
    </form>
  );
}
