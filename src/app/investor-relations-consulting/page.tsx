import CTASection from "@/components/CTASection/CTASection";
import Reveal from "@/components/Reveal/Reveal";
import { seo } from "@/config/seo";
import styles from "./page.module.css";

const EMAIL = "mailto:nicola@investorrelationsconsulting.com";
const BOOKING_URL =
  "https://calendly.com/nicola-investorrelationsconsulting/confidential-introduction-call";

export const metadata = seo.investorRelations;

const APPROACH_ITEMS = [
  "Strategic Introductions",
  "Relationship Mapping",
  "Discreet Market Outreach",
  "Partnership Development",
  "Executive Search & Talent Advisory",
  "Investor-Facing Business Development",
];

const FOCUS_AREAS = [
  "Investor Relations Consulting",
  "Strategic Partnerships",
  "Executive Search & Talent Advisory",
  "Placement & Fundraising Relationships",
  "Private Banking & Family Office Networks",
  "Investor-Facing Business Development",
  "GCC & International Relationship Development",
];

const CLIENTS = [
  "Investment Firms",
  "Private Equity & Real Estate Funds",
  "Private Banks",
  "Family Offices",
  "Investor Relations Teams",
  "Placement Professionals",
  "Fundraising Professionals",
  "Strategic Partners",
  "Investor-Facing Business Development Professionals",
];

const REGIONS = [
  "Dubai",
  "Abu Dhabi",
  "Riyadh",
  "Jeddah",
  "Qatar",
  "Bahrain",
  "London",
  "Geneva",
];

export default function IRPage() {
  return (
    <>
      {/* HERO - editorial single column */}
      <section className={styles.heroEditorial}>
        <Reveal className={styles.heroEditorialInner}>
          <span className={styles.heroEyebrow}>Investor Relations</span>
          <h1 className={styles.heroEditorialTitle}>
            Investor Relations Consulting &amp; Strategic Introductions
          </h1>
          <div className={styles.heroEditorialBody}>
            <p>
              Investor Relations Consulting is a relationship-led advisory and strategic
              introductions consultancy supporting investment firms, private banks, family
              offices, placement professionals, and investor-facing businesses across
              Dubai, Abu Dhabi, Saudi Arabia, the GCC, London, Geneva, and international
              financial markets.
            </p>
            <p>
              The consultancy supports firms seeking to strengthen strategic relationships,
              expand trusted professional networks, and identify commercially aligned
              opportunities within private wealth and investment markets.
            </p>
          </div>
          <div className="cta-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Arrange a Confidential Introduction Call
              <span className="btn-arrow" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </span>
            </a>
            <a href={EMAIL} className="btn btn-secondary">
              Email Nicola
            </a>
          </div>
          <div className={styles.locationPills}>
            {REGIONS.map((r) => (
              <span key={r} className={styles.locationPill}>{r}</span>
            ))}
          </div>
          <div className={styles.heroDivider} aria-hidden="true" />
        </Reveal>
      </section>

      {/* STRATEGIC RELATIONSHIPS - light two column */}
      <section className={styles.approachSection}>
        <Reveal className={styles.approachInner}>
          <div className={styles.eyebrow}>Global Investment Markets</div>
          <div className={styles.approachGrid}>
            <div>
              <h2 className={styles.approachTitle}>
                Strategic Relationships Within <em>Global Investment Markets</em>
              </h2>
              <p>
                The business works with investment firms, fundraising teams, private banks,
                investor relations professionals, placement professionals, and strategic
                partners seeking discreet, relationship-driven support within
                investor-facing markets.
              </p>
            </div>
            <div>
              <p>
                The focus is on long-term relationship development, strategic partnerships,
                investor introductions, executive search, and commercially aligned
                opportunities across GCC and international financial markets.
              </p>
            </div>
          </div>

        </Reveal>
      </section>

      {/* APPROACH (numbered grid) */}
      <section className={styles.focusSection}>
        <Reveal className={styles.focusInner}>
          <div className={styles.eyebrow}>Our Approach</div>
          <h2 className={styles.focusTitle}>
            Relationship-Led <em>Advisory Engagements</em>
          </h2>
          <p className={styles.focusLead}>
            Each engagement begins with a confidential conversation to understand the
            firm&rsquo;s objectives, strategic priorities, and relationship requirements.
          </p>
          <ul className={styles.focusGrid}>
            {APPROACH_ITEMS.map((item, i) => (
              <li key={item} className={styles.focusItem}>
                <span className={styles.focusNumber}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.focusLabel}>{item}</span>
              </li>
            ))}
          </ul>
          <div className={styles.focusFooter}>
            <p>
              Where appropriate, the consultancy may also support direct introductions or
              carefully selected outreach to relevant professionals, strategic partners,
              private bankers, fundraising professionals, investor relations specialists, or
              investment industry networks.
            </p>
            <p>
              The approach is relationship-led, commercially focused, and built on
              discretion, trust, and long-term professional relationships.
            </p>
          </div>
        </Reveal>
      </section>

      {/* AREAS OF FOCUS (numbered) */}
      <section className={`${styles.focusSection} ${styles.focusAlt}`}>
        <Reveal className={styles.focusInner}>
          <div className={styles.eyebrow}>Areas of Focus</div>
          <h2 className={styles.focusTitle}>
            Specialist Areas Across <em>Private Wealth & Investment Markets</em>
          </h2>
          <ul className={styles.focusGrid}>
            {FOCUS_AREAS.map((item, i) => (
              <li key={item} className={styles.focusItem}>
                <span className={styles.focusNumber}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.focusLabel}>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* WHO WE WORK WITH - light two column */}
      <section className={styles.approachSection}>
        <Reveal className={styles.approachInner}>
          <div className={styles.approachGrid}>
            <div className={styles.approachSticky}>
              <div className={styles.eyebrow}>Who We Work With</div>
              <h2 className={styles.approachTitle}>
                Trusted by <em>Investment Firms & Investor-Facing Teams</em>
              </h2>
            </div>
            <div className={styles.approachContent}>
              <ul className={styles.lightList}>
                {CLIENTS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection
        paragraph="Arrange a confidential introduction call to discuss strategic partnerships, investor relations consulting, executive opportunities, fundraising relationships, discreet search requirements, or mutually beneficial professional introductions within private wealth and investment markets."
      />
    </>
  );
}
