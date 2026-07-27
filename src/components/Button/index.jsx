import styles from "./Button.module.css";

const ButtonLink = ({
  type = "button",
  btnText,
  linkVal,
  style = "primary"
}) => {

  let element;
  let btnStyle;

  if (style === "secondary") {
    btnStyle = styles.secondary;
  } else {
    btnStyle = styles.primary;
  }

  if (type === "link") {
    element = (
      <a className={`${styles.btn} ${btnStyle}`} href={linkVal}>{btnText}</a>
    );
  } else {
    element = (
      <button className={`${styles.btn} ${btnStyle}`}>{btnText}</button>
    );
  }

  return (
    element
  )
};

export default ButtonLink;