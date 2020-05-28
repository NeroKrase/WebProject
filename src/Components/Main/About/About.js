import React from "react";
import styles from "./About.module.css";
import about_img from "../../../Assets/Images/About.jpg"

const About = () =>{
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <img className={styles.about_img} src={about_img} alt="gamer"/>
                <div className={styles.about_block}>
                    <h1 className={styles.title}>Who are we?</h1>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quaerat sequi voluptatum. Accusantium assumenda atque aut consectetur deserunt eveniet fugit, hic ipsum iste iusto minima modi mollitia nam, necessitatibus obcaecati odio odit qui quod, recusandae repudiandae sapiente similique ut. Aperiam expedita iusto quasi rem vel! Aliquid eaque eum excepturi fugiat fugit harum iusto, libero maxime mollitia nisi, perferendis quo, vitae!</p>
                </div>
            </div>
        </div>
    )
};

export default About;