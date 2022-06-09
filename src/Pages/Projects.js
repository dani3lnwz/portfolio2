import React from 'react';
import project1 from '../images/project1.png'
import project2 from '../images/projects2.png'
import project3 from '../images/projects3.png'

const Projects = () => {
    return (
        <div className='bg-black'>
            <div className='text-center text-pink-700  py-16'>
                <h1 className=' lg:text-5xl text-4xl font-semibold mb-2'>Latest Projects</h1>
                <progress class="progress w-48 lg:w-64 "></progress>
            </div>
            <div className='lg:max-screen grid grid-cols-1 lg:grid-cols-3 gap-10 px-8 '>
                <div class="card rounded lg:max-screen bg-zinc-900 shadow-xl">
                    <figure class="lg:p-6">
                        <img src={project1} alt="Shoes" class="rounded" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title">Paint Pro</h2>
                        <p>Paint pro is a manufacturer website. Worked to order the tools by maintaining a range of quantities.</p>
                        <div class="card-actions">
                            <a href="https://paint-pro-99a0a.web.app/" target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-primary border-0 px-6 text-xl hover:bg-pink-700">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card lg:max-screen bg-slate-900 rounded shadow-xl">
                    <figure class="lg:p-6">
                        <img src={project2} alt="Shoes" class="rounded" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title">Laptop Mart</h2>
                        <p>Laptop mart is a warehouse management website.Handled restocked and delivered product quantity.</p>
                        <div class="card-actions">
                            <a href="https://laptop-mart.web.app/" target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-primary border-0 px-6 text-xl hover:bg-pink-700">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card lg:max-screen bg-zinc-900 rounded shadow-xl">
                    <figure class="lg:p-6">
                        <img src={project3} alt="Shoes" class="rounded" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title">RCotterill-Personal-Trainer</h2>
                        <p>Gym Trainer is an Independent service provider website. Provide different kind of services.</p>
                        <div class="card-actions">
                            <a href="https://gym-trainer-d8b35.web.app/" target="_blank" rel="noopener noreferrer">
                                <button class="btn btn-primary border-0 px-6 text-xl hover:bg-pink-700">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;