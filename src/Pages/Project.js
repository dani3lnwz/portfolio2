import React from 'react';
import { Link } from "react-router-dom";


const Project = ({ project }) => {
    const { id, name, img1, description, live } = project
    return (
        <div class="border-l-8 border-orange-700 card rounded lg:max-screen bg-slate-900 shadow-xl">
            <figure class="lg:px-6 lg:pt-6">
                <img src={img1} alt="Shoes" class="rounded" />
            </figure>
            <div class="card-body items-center text-center text-white">
                <h2 class="card-title text-orange-700 text-3xl font1">{name}</h2>
                <p>{description}</p>
                <div className='flex'>
                    <div class="card-actions mr-2">
                        <a href={live} target="_blank" rel="noopener noreferrer">
                            <button class="btn btn-outline text-white hover:bg-pink-700">Live Preview</button>
                        </a>
                    </div>
                    <div class="card-actions">
                        <Link to={`/details/${id}`}>
                            <button class="btn btn-outline text-white hover:bg-pink-700">Explore More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;