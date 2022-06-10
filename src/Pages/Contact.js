import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import React from 'react';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i3x8ub3', 'template_52otbsb', e.target, 'vzPMpB6AzBd8B5-YZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='mainBody pb-20'>
            <div className='text-center text-white  py-16'>
                <h1 className=' lg:text-5xl text-4xl mb-2 font3'>Contact Me</h1>
                <progress class="progress w-48 lg:w-64 "></progress>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                <div className='px-16 text-white'>
                    <h1 className='text-orange-700 text-4xl mb-4 border-l-4 border-orange-700 pl-2 font1 font-bold'>Get in Touch</h1>
                    <p className='pb-4'>If you have any query want to ask me or want to give me any important message, you can send me a message at any time and yes, I will try to reply to your message in your email.</p>
                    <div className='flex items-center gap-5 pb-4'>
                        <FontAwesomeIcon className='text-2xl text-pink-700' icon={faUserAlt}></FontAwesomeIcon>
                        <div>
                            <h1 className='text-md font-semibold'>Name</h1>
                            <h1 className='text-md'>Nargis Akther</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-5  pb-4'>
                        <FontAwesomeIcon className='text-2xl text-pink-700' icon={faPhone}></FontAwesomeIcon>
                        <div>
                            <h1 className='text-md font-semibold'>Phone</h1>
                            <h1 className='text-md'>+8801939860072</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-5  pb-4'>
                        <FontAwesomeIcon className='text-2xl text-pink-700' icon={faEnvelope}></FontAwesomeIcon>
                        <div>
                            <h1 className='text-md font-semibold'>Email</h1>
                            <h1 className='text-md'>nargisakther1933@gmail.com</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-5  pb-4'>
                        <FontAwesomeIcon className='text-2xl text-pink-700' icon={faMapMarkerAlt}></FontAwesomeIcon>
                        <div>
                            <h1 className='text-md font-semibold'>Address</h1>
                            <h1 className='text-md'>North Patenga, Chattogram</h1>
                        </div>
                    </div>
                </div>
                <div className='px-16 text-center'>
                    <h1 className='text-orange-700 text-4xl mb-6 border-l-4 border-orange-700 pl-2 font1 font-bold text-left lg:ml-20 '>Message me</h1>
                    <form onSubmit={sendEmail} >
                        <input class="input input-bordered input-primary mb-4 w-full max-w-sm" type="text" name='name' placeholder='Name' /><br />
                        <input class="input input-bordered input-primary mb-4 w-full max-w-sm" type="email" name="email" placeholder='Email' /> <br />
                        <input class="input input-bordered input-primary mb-4 w-full max-w-sm" type="text" name="subject" placeholder='Subject' /><br />
                        <textarea class="textarea textarea-primary max-w-sm w-full mb-4 " name="message" placeholder='Your Message' cols="42" rows="4"></textarea> <br />
                        <div className='btn btn-primary'>
                            <input type="submit" className='text-xl mr-3' value="Send" />
                            <FontAwesomeIcon className='text-2xl text-white' icon={faPaperPlane}></FontAwesomeIcon>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;