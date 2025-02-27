import styles from "../styles/components/TestimonialCard.module.css";

export default function TestimonialCard({ name, feedback }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.feedback}>{feedback}</p>
    </div>
  );
}
