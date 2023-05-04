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
                <a href="https://doc-00-9c-docs.googleusercontent.com/docs/securesc/3ajci7lbg062vkb07v90j873fvk3n3ek/aij89llh129hch0omua1ru40d3eof4k9/1683181950000/04968051609613525560/04968051609613525560/1tScktzwqofYKq0QRw215NThEX5A2jB86?e=download&ax=ADWCPKCSIdRfAcFgrJMLn0zOW2XC-CVWoO7Ocxgkgk6D2XFeZSiXBpah6WFKZKmShyhlM8roR5zu1HTGEE7njRtwY5PRlRWed90PpNTIZQMD2BDEn1ycxHEBplxjQ0267oYIv4sMcxaaCpKSeBGJahLdEMyVqQF7v8C3me9M8Cvmx0s2d7lVPV_OcbWZj53VIEfUfnLDd9NdmabCRszVhTmw009NfstdG5U3Md29n5Dd9wSLZXLuZIUmd9JZBGla64ccP-6r-IcJKd3ojurJzoBZP1bgnN9XeJi9wdnLAn1JGKEQkKVU9EUGKCsmbGLkz_PhF02pvwV4XsjwEfohP9U0lkQYXa66GhLEq_3C9H6nImHsXr_lxmDbNtnhTm8RU65e4ww0HE67tSegs5WrPbRb1SvGZHJYYNMYDogpvzTrgfbzqMkUFYjAVuvCfYO0RV7HngWChX0-84foxJT3yBfiO-LbmSIJkPuWEO-UkrIoToksZKHM-WLr5PWeHqzTAwiUHoLRdYHZSeywiD-u-O8bzkyoJMzEFktWhQL_JMp12DJksGM7CwbK2f5KO7x5VZNtlobKebGCs5I2opnFOXmXocxdIsZEW3zFLhrmurgpiosIeXtPpwR3eAJNkTtyYASh_yn5kaz86Y7w5L63y_2MGWcdDJq4cO34bm6NLcWYw06HtNdlvsBGEKF7kvsGop-_xqsARKXegfNEO8BF4P0J9nPS4WjO-fJo2Yvsl0KEmkFhwtDE1T-PCan3VVyfFOH4SAnqaPXifIW_e14iZSJ9-snTWh-8qncxRlMMH29i4mJNVywo6SbPhYUHrELn9W2FBQxd7iT4uhUN6hsg04GWR-gwySdt_AyvudmfBxIRy-0kl4COvoGK-CtLMkLSRl2LZmSXjrDfc0qgIKg2duYI8CXsYGllJfVJdlwTEw&uuid=71324566-6d53-4243-8480-b214164e3b8b&authuser=0" target="_blank" rel="noreferrer"><i className="fa fa-download" aria-hidden="true" style={{fontSize: 40+'px'}}></i> Download my CV <small>(.PDF)</small></a>
            </div>
        </>
    );
};

export default RecentProjects;