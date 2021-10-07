import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={() => {
          props.writeItem;
        }}
        // type="text"
        // value={inputText}
      />
      <button
        onClick={() => {
          props.submitItem;
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
