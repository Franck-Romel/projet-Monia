import LeadForm from "./LeadForm";

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="button-icon">
    <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="check-icon">
    <path d="m5 10 3.1 3.1L15 6.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const steps = [
  ["01", "Tell us about your car", "Share the year, make, model, mileage and a few photos. We’ll review the vehicle and local rental demand."],
  ["02", "Review your plan", "We explain the expected range, operating costs and responsibilities in writing before you decide."],
  ["03", "We manage the rental", "Once approved, we coordinate marketing, bookings, renter verification, handoffs and vehicle care."],
];

const benefits = [
  ["Demand-led pricing", "Rates and availability are adjusted around season, vehicle class and local demand."],
  ["Professional coordination", "We handle inquiries, scheduling, renter communication and the day-to-day logistics."],
  ["Vehicle oversight", "Documented inspections, tracking and maintenance coordination help protect your asset."],
  ["Clear reporting", "You receive a straightforward summary of bookings, expenses and your share of the revenue."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <img className="hero-image" src="https://luxury-car-partners.brighclik.chatgpt.site/hero-luxury-cars.png" alt="Two premium vehicles outside a modern home" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Lavish Rental home">
            <span className="brand-mark">LR</span>
            <span>Lavish Rental</span>
          </a>
          <div className="nav-links">
            <a href="tel:+14383772331">438-377-2331</a>
            <a className="nav-cta" href="#apply">List your vehicle</a>
          </div>
        </div>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">Greater Montréal · Vehicle Partner Program</p>
            <h1>Put your luxury car <em>to work.</em></h1>
            <p className="hero-lede">
              Instead of waiting months to sell, let us manage the rental while
              your vehicle generates monthly income.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#apply">
                Get a vehicle estimate <ArrowIcon />
              </a>
              <a className="text-link" href="#process">See how it works</a>
            </div>
            <ul className="trust-list" aria-label="Program benefits">
              <li><CheckIcon /> You keep ownership</li>
              <li><CheckIcon /> We manage the day-to-day</li>
              <li><CheckIcon /> Clear written agreement</li>
            </ul>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span /> Scroll to explore</div>
      </section>

      <section className="proof-strip" aria-label="Eligible vehicle examples">
        <p>SELECT PREMIUM VEHICLES</p>
        <div><span>Mercedes-Benz</span><span>Porsche</span><span>BMW</span><span>Audi</span><span>Land Rover</span><span>Lexus</span></div>
      </section>

      <section className="intro-section shell" id="process">
        <div>
          <p className="section-kicker">A smarter alternative</p>
          <h2>Your car. Our operation.<br />Shared opportunity.</h2>
        </div>
        <p className="section-intro">
          We connect qualified vehicles with suitable renters and coordinate the
          details—from marketing and booking to handoffs and ongoing care—under
          an agreement you review before anything begins.
        </p>
      </section>

      <section className="process-section">
        <div className="shell">
          <div className="section-heading">
            <p className="section-kicker">How it works</p>
            <h2>Simple from day one.</h2>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, copy]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section shell">
        <div className="benefit-statement">
          <p className="section-kicker">What we manage</p>
          <h2>You provide the vehicle.<br />We build the demand.</h2>
          <p>Keep your time for what matters while an experienced operating team coordinates the rental activity.</p>
        </div>
        <div className="benefits-list">
          {benefits.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="fit-section">
        <div className="shell fit-grid">
          <div>
            <p className="section-kicker">Is your vehicle a fit?</p>
            <h2>Built for premium cars people want to drive.</h2>
            <p className="fit-copy">We’re currently reviewing select 2015–2023 vehicles in clean condition. Final eligibility depends on condition, history, market demand and insurance requirements.</p>
          </div>
          <ul className="fit-list">
            <li><CheckIcon /><span><strong>Premium makes</strong>Luxury sedans, SUVs, sports cars and select EVs</span></li>
            <li><CheckIcon /><span><strong>Presentable condition</strong>Clean interior, exterior and up-to-date servicing</span></li>
            <li><CheckIcon /><span><strong>Greater Montréal</strong>Available for inspection and managed handoffs</span></li>
            <li><CheckIcon /><span><strong>Flexible availability</strong>Choose the availability plan discussed in your agreement</span></li>
          </ul>
        </div>
      </section>

      <section className="faq-section shell">
        <div className="faq-title">
          <p className="section-kicker">Before you decide</p>
          <h2>Common questions.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>How much could my car earn?</summary>
            <p>It depends on the model, condition, availability, season and rental demand. We provide a personalized estimate rather than advertising a guaranteed amount.</p>
          </details>
          <details>
            <summary>Do I still own my vehicle?</summary>
            <p>Yes. You keep ownership. The management agreement defines when the car is available, how revenue and costs are handled, and how either party may end the arrangement.</p>
          </details>
          <details>
            <summary>Who handles renters and bookings?</summary>
            <p>Our operating team coordinates renter communication, verification, scheduling, handoffs and return inspections according to the agreed process.</p>
          </details>
          <details>
            <summary>What about insurance?</summary>
            <p>The vehicle must meet the insurance requirements for the program before any rental begins. Coverage, deductibles and claim responsibilities must be stated clearly in your final agreement.</p>
          </details>
        </div>
      </section>

      <section className="apply-section" id="apply">
        <div className="shell apply-grid">
          <div className="apply-copy">
            <p className="section-kicker">Get your estimate</p>
            <h2>Let’s see what your car could do.</h2>
            <p>Send the basics. We’ll review your vehicle and reply with the next step—no commitment required.</p>
            <div className="response-note"><span>Usually replies within</span><strong>1 business day</strong></div>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="brand"><span className="brand-mark">LR</span><span>Lavish Rental</span></div>
          <div className="footer-contact">
            <a href="tel:+14383772331">438-377-2331</a>
            <a href="mailto:lavishrental514@gmail.com">lavishrental514@gmail.com</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="legal shell">Income is not guaranteed. Estimates vary by vehicle, availability, expenses and market demand. Final terms are subject to vehicle inspection, insurance approval and a signed management agreement.</p>
      </footer>
    </main>
  );
}
