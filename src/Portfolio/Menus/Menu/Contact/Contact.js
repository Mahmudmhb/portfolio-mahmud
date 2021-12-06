/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

  
      emailjs.sendForm('mahmud', 'template_syu6dnq', form.current, 'user_yES1kTZV9ujsBfNf3w7Qg')
        .then((result) => {
             alert('Message sent successfully!');
        }, (error) => {
            alert(error.message);
        });
        e.target.reset();
    };
  
    return (
        <div id="contact" className='text-center py-5'>
            <h2 className="fh-bold py-5">CONTACT <span className="text-primary">ME</span></h2>

                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">

                    <div >
                <form action="" ref={form} onSubmit={sendEmail}>
                        <input type="text" class=" mb-3 py-1 contact" name="name" id="exampleFormControlInput1" placeholder="Your name" required/><br />
                        <input type="email" class="mb-3 py-1 contact" name="email" id="exampleFormControlInput1" placeholder="Your E-mail" required/> <br />
                        
                        <textarea class="contact py-1 mb-3" required id="exampleFormControlTextarea1" name="message" placeholder="Your Message" rows="3"></textarea>
                        <br />
                    
                        <input type="submit" className="btn btn-primary contact" value="SUBMIT"/>
                </form>
            
            </div>

                    </div>

                </div>
        </div>
    );
};

export default Contact;