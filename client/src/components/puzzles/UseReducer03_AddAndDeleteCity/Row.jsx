import React from "react";

function Row({ city, dispatch }) {

  return (
    <tr className="table-row">
      <td>{city.id}</td>
      <td>{city.title}</td>
      <td>{city.founded}</td>
      <td>{city.area}</td>
      <td>{city.officialLanguage}</td>
      <td>{city.population}</td>
      <td>{city.description}</td>
      <td>
        <button onClick={() => dispatch({type:'SHOW_MODAL', payload:city.id})} className="btn btn-danger remove-city">
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default Row;
