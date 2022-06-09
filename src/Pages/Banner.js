import React from 'react';
import image from '../images/my-bg2.png'
import { SocialIcon } from 'react-social-icons';
import TypeAnimation from 'react-type-animation';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-black">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='lg:w-2/4'>
                        <img src={image} alt='' />
                    </div>
                    <div className='text-white lg:p-20'>
                        <p>HI THERE! I'M,</p>
                        <h1 className="text-4xl mb-2 font-bold text-pink-700 font-thin">Nargis Akther</h1>

                        <h4 className='text-pink-700 text-2xl'>
                            <div>
                                <TypeAnimation
                                    cursor={true}
                                    sequence={[
                                        'Front-End Web Developer',
                                        2000,
                                        'React.js Developer',
                                        2000,
                                    ]}
                                    wrapper="h2"
                                    repeat={Infinity}
                                />
                            </div>
                        </h4>
                        <p class="py-6 text-xl">passionate about creating interactive applications and experiences on web.</p>

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