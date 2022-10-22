import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Staff from './Route/Staff';
import Student from './Route/Student';
import Course from './Route/Course';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student/>} />
          <Route path='/student'element={<Student/>} />
          <Route path='/staff'element={<Staff/>} />
          <Route path='/course'element={<Course/>} />
        </Routes> 
      </BrowserRouter>    
  );
}

export default App;
