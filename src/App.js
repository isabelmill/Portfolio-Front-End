import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx';
import './assets/scss/styles.scss'
import AnimatedRoutes from './cmps/AnimatedRoutes.jsx';

function App() {
  // const location = useLocation()
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className="container">
          <AnimatedRoutes/>
        </main>
      </div>
    </Router>

  );
}

export default App;
