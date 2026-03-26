import { useReducer } from "react";
import Card from "./Card";
import style from './style.module.css'

const initialState = {
  card: 0,
  background: "bg-primary",
};

function UseReducer01_Cards() {
  const reducer = (state, action) => {
    switch (action) {
      case "NEXT_CARD":
        return {
          ...state,
          card: state.card === 2 ? 0 : state.card + 1,
        };
      case "NEXT_BACKGROUND":
        return {
          ...state,
          background:
            state.background === "bg-primary"
              ? "bg-secondary"
              : state.background === "bg-secondary"
                ? `bg-success`
                : `bg-primary`,
        };

      default:
        break;
    }
      };
      const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className={style.wrap}>
      {state.card === 0 && <Card bgClass={state.background} info={{ name: "John Doe" }} />}
      {state.card === 1 && <Card bgClass={state.background} info={{ name: "Homer Simpson" }} />}
      {state.card === 2 && <Card bgClass={state.background} info={{ name: "Piter Parker" }} />}
      <div className="flex-column justify-content-between">
        <button
          id="next-card"
          type="button"
          className="btn btn-outline-primary m-2"
          onClick={() => dispatch("NEXT_CARD")}
        >
          Next card
        </button>
        <button
          id="next-bg"
          type="button"
          className="btn btn-outline-primary m-2"
          onClick={() => dispatch("NEXT_BACKGROUND")}
        >
          Next background
        </button>
      </div>
    </section>
  );
}

export default UseReducer01_Cards;
