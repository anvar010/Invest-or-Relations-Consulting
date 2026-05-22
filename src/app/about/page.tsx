import CTASection from "@/components/CTASection/CTASection";
import Reveal from "@/components/Reveal/Reveal";
import { seo } from "@/config/seo";
import styles from "./page.module.css";

export const metadata = seo.about;

export default function AboutPage() {
  return (
    <>
      <section className={styles.heroSplit}>
        <Reveal className={styles.heroLeft}>
          <span className={styles.verticalLabel}>Investor Relations Consulting</span>
          <img
            src="/image1.jpg"
            alt="Nicola Beer"
            className={styles.heroPortrait}
          />
          <img
            src="/nicola-about1.webp"
            alt="Nicola Beer"
            className={styles.heroPortraitTablet}
          />
          <div className={styles.heroImageOverlay} aria-hidden="true" />
          <div className={styles.heroNameplate}>
            <span className={styles.heroNameplateLabel}>About</span>
            <span className={styles.heroNameplateName}>Nicola Beer</span>
            <span className={styles.heroNameplateRule} aria-hidden="true" />
            <span className={styles.heroNameplateTitle}>
              Investor Relations &amp; Strategic Partnerships
            </span>
          </div>
          <div className={styles.cornerArc} aria-hidden="true" />
        </Reveal>

        <Reveal delay={0.15} className={styles.heroRight}>
          <div className={styles.eyebrow}>About</div>
          <h1 className={styles.heroTitle}>
            About<em>Nicola Beer</em>
          </h1>
          <div className={styles.heroBody}>
            <p>
              Investor Relations Consulting is a relationship-led consultancy focused on
              strategic introductions, investor relations consulting, fundraising
              relationships, executive search, and long-term partnership development
              across GCC and international financial markets.
            </p>
            <p>
              Founded by Nicola Beer, the business brings together over 19 years of
              experience building professional relationships, executive networks, and
              commercially driven partnerships across executive search, investor
              relations, business development, strategic partnerships, fundraising
              relationships, and relationship management within Dubai and
              international markets.
            </p>
            <p>
              The consultancy works across Dubai and Abu Dhabi in the UAE, Riyadh and
              Jeddah in Saudi Arabia, Qatar, Bahrain, London, Geneva, and wider international
              financial centres.
            </p>
          </div>
          <div className={styles.locationPills}>
            {["Dubai", "Abu Dhabi", "Riyadh", "Jeddah", "Qatar", "Bahrain", "London", "Geneva"].map((city) => (
              <span key={city} className={styles.locationPill}>{city}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.approachSection}>
        <Reveal className={styles.approachInner}>
          <div className={styles.eyebrow}>Relationship-Led Approach</div>
          <div className={styles.approachGrid}>
            <div className={styles.approachLeft}>
              <h2 className={styles.approachTitle}>
                Personalised, <em>Discreet</em> Advisory Built on Long-Term Relationships
              </h2>
              <p>
                Rather than operating as a faceless organisation, Nicola offers a more
                personalised, relationship-led approach built around discretion, long-term
                professional connections, and commercially aligned introductions.
              </p>
              <p>
                With experience spanning FTSE 100 global recruitment consultancies and
                boutique executive search firms, the consultancy combines the reach and
                structure of larger organisations with the flexibility and personal
                attention of a more tailored advisory model.
              </p>
            </div>
            <div className={styles.approachRight}>
              <p>
                Nicola has supported executive search, strategic hiring, and
                relationship-led introductions across investor relations, private banking,
                placement, fundraising, and investment markets, including work involving
                CIOs, private equity teams, placement professionals, and senior private
                banking and investor-facing professionals across GCC and international
                financial centres.
              </p>
              <p>
                Drawing on international market knowledge and relationships across key
                financial centres, the business provides consultative support to
                investment firms, private banks, family offices, and investor-facing
                professionals navigating strategic partnerships, executive search,
                fundraising relationships, and long-term commercial growth across GCC and
                international markets.
              </p>
            </div>
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.experienceNumber}>
              19+
              <span>Years of Experience</span>
            </div>
            <div className={styles.experienceDivider} aria-hidden="true" />
            <p className={styles.experienceText}>
              Building professional relationships and commercially driven partnerships
              across Dubai and international markets.
            </p>
          </div>
        </Reveal>
      </section>

      <section className={styles.focusSection}>
        <Reveal className={styles.focusInner}>
          <div className={styles.eyebrow}>Areas of Focus</div>
          <h2 className={styles.focusTitle}>
            Specialist Areas Across <em>Private Wealth &amp; Investment Markets</em>
          </h2>
          <ul className={styles.focusGrid}>
            {[
              "Investor Relations Consulting",
              "Strategic Partnerships",
              "Investor Introductions",
              "Placement Consulting",
              "Fundraising Relationships",
              "Capital Raising Relationships",
              "Institutional Sales",
              "Distribution",
              "Family Office Relationships",
              "Private Banking Relationships",
              "Alternative Investment Networks",
              "GCC Investment Networks",
              "Executive Search & Talent Advisory",
            ].map((item, i) => (
              <li key={item} className={styles.focusItem}>
                <span className={styles.focusNumber}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.focusLabel}>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className={styles.approachSection}>
        <Reveal className={styles.approachInner}>
          <div className={styles.approachGrid}>
            <div className={styles.approachSticky}>
              <div className={styles.eyebrow}>International Network</div>
              <h2 className={styles.approachTitle}>
                Trusted Relationships Across <em>GCC &amp; International Financial Centres</em>
              </h2>
            </div>
            <div className={styles.approachContent}>
              <p>
                The consultancy supports relationship development and strategic introductions
                across private banking, investor relations, fundraising, institutional sales,
                placement consulting, wealth management, and investor-facing commercial
                functions within GCC and international markets.
              </p>
              <blockquote className={styles.lightQuote}>
                &ldquo;The focus is on building trusted long-term professional relationships
                and commercially aligned partnerships within private wealth and investment
                markets.&rdquo;
              </blockquote>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection
        paragraph="Arrange a confidential introduction call to discuss strategic partnerships, investor introductions, fundraising relationships, executive opportunities, or commercially aligned professional connections within private wealth and investment markets."
      />
    </>
  );
}
