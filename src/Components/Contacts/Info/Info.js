import React from "react";
import styles from "./Info.module.css"

const Info = () =>{
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>NEED HELP WITH ONE OF OUR GAMES?</h1>
            <p>Don’t hesitate to ask us anything regarding our self-published games. Email us directly <a className={styles.email} href="mailto: info@game-makers.com">info@game-makers.com</a>. We are open from Monday till Friday during office hours.</p>
            <h1 className={styles.title}>COLLABORATE WITH GAME MAKERS</h1>
            <p>Are you interested in working together with Game Makers? Just shoot us an e-mail using the contact form on the left, or give us a call.</p>
            <h5>GAME MAKERS HQ</h5>
            <ul>
                <li>Address: Glushkova 41</li>
                <li>Zip code: 03127</li>
                <li>City: Kyiv</li>
                <li>Country: Ukraine</li>
                <li>Email: <a className={styles.email} href="mailto: info@game-makers.com">info@game-makers.com</a></li>
                <li>Phone: +(38)-666-44-44</li>
            </ul>
        </div>
    )
}

export default Info
