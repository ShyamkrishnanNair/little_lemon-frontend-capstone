import React from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import Reservation from './pages/Reservation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div className='app'>

      <React.Fragment>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={
              <React.Fragment>
                <HomePage />
              </React.Fragment>
            }>
            </Route>

            <Route path='/reservation' element={
              <React.Fragment>
                <Reservation />
              </React.Fragment>
            }>

            </Route>

          </Routes>
          <Footer />
        </Router>



      </React.Fragment>

    </div>
  )
}
