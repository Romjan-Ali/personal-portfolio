import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lc229h7', 'template_k2hk3g9', form.current, 'rf1X9lN_rxHgD2iav')
        .then((result) => {
            if(result.status === 200){
                alert("Your message has been successfully delivered!")
            }
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div className='contact-form'>
            <div className='contact' id='contact'>
                <h1 className='contact-me'>CONTACT ME</h1>
                <div className='para'>
                    <p>Currently looking to join a productive team and develop amazing projects.</p>
                    <p>If you have a job that requires my skill set, please get in touch.</p>
                </div>
                <div className='tel'>
                    <a href='tel: +8801402857913'>
                        <img className='icon' src={require('../img/call.png')} alt='Call: ' />
                        +8801402857913
                    </a>
                </div>
                <div className='email'>
                    <a href='mailto: 000romjanali@gmail.com'>
                        <img className='icon' src={require('../img/email.png')} alt='Email: ' />
                        000romjanali@gmail.com
                    </a>
                </div>
                <div className='facebook'>
                    <a href='https://www.facebook.com/profile.php?id=100010602070882'>
                        <img className='icon' src={require('../img/facebook.png')} alt='Facebook: ' />
                        romjan001
                    </a>
                </div>
            </div>

            <div className='form'>
                <form ref={form} onSubmit={sendEmail} >
                    <input name='user_name' type='text' id='name' placeholder='Your name ..' required='required' />
                    <input name='user_email' type='email' id='email' placeholder='Your email ..' />
                    <textarea name='message' type='text' rows='5' id='message' placeholder='Message ...'></textarea>
                    <input type='submit' id='submit' value='SEND MESSAGE' />
                </form>
            </div>
        </div>
    );
};

export default Contact;