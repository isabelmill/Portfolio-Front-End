import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { AppHeader } from './cmps/AppHeader.jsx';
import './assets/scss/styles.scss'
import AnimatedRoutes from './cmps/AnimatedRoutes.jsx';
import { loadPortfolio } from './store/actions/portfolioActions'
import { useDispatch } from 'react-redux'


function App() {

  useEffect(() => {
    dispatch(loadPortfolio())
    // eslint-disable-next-line
}, [])

const dispatch = useDispatch()

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className="container">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>

  );
}

export default App;
