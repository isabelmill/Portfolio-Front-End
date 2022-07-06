import React from 'react'
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { Work } from '../pages/Work.jsx';
import { BackOffice } from '../pages/BackOffice.jsx';
import { About } from '../pages/About.jsx';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<Home />} />
                <Route path='/work' element={<Work />} />
                <Route path='/back-office' element={<BackOffice />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes