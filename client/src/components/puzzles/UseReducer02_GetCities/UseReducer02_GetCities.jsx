import { useEffect } from "react";
import { useReducer } from "react";
import Row from "./Row";

const initialState = { cities: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    default:
      throw new Error("unexpected action type");
  }
};

function UseReducer02_GetCities() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = () => fetch(`${process.env.REACT_APP_URL}/cities`);

  useEffect(() => {
    fetchData()
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_CITIES", payload: data }));
  }, []);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="table-header" scope="col">
            ID
          </th>
          <th className="table-header" scope="col">
            Title
          </th>
          <th className="table-header" scope="col">
            Founded
          </th>
          <th className="table-header" scope="col">
            Area
          </th>
          <th className="table-header" scope="col">
            Official Language
          </th>
          <th className="table-header" scope="col">
            Population
          </th>
          <th className="table-header" scope="col">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {state.cities.length > 0 ? (
          state.cities.map((city) => <Row key={city.id} city={city} />)
        ) : (
          <tr>
            <td colSpan="7">Нет данных</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UseReducer02_GetCities;
