import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header>
        <FontAwesomeIcon icon={faCalculator} />
        <span>React Counter</span>
      </header>
    </div>
  );
};

export default Header;
