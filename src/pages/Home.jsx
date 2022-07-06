import { motion } from 'framer-motion'

export function Home() {
    return (
        <motion.section className="home-main" initial={{ x: window.innerWidth}}
            animate={{ x: 0  }}
            exit={{ x: -window.innerWidth, transition: {duration: 0.2} }}>
            <div className="left-container">
                <div className="header">
                    <h2>Hello I'm A</h2>
                    <h1>Full-Stack
                        <span>Developer</span>
                    </h1>
                    <h5>My name is Isabel Mill, and I am a passionate Full-Stack developer with an eye for design and a strong desire to learn and create.</h5>
                </div>
                <div className="social-links">
                    <a target="_blank" href="https://www.linkedin.com/in/isabel-mill-bb5a05177"
                        className="social-icon"> <i className="fa fa-linkedin"></i></a>
                    <a target="_blank" href="https://github.com/isabelmill" className="social-icon"> <i
                        className="fa fa-github"></i></a>
                    <a target="_blank" href="https://github.com/isabelmill" className="social-icon"> <i
                        className="fa fa-facebook"></i></a>
                    <a target="_blank" href="https://github.com/isabelmill" className="social-icon"> <i
                        className="fa fa-instagram"></i></a>
                </div>
            </div>
        </motion.section>
    )
}