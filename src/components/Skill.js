import React, { useRef } from 'react';
import logo from '../logo.svg'

const Skill = (props) => {
    const paperScaleUp = useRef(null);
    const pageToWork = useRef(null);

    const toWork = () => {
        pageToWork.current.classList.add('fadeOut');
        paperScaleUp.current.classList.add('scaleUp');
        setTimeout(() => {
            props.history.push('/work')
        }, 1000);
    }

    const skills = [ 'JavaScript + ES6+ ', 'React.js ', 'JQuery ', 'HTML5 & CSS3 ', '...' ];
    const skillList = skills.map((skill, i) =>
        <li key={i}>{skill}</li>
    )

    return (
        <>
            <div className="paperSkill" ref={paperScaleUp}>
                <div id="logo"><img src={logo} alt="namwonheo"></img></div>
                <div id="skillBox" className="fadeIn" ref={pageToWork}>
                    <h1>Frontend Developer</h1>
                    <p>Studied fine art &amp; art marketing in South Korea and France. Certified in frontend development from the Korean national course programme. Previously worked as a junior frontend developer for Korea General Construction Technology. Strong passion for acquiring new frontend skills and I am still learning every day. Check out what I'm insterested in!</p>
                    <ul>{skillList}</ul>
                    <br />
                    <p>hnamwon@gmail.com</p>
                    <div className="btnToWork" onClick={toWork}>work &rarr;</div>
                </div>
            </div>
        </>
    );
}

export default Skill;