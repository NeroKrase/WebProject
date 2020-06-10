import {NavLink} from "react-router-dom"
import React from "react"
import styles from "./Dropdown.module.css"

const DropdownItem = (props) =>{
    return (
        <NavLink to={props.path} className={styles.dropdown_item}>
            {props.title}
        </NavLink>
    )
}

export default DropdownItem