import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import CountEachSubject from './Components/CountEachSubject';
import PopularSubjects from './Components/PopularSubjects';
import PoorGrades from './Components/PoorGrades';
import LeastFirstChoiceSubject from './Components/LeastFirstChoiceSubject';
import SearchTeacher from './Components/SearchTeacher';
import MathSecondSubject from './Components/MathSecondSubject';


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
              <Route exact path='/popularSubjects' element={<PopularSubjects />}></Route>
              <Route exact path='/poorGrades' element={<PoorGrades />}></Route>
              <Route exact path='/leastFirstChoiceSubject' element={<LeastFirstChoiceSubject />}></Route>
              <Route exact path='/searchTeacher' element={<SearchTeacher />}></Route>
              <Route exact path='/mathSecondSubject' element={<MathSecondSubject />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
