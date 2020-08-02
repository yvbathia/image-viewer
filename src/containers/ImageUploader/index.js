import React from "react";
import style from "./ImageUploader.module.scss";
import InputButton from "../../components/InputButton/inputButton";

const ImageUploader = ({ pics, setPics }) => {
  const onDrop = (e) => {
    if (Object.keys(e.target.files).length > 3) {
      alert("Only 3 immage allowed at a time");
    } else {
      const listOfFiles = [];
      Object.keys(e.target.files).forEach((index) => {
        const fileObj = {};
        fileObj.tag = "";
        fileObj.img = e.target.files[index];
        listOfFiles.push(fileObj);
      });
      setPics([...pics, ...listOfFiles]);
    }
  };
  const setTag = (value, index) => {
    const updatePics = [...pics];
    updatePics[index]["tag"] = value;
    setPics(updatePics);
  };
  return (
    <div className={style.root}>
      <label for="choose-file" id="choose-file-label" className={style.label}>
        Upload Document
      </label>
      <input
        type="file"
        multiple
        name="file"
        onChange={onDrop}
        id="choose-file"
        accept=".jpg,.jpeg,.png"
        style={{ display: "none" }}
      />
      <div>
        {pics.map((element, index) => (
          <div>
            {element.img && (
              <>
                {element.tag === "" && (
                  <div className={style.tagContainer}>
                    <span>{element.img.name}</span>
                    <InputButton onSubmit={(val) => setTag(val, index)} />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
