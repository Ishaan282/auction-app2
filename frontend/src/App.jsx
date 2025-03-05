import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SideDrawer from './layout/SideDrawer'

import './App.css'

function App() {
  return (
    <Router>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App
