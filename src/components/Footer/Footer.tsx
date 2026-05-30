import Link from "next/link";
import styles from "./Footer.module.css";

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              Investor Relations <span>·</span> Consulting
            </div>
            <p className={styles.tagline}>
              Relationship-led advisory, strategic introductions, and discreet professional
              connections across private wealth and international investment markets.
            </p>
            <a
              href="https://www.linkedin.com/in/nicolabeer"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>

          <div>
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/investor-relations-consulting">Investor Relations Consulting</Link>
            <Link href="/talent-advisory">Talent Advisory</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="mailto:nicola@investorrelationsconsulting.com">
              nicola@investorrelationsconsulting.com
            </a>
            <p className={styles.address}>
              Dubai · UAE
              <br />
              Available across GCC &amp; international markets
            </p>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            Investor Relations Consulting Dubai is a relationship-led consultancy focused on
            strategic introductions, investor relations, strategic partnerships, fundraising
            relationships, executive search, and professional networking across Dubai, the
            UAE, Saudi Arabia, and broader GCC markets.
          </p>
          <p>
            Nicola Beer and Investor Relations Consulting do not provide financial,
            investment, legal, or regulatory advice, and do not advise on investment
            suitability, asset allocation, or investment performance.
          </p>
          <p>
            The business operates solely as a relationship-led consultancy supporting
            investor introductions, strategic partnerships, placement consulting, fundraising
            relationships, private banking relationships, and investor relations recruitment
            across GCC and international markets.
          </p>
          <p>
            All parties are responsible for conducting their own independent due diligence
            and obtaining appropriate professional advice where required.
          </p>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Investor Relations Consulting. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
