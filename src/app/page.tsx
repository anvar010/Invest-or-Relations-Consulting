import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

const EMAIL = "mailto:nbeer@investorrelationsconsulting.com";

function TalentIcon({ name }: { name: string }) {
  const stroke = "#b8862b";
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 19c.8-3 3.4-4.6 6.5-4.6S17.7 16 18.5 19" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <rect x="4" y="13" width="3" height="7" />
          <rect x="10.5" y="9" width="3" height="11" />
          <rect x="17" y="5" width="3" height="15" />
        </svg>
      );
    case "handshake":
      return (
  <svg {...common} viewBox="0 0 24 24">
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);
    case "bank":
      return (
        <svg {...common}>
          <path d="M3 9l9-5 9 5" />
          <path d="M4 9h16" />
          <path d="M6 9v8M10 9v8M14 9v8M18 9v8" />
          <path d="M3 19h18" />
        </svg>
      );
    case "flag":
      return (
        <svg {...common}>
          <path d="M6 21V4" />
          <path d="M6 5h11l-2 3 2 3H6" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="2.6" />
          <circle cx="16" cy="9" r="2.6" />
          <path d="M3 18c.6-2.4 2.6-3.6 5-3.6s4.4 1.2 5 3.6" />
          <path d="M13 18c.6-2.4 2.6-3.6 5-3.6 1.1 0 2.1.3 3 .8" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" />
          <circle cx="5" cy="6" r="1.8" />
          <circle cx="19" cy="6" r="1.8" />
          <circle cx="5" cy="18" r="1.8" />
          <circle cx="19" cy="18" r="1.8" />
          <path d="M6.5 7L10.5 11M17.5 7L13.5 11M6.5 17L10.5 13M17.5 17L13.5 13" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16l4 4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <Reveal>
            <span className="eyebrow">Investor Relations · Strategic Partnerships</span>
            <h1>Investor Relations Consulting &amp; Strategic Partnerships Across the GCC</h1>
            <p>
              Relationship-led advisory, strategic introductions, and discreet professional
              connections across private wealth, fundraising, investor relations, and
              international investment markets.
            </p>
            <p className={styles.heroSubtle}>
              Supporting investment firms, private banks, family offices, placement professionals,
              and investor-facing businesses across Dubai, Abu Dhabi, Riyadh, London, Geneva, and
              broader GCC markets.
            </p>
            <div className="cta-row">
              <Link href="/contact" className="btn btn-primary">
                Arrange a Confidential Introduction Call
                <span className="btn-arrow" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </span>
              </Link>
              <a href={EMAIL} className="btn btn-secondary">
                Email Nicola
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className={styles.heroImage}>
            <img
              src="/Nicola Beer Investor Relations.png"
              alt="Nicola Beer — Investor Relations Consulting"
            />
          </Reveal>
        </div>
      </section>

      {/* INVESTOR RELATIONS CONSULTING */}
      <section className={`section section-beige ${styles.ircSection}`}>
        <div className={`container split ${styles.ircSplit}`}>
          <div>
            <span className={`eyebrow ${styles.ircEyebrow}`}>Investor Relations Consulting</span>
            <h2 className={styles.ircHeading}>Relationship-Led Strategic Introductions</h2>
            <div className={styles.ircOrnament} aria-hidden="true">
              <span className={styles.ircOrnamentLine} />
              <span className={styles.ircOrnamentDiamond} />
              <span className={styles.ircOrnamentLine} />
            </div>
            <p>
              Investor Relations Consulting supports strategic partnerships, investor-facing
              relationship development, fundraising networks, placement relationships, and
              commercially aligned introductions across GCC and international financial markets.
            </p>
            <p className={styles.muted}>
              The consultancy works discreetly with investment firms, private banks, family
              offices, investor relations teams, placement professionals, and strategic partners
              seeking long-term relationship development within private wealth and alternative
              investment markets.
            </p>
            <Link
              href="/investor-relations-consulting"
              className={`btn btn-secondary ${styles.learnMore} ${styles.ircCta}`}
            >
              Learn More
              <span className={styles.ircCtaArrow} aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={styles.ircFocusCard}>
            <span className={`eyebrow ${styles.ircEyebrow}`}>Areas of Focus</span>
            <ul className={styles.ircFocusList}>
              <li>Investor Relations Consulting</li>
              <li>Strategic Partnerships</li>
              <li>Placement &amp; Fundraising Relationships</li>
              <li>Private Banking &amp; Family Office Networks</li>
              <li>Investor Introductions</li>
              <li>Alternative Investment Networks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TALENT ADVISORY */}
      <section className={`section ${styles.ircSection}`}>
        <div className={`container split ${styles.ircSplit}`}>
          <div>
            <span className={`eyebrow ${styles.ircEyebrow}`}>Talent Advisory</span>
            <h2 className={styles.ircHeading}>Discreet Executive Search &amp; Talent Advisory</h2>
            <div className={styles.ircOrnament} aria-hidden="true">
              <span className={styles.ircOrnamentLine} />
              <span className={styles.ircOrnamentDiamond} />
              <span className={styles.ircOrnamentLine} />
            </div>
            <p>
              Relationship-led executive search and strategic hiring support across investor
              relations, institutional sales, fundraising, placement, private banking, capital
              introduction, and investor-facing commercial functions.
            </p>
            <p className={styles.muted}>
              Supporting firms across Dubai, the UAE, Saudi Arabia, London, Geneva, and wider
              GCC markets.
            </p>
            <Link
              href="/talent-advisory"
              className={`btn btn-secondary ${styles.learnMore} ${styles.ircCta} ${styles.ircCtaUpper}`}
            >
              Explore Talent Advisory
              <span className={styles.ircCtaArrow} aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={`${styles.ircFocusCard} ${styles.ircFocusCardOpen}`}>
            <span className={`eyebrow ${styles.ircEyebrow}`}>Areas Include</span>
            <ul className={styles.ircIconList}>
              {[
                { label: "Investor Relations", icon: "person" },
                { label: "Institutional Sales", icon: "chart" },
                { label: "Fundraising & Placement", icon: "handshake" },
                { label: "Private Banking Relationship Management", icon: "bank" },
                { label: "Capital Introduction", icon: "flag" },
                { label: "Distribution", icon: "people" },
                { label: "Strategic Partnerships", icon: "network" },
                { label: "Executive Search", icon: "search" },
              ].map((item) => (
                <li key={item.label}>
                  <span className={styles.ircIconCircle} aria-hidden="true">
                    <TalentIcon name={item.icon} />
                  </span>
                  <span className={styles.ircIconLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-beige">
        <div className="container split">
          <div className={styles.aboutImage}>
            <img src="/image1.jpg" alt="Nicola Beer" />
            <div className={styles.aboutBadge} aria-hidden="true">
              <span className={styles.aboutBadgeNumber}>19+</span>
              <span className={styles.aboutBadgeLabel}>Years of Experience</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">About Nicola</span>
            <h2>Relationship-Led Commercial Networking &amp; Strategic Partnerships</h2>
            <p>
              Over 19 years of experience building professional relationships, executive networks,
              and commercially focused partnerships across executive search, relationship
              management, business development, and investor-facing markets.
            </p>
            <p className={styles.muted}>
              Known for discreet relationship-building, strategic introductions, and long-term
              network development across Dubai and international markets.
            </p>
            <Link href="/about" className={`btn btn-secondary ${styles.learnMore}`}>
              About Nicola
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection />
    </>
  );
}
