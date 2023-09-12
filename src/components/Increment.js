import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Increment = ({ counter, setCounter }) => {
  return (
    <div>
      <button className="increment" onClick={() => setCounter(counter + 1)}>
        <FontAwesomeIcon icon={faPlus} size="2xl" />
      </button>
    </div>
  );
};

export default Increment;
