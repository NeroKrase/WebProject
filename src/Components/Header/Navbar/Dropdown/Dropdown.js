import React, {useState} from "react";
import styles from "../NavItem/NavItem.module.css";
import {CSSTransition} from "react-transition-group";
import DropdownMenu from "./DropdownMenu";

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <li className={props.width >= 768 ? styles.item : styles.responsive_item}>
            <button className={props.width >= 768 ? styles.dropdown_button : styles.responsive_button} onBlur={() => setOpen(false)} onClick={() => setOpen(!open)}>{props.title}</button>
            <CSSTransition
            in={open}
            unmountOnExit
            timeout={500}
            classNames={ props.width >= 768 ? {
                enter: styles.dropdown_enter,
                enterActive: styles.dropdown_enter_active,
                exit: styles.dropdown_exit,
                exitActive: styles.dropdown_exit_active
            } : {
                enter: styles.responsive_dropdown_enter,
                enterActive: styles.responsive_dropdown_enter_active,
                exit: styles.responsive_dropdown_exit,
                exitActive: styles.responsive_dropdown_exit_active
            }}>
                <DropdownMenu width={props.width}/>
            </CSSTransition>
        </li>
    )
}

export default Dropdown;