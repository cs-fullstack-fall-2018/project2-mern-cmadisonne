import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EntryDisplay from './EntryDisplay';

class App extends Component {

    render() {

        return (
            <div className="App">
                <img className='topImage' height='300' width='800' src='https://images.pexels.com/photos/158756/flowers-plants-korea-nature-158756.jpeg?auto=compress&cs=tinysrgb&h=350'/>
                <header className="App-header">
                    <h1 className='head'>Join The Pond Journal</h1>
                </header>
                <EntryDisplay/>
            </div>
        );
    }
}

export default App;
