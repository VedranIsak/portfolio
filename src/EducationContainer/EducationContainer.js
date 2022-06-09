import styles from './EducationContainer.module.css';
import './EducationContainer.css';

export default function EducationContainer({firstHrefs, secondHrefs, firstAnchorTexts, secondAnchorTexts}) {

    function anchorClick(anchorNumber) {
        document.getElementById(anchorNumber).click();
    }

    return(
            <>
                <div id="circle-container" className={styles.skillsContainer}>
                    <h3 id="circles-header">Dive deeper into the technologies I use</h3>
                    <div className={styles.skillsShowCaseCircle}>
                        <div className={styles.halfCaseCircle}>
                            <div className="first-skill" onClick={() => { anchorClick("first-anchor"); }}>
                                <a id="first-anchor" href={firstHrefs[0]} target="_blank">{firstAnchorTexts[0]}</a>
                            </div>
                            <div className="second-skill" onClick={() => { anchorClick("second-anchor"); }}>
                                <a id="second-anchor" href={firstHrefs[1]} target="_blank">{firstAnchorTexts[1]}</a>
                            </div>
                        </div>
                        <div className={styles.halfCaseCircle}>
                            <div className="third-skill" onClick={() => { anchorClick("third-anchor"); }}>
                                <a id="third-anchor" href={firstHrefs[2]} target="_blank">{firstAnchorTexts[2]}</a>
                            </div>
                            <div className="fourth-skill" onClick={() => { anchorClick("fourth-anchor"); }}>
                                <a id="fourth-anchor" href={firstHrefs[3]} target="_blank">{firstAnchorTexts[3]}</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skillsShowCaseCircle}>
                        <div className={styles.halfCaseCircle}>
                            <div className="fifth-skill" onClick={() => { anchorClick("fifth-anchor"); }}>
                                <a id="fifth-anchor" href={secondHrefs[0]} target="_blank">{secondAnchorTexts[0]}</a>
                            </div>
                            <div className="sixth-skill" onClick={() => { anchorClick("sixth-anchor"); }}>
                                <a id="sixth-anchor" href={secondHrefs[1]} target="_blank">{secondAnchorTexts[1]}</a>
                            </div>
                        </div>
                        <div className={styles.halfCaseCircle}>
                            <div className="seventh-skill" onClick={() => { anchorClick("seventh-anchor"); }}>
                                <a id="seventh-anchor" href={secondHrefs[2]} target="_blank">{secondAnchorTexts[2]}</a>
                            </div>
                            <div className="eight-skill" onClick={() => { anchorClick("eight-anchor"); }}>
                                <a id="eight-anchor" href={secondHrefs[3]} target="_blank">{secondAnchorTexts[3]}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}