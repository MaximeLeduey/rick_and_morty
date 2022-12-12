import React from 'react';
import Home from './pages/Home';
import Single from './pages/Single';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </React.Fragment>
  
  );
}

export default App;
