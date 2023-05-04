import React from 'react';

import './header.css';

const Header = () => {
    return (
        <>
            <div className='box'>
                <div className='img'><a href={require('../img/romjan-ali.jpg')} alt="Romjan Ali"><img className="romjan-ali" src={require('../img/romjan-ali.jpg')} alt="Romjan Ali" /></a></div>
                <div className='name'>
                    <h2 className='my-name'>Romjan Ali</h2>
                    <h4 className='profession'>Front-end Developer</h4>
                    <div className='active'>Available for work</div>
                </div>
            </div>

            <div className='links-container'>
                <ul className='links'>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;