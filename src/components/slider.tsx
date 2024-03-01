import styles from "./slider.module.css";
import React, { useState } from "react";
import { SliderProps } from "./slider.props";
import arrow from "../icons/right-arrow-svgrepo-com (1).svg";
import cn from "classnames";

export const Slider: React.FC<SliderProps> = ({ reviews }): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [opacitySlide, setOpacitySlide] = useState<boolean>(false);

  const handleArrow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (opacitySlide) {
      return;
    }
    const direction = e.currentTarget.dataset.name;
    setOpacitySlide(true);
    setTimeout(() => {
      setOpacitySlide(false);
      if (direction === "arrow_right") {
        setCurrentSlide((state) => {
          if (state + 1 > reviews.length - 1) {
            return 0;
          }
          return state + 1;
        });
      } else if (direction === "arrow_left") {
        setCurrentSlide((state) => {
          if (state - 1 < 0) {
            return reviews.length - 1;
          }
          return state - 1;
        });
      }
    }, 300);
  };

  return (
    <div className={styles.slider}>
      <div
        className={cn(
          styles.slider__slide,
          opacitySlide && styles.slider__slide__oppasyty
        )}
      >
        <div className={styles.slider__description}>
          <div className={styles.slider__title}>
            {reviews[currentSlide].text}
          </div>
        </div>
        <div
          className={styles.slider__imageContainer}
          style={{ backgroundImage: `url(${reviews[currentSlide].image})` }}
        >
          {/* <img
            className={styles.slider__image}
            alt="image_slider"
            src={reviews[currentSlide].image}
          /> */}
        </div>
      </div>
      <button
        onClick={handleArrow}
        data-name="arrow_right"
        className={cn(
          styles.slider__arrow,
          reviews.length - 1 === currentSlide && styles.slider__arrow_hide
        )}
      >
        <img className={styles.slider__arrow} src={arrow} alt="control_arrow" />
      </button>
      <button
        onClick={handleArrow}
        data-name="arrow_left"
        className={cn(
          styles.slider__arrow_left,
          styles.slider__arrow,
          currentSlide === 0 && styles.slider__arrow_hide
        )}
      >
        <img className={styles.slider__arrow} src={arrow} alt="control_arrow" />
      </button>
      <div className={styles.slider__counter}>
        {currentSlide + 1} \ {reviews.length}
      </div>
    </div>
  );
};
