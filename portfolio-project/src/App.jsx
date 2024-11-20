import './App.css'
import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage'
import ToDoApp from './pages/ToDoApp'
import ThirdPage from './pages/ThirdPage'

function App() {
  return (
    <div>
      <div id='navigation'>
        <Link to='/' class='nav-item'>Home</Link>
        <Link to='/todo' class='nav-item'>To Do App</Link>
        <Link to='/third' class='nav-item'>Third</Link>
        
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/todo' element={<ToDoApp/>}/>
        <Route path='/third' element={<ThirdPage/>}/>
      </Routes>
    </div>
  );
}

export default App
