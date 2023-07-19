import styles from "@/styles/Home.module.css";

export function Headline(props) {
  console.log(props)
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>

      <p className={styles.description}>
       {props.code}
      </p>

      <button onClick={props.onClick}>button</button>
    </div>

  );
}
