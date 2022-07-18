import { motion } from 'framer-motion'
import { portfolioService } from '../services/portfolio'
import { useEffect, useState, useRef } from 'react'
import { ProjectModal } from '../cmps/ProjectModal'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm.jsx'
import { updatePortfolio } from '../store/actions/portfolioActions'
import { Loading } from '../cmps/Loading'

export function BackOffice() {

    const { portfolio } = useSelector(state => state.portfolioModule)
    const [isOpen, setModal] = useState(false)
    const [currProj, setProj] = useState(null)
    const [newPort, handleChange, setNewPort] = useForm(null)
    const skillInput = useRef()
    const dispatch = useDispatch()


    useEffect(() => {
        if (portfolio) {
            makePortfolio()
        }
        // eslint-disable-next-line
    }, [portfolio])

    const makePortfolio = () => {
        let newPortfolio = { ...portfolio }
        setNewPort(newPortfolio)
    }

    const handleModal = (isOpen, project = portfolioService.emptyProject()) => {
        setModal(isOpen);
        setProj(project)
    }

    const deleteProject = (proj) => {
        const idx = newPort.projects.findIndex((project) => project._id === proj._id)
        newPort.projects.splice(idx, 1)
        dispatch(updatePortfolio({ ...newPort }))
    }

    const deleteSkill = (skill) => {
        const idx = newPort.skills.indexOf(skill)
        newPort.skills.splice(idx, 1)
        dispatch(updatePortfolio({ ...newPort }))
    }

    const addSkill = (ev) => {
        ev.preventDefault()
        newPort.skills.push(skillInput.current.value)
        dispatch(updatePortfolio({ ...newPort }))
        skillInput.current.value = ''
    }

    const update = async (ev) => {
        ev.preventDefault()
        dispatch(updatePortfolio({ ...newPort }))
    }




    const listSkills = portfolio?.skills.map((skill) =>
        <div className='skill' key={skill}>{skill}
            <svg onClick={() => deleteSkill(skill)} xmlns="http://www.w3.org/2000/svg" fill='rgb(39, 39, 39)' height="20" width="20"><path d="M5.896 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V5.125h-.813v-1.75h4.209V2.5h4.916v.875h4.209v1.75h-.834V15.75q0 .729-.51 1.24-.511.51-1.24.51Zm8.187-12.375H5.896V15.75h8.187ZM7.458 14h1.75V6.875h-1.75Zm3.313 0h1.75V6.875h-1.75ZM5.896 5.125V15.75Z" /></svg>
        </div>
    );

    const listProjects = portfolio?.projects.map((proj) =>
        <div className='project' key={proj._id}>
            {proj.name}
            <div className="edit">
                <svg onClick={() => handleModal(true, proj)} xmlns="http://www.w3.org/2000/svg" fill='rgb(39, 39, 39)' height="20" width="20"><path d="M4.25 15.75h1.229l7-7-1.229-1.229-7 7Zm11.938-8.208-3.73-3.73 1.021-1.02q.521-.521 1.24-.521t1.239.521l1.25 1.25q.5.5.5 1.239 0 .74-.5 1.24Zm-1.23 1.229L6.229 17.5H2.5v-3.729l8.729-8.729Zm-3.083-.625-.625-.625 1.229 1.229Z" /></svg>
                <svg onClick={() => deleteProject(proj)} xmlns="http://www.w3.org/2000/svg" fill='rgb(39, 39, 39)' height="20" width="20"><path d="M5.896 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V5.125h-.813v-1.75h4.209V2.5h4.916v.875h4.209v1.75h-.834V15.75q0 .729-.51 1.24-.511.51-1.24.51Zm8.187-12.375H5.896V15.75h8.187ZM7.458 14h1.75V6.875h-1.75Zm3.313 0h1.75V6.875h-1.75ZM5.896 5.125V15.75Z" /></svg>
            </div>
        </div>
    );

    if (!portfolio || !newPort) return <Loading/>
    return (
        <motion.section className="back-office-main" initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}>
            {isOpen && <ProjectModal project={currProj} onHandleModal={handleModal}></ProjectModal>}
            <div className="back-office">
                <div className="portfolio">
                    <h1>Portfolio</h1>
                    <div className="block"></div>
                    <h2>Home Page</h2>
                    {/* ///// */}
                    <form onSubmit={update} >
                        <div className="textarea">
                            <p>Home Text</p>
                            <textarea onChange={handleChange} type="text" name='homePage' value={newPort.homePage} />
                        </div>
                        <h2>About Page</h2>
                        <div className="textarea">
                            <p>Main Text</p>
                            <textarea name='main' onChange={handleChange} type="text" value={newPort.main} />
                        </div>
                        <div className="textarea">
                            <p>Abilities Text</p>
                            <textarea name='abilities' onChange={handleChange} type="text" value={newPort.abilities} />
                        </div>
                        <button>Submit</button>
                    </form>
                    {/* //////// */}
                </div>
                <div className="portfolio-skills-projects">
                    <div className="skills">
                        <h1>Skills</h1>
                        <div className="block"></div>
                        <div className="skills-list">
                            <p>Edit Skill</p>
                            <div className="skills-arr">
                                {listSkills}
                            </div>
                        </div>
                        <div className="input">
                            <p>Add Skill</p>
                            <input name='skill' ref={skillInput} type="text" />
                            <button onClick={addSkill}>Add Skill</button>
                        </div>
                    </div>
                    <div className="projects">
                        <h1>Projects</h1>
                        <div className="block"></div>
                        <p>Edit Project</p>
                        <div className="projects-list">
                            {listProjects}
                        </div>
                        <div className="input">
                            <button onClick={() => handleModal(true)}>Add Project</button>
                        </div>
                    </div>
                </div>
                {/* <div className="stats">
                    <h1>Stats</h1>
                    <div className="block"></div>

                </div> */}
            </div>
        </motion.section>
    )
}