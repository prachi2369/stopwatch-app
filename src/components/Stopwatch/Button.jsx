// Button.js
import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = memo(({ onClick, icon, title }) => (
  <button className="stopwatch-button" onClick={onClick} title={title}>
    <FontAwesomeIcon icon={icon} />
  </button>
));

export default Button;
