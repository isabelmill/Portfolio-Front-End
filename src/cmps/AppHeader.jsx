import { NavLink } from "react-router-dom";

export function AppHeader() {
    return (
        <section className="app-header-main">
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
                <NavLink className="link" to='/back-office'>
                    <p>Back</p>
                </NavLink>
            </div>
            <div className="back-div"></div>
            {/* <div className="contact">
                <NavLink className="link" to='/contact'>
                    <p>Contact</p>
                </NavLink>
            </div> */}
        </section>
    )
}