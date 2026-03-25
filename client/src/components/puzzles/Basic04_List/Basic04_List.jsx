import React from 'react';

function Basic04_List() {
  const arr = ['CIN', 'NA', 'MON', 'DO','GE']
  return (
    <ul className="list">
      {arr.map((el,i) => (
        <li key={i} className="list-item">{el}</li>
      ))}
    </ul>
  );
}

export default Basic04_List;