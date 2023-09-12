import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Decrement = ({ counter, setCounter }) => {
  return (
    <div>
      <button className="decrement" onClick={() => setCounter(counter - 1)}>
        <FontAwesomeIcon icon={faMinus} size="2xl" />
      </button>
    </div>
  );
};

export default Decrement;
