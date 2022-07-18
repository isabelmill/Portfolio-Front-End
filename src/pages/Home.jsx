// import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Loading } from '../cmps/Loading'

export const Home = () => {

    const { portfolio } = useSelector(state => state.portfolioModule)

    if (!portfolio) return <Loading />
    return (
        <motion.section className="home-main" initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="left-container">
                <div className="header">
                    {/* <h2>Hello, I'm Isabel Mill</h2>
                    <h1>A Full-Stack
                        <span>Developer</span>
                    </h1> */}
                    <h1>Hello, I'm Isabel</h1>
                    <h5>{portfolio.homePage}</h5>
                </div>
                
                <div className="social-links">
                    <a target="_blank" href="https://www.linkedin.com/in/isabel-mill-bb5a05177"
                        className="social-icon"> <i className="fa fa-linkedin"></i></a>
                    <a target="_blank" href="https://github.com/isabelmill" className="social-icon"> <i
                        className="fa fa-github"></i></a>
                    {/* <a target="_blank" href="https://www.facebook.com/profile.php?id=100010707871314" className="social-icon"> <i
                        className="fa fa-facebook"></i></a>
                    <a target="_blank" href="https://www.instagram.com/isabel_777/" className="social-icon"> <i
                        className="fa fa-instagram"></i></a> */}
                </div>
            </div>
        </motion.section>
    )
}