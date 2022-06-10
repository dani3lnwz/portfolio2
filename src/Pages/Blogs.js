import React from 'react';
import TypeAnimation from 'react-type-animation';


const Blogs = () => {
    return (
        <div className='w-full h-96 pb-96 pt-44 blogsBody text-4xl text-pink-700 font-bold font3 text-center'>
            <TypeAnimation
                cursor={true}
                sequence={['Comming Soon...', 1000, '']}
                wrapper="h2"
                repeat={Infinity}
            />
        </div>
    );
};

export default Blogs;