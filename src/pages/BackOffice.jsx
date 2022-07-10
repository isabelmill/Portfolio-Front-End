import { motion } from 'framer-motion'
import { portfolio } from '../services/portfolio'

export function BackOffice() {

    const listSkills = portfolio.skills.map((skill) =>
        <div className='skill' key={skill}>{skill}
            <svg xmlns="http://www.w3.org/2000/svg" fill='rgb(39, 39, 39)' height="20" width="20"><path d="M5.896 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V5.125h-.813v-1.75h4.209V2.5h4.916v.875h4.209v1.75h-.834V15.75q0 .729-.51 1.24-.511.51-1.24.51Zm8.187-12.375H5.896V15.75h8.187ZM7.458 14h1.75V6.875h-1.75Zm3.313 0h1.75V6.875h-1.75ZM5.896 5.125V15.75Z" /></svg>
        </div>
    );

    const listProjects = portfolio.projects.map((proj) =>
        <div className='project' key={proj}>
            {proj.name}
            <div className="edit">
                <svg xmlns="http://www.w3.org/2000/svg" fill='rgb(39, 39, 39)' height="20" width="20"><path d="M4.25 15.75h1.229l7-7-1.229-1.229-7 7Zm11.938-8.208-3.73-3.73 1.021-1.02q.521-.521 1.24-.521t1.239.521l1.25 1.25q.5.5.5 1.239 0 .74-.5 1.24Zm-1.23 1.229L6.229 17.5H2.5v-3.729l8.729-8.729Zm-3.083-.625-.625-.625 1.229 1.229Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill='rgb(39, 39, 39)' height="20" width="20"><path d="M5.896 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V5.125h-.813v-1.75h4.209V2.5h4.916v.875h4.209v1.75h-.834V15.75q0 .729-.51 1.24-.511.51-1.24.51Zm8.187-12.375H5.896V15.75h8.187ZM7.458 14h1.75V6.875h-1.75Zm3.313 0h1.75V6.875h-1.75ZM5.896 5.125V15.75Z" /></svg>
            </div>
        </div>
    );

    return (
        <motion.section className="back-office-main" initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="back-office">
                <div className="portfolio">
                    <h1>Portfolio</h1>
                    <div className="block"></div>
                    <h2>Home Page</h2>
                    <form action="" >
                        <div className="textarea">
                            <p>Home Text</p>
                            <textarea type="text" value={portfolio.homePage} />
                        </div>
                        <h2>About Page</h2>
                        <div className="textarea">
                            <p>Main Text</p>
                            <textarea type="text" value={portfolio.about.main} />
                        </div>
                        <div className="textarea">
                            <p>Abilities Text</p>
                            <textarea type="text" value={portfolio.about.abilities} />
                        </div>
                        <button>Submit</button>
                    </form>
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
                            <input type="text" />
                            <button>Add Skill</button>
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
                            <button>Add Project</button>
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