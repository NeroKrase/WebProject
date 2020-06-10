import React from "react"
import DropdownItem from "./DropdownItem"
import styles from "./Dropdown.module.css"

const DropdownMenu = ({width}) => {
    return (
        <div className={width >= 768 ? styles.dropdown : styles.responsive_dropdown}>
            <DropdownItem path="/games/snake" title="Snake"/>
            <DropdownItem path="/games/2048" title="2048"/>
            <DropdownItem path="/games/asteroids" title="Asteroids"/>
        </div>
    )
}

export default DropdownMenu