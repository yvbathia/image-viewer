import React, { useState } from "react";
import style from "./InputButton.module.scss";

const InputButton = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <div className={style.root}>
      <input placeholder="Enter tag for image" value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          console.log(value);
          onSubmit(value);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
export default InputButton;
