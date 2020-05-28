import React from "react";
import carousel_img1 from "../../../Assets/Images/Carousel-1.jpg";
import styles from "./Carousel.module.css"

const Carousel = () =>{
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Game Over</h1>
            <img className={styles.carousel_img} src={carousel_img1} alt=""/>
        </div>
)
};

export default Carousel;
