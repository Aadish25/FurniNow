import styles from "./scarousel";

export default function Content() {
  return (
    <div style={styles.content} className="content">
      <div style={styles.items} className="items">
        <p style={styles.p}>New Arrival</p>
        <h1 style={styles.h1}>
          Discover Our <br /> New Collection
        </h1>
        <br />
        <p style={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <br />
        <button style={styles.button}>Buy Now</button>
      </div>
    </div>
  );
}
