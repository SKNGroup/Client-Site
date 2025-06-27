import React, { useEffect, useState } from 'react';
import { useServiceSpecial } from '../../../hooks/DynamicLang';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './ServiceSlider.scss';
import { baseImgUrl } from '../../../axios_services/BaseUrl';

export default function ServiceSlider() {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { data } = useServiceSpecial();

  useEffect(() => {
    if (data?.addinationImages?.$values) {
      setImages(data?.addinationImages?.$values);
    }
  }, [data]);

  const urls = images.map(img => `${baseImgUrl}${img.path}${img.fileName}`);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <div className="section">
    <div className="section-container">
      <Swiper
        className="swiper"
        modules={[ Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          430: { slidesPerView: 2 },
          768: { slidesPerView: 3 }
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide
            key={idx}
            onClick={() => { setPhotoIndex(idx); setIsOpen(true); }}
          >
            <img className='seting'
              src={`${baseImgUrl}${img.path}${img.fileName}`}
              alt={img.alt || `Slide ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <Lightbox
          mainSrc={urls[photoIndex]}
          nextSrc={urls[(photoIndex + 1) % urls.length]}
          prevSrc={urls[(photoIndex + urls.length - 1) % urls.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + urls.length - 1) % urls.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % urls.length)}
          
          reactModalProps={{
            preventScroll: true, 
            style: {
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10000
              },
              content: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'transparent',
                border: 'none',
                padding: 0,
                margin: 0,
                overflow: 'hidden'  
              }
            }
          }}
          
          
        />
      )}
    </div>
    </div>
  );
}