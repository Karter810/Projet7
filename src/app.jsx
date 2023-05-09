import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/about'
import Hebergement from './pages/Hebergement/Hebergement'
import NotFound from './pages/Error/notFound'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App (){
    return (
    <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Navigate replace to="/Kasa/" />} />
                <Route exact path="/Kasa/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/Hebergement/:id" element={<Hebergement />} /> 
                <Route path='*' element={<NotFound />} />
            </Routes>
        <Footer/>
    </Router>
    )
}
export default App;