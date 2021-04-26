import React from "react"
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";
import * as aboutStyles from "../styles/about.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons"

export default function About() {
    return <Layout>
        <h1>About</h1>
        <StaticImage className={aboutStyles.profileImage} src="../assets/profile.png" alt="Profile Image"/>
        <p>Hi! I am Ming Liang, a junior developer from Singapore
            <span role="img" aria-label="Singapore">🇸🇬</span>
        </p>
        <ul>
            <li><a href="https://github.com/minggliangg"><FontAwesomeIcon icon={faGithub}/> Github</a></li>
            <li><a href="https://www.linkedin.com/in/khongmingliang/"><FontAwesomeIcon icon={faLinkedin}/> Linkedin</a>
            </li>
            <li><a href="https://www.instagram.com/minggliangg/"><FontAwesomeIcon icon={faInstagram}/> Instagram</a>
            </li>
        </ul>


    </Layout>
}