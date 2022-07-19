import { useEffect, useState, useRef } from 'react'
import { uploadImg } from '../services/img-upload.js'
import { useForm } from '../hooks/useForm.jsx'
import { updatePortfolio } from '../store/actions/portfolioActions'
import { useSelector, useDispatch } from 'react-redux'
import { Loading } from './Loading.jsx'

export function ProjectModal(props) {

    const [project, setProject] = useState(JSON.parse(JSON.stringify(props.project)))
    const [isDragOver, setDragOver] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [imgNum, setImgNum] = useState(null)
    const [newProject, handleForm, setNewProject] = useForm(null)
    const [images, setImages] = useState(project.images)
    const dispatch = useDispatch()
    const { portfolio } = useSelector(state => state.portfolioModule)
    const skillInput = useRef()

    const hiddenFile = useRef()

    useEffect(() => {
        if (project) {
            makeNewProj()
        }
        // eslint-disable-next-line
    }, [project])


    const close = () => {
        props.onHandleModal(false, null);
    }
    const deleteSkill = (skill) => {
        const idx = project.techStack.indexOf(skill)
        project.techStack.splice(idx, 1)
        setNewProject({ ...project })

    }
    const addSkill = (ev) => {
        ev.preventDefault();
        if (!skillInput.current.value) return
        project.techStack.push(skillInput.current.value)
        setNewProject({ ...project })
        skillInput.current.value = ''
    }

    const makeNewProj = () => {
        setNewProject({ ...project })
        // setImages(newProject?.images)
    }

    const drop = (ev, isDrop) => {
        ev.preventDefault();
        setDragOver(isDrop)
    }

    const handleFile = (ev, i = imgNum) => {
        ev.preventDefault();
        let file;
        if (ev.type === 'change') file = ev.target.files[0];
        else if (ev.type === 'drop') file = ev.dataTransfer.files[0];
        onUploadImg(file, i);
    }

    const handleClick = (ev, i) => {
        ev.preventDefault();
        setImgNum(i)
        hiddenFile.current.click();
    };

    const handleChange = (ev, i) => {
        let arr = [...images]
        arr[i] = ev.target.value
        setImages(arr);
    };
    const saveForm = (ev) => {
        ev.preventDefault();
        newProject.images = images
        const newPort = { ...portfolio }
        const idx = newPort.projects.findIndex((project) => project._id === newProject._id)
        if (idx === -1) {
            newPort.projects.push(newProject)
        } else newPort.projects.splice(idx, 1, newProject)
        dispatch(updatePortfolio({ ...newPort }))
        close()

    };

    const onUploadImg = async (file, i) => {
        setLoading(true)
        setDragOver(false)
        const res = await uploadImg(file);

        let arr = [...images]
        arr[i] = res.url
        setImages(arr)

        setLoading(false)

    }

    if (!newProject) return <Loading />

    return (
        <section className="project-modal">
            <div className="content">
                <header>
                    <div className="name">
                        <h1>{project.name}</h1>
                        <div className="block"></div>
                    </div>
                    <button onClick={close} className="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" /></svg>
                    </button>
                </header>
                <div className='body'>
                    <form onSubmit={saveForm}>
                        <div className="input">
                            <label htmlFor="">Name</label>
                            <input onChange={handleForm} name='name' value={newProject.name} type="text" />
                        </div>
                        <div className="input">
                            <label htmlFor="">Short Description</label>
                            <textarea onChange={handleForm} value={newProject.shortDescription} name="shortDescription" id="" cols="10" rows="2"></textarea>
                        </div>
                        <div className="input">
                            <label htmlFor="">Description</label>
                            <textarea onChange={handleForm} value={newProject.description} name="description" id="" cols="10" rows="4"></textarea>
                        </div>
                        <div className="input">
                            <label htmlFor="">Website Link</label>
                            <input onChange={handleForm} name='website' value={newProject.website} type="text" />
                        </div>
                        <div className="input">
                            <label htmlFor="">Github Link</label>
                            <input onChange={handleForm} name='gitHub' value={newProject.gitHub} type="text" />
                        </div>

                        {/* <div className="tech-stack"> */}
                        <div className="input">
                            <label htmlFor="">Tech-Stack</label>
                            <div className="skills">
                                {newProject.techStack.map((skill) =>
                                    <div className="skill" key={skill}>{skill}
                                        <svg onClick={() => deleteSkill(skill)} xmlns="http://www.w3.org/2000/svg" fill='rgb(39, 39, 39)' height="20" width="20"><path d="M5.896 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V5.125h-.813v-1.75h4.209V2.5h4.916v.875h4.209v1.75h-.834V15.75q0 .729-.51 1.24-.511.51-1.24.51Zm8.187-12.375H5.896V15.75h8.187ZM7.458 14h1.75V6.875h-1.75Zm3.313 0h1.75V6.875h-1.75ZM5.896 5.125V15.75Z" /></svg>
                                    </div>
                                )}
                            </div>
                            <label htmlFor="">Add Technology</label>
                            <div className="btns">
                                <input ref={skillInput} type="text" />
                                <button onClick={addSkill}>Add</button>
                            </div>
                        </div>
                        {/* </div> */}


                        <div className="img-upload-container">
                            <div className="input">
                                <label htmlFor="">Images</label>
                                <div className="images">


                                    <div className="first-image">
                                        <div className="image">
                                            <label
                                                htmlFor="imgUploader"
                                                onDrop={event => handleFile(event, 0)}
                                                onDragOver={event => drop(event, true)}
                                                onDragLeave={event => drop(event, true)}
                                            >
                                                {/* {isDragOver ? <p>DRAG</p> : <p>Drag Image Here</p>} */}
                                                {!images[0] ? <p>Drag Preview Image</p> : <img src={images[0]} />}
                                            </label>
                                        </div>
                                        <label className="img-input">
                                            <input placeholder='Preview Image' type="text" onChange={event => handleChange(event, 0)} value={images[0]} />
                                            <button onClick={event => handleClick(event, 0)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill='white' width="24"><path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm5-4V7.85l-2.6 2.6L7 9l5-5 5 5-1.4 1.45-2.6-2.6V16Z" /></svg>
                                            </button>
                                            <input
                                                ref={hiddenFile}
                                                type="file"
                                                name="img-uploader"
                                                id="imgUploader"
                                                onChange={event => handleFile(event)}
                                            />
                                        </label>
                                    </div>





                                    <div className="second-image">
                                        <div className="image">
                                            <label
                                                htmlFor="imgUploader"
                                                onDrop={event => handleFile(event, 1)}
                                                onDragOver={event => drop(event, true)}
                                                onDragLeave={event => drop(event, true)}
                                            >
                                                {/* {isDragOver ? <p>DRAG</p> : <p>Drag Image Here</p>} */}
                                                {!images[1] ? <p>Drag Desktop Image</p> : <img src={images[1]} />}
                                            </label>
                                        </div>
                                        <label className="img-input">
                                            <input placeholder='Desktop Image' type="text" onChange={event => handleChange(event, 1)} value={images[1]} />
                                            <button onClick={event => handleClick(event, 1)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill='white' width="24"><path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm5-4V7.85l-2.6 2.6L7 9l5-5 5 5-1.4 1.45-2.6-2.6V16Z" /></svg>
                                            </button>
                                            <input
                                                ref={hiddenFile}
                                                type="file"
                                                name="img-uploader"
                                                id="imgUploader"
                                                onChange={event => handleFile(event)}
                                            />
                                        </label>
                                    </div>





                                    <div className="third-image">
                                        <div className="image">
                                            <label
                                                htmlFor="imgUploader"
                                                onDrop={event => handleFile(event, 2)}
                                                onDragOver={event => drop(event, true)}
                                                onDragLeave={event => drop(event, true)}
                                            >
                                                {/* {isDragOver ? <p>DRAG</p> : <p>Drag Image Here</p>} */}
                                                {!images[2] ? <p>Drag Mobile Image</p> : <img src={images[2]} />}
                                            </label>
                                        </div>
                                        <label className="img-input">
                                            <input placeholder='Mobile Image' type="text" onChange={event => handleChange(event, 2)} value={images[2]} />
                                            <button onClick={event => handleClick(event, 2)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill='white' width="24"><path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm5-4V7.85l-2.6 2.6L7 9l5-5 5 5-1.4 1.45-2.6-2.6V16Z" /></svg>
                                            </button>
                                            <input
                                                ref={hiddenFile}
                                                type="file"
                                                name="img-uploader"
                                                id="imgUploader"
                                                onChange={event => handleFile(event)}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='save'>Save</button>
                    </form>
                </div>
            </div>
        </section >
    )
}
