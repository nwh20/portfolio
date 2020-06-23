import React from 'react';
import Skill from './Skill';
import Work from './Work';
import { BrowserRouter, Route } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <div className="wrap">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Route exact path="/" component={Skill} />
                    <Route exact path="/work" component={Work} />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Main;