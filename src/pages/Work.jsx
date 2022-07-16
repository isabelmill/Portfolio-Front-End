import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
import Select from 'react-select'
import { useSelector } from 'react-redux'
import { Loading } from '../cmps/Loading'

export function Work() {
    const { portfolio } = useSelector(state => state.portfolioModule)
    const [options, setOptions] = useState([])
    const [filterBy, setFilter] = useState([])
    const [projects, setProjects] = useState([])


    useEffect(() => {

        if (portfolio) {
            let newPortfolio = JSON.parse(JSON.stringify(portfolio))
            const idx = newPortfolio.skills.findIndex((skill) => skill === 'Git')
            if (idx !== -1) newPortfolio.skills.splice(idx, 1)
            const options = []
            newPortfolio.skills.map((option) => {
                options.push({ value: option, label: option })
                setOptions(options)
            })
            loadWork()
        }
    }, [portfolio])

    const onChangeFilter = (array) => {
        setFilter(array)
        loadWork(array)
    }

    const loadWork = (filter = filterBy) => {
        let newPortfolio = JSON.parse(JSON.stringify(portfolio))
        let arr = []
        filter.forEach((val) => {
            arr.push(val.value)
        })
        let work = newPortfolio.projects
        if (filter.length > 0) {
            work = work.filter((proj) => {
                return proj.techStack.some((skill) => arr.includes(skill));
            });
        }

        let projects = work.map((proj) =>
            <Link to={`/work/${proj._id}`} state={{ port: portfolio }} key={proj._id}>

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
        )

        setProjects(projects)
    }

    if (!portfolio || !projects) return <Loading />
    return (
        <motion.section className="work-main" initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="portfolio">
                <div className="portfolio-header">
                    <div className="header">
                        <p>My Recent Work</p>
                        <h1>Projects</h1>
                        <div className="block"></div>
                    </div>
                    <div className="filter">
                        <Select className='select' options={options}
                            isMulti
                            placeholder='Filter By Technologies'
                            onChange={onChangeFilter}
                        />
                    </div>
                </div>
                <div className="projects">
                    {projects}
                </div>
            </div>
        </motion.section>
    )
}