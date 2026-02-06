import React from "react";
import cn from "classnames";
import Icon from "../icon";
import styles from "./styles.module.css";

function Card(props) {
  const { value, visible, matched, color, onFlip } = props;

  return (
    <div
      className={cn(styles.card, visible && styles.visible, matched && styles.matched)}
      onClick={() => onFlip()}
    >
      <div className={cn(styles['card-face'], styles['card-front'])}>
        <span style={{ color: color }}>
          <Icon name={value} />
        </span>
      </div>
      <div className={cn(styles['card-face'], styles['card-back'])}>
        <Icon name="question" />
      </div>
    </div>
  );
}

export default Card;
