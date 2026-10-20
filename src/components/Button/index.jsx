import React from "react";
import styles from "./Button.module.css";

const ButtonLink = ({
  label = "Button Text",
  href,
  variant = "primary",
  onClick,
}) => {
  const btnStyle = variant === "secondary" ? styles.secondary : styles.primary;

  if (href) {
    return (
      <a
        className={`${styles.btn} ${btnStyle} link`}
        href={href}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${styles.btn} ${btnStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonLink;
