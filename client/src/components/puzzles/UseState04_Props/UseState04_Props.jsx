import React, { useState } from "react";
import Card from "./Card";

function UseState04_Props() {
  const [isVisible, setIsVisible] = useState(true);

  const info = {
    name: "Linus Torvalds",
    dateBirth: "28.12.1969",
  };
  return <>{isVisible && <Card info={info} setIsVisible={setIsVisible} />}</>;
}

export default UseState04_Props;
