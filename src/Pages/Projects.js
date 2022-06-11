import React, { useEffect, useState } from 'react';
import project1 from '../images/project1.png'
import project2 from '../images/projects2.png'
import project3 from '../images/projects3.png'
import Project from './Project';
import './Styles.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='projectBody pb-20'>
            <div className='text-center text-white  py-16'>
                <h1 className=' lg:text-5xl text-4xl mb-2 font3'>Latest Projects</h1>
                <progress class="progress w-72 lg:w-96 "></progress>
            </div>
            <div className=' lg:max-screen grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-8 px-4'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;