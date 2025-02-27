import Image from "next/image";
import styles from "../styles/components/DestinationCard.module.css";

export default function DestinationCard({ image, title }) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        className={styles.image}
        width={300}
        height={200}
      />
      <h3 className={styles.title}>{title}</h3>
      <button className={styles.readMore}>Read More</button>
    </div>
  );
}
