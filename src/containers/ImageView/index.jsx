import React, { useState } from "react";
import style from "./ImageView.module.scss";
import _ from "lodash";

const ImageView = ({ pics }) => {
  const [searchValue, setSearchValue] = useState("");
  const delayed = _.debounce(v => setSearchValue(v), 500);
  const onChange = e => {
    delayed(e.target.value);
  };
  return (
    <div className={style.root}>
      {pics.length > 0 && (
        <div className={style.filter}>
          <span>Filter Images by tag name:</span>
          <input
            type="text"
            placeholder="Enter tag name"
            onChange={onChange}
          />
        </div>
      )}
      <div className={style.images}>
        {pics.length > 0 && (
          <>
            {pics.map((element) => (
              <>
                {element.tag === searchValue || searchValue === "" ? (
                  <div className={style.imgContainer}>
                    <img
                      className={style.img}
                      src={URL.createObjectURL(element.img)}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageView;
