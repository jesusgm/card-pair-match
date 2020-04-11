import React from "react";
import Icon from "../icon";
import "./styles.css";

function Card(props) {
  const { value, visible, matched, color, onFlip } = props;

  return (
    <div
      className={`card ${visible ? "visible" : ""} ${matched ? "matched" : ""}`}
      onClick={() => onFlip()}
    >
      <div className="card-face card-front">
        <span style={{ color: color }}>
          <Icon name={value} />
        </span>
      </div>
      <div className="card-face  card-back">
        <Icon name="question" />
      </div>
    </div>
  );
}

export default Card;
