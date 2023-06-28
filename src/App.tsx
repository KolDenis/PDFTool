import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import publicRoutes from './routes';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component/>}/>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
