import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ info , setIsVisible }) {
  return (
    <div class="card" style={{width: '18rem'}}>
      <div class="card-body">
        <h5 class="card-title">Name: {info.name}</h5>
        <p class="card-text">Date of Birth: {info.dateBirth} </p>
        <button onClick={() => setIsVisible(false)} class="btn btn-primary">
          Hide card
        </button>
      </div>
    </div>
  );
}

export default Card;
