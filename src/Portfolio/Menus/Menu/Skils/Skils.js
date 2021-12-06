// import { init } from 'ityped';
import React from 'react';

import html from '../../../Image/html.png';
import css from '../../../Image/css.png';
import javascript from '../../../Image/javascript.png';
import Bootstrap from '../../../Image/bootstarp.png';
import react from '../../../Image/react.png';
import Heroku from '../../../Image/heroku.png';
import Material from '../../../Image/material.png';
import MongoDB from '../../../Image/mongodb.png';
import vs from '../../../Image/vs-code.png';
import node from '../../../Image/node.png';
import express from '../../../Image/express.png';
import git from '../../../Image/github.png';
import firebase from '../../../Image/firebase.png';
import wordpress from '../../../Image/WordPress.png';
import { Typewriter } from 'react-simple-typewriter'


import {
    CircularProgressbar, CircularProgressbarWithChildren} from "react-circular-progressbar";
    import 'react-circular-progressbar/dist/styles.css';
import HowWork from './HowWork/HowWork';

const percentage = 66;
const text= 'javascript'


const Skils = () => {
    // const skilRef = useRef(null)
    // const textRef = useRef(null)
    // useEffect(()=>{
    //     init(skilRef.current, {
    //         showCursor:true,
    //         strings:['HTML5'," CSS3", "Bootstrap", "Tailwind", "Material-Ui",
    //             "JavaScript",
    //            " React" ,"WordPress"]

    //     })
    //     init(textRef.current, {
    //         showCursor:true,
    //         strings:[ "Nodejs", "Express", "REST API",
    //             "Firebase"]

    //     })

    // },[])
    return (
        <div className="row text-center">
            {/* <span ref={skilRef}></span>
            <span ref={textRef}></span> */}

            <h1 className="py-5 fw-bold">Professional <span className="text-primary ">Skills </span> 
            <span style={{ color: '#0d6af5', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['HTML5'," CSS3", "Bootstrap", "Tailwind", "Material-Ui",
                        "JavaScript",
                       " React" ,"WordPress"]}
            loop={5}
            cursor
            cursorStyle='❤'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
             </h1>
            <div className='container'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                
                   <div className="row text-center">
                       <div className="col-md-3 col">
                         <div>
                            <img src={html}alt="" width="66px" />
                            <h5>HTML</h5>
                            </div>
                       </div>
                       <div className="col-md-3 col">
                         <div>
                            <img src={css}alt="" width="66px" />
                            <h5>CSS</h5>
                            </div>
                       </div>
                       <div className="col-md-3 col">
                         <div>
                            <img src={javascript}alt="" width="66px" />
                            <h5>JAVASCRIPT</h5>
                            </div>
                       </div>
                       <div className="col-md-3 col">
                         <div>
                            <img src={react}alt="" width="66px" />
                            <h5>REACT JS</h5>
                            </div>
                       </div>
                       <div className="col-md-3 col">
                         <div>
                            <img src={Bootstrap}alt="" width="66px" />
                            <h5>BOOTSTARP</h5>
                            </div>
                       </div>
                       <div className="col-md-3 col">
                         <div>
                            <img src={Material}alt="" width="66px" />
                            <h5>MATERIAL</h5>
                            </div>
                       </div>
                      
                      
                       
                       
                       
                       <div className="col-md-3 col">
                         <div>
                            <img src={firebase}alt="" width="66px" />
                            <h5>FIREBASE</h5>
                            </div>
                       </div>
                       
                       <div className="col-md-3">
                         <div>
                            <img src={wordpress}alt="" width="66px" />
                            <h5>WORDPRESS</h5>
                            </div>
                       </div>
                   </div>
                
            </div>
         <div className="py-5" data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h1 className="pb-3 fw-bold">Comfortable <span className="text-primary ">Skills </span> 
                <span style={{ color: '#0d6af5', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ "Nodejs", "Express", "REST API","Mongodb"]}
            loop={5}
            cursor
            cursorStyle='❤'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
                  </h1>
            <div className="row" >
                         <div className="col-md-4 col" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                            <div>
                                <img src={MongoDB}alt="" width="66px" />
                                <h5>MONGODB</h5>
                            </div>
                       </div>
                        <div className="col-md-4 col">
                         <div>
                            <img src={express}alt="" width="66px" />
                            <h5>EXPRESS</h5>
                            </div>
                       </div>
                       <div className="col-md-4 col">
                         <div>
                            <img src={node}alt="" width="66px" />
                            <h5>NODE JS</h5>
                            </div>
                       </div>
            </div>
         </div>

           <div className="py-5">
           <h1 className="pb-3 fw-bold">Comfortable <span className="text-primary ">TOOLS </span>
           <span style={{ color: '#0d6af5', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ "Github", "Vs-code", "Heroku"]}
            loop={5}
            cursor
            cursorStyle='❤'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
            </h1>
            <div className="row">
                         <div className="col-md-4 col">
                            <div>
                            <img src={git}alt="" width="66px" />
                            <h5>GITHUB</h5>
                            </div>
                       </div>
                       <div className="col-md-4 col">
                         <div>
                            <img src={vs}alt="" width="66px" />
                            <h5>VS CODE</h5>
                            </div>
                       </div>

                       <div className="col-md-4 col">
                         <div>
                            <img src={Heroku}alt="" width="66px" />
                            <h5>HEROKU</h5>
                            </div>
                       </div>
                      

            </div>
           </div>
           
        </div>
    );
};

export default Skils;