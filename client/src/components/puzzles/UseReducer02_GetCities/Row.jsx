import React from "react";

function Row({ city }) {
  return (
    <tr className="table-row">
      <td>{city.id}</td>
      <td>{city.title}</td>
      <td>{city.founded}</td>
      <td>{city.area}</td>
      <td>{city.officialLanguage}</td>
      <td>{city.population}</td>
      <td>{city.description}</td>
    </tr>
  );
}

export default Row;
