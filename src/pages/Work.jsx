import { portfolio } from '../services/portfolio'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"


export function Work() {
    console.log(portfolio);

    return (
        <motion.section className="work-main" initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="portfolio">
                <h1>Projects</h1>
                <div className="block"></div>
                <div className="projects">
                    {portfolio.projects.map((proj) =>
                        <Link to={`/work/${proj._id}`}  key={proj._id}>

                            <div className='project' key={proj._id}>
                                <div className="top">
                                    <img src={proj.images[0]} alt="" />
                                </div>
                                <div className="bottom">
                                    <h2>{proj.name}</h2>
                                    <p>{proj.shortDescription}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            {/* <div className="preview">
                <div className="img">
                    <img src={require('../assets/imgs/avatar.png')} alt="" />
                </div>
                <h1>IM</h1>
            </div> */}
        </motion.section>
    )
}