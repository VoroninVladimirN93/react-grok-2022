import React, { useState } from "react";
import "./UseState02_Toggle.css";

function UseState02_Toggle() {
  const [isGreen, setIsGreen] = useState(false);

  return (
    <div
      className={isGreen ? "circle circle-green" : "circle circle-yellow"}
      onClick={() => setIsGreen(!isGreen)}
    ></div>
  );
}

export default UseState02_Toggle;
