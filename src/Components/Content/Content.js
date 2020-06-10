import React from "react";
import styles from "./Content.module.css"
import Main from "../Main/Main";
import Gallery from "../Gallery/Gallery";
import Contacts from "../Contacts/Contacts";
import Projects from "../Projects/Projects"
import { Route } from "react-router-dom";
import Post from "../Projects/Posts/Post/Post";
import SnakeGame from "../Games/Snake/SnakeGame";
import TwentyFortyEight from "../Games/TwentyFortyEight/TwentyFortyEight"
import {Reacteroids} from "../Games/Asteroids/Reacteroids";


const Content = () => {
    return (
        <div className={styles.content}>
            <Route component={Main} path="/main"/>
            <Route component={Gallery} path="/gallery"/>
            <Route component={Contacts} path="/contacts"/>
            <Route component={Projects} exact path="/projects"/>
            <Route component={Post} path="/projects/post/"/>
            <Route component={SnakeGame} path="/games/snake"/>
            <Route component={TwentyFortyEight} path="/games/2048"/>
            <Route component={Reacteroids} path="/games/asteroids"/>
        </div>
    )
};

export default Content;