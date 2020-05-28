import React from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <div className={styles.header}>
          <div className={styles.wrapper}>
              <svg className={styles.logo} height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><g>
                  <rect fill="#e80054" height="83" rx="6" width="124.5" x="1.75" y="22.497"/>
                  <g fill="#fcf9f0">
                      <path d="m31.617 34.247a1.75 1.75 0 0 0 0-3.5h-19.867a1.751 1.751 0 0 0 -1.75 1.753v26.5a1.751 1.751 0 0 0 1.75 1.75h19.867a1.751 1.751 0 0 0 1.75-1.75v-13.251a1.751 1.751 0 0 0 -1.75-1.749h-9.933a1.75 1.75 0 0 0 0 3.5h8.183v9.752h-16.367v-23z"/><path d="m59.828 30.747h-19.867a1.751 1.751 0 0 0 -1.75 1.75v26.503a1.75 1.75 0 0 0 3.5 0v-11.5h16.367v11.5a1.75 1.75 0 1 0 3.5 0v-26.5a1.751 1.751 0 0 0 -1.75-1.753zm-18.117 13.253v-9.753h16.367v9.753z"/><path d="m31.617 67.243h-19.867a1.751 1.751 0 0 0 -1.75 1.75v26.507a1.751 1.751 0 0 0 1.75 1.75h19.867a1.751 1.751 0 0 0 1.75-1.75v-26.5a1.751 1.751 0 0 0 -1.75-1.757zm-1.75 26.5h-16.367v-23h16.367z"/><path d="m110.25 67.243h-13.867a1.751 1.751 0 0 0 -1.75 1.75v26.507a1.75 1.75 0 0 0 3.5 0v-11.5h4.867a11.515 11.515 0 0 1 11.5 11.5 1.75 1.75 0 1 0 3.5 0 14.985 14.985 0 0 0 -5.714-11.773 7.763 7.763 0 0 0 5.714-7.482v-1.252a7.759 7.759 0 0 0 -7.75-7.75zm4.25 9a4.255 4.255 0 0 1 -4.25 4.25h-12.117v-9.75h12.117a4.255 4.255 0 0 1 4.25 4.25z"/><path d="m88.762 30.9a1.751 1.751 0 0 0 -1.875.277l-8.782 7.682-8.781-7.679a1.75 1.75 0 0 0 -2.9 1.317v26.503a1.75 1.75 0 1 0 3.5 0v-22.647l7.029 6.147a1.749 1.749 0 0 0 2.3 0l7.031-6.151v22.651a1.75 1.75 0 0 0 3.5 0v-26.5a1.749 1.749 0 0 0 -1.022-1.6z"/><path d="m116.25 47.5a1.75 1.75 0 0 0 0-3.5h-18.117v-9.753h18.117a1.75 1.75 0 0 0 0-3.5h-19.867a1.751 1.751 0 0 0 -1.75 1.75v26.503a1.751 1.751 0 0 0 1.75 1.75h19.867a1.75 1.75 0 0 0 0-3.5h-18.117v-9.75z"/><path d="m88.039 70.743a1.75 1.75 0 0 0 0-3.5h-19.867a1.751 1.751 0 0 0 -1.75 1.75v26.507a1.751 1.751 0 0 0 1.75 1.75h19.867a1.75 1.75 0 0 0 0-3.5h-18.117v-9.75h18.117a1.75 1.75 0 0 0 0-3.5h-18.117v-9.757z"/><path d="m60.442 67.355a1.75 1.75 0 0 0 -2.253 1.024l-8.3 22.132-8.289-22.132a1.75 1.75 0 0 0 -3.278 1.228l9.934 26.5a1.75 1.75 0 0 0 3.277 0l9.934-26.5a1.749 1.749 0 0 0 -1.025-2.252z"/>
                  </g>
              </g>
              </svg>
              <ul className={styles.navbar}>
                  <li className={styles.item}><NavLink to="/main" activeClassName={styles.active}>Main</NavLink></li>
                  <li className={styles.item}><NavLink to="/gallery" activeClassName={styles.active}>Gallery</NavLink></li>
                  <li className={styles.item}><NavLink to="/projects" activeClassName={styles.active}>Projects</NavLink></li>
                  <li className={styles.item}><NavLink to="/games" activeClassName={styles.active}>Games</NavLink><ul className={styles.dropdown}>
                      <li className={styles.item}>Snake</li>
                      <li className={styles.item}>Asteroids</li>
                      <li className={styles.item}>Games</li></ul></li>
                  <li className={styles.item}><NavLink to="/contacts" activeClassName={styles.active}>Contacts</NavLink></li>
              </ul>
          </div>
          </div>
  );
};

export default Navbar;