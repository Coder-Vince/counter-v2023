import React from "react";

const Reset = ({ setCounter }) => {
  return (
    <div className="container">
      <button className="reset" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
