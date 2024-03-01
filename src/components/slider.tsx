import styles from "./slider.module.css";
import React, { useState } from "react";
import { SliderProps } from "./slider.props";
import arrow from "../icons/right-arrow-svgrepo-com (1).svg";
import cn from "classnames";

export const Slider: React.FC<SliderProps> = ({ reviews }): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleArrow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const direction = e.currentTarget.dataset.name;
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
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__slide}>
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
      <div
        onClick={handleArrow}
        data-name="arrow_right"
        className={styles.arrow}
      >
        <img className={styles.slider__arrow} src={arrow} alt="control_arrow" />
      </div>
      <div
        onClick={handleArrow}
        data-name="arrow_left"
        className={styles.arrow}
      >
        <img
          className={cn(styles.slider__arrow_left, styles.slider__arrow)}
          src={arrow}
          alt="control_arrow"
        />
      </div>
      <div className={styles.slider__counter}>
        {currentSlide} \ {reviews.length}
      </div>
    </div>
  );
};
