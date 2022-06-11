import React from 'react';

const About = () => {
    return (
        <div className='lg:p-12'>
            <div className='bg-black p-10 '>
                <div className='py-8 text-center'>
                    <h1 className='text-4xl  text-pink-700 font1 font-bold '>About Me</h1>
                    <progress class="progress w-52 "></progress>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 items-center py-6'>
                    <div className='py-8 text-white lg:border-r-4 border-orange-700 pr-18'>
                        <h1 className='text-2xl font3 font-ahite'>Education</h1>
                        <p>At present I'm a student. I studying in Diploma Engineering at Chattogram Mohila Polytechnic Institute department of Computer Technology.</p>
                    </div>

                    <div className='py-8 text-white lg:border-r-4 border-orange-700 pr-18'>
                        <h1 className='text-2xl font3 font-ahite'>Goal</h1>
                        <p> Goal-oriented Web Developer with fast-learning ability seeking a challenging career to utilize my skills, keep learning and sharing
                        </p>
                    </div>
                    <div className='py-8 text-white pr-18'>
                        <h1 className='text-2xl font3 font-ahite'>Passion</h1>
                        <p> Passionate about Creating Interactive Applications and Developed Web Applications. Interested to take new challenges and learn new technologies.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;