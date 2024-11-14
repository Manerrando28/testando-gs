import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Solução from './routes/Solução';
import Sobre from './routes/Sobre';
import Login from './routes/Login';
import Cadastrar from './routes/Cadastrar';
import Error from './routes/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="solução" element={<Solução />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastrar" element={<Cadastrar />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
