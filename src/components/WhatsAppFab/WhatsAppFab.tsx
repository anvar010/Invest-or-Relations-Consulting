import styles from "./WhatsAppFab.module.css";

const WHATSAPP_NUMBER = "971500000000";
const WHATSAPP_MESSAGE =
  "Hello Nicola, I would like to arrange a confidential introduction call.";

const WhatsAppIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.157-.394.157-.73.057-1.146-.13-.61-.6-.696-1.532-1.146-.157-.072-.314-.144-.487-.244zM16.225 30c-2.207 0-4.39-.604-6.302-1.7L3 30l1.748-6.692C3.55 21.29 2.92 19.04 2.92 16.7 2.92 9.39 8.866 3.435 16.225 3.435c3.563 0 6.92 1.39 9.443 3.92 2.523 2.532 3.913 5.892 3.913 9.46 0 7.307-5.948 13.184-13.356 13.184zm0-24.13c-6.04 0-10.953 4.913-10.953 10.948 0 2.062.573 4.07 1.66 5.806l.258.415-1.046 3.996 4.106-1.075.4.244c1.674 1 3.598 1.53 5.575 1.53 6.034 0 10.946-4.91 10.946-10.946.005-5.99-5.005-10.918-10.946-10.918z" />
  </svg>
);

export default function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Message Nicola on WhatsApp"
    >
      <span className={styles.tooltip} aria-hidden="true">
        Need help? Chat with Nicola
      </span>
      <span className={styles.pulse} aria-hidden="true" />
      <span className={styles.icon}>
        <WhatsAppIcon />
      </span>
      <span className={styles.label}>WhatsApp Nicola</span>
    </a>
  );
}
