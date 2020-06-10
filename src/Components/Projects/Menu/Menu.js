import React, {useState} from "react";
import styles from "./Menu.module.css"

const Menu = ({data, filter}) => {
    const [platforms] = useState([...new Set(data.map(x => x.platform))]);
    const [studios] = useState([...new Set(data.map(x => x.studio))]);
    const [genres] = useState([...new Set(data.map(x => x.genre))]);

    return (
        <div className={styles.wrapper}>
            <div>
                <h3 className={styles.title}>Platforms</h3>
                {platforms.map(x => (
                    <div>
                        <label className={styles.label}>
                            <input className={styles.checkbox} onChange={() => filter({key: "platform", name: x})} type="checkbox" defaultChecked/>
                            <span className={styles.fake}/>
                            <span className={styles.text}>{x}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <h3 className={styles.title}>Studios</h3>
                {studios.map(x => (
                    <div>
                        <label className={styles.label}>
                            <input className={styles.checkbox} onChange={() => filter({key: "studio", name: x})} type="checkbox" defaultChecked/>
                            <span className={styles.fake}/>
                            <span className={styles.text}>{x}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <h3 className={styles.title}>Genres</h3>
                {genres.map(x => (
                    <div>
                        <label className={styles.label}>
                            <input className={styles.checkbox} onChange={() => filter({key: "genre", name: x})} type="checkbox" defaultChecked/>
                            <span className={styles.fake}/>
                            <span className={styles.text}>{x}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu;