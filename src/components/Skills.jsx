import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <div className='img'><img src={require('../img/html5.png')} alt='HTML5' /></div>
            <div className='img'><img src={require('../img/css3.png')} alt='CSS3' /></div>
            <div className='img'><img src={require('../img/js.png')} alt='JavaScript' /></div>
            <div className='img'><img src={require('../img/ReactJS.png')} alt='React.js' /></div>
            <div className='img'><img src={require('../img/Node.js.png')} alt='Node.js' /></div>
        </div>
    );
};

export default Skills;