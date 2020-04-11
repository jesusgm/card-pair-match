import React from "react";
import "./font-awesome/css/all.min.css";
import "./line-awesome/css/line-awesome.min.css";

function Icon({ font, name, brand, spin, size, pulse, className }) {
  return (
    <span
      className={`icon ${spin ? "fa-spin" : ""} ${pulse ? "fa-pulse" : ""} ${
        brand ? "fab" : "fa"
      } ${size ? `fa-${size}` : ""} ${font}-${name} ${className}`}
    />
  );
}

Icon.defaultProps = {
  font: "fa",
  brand: false,
  spin: false,
  pulse: false,
  size: "",
  className: ""
};

export default Icon;
