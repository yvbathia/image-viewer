import React, { useState } from "react";
import style from "./InputButton.module.scss";
import Button from "../Button";

const InputButton = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <div className={style.root}>
      <input
        placeholder="Enter tag for image"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        onClick={() => {
          console.log(value);
          onSubmit(value);
        }}
        value="Add Tag"
      />
    </div>
  );
};
export default InputButton;
