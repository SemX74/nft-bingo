import React from 'react';
import './Style/App.css';
import {Routes, Route, Link} from "react-router-dom"

import { Layout } from './Pages/Layout/Layout';
import { Home } from './Pages/Home/Home';
import { FAQ } from './Pages/FAQ/FAQ';
import { About } from './Pages/About us/About';
import { History } from './Pages/History/History';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element ={<Home />}/>
        <Route path='/History' element={<History />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/FAQ' element={<FAQ />}/>
      </Route>
    </Routes>
  );
}

export {App};
