import React from 'react';

function Modal({ setIsOpen }) {
  return (
    <div className="modal show d-block" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="btn btn-secondary btn-close"
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