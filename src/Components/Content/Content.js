import React from "react";
import Main from "../Main/Main";
import Gallery from "../Gallery/Gallery";
import {Route} from "react-router-dom";

const Content = () =>{
    return (
        <div>
            <Route component={Main} path="/main"/>
            <Route component={Gallery} path="/gallery"/>
        </div>
    )
};

export default Content;