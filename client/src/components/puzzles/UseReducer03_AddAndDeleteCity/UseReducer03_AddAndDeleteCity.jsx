import { useEffect } from "react";
import { useReducer } from "react";
import Row from "./Row";
import AddCityForm from "./AddCityForm";
import DeleteCityModal from "./DeleteCityModal";

const initialState = { cities: [], modal: { isOpen: false , id: null} };

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    case "ADD_CITY": {
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    }
    case "DELETE_CITY": {
      const id = action.payload;
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== id),
      };
    }
    case "SHOW_MODAL":
      return {
        ...state,
        modal: { isOpen: true, id: action.payload },
      };
    case "HIDE_MODAL":
      return {
        ...state,
        modal: { isOpen: false , id: null},
      };
    default:
      throw new Error("unexpected action type");
  }
};

function UseReducer03_AddAndDeleteCity() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = () => fetch(`${process.env.REACT_APP_URL}/cities`);

  useEffect(() => {
    fetchData()
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_CITIES", payload: data }));
  }, []);
  return (
    <section>
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
            <th className="table-header" scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {state.cities.length > 0 ? (
            state.cities.map((city) => <Row key={city.id} city={city} dispatch={dispatch} />)
          ) : (
            <tr>
              <td colSpan="8">Нет данных</td>
            </tr>
          )}
        </tbody>
      </table>

      <AddCityForm dispatch={dispatch} />
      {state.modal.isOpen && <DeleteCityModal state={state} dispatch={dispatch} />}
    </section>
  );
}

export default UseReducer03_AddAndDeleteCity;
