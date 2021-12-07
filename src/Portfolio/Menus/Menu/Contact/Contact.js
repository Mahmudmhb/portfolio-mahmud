/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import image from '../../../Image/contact.png'

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
        <div id="contact" className='text-center background py-5'>
            <h2 className="fh-bold text-white ">CONTACT <span className="text-primary">ME</span></h2>

                <div className="row">
                    <div className=" col-12 col-md-6">
                        <div>
                            <img class="img-fluid"  src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">

                    <div className=" mt-5  pt-5">
                        <form action="" ref={form} onSubmit={sendEmail}>
                                <input type="text" class=" mb-3 rounded-3 w-75 py-1 " name="name" id="exampleFormControlInput1" placeholder="Your name" required/><br />
                                <input type="email" class="mb-3 py-1 w-75 rounded-3" name="email" id="exampleFormControlInput1" placeholder="Your E-mail" required/> <br />
                                
                                <textarea class=" py-1 rounded-3 w-75 mb-3" required id="exampleFormControlTextarea1" name="message" placeholder="Your Message" rows="3"></textarea>
                                <br />
                            
                                <input type="submit" className="btn btn-primary w-75 rounded-3 " value="SUBMIT"/>
                        </form>
            
            </div>

                    </div>

                </div>
        </div>
    );
};

export default Contact;