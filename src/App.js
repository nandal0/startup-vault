import React from 'react'
// import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Delevery from './components/Delevery';
import Carrer from './components/Carrer';
import Register from './components/Register';
import FormRegister from './components/FormRegister';
import ForgotPassword from './components/ForgotPassword';
import './App.css'
import Homee from './Homee'
import Home from './Home'
import NewAcc from './components/NewAcc';
import  CreateUser  from './components/CreateUser';
import ViewData from './components/ViewData';
// import Delevery from './components/Delevery';
const App = () => {
  return (
    <div>
     <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-users" element={<CreateUser />} />
          <Route path="/view-data" element={<ViewData />} />
          {/* <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} /> */}

          <Route path="*" element={<> not found</>} />
        </Routes>
      </Sidebar>
    </Router>
    </div>
  )
}

export default App