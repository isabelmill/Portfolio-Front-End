import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Loading } from '../cmps/Loading'
// import { Loading } from '../assets/imgs/computer.jpg'

export const WorkDetails = () => {
    const { portfolio } = useSelector(state => state.portfolioModule)
    const params = useParams()
    const [work, setWork] = useState(null)
    const [currImage, setImage] = useState(null)

    useEffect(() => {
        loadWork()
    }, [params._id, portfolio])

    useEffect(() => {
        setImage(work?.images[1])
    }, [work])


    const loadWork = () => {
        const work = portfolio?.projects.find((proj) => proj._id === params._id)
        setWork(work)
    }

    const nextImage = () => {
        if (currImage === work?.images[0]) {
            setImage(work.images[1])
        } else if (currImage === work?.images[1]) {
            setImage(work.images[2])
        } else if (currImage === work?.images[2]) {
            setImage(work.images[0])
        }
    }

    const prevImage = () => {
        if (currImage === work?.images[0]) {
            setImage(work.images[2])
        } else if (currImage === work?.images[2]) {
            setImage(work.images[1])
        } else if (currImage === work?.images[1]) {
            setImage(work.images[0])
        }
    }


    if (!work) return <Loading />
    return (
        <motion.section initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }} className="work-details">
            <div className="work">
                <NavLink className="back-btn" to='/work'>
                    <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8 18-8-8 8-8 1.417 1.417L2.833 10l6.584 6.583Z" /></svg>
                    Back</NavLink>
                <div className="project-image">
                    <div className="img">
                        <img src={currImage} alt="" />
                        {/* <img src={require('../assets/imgs/deskImg.png')} alt="" /> */}
                        {/* <img src={require('../assets/imgs/computer1.jpg')} alt="" /> */}
                        {/* <img className='img-inside-desk' src={work.images[0]} alt="" /> */}
                        {/* <div onClick={nextImage} className="next">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m6 18-1.417-1.417L11.167 10 4.583 3.417 6 2l8 8Z" /></svg>
                        </div>
                        <div onClick={prevImage} className="back">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8 18-8-8 8-8 1.417 1.417L2.833 10l6.584 6.583Z" /></svg>
                        </div> */}
                    </div>
                    <div className="btns">
                        <a target="_blank" href={work.website}><button>
                            <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M3.417 14.875q-.729 0-1.24-.51-.51-.511-.51-1.24V4.25q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v8.875q0 .729-.51 1.24-.511.51-1.24.51Zm0-1.75h13.166V4.25H3.417v8.875ZM1.708 17.5q-.354 0-.614-.26-.261-.261-.261-.615t.261-.615q.26-.26.614-.26h16.584q.354 0 .614.26.261.261.261.615t-.261.615q-.26.26-.614.26Zm1.709-4.375V4.25v8.875Z" /></svg>
                            Website</button></a>

                        <a target="_blank" href={work.gitHub}><button>
                            <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m7 15-5-5 5-5 1.062 1.062L4.125 10l3.937 3.938Zm6 0-1.062-1.062L15.875 10l-3.937-3.938L13 5l5 5Z" /></svg>
                            Github Code</button></a>
                    </div>
                </div>
                <div className="project-info">
                    <h1>{work.name}</h1>
                    <div className="block"></div>
                    <h2>{work.shortDescription}</h2>
                    <p>{work.description}</p>
                    <h2>Technologies Used</h2>
                    <div className="technologies-list">
                        {work.techStack.map((tech) =>
                            <div className="technology" key={tech}>{tech}</div>
                        )}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
