import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import CountEachSubject from './Components/CountEachSubject';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='flex h-full'>
            <Menu />
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/countOfEachSubject' element={<CountEachSubject />}></Route>
            </Routes>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
