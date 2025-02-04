
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
