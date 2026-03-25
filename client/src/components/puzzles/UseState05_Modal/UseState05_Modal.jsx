import React, { useState } from "react";
import Modal from "./Modal";

function UseState05_Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="main">
      {isOpen ? (
        <Modal setIsOpen={setIsOpen}></Modal>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-success">
          Open Modal
        </button>
      )}
    </section>
  );
}

export default UseState05_Modal;
