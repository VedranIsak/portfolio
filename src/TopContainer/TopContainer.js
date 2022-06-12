import { Component } from "react";
import styles from './TopContainer.module.css';
import './TopContainer.css';

export default class TopContainer extends Component {
    constructor() {
        super();
    }

    mainContStyles = {
        'height': '100vh',
        'width': '100%',
        'marginLeft': '0%',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'flexDirection': 'column',
        'overflow': 'hidden'
    }

    componentDidMount() {
        const sideContainers = document.querySelectorAll('[data-id="side-container"]');

        sideContainers[0].animate({ 'left': '0%' }, 500).onfinish = () => {
            sideContainers[0].style.left = "0%";
        }

        sideContainers[1].animate({ 'bottom': '10%' }, 1250).onfinish = () => {
            sideContainers[1].style.bottom = '10%';
        }

        sideContainers[2].animate({ 'right': '0%' }, 2000).onfinish = () => {
            sideContainers[2].style.right = '0%';
        }

        sideContainers[3].animate({ 'top': '10%' }, 2750).onfinish = () => {
            sideContainers[3].style.top = '10%';
        }
    }

    scrollSite(id) {
        document.getElementById(id).scrollIntoView({"behavior": "smooth"});
    }

    render() {
        return(
            <div style={this.mainContStyles}>
                <div className={styles.partContainer}>
                    <div id="sub-img-one"></div>
                    <div id="sub-img-two"></div>
                    <div id="sub-img-three"></div>
                </div>
                <div id="top-header-container" className={styles.headerContainer}>
                    <h1>Vedran Isak</h1>
                    <h3 data-id="sub-header">Welcome to my portfolio site - </h3>
                    <h3 data-id="sub-header">a small showcase of my skills and experience</h3>
                </div>
                <div data-id="side-container" id="left-side-container" className={styles.sideContainer}>
                    <h3 onClick={() => { this.scrollSite("skills-main-container"); }}>Skills</h3>
                </div>
                <div data-id="side-container" id="bottom-side-container" className={styles.sideContainer}>
                    <h3 onClick={() => { this.scrollSite("exp-main-container"); }}>Experience</h3>
                </div>
                <div data-id="side-container" id="right-side-container" className={styles.sideContainer}>
                    <h3 onClick={() => { this.scrollSite("circle-container") }}>Education</h3>
                </div>
                <div data-id="side-container" id="top-side-container" className={styles.sideContainer}>
                    <h3 onClick={() => { this.scrollSite("my-work-container") }}>Projects</h3>
                </div>
            </div>
        )
    }
}