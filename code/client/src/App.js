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
import AssignSubjects from './Components/AssignSubjects';
import AddTeacher from './Components/AddTeacher';
import AddStudent from './Components/AddStudent';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='grid grid-cols-8 min-h-screen'>
            <div className="col-span-2 ">
              <Menu />
            </div>
            <div className=' col-span-6'>
              <Navbar />
              <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/countOfEachSubject' element={<CountEachSubject />}></Route>
                <Route exact path='/popularSubjects' element={<PopularSubjects />}></Route>
                <Route exact path='/poorGrades' element={<PoorGrades />}></Route>
                <Route exact path='/leastFirstChoiceSubject' element={<LeastFirstChoiceSubject />}></Route>
                <Route exact path='/searchTeacher' element={<SearchTeacher />}></Route>
                <Route exact path='/mathSecondSubject' element={<MathSecondSubject />}></Route>
                <Route exact path='/assignSubjects' element={<AssignSubjects />}></Route>
                <Route exact path='/addStudent' element={<AddStudent />}></Route>
                <Route exact path='/addTeacher' element={<AddTeacher />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
