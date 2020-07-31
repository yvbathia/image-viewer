import React, { useState } from "react";
import Layout from "../../components/Layoout";
import ImageUploader from "react-images-upload";
import style from "./Home.module.scss";
import InputButton from "../../components/InputButton/inputButton";

const Home = () => {
  const [pics, setPics] = useState([]);
  const onDrop = (e) => {
    const listOfFiles = [];
    Object.keys(e.target.files).forEach((index) => {
      const fileObj = {};
      fileObj.tag = "";
      fileObj.img = e.target.files[index];
      listOfFiles.push(fileObj);
    });
    setPics(listOfFiles);
  };
  const setTag = (value, index) => {
    console.log(value, index);
    const updatePics = pics;
    updatePics[index]["tag"] = value;
    setPics(updatePics);
  };
  console.log(pics);
  return (
    <Layout>
      <div>Home Page</div>
      {/* <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        withPreview
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      /> */}
      <input type="file" multiple name="file" onChange={onDrop} accept=".jpg,.jpeg,.png" />
      <div>
        {pics.map((element, index) => (
          <div>
            {element.img && (
              <>
                <span>{element.img.name}</span>
                {/* <img
                  className={style.img}
                  src={URL.createObjectURL(element.img)}
                /> */}
                <InputButton onSubmit={(val) => setTag(val, index)} />
              </>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
