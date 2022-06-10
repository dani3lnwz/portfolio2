import React from 'react';
import image from '../images/my-bg2.png'
import { SocialIcon } from 'react-social-icons';
import TypeAnimation from 'react-type-animation';
import './Styles.css'

const Banner = () => {
    return (
        <div className='contactBody'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='lg:w-2/4'>
                        <img src={image} alt='' />
                    </div>
                    <div className='text-white lg:p-20'>
                        <p>HI THERE! I'M,</p>
                        <h1 className="border-l-4 border-orange-700 pl-3 mt-2 text-4xl mb-2 font3  text-orange-700 ">Nargis Akther</h1>
                        <h1 className='border-l-2 border-pink-700 pl-3 mt-2 text-2xl mb-2 font1 text-pink-700 font-bold'>Front-End Developer</h1>
                        <h4 className='text-slate-500 text-2xl'>
                            <div>
                                <span className='text-white font2'>Expertise On </span>
                                <TypeAnimation
                                    className='border-l-2 border-slate-500 pl-3 mt-2'
                                    speed={10}
                                    cursor={true}
                                    sequence={[
                                        'HTML5',
                                        2000,
                                        'CSS3',
                                        2000,
                                        'Javascript',
                                        2000,
                                        'Bootstrap',
                                        2000,
                                        'Tailwind css',
                                        2000,
                                        'React.js',
                                        2000,
                                        'Node.js',
                                        2000,
                                        'Firebase',
                                        2000,
                                        'MongoDB',
                                        2000,
                                    ]}
                                    wrapper="div"
                                    repeat={Infinity}
                                />
                            </div>
                        </h4>
                        <p class="py-6 text-xl font3">Passionate about Creating Interactive Applications and Developed Web Applications.</p>

                        <div>
                            <div className='flex flex-col lg:flex-row items-center'>
                                <a className='pb-8 lg:pb-0 ' target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1zPJ8rkTB0rX5m5jtwejL7kGS4ISs50if/view" >
                                    <button class="hover:bg-pink-700 border-0 btn btn-primary rounded-full">Download Resume</button>
                                </a>
                                <div className='text-center'>
                                    <SocialIcon target='_blank' style={{ height: 40, width: 40, marginLeft: '12px' }} fgColor="#ffffff" url="https://web.facebook.com/?_rdc=1&_rdr" network='facebook' />
                                    <SocialIcon target='_blank' style={{ height: 40, width: 40, marginLeft: '12px' }} fgColor="#ffffff" url="https://www.linkedin.com/in/nargis-akther-331192241/" network='linkedin' />
                                    <SocialIcon target='_blank' style={{ height: 40, width: 40, marginLeft: '12px' }} fgColor="#000000" bgColor="#ffffff" url="https://github.com/Nargis21" network='github' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;