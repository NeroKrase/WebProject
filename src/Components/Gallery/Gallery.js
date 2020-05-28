import React from "react";
import styles from "./Gallery.module.css"
import galleryImg1 from "../../Assets/Images/gallery1.jpg"
import galleryImg2 from "../../Assets/Images/gallery2.jpg"
import galleryImg3 from "../../Assets/Images/gallery3.jpg"
import galleryImg4 from "../../Assets/Images/gallery4.jpg"
import galleryImg5 from "../../Assets/Images/gallery5.jpg"
import galleryImg6 from "../../Assets/Images/gallery6.jpg"
import galleryImg7 from "../../Assets/Images/gallery7.jpg"
import galleryImg8 from "../../Assets/Images/gallery8.jpg"
import galleryImg9 from "../../Assets/Images/gallery9.jpg"

const Gallery = () =>{
    return (
        <div>
            <h1 className={styles.title}>Gallery</h1>
            <div className={styles.gallery}>
                <img src={galleryImg1} alt=""/>
                <img src={galleryImg2} alt=""/>
                <img src={galleryImg3} alt=""/>
                <img src={galleryImg4} alt=""/>
                <img src={galleryImg5} alt=""/>
                <img src={galleryImg6} alt=""/>
                <img src={galleryImg7} alt=""/>
                <img src={galleryImg8} alt=""/>
                <img src={galleryImg9} alt=""/>
            </div>
        </div>
    )
}

export default Gallery