import Link from "next/link";
import Reveal from "@/components/Reveal";
import { seo } from "@/config/seo";
import styles from "./page.module.css";

const EMAIL = "nbeer@investorrelationsconsulting.com";
const MAILTO = `mailto:${EMAIL}`;

export const metadata = seo.contact;

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

const CHANNELS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: "WhatsApp", value: "Available on request", href: null, external: false },
  {
    label: "LinkedIn",
    value: "Nicola Beer",
    href: "https://www.linkedin.com/in/nicolabeer",
    external: true,
  },
  { label: "Based in", value: "Dubai, UAE", href: null, external: false },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO - editorial single column */}
      <section className={styles.heroEditorial}>
        <Reveal className={styles.heroEditorialInner}>
          <span className={styles.heroEyebrow}>Get in Touch</span>
          <h1 className={styles.heroEditorialTitle}>
            Arrange a Confidential Introduction Call
          </h1>
          <div className={styles.heroEditorialBody}>
            <p>
              Investor Relations Consulting supports strategic partnerships, investor
              introductions, executive search, fundraising relationships, and
              relationship-led professional connections across the GCC and international
              financial markets.
            </p>
            <p>
              The initial conversation is designed to explore whether there is alignment
              for a future meeting, strategic introduction, partnership opportunity,
              executive search requirement, or ongoing professional relationship.
            </p>
          </div>
          <div className="cta-row">
            <a href={MAILTO} className="btn btn-primary">
              Email Nicola
              <span className="btn-arrow" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </span>
            </a>
            <Link href="/about" className="btn btn-secondary">
              About Nicola
            </Link>
          </div>
          <div className={styles.locationPills}>
            {REGIONS.map((r) => (
              <span key={r} className={styles.locationPill}>{r}</span>
            ))}
          </div>
          <div className={styles.heroDivider} aria-hidden="true" />
        </Reveal>
      </section>

      {/* CONTACT - dark two column (matches network template) */}
      <section className={styles.networkSection}>
        <Reveal className={styles.networkInner}>
          <div className={styles.networkLeft}>
            <div className={`${styles.eyebrow} ${styles.eyebrowDark}`}>Contact</div>
            <h2 className={styles.networkTitle}>
              Direct, Discreet <em>Professional Channels</em>
            </h2>
            <p className={styles.networkLead}>
              Each enquiry is treated confidentially. A short response will follow to
              arrange a convenient time to speak.
            </p>
          </div>
          <div className={styles.networkRight}>
            <ul className={styles.contactList}>
              {CHANNELS.map((c) => (
                <li key={c.label} className={styles.contactRow}>
                  <span className={styles.contactLabel}>{c.label}</span>
                  <span className={styles.contactValue}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                      >
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* AVAILABILITY */}
      <section className={styles.approachSection}>
        <Reveal className={styles.approachInner}>
          <div className={styles.eyebrow}>Availability</div>
          <div className={styles.approachGrid}>
            <div>
              <h2 className={styles.approachTitle}>
                Available Across <em>GCC & International Financial Centres</em>
              </h2>
            </div>
            <div>
              <p>
                Based in Dubai and available for meetings across the UAE, Saudi Arabia,
                London, Geneva, and wider international financial centres.
              </p>
              <p>
                Calls and meetings can be arranged in person, by phone, or via secure
                video conference depending on convenience and discretion requirements.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
