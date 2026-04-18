import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
        {/* <p className={`${styles.title} ${styles.description}`}>Multiple ClassName</p> */}
      <h2 className={styles.title}>CSS Modules</h2>
      <p className={styles.description}>
        This is a scoped CSS example in React.
      </p>

      <button className={styles.button}>Click Me</button>
       
    </div>
  );
};

export default Card;