import React, { useState, useRef } from 'react';
import background from './bg-palestrantes.png';
import style from './styles.module.css'; // Arquivo de estilo para o carrossel


function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const hotelRef = useRef()

  return (
    <div className={style.carousel}>
      <div className={style.background}>
        <img src={background} alt="" />
      </div>
      <div className={style.carouselTitulo}>
            <h4>Galeria</h4>
            <h1>Conheça o Vilarejo Praia Hotel</h1>
      </div>
      <button onClick={prevSlide} className={style.prev}>
        &#10094;
      </button>
      <div className={style.slidesContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? `${style.slide} ${style.active}`
                : style.slide
            }
          >
            <img src={image} width="960px" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={style.next}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
