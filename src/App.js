import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/navbar";
import Memberspage from "./pages/members";
import Multistep from "./pages/multistep";
import DetailPage from "./pages/detailpage";
import Dashbord from "./pages/dashbord";
import Profile from "./pages/profile";
import Transactions from "./pages/transactions";
import CreateNewBusiness from "./pages/create-new-businesses";
import EditBusinessName from "./components/popup/edit-business-name";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Memberspage />} />
            <Route path="/multistep" element={<Multistep />} />
            <Route path="/detailpage" element={<DetailPage />} />
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route
              path="/create-new-businesses"
              element={<CreateNewBusiness />}
            />
            <Route path="/edit-business-name" element={<EditBusinessName />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
