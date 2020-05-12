import React from 'react';
import Skill from './Skill';
import Work from './Work';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <div className="wrap">
                <Router>
                    <Route exact path="/" component={Skill} />
                    <Route exact path="/work" component={Work} />
                </Router>
            </div>
        </div>
    );
}

export default Main;