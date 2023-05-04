import React from 'react';
import './recent-projects.css';

const RecentProjects = () => {
    return (
        <>
            <div className='recent-works' id='work'>
                <h1 className='h'>Recent Projects</h1>
                <div className='recent'>
                    <h3 className='title'>React Budget Planner</h3>
                    <img src={require('../img/react-budget-planner.png')} alt='React Budget Planner' />
                </div>
                <div className='recent'>
                    <h3 className='title'>React Notes App</h3>
                    <img src={require('../img/react-notes-app.png')} alt='React Notes App' />
                </div>
            </div>
            <div class="download-my-cv">
                <a href="https://drive.google.com/file/d/1FHoWfyvDVhfIQr4yRmrKSn6j-gzIB-Qe/view?usp=sharing" target="_blank" rel="noreferrer"><i class="fa fa-download" aria-hidden="true" style={{fontSize: 40+'px'}}></i> Download my CV <small>(.PDF)</small></a>
            </div>
        </>
    );
};

export default RecentProjects;