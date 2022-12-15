import React from 'react';
import Home from './pages/Home';
import Single from './pages/Single';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
      <Footer />
    </React.Fragment>
  
  );
}

export default App;
