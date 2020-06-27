import React from 'react';
import Carousel from 'nuka-carousel';
import bahamas from '../img/workslide-img/1.png';
import oldie from '../img/workslide-img/2.png';
import comingsoon from '../img/workslide-img/comingsoon.png';

const WorkSlide = () => {
    const list = [
        {
            "index": 1,
            "id": "bahamas",
            "title": "Korean Air Event",
            "desc": "Single page web & mobile",
            "stack": "JavaScript",
            "year": 2019,
            "link": "https://nwh20.github.io/ka-eventpage/main.html",
            "cover": bahamas
        },
        {
            "index": 2,
            "id": "oldie",
            "title": "Oldie The Camera",
            "desc": "Website with Ebay API & CRUD board ",
            "stack": "React, Styled-Component, Axios",
            "year": 2020,
            "link": "https://otc-react.herokuapp.com",
            "cover": oldie
        },
        {
            "index": 3,
            "id": "comingsoon",
            "title": "",
            "desc": "",
            "stack": "",
            "year": null,
            "link": "",
            "cover": comingsoon
             // cover s~ize 700x450, bgr white, design range 500x450
        },
    ]
    
    const workList = list.map((work, i) => 
        <div key={i} className="workPage" id={work.id}>
            <div className="workTxt" onClick={ () => {
                window.open(work.link, 'newWindow');
            }}>
                <div className="workTxt-wrap">
                    <h3>{work.title}</h3>
                    <p>{work.desc}</p>
                    <p>{work.stack}</p>
                    <p>{work.year}</p>
                </div>
            </div>
            <img src={work.cover} alt="workImg" className="workImg" />
        </div>
    );

    const prevBtn = ( {previousSlide, currentSlide} ) => (
        currentSlide !== 0 ?
        <button onClick={previousSlide} id="prev">&lt;</button>
        : ''
    )
    
    const nextBtn = ( {nextSlide, slideCount, currentSlide} ) => (
        currentSlide !== slideCount - 1 ?
        <button onClick={nextSlide} id="next">&gt;</button>
        : ''
    )

    return (
        <>
            <Carousel
            dragging={false}
            renderCenterLeftControls={prevBtn}
            renderCenterRightControls={nextBtn}
            renderBottomCenterControls={() => (null)}
            >
                {workList}
            </Carousel>
        </>
    )
}


export default WorkSlide;