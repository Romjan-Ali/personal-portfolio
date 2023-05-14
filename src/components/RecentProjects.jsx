import React, {useRef, useEffect, useState} from 'react';
import './recent-projects.css';

const RecentProjects = () => {
    
    const [minHeight, setMinHeight] = useState(null);

    const projectDetails = useRef();
    const projectPhoto = useRef();

    useEffect(()=>{
        const handleResize = () => {
            const projectDetailsHeight = parseFloat(window.getComputedStyle(projectDetails.current).getPropertyValue("min-height"));
            const projectPhotoHeight = parseFloat(window.getComputedStyle(projectPhoto.current).getPropertyValue("min-height"));
            setMinHeight(projectDetailsHeight < projectPhotoHeight ? projectPhotoHeight : projectDetailsHeight);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[]);

    return (
        <>
            <div className='recent-works' id='work'>
                <h1 className='h'>Recent Projects</h1>
                <div className='recent'>
                    {/*<h3 className='title'>React Budget Planner</h3>
                    <img src={require('../img/react-budget-planner.png')} alt='React Budget Planner' />*/}
                    <div className='project-details' ref={projectDetails} style={{minHeight}}>
                        <div>
                            <h3>React Budget Planner</h3>
                            <h4>FEATURES</h4>
                            <ul>
                                <li>Expense list can be created</li>
                                <li>Cost can be added to the list</li>
                                <li>Budget can be edited</li>
                                <li>The remainder of the budget is shown</li>
                                <li>The total cost is shown</li> 
                            </ul>
                        </div>
                    </div>
                    <div className='project-photo' ref={projectPhoto} style={{minHeight}}>
                        <img src={require('../img/react-budget-planner.png')} alt='React Budget Planner' />
                    </div>
                </div>
                <div className='recent'>
                    <div className='project-details' ref={projectDetails} style={{minHeight}}>
                    <div>
                        <h3>React Notes App</h3>
                        <h4>FEATURES</h4>
                        <ul>
                            <li>Notes Can be added</li>
                            <li>Notes Can be saved for future use</li>
                            <li>Notes can be edited</li>
                            <li>Notes can be deleted</li>
                            <li>Dark mode can be turned on</li>
                        </ul>
                        </div>
                    </div>
                    <div className='project-photo' ref={projectPhoto} style={{minHeight}}>
                        <img src={require('../img/react-notes-app.png')} alt='React Notes App' />
                    </div>
                </div>
            </div>
            <div className="download-my-cv">
                <a href="https://drive.google.com/file/d/1tScktzwqofYKq0QRw215NThEX5A2jB86/view?usp=share_link" target="_blank" rel="noreferrer"><i className="fa fa-download" aria-hidden="true" style={{fontSize: 40+'px'}}></i> Download my CV <small>(.PDF)</small></a>
            </div>
        </>
    );
};

export default RecentProjects;