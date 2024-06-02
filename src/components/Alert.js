import React, { useState } from "react";

function Alert(props) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{props.alert}</span>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={handleClose}
            style={{ marginLeft: "auto" }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    )
  );
}

export default Alert;
