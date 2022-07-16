import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

export function AppHeader() {
    const [isOpen, setOpen] = useState(false)
    const location = useLocation();
    const [pathName, setPathname] = useState(location.pathname)

    if (pathName !== location.pathname) {
        setOpen(false)
        setPathname(location.pathname)
    }

    return (
        <section className="app-header-main">
            {isOpen && <div className="modal" >
                <div className="content" >
                    <NavLink className="link" to='/'>
                        <p>Home</p>
                    </NavLink>
                    <NavLink className="link" to='/work'>
                        <p>Portfolio</p>
                    </NavLink>
                    <NavLink className="link" to='/about'>
                        <p>About</p>
                    </NavLink>
                    <NavLink className="link" to='/contact'>
                        <p>Contact</p>
                    </NavLink>
                </div>
            </div>}
            <div className="logo">
                <div className="avatar">
                    <img src={require('../assets/imgs/avatar.png')} alt="" />
                </div>
                IM
            </div>
            <div className="links">
                <NavLink className="link" to='/'>
                    <p>Home</p>
                </NavLink>
                <NavLink className="link" to='/work'>
                    <p>Portfolio</p>
                </NavLink>
                <NavLink className="link" to='/about'>
                    <p>About</p>
                </NavLink>
                <NavLink className="link" to='/contact'>
                    <p>Contact</p>
                </NavLink>
            </div>

            <div className="empty-div">
                {/* <NavLink className="link" to='/back-office'>
                    <p>Back</p>
                </NavLink> */}
                {/* <NavLink className="contact" to='/contact'>
                    <p>Let's Talk</p>
                </NavLink> */}
                <div className="hamburger">
                    <Hamburger color="#F0AEC8" size={25} toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
            <div className="back-div"></div>
        </section>
    )
}