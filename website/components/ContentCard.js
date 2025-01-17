import Link from "next/link";
import styles from "@styles/ContentCard.module.css";
import useSound from "use-sound";

export default function ContentCard({ url, title, description, style }) {
  const [playEnter] = useSound("/enter.mp3", { volume: 0.3 });

  return style === "outline" ? (
    <div className={`${styles.container} ${styles.outline}`}>
      <div className={styles.content}>
        <Link href={url}>
          <a onClick={playEnter}>
            <h5>{title}</h5>
            <p>{description}</p>
          </a>
        </Link>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href={url}>
          <a onClick={playEnter}>
            <h5>{title}</h5>
            <p>{description}</p>
          </a>
        </Link>
      </div>
      <img className={styles.kakashi} src="/kakashi.png" alt="" />
    </div>
  );
}
