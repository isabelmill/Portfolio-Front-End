import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Loading } from '../cmps/Loading'

export function About() {

    const { portfolio } = useSelector(state => state.portfolioModule)

    const listSkills = portfolio?.skills.map((skill) =>
        <div className='skill' key={skill}>{skill}</div>
    );

    if (!portfolio) return <Loading/>
    return (
        <motion.section className="about-main" initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }} >
            <section className="about">
                <div className="about-me">
                    <p>Let me introduce myself</p>
                    <h1>About</h1>
                    <div className="block"></div>
                    <p>{portfolio.about.main}</p>
                    <p>{portfolio.about.abilities}</p>
                    <a href={require('../assets/resume.pdf')} download className='resume'>Download Resume</a>
                </div>
                <div className="skills-info">
                    <p>My tech stack</p>
                    <h1>Skills</h1>
                    <div className="block"></div>
                    <div className="skills">
                        {listSkills}
                    </div>
                    <p>This is a list of my foundational full-stack development skills. I'm also familiar with other related tools. If you're curious as to whether I can use a specific tool, feel free to
                        <NavLink className="link" to='/contact'>
                            contact
                        </NavLink>
                        me and ask.</p>
                </div>
            </section>
            <section className="activity">
                <h1>I Can Make Your Website</h1>
                <div className="services">
                    <div className="service">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="48" width="48"><path d="M4 40v-4.5h4.3V11q0-1.2.9-2.1.9-.9 2.1-.9h31v3h-31v24.5H23V40Zm23.95 0q-.8 0-1.375-.6T26 37.8V15.95q0-.8.575-1.375T27.95 14h13.6q1 0 1.725.575.725.575.725 1.375V37.8q0 1-.725 1.6-.725.6-1.725.6ZM29 35.5h12V17H29Z" /></svg>
                        <h2>Responsive</h2>
                        <p>My layouts will work on any device, big or small.</p>
                    </div>
                    <div className="service">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="48" width="48"><path d="M20.35 31.75q1.15 1.15 3.325 1.075 2.175-.075 3.175-1.625l10.8-16.95L20.9 25.2q-1.5 1-1.6 3.2-.1 2.2 1.05 3.35ZM9.6 40q-.85 0-1.675-.425Q7.1 39.15 6.7 38.35q-1.3-2.4-2-4.875T4 28.2q0-4.15 1.575-7.825t4.275-6.4q2.7-2.725 6.325-4.325t7.725-1.6q2.85 0 5.95.925t5.95 3.175L33.2 14q-2.25-1.5-4.825-2.225-2.575-.725-4.475-.725-7 0-11.95 5Q7 21.05 7 28.2q0 2.25.625 4.55T9.4 37h28.95q1.1-1.8 1.75-4.2.65-2.4.65-4.7 0-2.1-.625-4.525Q39.5 21.15 37.9 19.1l1.95-2.6q1.9 2.8 2.85 5.625.95 2.825 1.05 5.675.1 3-.6 5.65-.7 2.65-2.05 4.9-.6 1.15-1.275 1.4-.675.25-1.675.25Zm13.85-15.4Z" /></svg>
                        <h2>Fast</h2>
                        <p>Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                    <div className="service">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="48" width="48"><path d="m44.35 19.65-1.15-2.5L40.7 16l2.5-1.15 1.15-2.5 1.15 2.5L48 16l-2.5 1.15ZM38 10.9l-1.75-3.7-3.7-1.75 3.7-1.75L38 0l1.75 3.7 3.7 1.75-3.7 1.75ZM18 44q-1.7 0-2.875-1.175T13.95 39.95h8.1q0 1.7-1.175 2.875T18 44Zm-8.1-7.15v-3h16.2v3Zm.25-6.05q-3.3-2.15-5.225-5.375Q3 22.2 3 18.15q0-6.1 4.45-10.55Q11.9 3.15 18 3.15q6.1 0 10.55 4.45Q33 12.05 33 18.15q0 4.05-1.9 7.275-1.9 3.225-5.25 5.375Zm1.1-3H24.8q2.4-1.6 3.8-4.15 1.4-2.55 1.4-5.5 0-4.95-3.525-8.475Q22.95 6.15 18 6.15q-4.95 0-8.475 3.525Q6 13.2 6 18.15q0 2.95 1.4 5.5t3.85 4.15Zm6.75 0Z" /></svg>
                        <h2>Beautifully Designed</h2>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}