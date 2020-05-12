import React, { Component } from 'react';
import Main from './components/Main';
import styles from './App.css'

class App extends Component {

    render() {
        return (
            <div className={styles}>
                <Main />
            </div>
        );
    }
}

export default App;