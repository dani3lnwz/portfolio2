import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='p-10 text-white bg-slate-800 text-sm text-center'>
            <p>nargis21 <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> <span id="yearFooter">{date}</span> | All Rights reserved</p>
        </div>
    );
};

export default Footer;