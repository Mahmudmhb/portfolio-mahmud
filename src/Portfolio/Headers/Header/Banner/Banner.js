import Particles from "react-tsparticles";
import React from 'react';
import image from '../../../Image/banner.jpg'
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter';
import pdf from '../../../resume/MAHMUDUL HASAN.pdf'

const Banner = () => {
      const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
    return (


        <div id="home" class="pt-5 mt-5 align-self-center bg-primarys text-white">



                <Particles
                      id="tsparticles"
                      init={particlesInit}
                      loaded={particlesLoaded}
                      options={{
                        background: {
                         
                        },
                        fpsLimit: 60,
                        interactivity: {
                          events: {
                            onClick: {
                              enable: true,
                              mode: "push",
                            },
                            onHover: {
                              enable: true,
                              mode: "repulse",
                            },
                            resize: true,
                          },
                          modes: {
                            bubble: {
                              distance: 400,
                              duration: 2,
                              opacity: 0.8,
                              size: 40,
                            },
                            push: {
                              quantity: 4,
                            },
                            repulse: {
                              distance: 200,
                              duration: 0.4,
                            },
                          },
                        },
                        particles: {
                          color: {
                            value: "#0d6af5",
                          },
                          links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                          },
                          collisions: {
                            enable: true,
                          },
                          move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                          },
                          number: {
                            density: {
                              enable: true,
                              value_area: 800,
                            },
                            value: 80,
                          },
                          opacity: {
                            value: 0.5,
                          },
                          shape: {
                            type: "circle",
                          },
                          size: {
                            random: true,
                            value: 5,
                          },
                        },
                        detectRetina: true,
                      }}
                    />


         <div class="container">
              <div class="row py-5">
                  <div class="col align-self-center col-sm-6">
                      <div data-aos="fade-left"
                          data-aos-anchor="#example-anchor"
                          data-aos-offset="500"
                          data-aos-duration="1000">
                          <h1>Building the future. Join us Today! 
                        </h1>
                            {/* <span ref={textRef}></span> */}
                        <h2 >Iam  <span style={{ color: '#0d6af5', fontWeight: 'bold' }}>
                   {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={['Web developer',"full-stack web developer ", 'WordPress Developer ', 'WordPress Specialist .']}
                        loop={5}
                        cursor
                        cursorStyle='❤'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span> </h2>
                        <p >Familiar With MERN stack development and have done several projects using MongoDB, Express, React, and Node.Web Design & Development is my passion, I get deeper to understand client`s need & problems. My mission is to satisfy every client and become my self a pro developer to learn new updates every day. You ‘ill get lifetime support in any situation, I promise that you`ll get fanatical support and absolutely positively on-time delivery </p>
                        <div className=" resume py-4">
                                 <a download  className="text-white bg-primary" href={pdf} target="blank">

                            <span><i class="fas fa-arrow-down"></i> </span>
                                    MY RESUME</a>
                            </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 img-fluid align-self-center col-sm-6">
                    <div  data-aos="fade-down"
                          data-aos-easing="linear"
                          data-aos-duration="1500">
                                            
                    <img src={image} class="img-fluid" width="100%" alt="..."></img>
                    </div>
                </div>

               
            </div>
            </div>
        </div>
    );
};

export default Banner;