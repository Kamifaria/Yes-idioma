import React, { useState } from 'react';
import background from './bg-galeria.jpg';
import style from './styles.module.css'; // Arquivo de estilo para o carrossel

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={style.carousel}>
      <div className={style.background}>
        <img src={background} alt="Background" />
      </div>
      <div className={style.carouselTitulo}>
        <h4>Galeria</h4>
        <h1>Conheça o Vilarejo Praia Hotel</h1>
      </div>
      <button onClick={prevSlide} className={style.prev}>
        &#10094;
      </button>
      <div className={style.slidesContainer}>
        {/* Mostra 3 imagens ao mesmo tempo */}
        {images.map((image, index) => {
          const position = (index - currentIndex + images.length) % images.length;

          return (
            <div
              key={index}
              className={`${style.slide} ${position === 1 ? style.active : ''}`}
              style={{
                transform: `translateX(${(position - 1) * 100}%)`, // Posicionamento horizontal
              }}
            >
              <img src={image} alt={`Slide ${index}`} className={style.image} />
            </div>
          );
        })}
      </div>
      <button onClick={nextSlide} className={style.next}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
