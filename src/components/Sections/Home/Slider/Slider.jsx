import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDynamicSlider } from "../../../../hooks/DynamicLang";
import { baseImgUrl } from "../../../../axios_services/BaseUrl";
import { useTranslation } from "react-i18next";

export function SliderTop() {
const { t, i18n } = useTranslation();
const [sliderData, setsliderData] = useState([]);
const [activeSlide, setActiveSlide] = useState(0);
const{lang}=useParams();
const navigate=useNavigate();
const{data}=useDynamicSlider();

useEffect(()=>{
  if (data) {
   
    
    setsliderData(data.$values)
  }
  else{
    setsliderData([]);
  }
},[data])





  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    customPaging: function (i) {
      return (
        <button className={`dot-button ${i === activeSlide ? "active" : ""}`}>
          <div className="dot-progress">
            <div className="progress-fill"></div>
          </div>
        </button>
      );
    },
  };

  return (
    <section className="hero-section">
      <Slider {...settings} className="hero-slider">
        {sliderData.map((slide, index) => (
          <div key={index} className="slide-content">
            
            <img
           
              src={`${baseImgUrl}${slide.imageFile.path}${slide.imageFile.fileName}`}
              className="slide-image"
            />
            <div className="slider_backdrop_filter">
              <div className="slide-text-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-buttons">
                  <button
                    className="slide-button primary"
                    onClick={() =>
                      navigate(lang ? `/${lang}/contact` : "/contact")
                    }
                  >
                    {t('contact')}
                  </button>
                  <button
                    className=" slide-button secondary"
                    onClick={() =>
                      navigate(lang ? `/${lang}/aboutus` : "/aboutus")
                    }
                  >
                    {t('company')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
