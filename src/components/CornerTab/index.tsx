import styles from "./CornerTab.module.css";

const CornerTab = ({tabText = "Corner Tab", marginBottom = false, altColor = false }) => {

  const margBot = marginBottom ? `${styles.marginBottom}` : "";
  const alternateColor = altColor ? `${styles.alt}` : "";
  

  return <p className={`${styles.cornerTab} ${margBot} ${alternateColor}`}>{tabText}</p>
}

export default CornerTab