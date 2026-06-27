import CTASection from "@/components/CTASection/CTASection";
import Reveal from "@/components/Reveal/Reveal";
import { seo } from "@/config/seo";
import styles from "./page.module.css";

const EMAIL = "mailto:nicola@investorrelationsconsulting.com";
const BOOKING_URL =
  "https://calendly.com/nicola-investorrelationsconsulting/confidential-introduction-call";

export const metadata = seo.talentAdvisory;

const ROLES_RECRUITED = [
  "Private Equity (Associate to Partner/MD)",
  "Investment Management",
  "Chief Investment Officers (CIOs)",
  "Real Estate Investment & Asset Management",
  "M&A & Corporate Finance",
  "Leveraged Finance & Debt Capital Markets",
];

const FOCUS_AREAS = [
  "Investor Relations",
  "Institutional Sales",
  "Placement & Fundraising",
  "Capital Introduction",
  "Distribution",
  "Private Banking & Wealth Management",
  "Strategic Partnerships",
  "Investor-Facing Business Development",
  "Relationship Management",
  "Executive Search & Talent Advisory",
];

const CLIENT_SUPPORT = [
  "Executive Search",
  "Strategic Hiring Support",
  "Market Mapping",
  "Relationship-Led Introductions",
  "Investor-Facing Commercial Talent",
  "GCC & International Market Connectivity",
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

export default function TalentPage() {
  return (
    <>
      {/* HERO - editorial single column */}
      <section className={styles.heroEditorial}>
        <Reveal className={styles.heroEditorialInner}>
          <span className={styles.heroEyebrow}>Talent Advisory</span>
          <h1 className={styles.heroEditorialTitle}>
            Discreet Executive Search &amp; Relationship-Led Recruitment
          </h1>
          <div className={styles.heroEditorialBody}>
            <p>
              Talent Advisory provides discreet executive search and relationship-led
              recruitment support across private wealth, investor relations, fundraising,
              institutional sales, and investor-facing commercial functions within GCC and
              international financial markets.
            </p>
            <p>
              Based in Dubai and working across the UAE, Saudi Arabia, London, Geneva, and
              wider international markets, the consultancy supports investment firms,
              private banks, family offices, placement businesses, and investor-facing
              teams seeking commercially minded professionals with strong relationship
              management and business development experience.
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
          <div className={styles.heroDivider} aria-hidden="true" />
        </Reveal>
      </section>

      {/* APPROACH */}
      <section className={styles.approachSection}>
        <Reveal className={styles.approachInner}>
          <div className={styles.approachGrid}>
            <div className={styles.approachSticky}>
              <div className={styles.eyebrow}>Our Approach</div>
              <h2 className={styles.approachTitle}>
                Personalised, <em>Relationship-Led</em> Advisory
              </h2>
            </div>
            <div className={styles.approachContent}>
              <p>
                Rather than operating as a faceless organisation, Nicola offers a more
                personalised, relationship-led approach built around discretion, long-term
                professional connections, and commercially aligned introductions.
              </p>
              <p>
                With experience spanning FTSE 100 global recruitment consultancies and
                boutique executive search firms, the consultancy supports strategic hiring
                and relationship-led introductions across private banking, investor
                relations, fundraising, institutional sales, placement, and
                investor-facing commercial functions within GCC and international financial
                markets.
              </p>
              <p>
                The consultancy combines the reach and structure of larger organisations
                with the flexibility, discretion, and personal attention of a more tailored
                advisory model.
              </p>
              <p>
                Drawing on international market knowledge and relationships across key
                financial centres, the business provides consultative support to
                investment firms, private banks, and investor-facing professionals
                navigating strategic hiring, career moves, and long-term commercial growth
                across GCC and international markets.
              </p>
            </div>
          </div>

        </Reveal>
      </section>

      {/* AREAS OF FOCUS */}
      <section className={styles.focusSection}>
        <Reveal className={styles.focusInner}>
          <div className={styles.eyebrow}>Areas of Focus</div>
          <h2 className={styles.focusTitle}>
            Hiring & Relationship Development Across <em>Investor-Facing Markets</em>
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

      {/* ROLES I RECRUIT */}
      <section className={`${styles.focusSection} ${styles.focusAlt} ${styles.rolesSection}`}>
        <Reveal className={styles.focusInner}>
          <div className={styles.eyebrow}>Roles I Recruit</div>
          <h2 className={styles.focusTitle}>
            Roles I Recruit Across <em>Investment &amp; Finance</em>
          </h2>
          <ul className={styles.focusGrid}>
            {ROLES_RECRUITED.map((item, i) => (
              <li key={item} className={styles.focusItem}>
                <span className={styles.focusNumber}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.focusLabel}>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* FOR CLIENTS - light two col */}
      <section className={styles.approachSection}>
        <Reveal className={styles.approachInner}>
          <div className={styles.approachGrid}>
            <div className={styles.approachSticky}>
              <div className={styles.eyebrow}>For Clients</div>
              <h2 className={styles.approachTitle}>
                Strengthening <em>Commercial Capabilities & Strategic Networks</em>
              </h2>
            </div>
            <div className={styles.approachContent}>
              <p>
                We work with investment firms, private banks, family offices, and
                investor-facing businesses looking to strengthen their commercial
                capabilities and expand strategically aligned professional networks.
              </p>
              <p>
                The approach is relationship-driven, discreet, and commercially focused,
                with an emphasis on long-term partnerships and carefully considered
                introductions.
              </p>
              <p className={styles.listLead}>Support includes:</p>
              <ul className={styles.lightList}>
                {CLIENT_SUPPORT.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOR PROFESSIONALS - light two col */}
      <section className={styles.approachSection}>
        <Reveal className={styles.approachInner}>
          <div className={styles.eyebrow}>For Professionals</div>
          <div className={styles.approachGrid}>
            <div>
              <h2 className={styles.approachTitle}>
                Confidential Conversations for <em>Experienced Professionals</em>
              </h2>
            </div>
            <div>
              <p>
                Talent Advisory also supports experienced professionals confidentially
                exploring opportunities across investor relations, private banking,
                fundraising, institutional sales, strategic partnerships, and
                investor-facing business development.
              </p>
              <p>
                The consultancy works with professionals seeking commercially aligned
                opportunities within GCC and international financial markets.
              </p>
              <p>
                Initial conversations are informal, discreet, and relationship-led, with a
                focus on long-term professional alignment rather than transactional
                recruitment processes.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection
        paragraph="Arrange a confidential introduction call to discuss executive search requirements, strategic hiring, investor-facing opportunities, or commercially aligned professional introductions within private wealth and investment markets."
      />
    </>
  );
}
