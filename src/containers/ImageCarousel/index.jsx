import React from "react";
import style from "./ImageCarousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "../../Hooks/windowSize";

const ImageCarousel = ({ pics }) => {
  const windowSize = useWindowSize();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowSize.width > 992 ? 3 : 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.root}>
      {pics.length > 0 && (
        <Slider {...settings}>
          {pics.map((element) => (
            <div className={style.imgContainer}>
              <img
                className={style.img}
                src={URL.createObjectURL(element.img)}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ImageCarousel;
