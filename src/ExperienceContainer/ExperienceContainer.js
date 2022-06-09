import { Component } from "react"
import styles from './ExperienceContainer.module.css';
import './ExperienceContainer.css';

export default class ExperienceContainer extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div id="exp-main-container" className={styles.mainContainer}>
                <div id="first-exp-container">
                    <h3>
                        Before starting my education I had only worked common odd jobs. I was a health care worker 
                        and for several years, on and off (while going to school), I worked in a warehouse.
                    </h3>
                </div>
                <div id="second-exp-container">
                    <h3>
                    At the end of my education I interned for roughly three months at Region Ostergotland, a Swedish governmental health agency. More info about this can 
                        be found in the Skills section.
                    </h3>
                </div>
                <div id="third-exp-container">
                    <h3>
                    After completing my education I began working as a full stack .NET developer in Linkoping, 
                        a position that I am still occupying currently.
                    </h3>
                </div>
                <div id="fourth-exp-container">
                    <h3>
                    From 2018 to 2021 I studied an IT-programme at Linkoping University called "Systemvetenskap" (Information Systems) 
                            with a special focus on "Systemutveckling" (Software engineering).
                    </h3>
                </div>
                <div id="fifth-exp-container">
                    <h3>
                    While going to college I also started learning quite a bit about frontend development on my own, as I felt the courses at school were not 
                            covering this area sufficiently. I focused on advanced CSS, jQuery, Vanilla JS DOM manipulation and the Angular framework.
                    </h3>
                </div>
                <div id="sixth-exp-container">
                    <h3>
                    In 2021 I obtained my bachelor's degree and started my career as a software engineer with a
                         .NET developer position shortly thereafter.
                    </h3>
                </div>
            </div>
        )
    }
}