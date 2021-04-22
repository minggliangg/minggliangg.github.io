import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as layoutStyles from "../styles/layout.module.scss"

export default function Layout(props) {
    return <div className={layoutStyles.container}>
        <Header/>
        <div className={layoutStyles.body}>
            {props.children}
        </div>
        <Footer/>
    </div>

}