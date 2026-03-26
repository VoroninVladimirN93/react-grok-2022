import React from "react";

function AddCityForm({ dispatch }) {
  const addCity = (event) => {
    event.preventDefault();
    const { title, founded, area, officialLanguage, population, description } = event.target;

    const newCity = {
      title: title.value,
      founded: founded.value,
      area: area.value,
      officialLanguage: officialLanguage.value,
      population: population.value,
      description: description.value,
    };
    console.log(newCity);

    fetch(`${process.env.REACT_APP_URL}/cities`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newCity),
    }).then((response) => response.json().then((data) => dispatch({ type: "ADD_CITY", payload: data })));
  event.target.reset()};
  return (
    <form className="row g-3 mb-5" onSubmit={addCity}>
      <div>
        <input type="text" name="title" placeholder="Title" className="form-control"></input>
        <input type="number" name="founded" placeholder="Founded" className="form-control mt-1"></input>
      </div>
      <div>
        <input type="number" name="area" placeholder="Area" className="form-control"></input>
        <input
          type="text"
          name="officialLanguage"
          placeholder="Official Language"
          className="form-control mt-1"
        ></input>
      </div>
      <div>
        <input type="number" name="population" placeholder="Population" className="form-control"></input>
        <input type="text" name="description" placeholder="Description" className="form-control mt-1"></input>
      </div>
      <button className="btn btn-outline-success add-city" type="submit">
        Add City
      </button>
    </form>
  );
}

export default AddCityForm;
