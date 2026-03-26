function Modal({ dispatch, state }) {
  const id = state.modal.id;
  console.log(state);
  
  const deleteHandler = (id) => {
    fetch(`${process.env.REACT_APP_URL}/cities/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: "DELETE_CITY", payload: id });
    dispatch({ type: "HIDE_MODAL" });
  };

  return (
    <div className="modal show d-block"  role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              onClick={() => dispatch({ type: "HIDE_MODAL" })}
              type="button"
              className="btn btn-secondary cancel-delete"
              data-dismiss="modal"
            >X</button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => deleteHandler(id)}
              type="button"
              className="btn btn-danger confirm-delete"
              data-dismiss="modal"
            >
              Delete
            </button>
            <button
              onClick={() => dispatch({ type: "HIDE_MODAL" })}
              type="button"
              className="btn btn-secondary cancel-delete"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
