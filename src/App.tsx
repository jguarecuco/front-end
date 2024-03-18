import React from 'react';
import { Routes, Route, BrowserRouter  } from "react-router-dom";
 
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';

function App() {
  return (<>
    <BrowserRouter>
    <Routes>
<Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
    </Route>
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
