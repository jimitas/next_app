import styles from "@/styles/Home.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>

      <p className={styles.description}>
        <code className={styles.code}>pages/{props.page}.js</code>{" "}
      </p>
    </div>
  );
}
