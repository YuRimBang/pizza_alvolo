import React, { useEffect, useState } from 'react';
import '../css/Carousel.css';

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const carouselImages = document.querySelectorAll('.carousel-img');

    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const translateValue = `translateX(-${currentImageIndex * 100}%)`;
  const transitionStyle = currentImageIndex === 0? 'none' : '';

  return (
    <div className="main">
      <div className="carousel">
        <div className="carousel-img-wrapper" style={{ transform: translateValue, transition: transitionStyle }}>
          <img className="carousel-img" src="/main_img/1.jpg" alt="main_1" />
          <img className="carousel-img" src="/main_img/2.jpg" alt="main_2" />
          <img className="carousel-img" src="/main_img/3.jpg" alt="main_3" />
          <img className="carousel-img" src="/main_img/4.jpg" alt="main_4" />
          <img className="carousel-img" src="/main_img/1.jpg" alt="main_1" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;