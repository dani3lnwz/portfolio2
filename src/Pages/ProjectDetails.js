import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams()
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [id])
    const selectedProject = projects.find(project => parseInt(project.id) === parseInt(id))


    return (
        <div className=' lg:p-12'>

            <div className='bg-black lg:p-16 p-6'>
                <div className='py-8 text-center'>
                    <h1 className='text-4xl  text-pink-700 font1 font-bold '>Project Overview</h1>
                    <progress class="progress w-80 "></progress>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 items-center bg-slate-800 p-10'>
                    <div><img src={selectedProject?.img1} alt="" /></div>
                    <div><img src={selectedProject?.img2} alt="" /></div>
                    <div><img src={selectedProject?.img3} alt="" /></div>
                </div>
                <h1 className='text-4xl text-white font3 text-center my-10'>"{selectedProject?.name}"</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 items-center lg:py-6'>
                    <div className='py-8 text-white lg:border-r-4 border-orange-700 pr-18'>
                        <h1 className='text-2xl font3 text-pink-700'>Features</h1>
                        <ul className='ml-4'>
                            {
                                selectedProject?.features.map(feature => <li type='disc'>
                                    {feature}
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className='lg:border-r-4 border-orange-700 pr-18'>
                        <h1 className='text-2xl font3 text-pink-700'>Used Technologies</h1>
                        <p className='text-white text-md'>{selectedProject?.technologies}</p>
                    </div>
                    <div className='flex'>
                        <div class="card-actions mr-2">
                            <a href={selectedProject?.live} target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-outline text-white hover:bg-pink-700">Live Preview</button>
                            </a>
                        </div>
                        <div class="card-actions mr-2">
                            <a href={selectedProject?.client} target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-outline text-white hover:bg-pink-700">Client Code</button>
                            </a>
                        </div>
                        {
                            selectedProject?.server !== '' && <div class="card-actions mr-2">
                                <a href={selectedProject?.server} target="_blank" rel="noopener noreferrer">
                                    <button class="btn btn-outline text-white hover:bg-pink-700">Server Code</button>
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;