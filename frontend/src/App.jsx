import { useState } from 'react';
import Home from '/src/pages/Home';
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={ <Home /> }/>
    </Routes>
    </>
  )
}

export default App
