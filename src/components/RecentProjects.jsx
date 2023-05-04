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
            <div className="download-my-cv">
                <a href="https://download.wetransfer.com/usgv/ec36ee9838f21483c3b12d74b068684020230504082310/1326876b7faea1c3ee1156252cbcb448a2a32d1a/CV%20of%20Romjan%20Ali.pdf?token=eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODMxODg2NjQsImV4cCI6MTY4MzE4OTI2NCwidW5pcXVlIjoiZWMzNmVlOTgzOGYyMTQ4M2MzYjEyZDc0YjA2ODY4NDAyMDIzMDUwNDA4MjMxMCIsImZpbGVuYW1lIjoiQ1Ygb2YgUm9tamFuIEFsaS5wZGYiLCJ3YXliaWxsX3VybCI6Imh0dHA6Ly9zdG9ybS5wcm9kdWN0LnN2Yy5jbHVzdGVyLmxvY2FsOjkyOTIvYXBpL3dheWJpbGxzL2E0ZGRlOGEzMzExNzEzNjNhMGJjZjY5Yzk0ZTQ3NzhjNmVhYWJlNGEwZGI2NjkwZDBlNTMwOTdlOWNmZCIsImZpbmdlcnByaW50IjoiMTMyNjg3NmI3ZmFlYTFjM2VlMTE1NjI1MmNiY2I0NDhhMmEzMmQxYSIsImNhbGxiYWNrIjoie1wiZm9ybWRhdGFcIjp7XCJhY3Rpb25cIjpcImh0dHA6Ly9mcm9udGVuZC5zZXJ2aWNlLmV1LXdlc3QtMS53ZXRyYW5zZmVyLm5ldC93ZWJob29rcy9iYWNrZW5kXCJ9LFwiZm9ybVwiOntcInRyYW5zZmVyX2lkXCI6XCJlYzM2ZWU5ODM4ZjIxNDgzYzNiMTJkNzRiMDY4Njg0MDIwMjMwNTA0MDgyMzEwXCIsXCJkb3dubG9hZF9pZFwiOjE4NTAzMjEzMTY4fX0ifQ.CVNzVMLj2eL8itby7XY5lgs-vU__E4OLxRyBBzlduuA&cf=y" target="_blank" rel="noreferrer"><i className="fa fa-download" aria-hidden="true" style={{fontSize: 40+'px'}}></i> Download my CV <small>(.PDF)</small></a>
            </div>
        </>
    );
};

export default RecentProjects;