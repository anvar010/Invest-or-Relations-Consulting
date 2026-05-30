import Link from "next/link";
import styles from "./CTASection.module.css";

const DEFAULT_EMAIL = "mailto:nicola@investorrelationsconsulting.com";
const BOOKING_URL =
  "https://calendly.com/nicola-investorrelationsconsulting/confidential-introduction-call";

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
);

type CTASectionProps = {
  eyebrow?: string;
  heading?: string;
  paragraph?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  eyebrow = "Get in Touch",
  heading = "Arrange a Confidential Introduction Call",
  paragraph = "Arrange a confidential conversation to discuss strategic partnerships, executive opportunities, investor-facing relationships, discreet search requirements, or commercially aligned introductions within private wealth and investment markets.",
  primaryLabel = "Arrange a Confidential Introduction Call",
  primaryHref = BOOKING_URL,
  secondaryLabel = "Email Nicola",
  secondaryHref = DEFAULT_EMAIL,
}: CTASectionProps) {
  return (
    <section className={`section-dark ${styles.ctaSection}`}>
      <span className={`${styles.ctaSideOrnament} ${styles.ctaSideLeft}`} aria-hidden="true">
        <span className={styles.ctaSideLine} />
        <span className={styles.ctaSideDiamond} />
      </span>
      <span className={`${styles.ctaSideOrnament} ${styles.ctaSideRight}`} aria-hidden="true">
        <span className={styles.ctaSideDiamond} />
        <span className={styles.ctaSideLine} />
      </span>
      <div className={`container ${styles.ctaInner}`}>
        <span className={`eyebrow ${styles.ctaEyebrow}`}>{eyebrow}</span>
        <div className={styles.ctaTopOrnament} aria-hidden="true">
          <span className={styles.ctaTopLine} />
          <span className={styles.ctaTopDiamond} />
          <span className={styles.ctaTopLine} />
        </div>
        <h2 className={styles.ctaHeading}>{heading}</h2>
        <p className={styles.ctaParagraph}>{paragraph}</p>
        <div className={styles.ctaButtons}>
          <Link
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}
          >
            {primaryLabel}
            <span className={styles.ctaBtnArrow} aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
          <a href={secondaryHref} className={`${styles.ctaBtn} ${styles.ctaBtnGhost}`}>
            {secondaryLabel}
            <span className={styles.ctaBtnArrow} aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
