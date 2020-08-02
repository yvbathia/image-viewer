import React, { useState } from "react";
import Layout from "../../components/Layoout";
import style from "./Home.module.scss";
import ImageUploader from "../ImageUploader";
import ImageCarousel from "../ImageCarousel";
import ImageView from "../ImageView";
import HR from "../../components/HR";

const Home = () => {
  const [pics, setPics] = useState([]);
  return (
    <Layout>
      <div className={style.root}>
        <div className={style.uploadPanel}>
          <ImageUploader pics={pics} setPics={setPics} />
        </div>
        <div className={style.viewer}>
          <ImageCarousel pics={pics} />
          {pics.length > 0 && <HR />}
          <ImageView pics={pics} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
