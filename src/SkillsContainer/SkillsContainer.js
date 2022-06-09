import { Component } from "react";
import styles from './SkillsContainer.module.css';
import './SkillsContainer.css';

export default class SkillsContainer extends Component {
    constructor() {
        super();   
        this.clickCounter = 0;
    }

    getImgsLists() {
        let imgLists = 
        [ 
        {number: 1, text: "first"}, {number: 2, text: "second"}, {number: 3, text: "third"},
        {number: 4, text: "fourth"}, {number: 5, text: "fifth"}, {number: 6, text: "sixth"} 
        ];
        return imgLists;
    }

    fadeSlide(index) {
        if(this.clickCounter != 0)
            return;

        var intervalChecker = setInterval(() => {
            this.clickCounter++;
            if(this.clickCounter == 25) {
                this.clickCounter = 0;
                clearInterval(intervalChecker);
            }
        }, 10)

        let removeSlide = document.getElementById(`${index}-img-slide`);
        let indexNumber = -1;
        let indexText = "";

        this.getImgsLists().forEach((img) => {
            if(img.text == index)
                indexNumber = img.number;
        });

        this.getImgsLists().forEach((img) => {
            if(img.number == indexNumber + 1) 
                indexText = img.text;
        });

        let showSlide = document.getElementById(`${indexText}-img-slide`);
        if(showSlide == null)
        {
            showSlide = document.getElementById('first-img-slide');
            let resetZIndex = 15;
            this.getImgsLists().forEach((img) => {
                if(img.number != 0) {
                    let resetImg = document.getElementById(`${img.text}-img-slide`)
                    resetImg.style.opacity = "0";
                    resetImg.style.zIndex = resetZIndex
                }
                resetZIndex--;
            });
        }

        removeSlide.animate({"opacity": "0"}, 1000).onfinish = () => {
            removeSlide.style.opacity = "0";
            removeSlide.style.zIndex = 1;

            showSlide.animate({'opacity': '1'}, 250).onfinish = () => {
                showSlide.style.opacity = '1';
            }
        }
        this.shiftSides();     
    }

    shiftSides() {
        this.sideLeft = document.getElementById("side-left");
        this.sideRight  = document.getElementById("side-right");

        this.sideLeft.animate({'left': '-100%'}, 500).onfinish = () => {
            this.sideLeft.style.left = '-100%';
            this.sideLeft.animate({'left': '-25%'}, 500).onfinish = () => {
                this.sideLeft.style.left = '-25%';
            }
        }

        this.sideRight.animate({'right': '-100%'}, 500).onfinish = () => {
            this.sideRight.style.right = '-100%';
            this.sideRight.animate({'right': '-25%'}, 500).onfinish = () => {
                this.sideRight.style.right = '-25%';
            }
        }
    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <div id="side-left" className={styles.sideLeftContainer}></div>
                <div id="centre-slide-container" className={styles.centerContainer}>
                    <div id="first-img-slide" onClick={() => {this.fadeSlide("first")}} className={styles.centreSubContainer}>
                        <h2>ASP.NET Core</h2>
                        <h3>
                            My professional work with <strong>ASP.NET Core MVC</strong> mainly revolves around managing the database 
                            communication between the companies' database and the backend.
                            This entails mostly managing queries, both hardcoded queries and <strong>Entity Framework</strong>. 
                            When it comes my work in my leisure time I often build ASP.NET Core MVC Projects from scratch
                            where the frontend is what I lay most of my focus on. Although I do also, from time to time, 
                            hook up the backend to a local database.
                        </h3>
                    </div>
                    <div id="second-img-slide" onClick={() => { this.fadeSlide("second"); }} className={styles.centreSubContainer}>
                        <h2>WPF</h2>
                        <h3>
                            Apart from working with ASP.NET Core MVC I also spend quite a bit of time working with, and maintaining, 
                            several in-house applications written with WPF.
                            My work with these applications mainly revolves around optimizing the backend. 
                            This entails updating the database, ensuring security enforcement in regards to, for instance, clearence levels.
                            I've also studied WPF in school where I focused on learning MVVM. So I can confidently say 
                            that I have a good knowledge about this stack.
                        </h3>
                    </div>
                    <div id="third-img-slide" onClick={() => { this.fadeSlide("third"); }} className={styles.centreSubContainer}>
                        <h2>SQL Server</h2>
                        <h3>
                            My work with SQL Server consists of mainly two fields. The first is editing existing tables in the company database, 
                            to ensure that they stay up to date. The second is
                             editing raw SQL queries that are used in several areas within my companies' applications. 
                             I also monitor a SQL Server Agent job, that we use for an API call to fetch data from the 
                             Swedish environmental company Svanen.
                        </h3>
                    </div>
                    <div id="fourth-img-slide" onClick={() => { this.fadeSlide("fourth"); }} className={styles.centreSubContainer}>
                        <h2>HTML, CSS, Javascript & jQuery</h2>
                        <h3>
                            Since I like frontend development the most, these languages are naturally close to my heart.
                            I most often, when working with frontend technologies, spend  my time fixing bugs related 
                            to jQuery Ajax-calls. 
                            Albeit I do from time to time implement new features, both with these languages and with XAML within WPF.
                        </h3>
                    </div>
                    <div id="fifth-img-slide" onClick={() => { this.fadeSlide("fifth"); }} className={styles.centreSubContainer}>
                        <h2>React</h2>
                        <h3>
                            My work with React has exclusively been within my leisure time, with private projects, 
                            such as this very website. 
                            I like React, mainly due to how lightweight it is and therefore how easy it is to use.
                            Due to that and due to how popular React is I've decided to learn as much React 
                            as I possibly can on my spare time. 
                            This website happens to be one of the steps I've taken to achieve that goal.
                        </h3>
                    </div>
                    <div id="sixth-img-slide" onClick={() => { this.fadeSlide("sixth"); }} className={styles.centreSubContainer}>
                        <h2>Git, GitHub & Azure Devops</h2>
                        <h3>
                            I use Git on a daily basis, both at work and at home. I mainly just focus on simple branch management, 
                            keeping a master branch and using diverting branches for fixes and additions to the codebase. 
                            I use GitHub for my private projects while I use Azure Devops at work to coordinate my pushes 
                            (and the following pull requests) with my colleagues.
                        </h3>
                    </div>
                </div>
                    <div id="side-right" className={styles.sideRightContainer}></div>
            </div>
        );
    }
}