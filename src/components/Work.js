import React, { useRef } from 'react';
import logo from '../asset/logo.svg';
import WorkSlide from './WorkSlide';

const Work = (props) => {
    const paperScaleDown = useRef(null);
    const pageToSkill = useRef(null);
    
    const toSkill = () => {
        pageToSkill.current.classList.add('fadeOut');
        paperScaleDown.current.classList.add('scaleDown');
        setTimeout(() => {
            props.history.push('/')
        }, 1000);
    }

    return (
        <>
            <div className="paperWork" ref={paperScaleDown}>
                <div id="logo"><img src={logo} alt="namwonheo"></img></div>
                <div id="workBox" className="fadeIn" ref={pageToSkill}>
                    <div className="btnToSkill" onClick={toSkill}>main</div>
                    <div className="workSlide"><WorkSlide /></div>
                </div>
            </div>
        </>
    );
}

export default Work;