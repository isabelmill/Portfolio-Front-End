import React from 'react'
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { Work } from '../pages/Work.jsx';
import { BackOffice } from '../pages/BackOffice.jsx';
import { About } from '../pages/About.jsx';
import { AnimatePresence } from 'framer-motion';
import { Contact } from '../pages/Contact.jsx';
import { WorkDetails } from '../pages/WorkDetails.jsx';

function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
                <Route path='/work/:_id' element={<WorkDetails />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/back-office' element={<BackOffice />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes