import React from 'react'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Application from './components/Application';
import LoanApproval from './components/LoanApproval';
import ContactUs from './components/ContactUs';



const App = () => {
  return (
  <div className=''>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element ={<LoginPage/>}/>
          <Route path='/application' element={<Application/>}/>
          <Route path='/loanapproval' element={<LoanApproval/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
         
        </Routes>
      </Router>
  
  </div>
   
  )
}

export default App