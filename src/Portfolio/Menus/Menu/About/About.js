import React from 'react';
import Banner from '../../../Headers/Header/Banner/Banner';
import image from '../../../Image/banner.png';
import pdf from '../../../resume/MAHMUDUL HASAN.pdf'
import './About.css'

const About = () => {
    return (
        <div id="about" className="py-5">
            
            <div class="container">
                <div className="text-center  fw-bold  mt-5">
                    <h1 className="fw-bold" > ABOUT <span className="text-primary ">ME</span></h1>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-12 align-self-center  col-lg-6 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                        <div >
                            <h1>Hello! You're Welcome -
                           </h1>
                           <h3 className="text-muted"> Professional Full-Stack Web Developer & WordPress Specialist.</h3>
                        <h5>

                            I’m Mahmudul hasan  Passionate at web development. I’m working minimum of 8-9 hours every day, I love to do this it’s my life-everything.
                            My goal is to satisfy clients, try to understand what they want for there website, help them from beginning to end the project and give support for every problem.
                            If need I communicate by video or audio conversations to understand the problems and project requirements. After completing website and projects I give instructions, How they can manage, edit, update, add page and post on the website by themselves. if needed I send video tutorials.
                        </h5>
                                <div className=" resume py-4">
                                 <a download  className="text-white bg-primary" href={pdf} target="blank">

                            <span><i class="fas fa-arrow-down"></i> </span>
                                    MY RESUME</a>
                            </div>
                       </div>
                    </div>
                        <div class="col-sm-6 img-fluid about col-12 col-md-6 "
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="2000"
                        >
                            <div className="">
                            <img src={image} class="img-fluid" height="500px" alt="..."/>
                            </div>
                
                        </div>
                </div>
            </div>
        </div>
    );
};

export default About;