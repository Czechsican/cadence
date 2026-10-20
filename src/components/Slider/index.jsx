import { useRef, useState } from "react";
import ButtonLink from "../Button";
import styles from  "./Slider.module.css";



export default function Slider({slides}) {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // const handleTouchStart = (e) => {
  //   setStartX(e.touches[0].clientX);
  // };

  // const handleTouchEnd = (e) => {
  //   if (startX === null) return;

  //   const endX = e.changedTouches[0].clientX;
  //   const distance = startX - endX;

  //   if (Math.abs(distance) > 50) {
  //     distance > 0 ? next() : previous();
  //   }

  //   setStartX(null);
  // };

  return (
    <section className={styles.carouselWrapper}>
      <div
        className={styles.carousel}
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <article className={styles.slide} key={index}>
              <img src={`${slide.image}?auto=format&fit=crop&w=1200&q=80`} />

              <div className={styles.slideOverlay}>
                <div className={styles.slideContent}>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <ButtonLink btnText={"Explore →"}/>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className={`${styles.carouselButton} ${styles.previous}`}
          onClick={previous}
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          className={`${styles.carouselButton} ${styles.next}`}
          onClick={next}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <div className={styles.carouselFooter}>
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${current === index ? styles.active : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
