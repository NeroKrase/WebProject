import React from "react";
import styles from "./Posts.module.css"
import {NavLink} from "react-router-dom";

const Posts = ({data}) => {
    const shortenDescription = (description) => {
        if (description.length > 225) {
            return `${description.substring(0, 225)}...`
        }
    }

    return (
        <div className={styles.wrapper}>
            {data.map(data => (
                <div className={styles.post} key={data.id}>
                    <img className={styles.image} src={data.image} alt=""/>
                    <h4 className={styles.title}>{data.title}</h4>
                    <ul className={styles.list}>
                        <li className={styles.element}>Platform: {data.platform}</li>
                        <li className={styles.element}>Studio: {data.studio}</li>
                        <li className={styles.element}>Genre: {data.genre}</li>
                    </ul>
                    <p className={styles.description}>{shortenDescription(data.description)}</p>
                    <button className={styles.button}><NavLink className={styles.link} to={`/projects/post/${data.id}`}>Read more</NavLink></button>
                </div>
            ))}
        </div>
    )
}

export default Posts;