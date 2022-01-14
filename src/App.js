import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/navbar';
import Memberspage from './components/pages/members';
import Multistep from './components/pages/multistep'
import DetailPage from './components/pages/detailpage';

import './App.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <React.StrictMode>
       <Router>
        <Routes>
          <Route  path="/"  element={ <Memberspage />} />
          <Route  path="/multistep"  element={ <Multistep />} />
          <Route path="/detailpage" element={ <DetailPage />} />
        </Routes>
    
       </Router>
      </React.StrictMode>
      

    </div>
  );
}

export default App;
