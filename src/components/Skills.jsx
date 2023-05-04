import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <img src={require('../img/html5.png')} alt='HTML5' />
            <img src={require('../img/css3.png')} alt='CSS3' />
            <img src={require('../img/js.png')} alt='JavaScript' />
            <img src={require('../img/ReactJS.png')} alt='React.js' />
            <img src={require('../img/Node.js.png')} alt='Node.js' />
        </div>
    );
};

export default Skills;