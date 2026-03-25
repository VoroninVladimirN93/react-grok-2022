import React, { useState } from 'react';

function UseState03_Slider() {
  const [value, setValue] = useState(12);
  return (
    <>
      <input
        className="range"
        onChange={({ target }) => setValue(target.value)}
        type="range"
        step="12"
        min='0'
        max='120'
        defaultValue={value}
      ></input>
      <label className="label">Months: {value}</label>
    </>
  );
}

export default UseState03_Slider;