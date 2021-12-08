import React from 'react';
import watch from '../../../Image/watch.png';
import care from '../../../Image/care.png';
import tour from '../../../Image/tour.png';
import '../../../Headers/Header/Banner/Banner.css'
const Project = () => {
    return (
        <div id="project" className="bg-primarys py-5">
                <div className="container ">
                    <div className="text-center text-white fw-bold py-4"data-aos="zoom-out-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="2000"
                    >
                    <h1 className="mb-4" >PROJECTS</h1>
                    <p>
                    Note: is a website design and development agency at Naxos Greek, Where I’m working as a web designer and developer.

                    It’s not just a image, All website build my own and live.
                    </p>
                    </div>
                <div class="  row row-cols-1 row-cols-md-3 g-4"  
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="2000">
              <div class="col ">
                    <div class="card">
                   <a href="https://simple-watch.netlify.app/" >  <img src={watch} class="card-img-top" alt="..."/></a>
                    <div class="card-body">
                        <h5 class="card-title">WATCH HOUSE -</h5>
                        <p class="card-text">
                            
                                
                                ● An E-Commerce concept with Firebase and Email-Password login. <br/>
                                    ● Two different dashboards for users and admin. <br/>
                                    ● Admin can edit-cancel order, add product, update order status.<br/>
                                    ● Users can give reviews, make orders and cancel orders.<br/>
                                    Technology used: HTML, CSS,Material-Ui, React.js, Node.js,
                                    Express.js, MongoDB, Firebase
                                </p>
                               
                    </div>
                          
                    <div className="d-flex  justify-content-around pb-3 ">
                                    <a href="https://github.com/Mahmudmhb/simple-watch" class="btn btn-primary">CLIENT CODE</a>
                                    <a href="https://github.com/Mahmudmhb/simple-watch-server" class="btn btn-primary">SERVER CODE</a>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                   <a href="https://bangladesh-tour-website.netlify.app/" >  <img src={tour} class="card-img-top" alt="..."/></a>
                    <div class="card-body">
                        <h5 class="card-title">TOURISM WEBSITE -</h5>
                        <p class="card-text">
                            
                                
                                    ● An E-Commerce concept with Firebase login. <br/>
                                    ● Users can see details by clicking on the Details button if they are
                                    logged in. <br/>
                                    ● Users can give add products, make orders and cancel orders.<br/>
                                    ● All services are rendered from fake data from MongoDB.<br/>
                                    Technology used: HTML, CSS, bootstrap, React.js, Node.js,
                                    Express.js, MongoDB, Firebase
                                </p>
                               
                    </div>
                          
                    <div className="d-flex  justify-content-around pb-3">
                                    <a href="https://github.com/Mahmudmhb/bangladesh-tour-web" class="btn btn-primary">CLIENT CODE</a>
                                    <a href="https://github.com/Mahmudmhb/bangladesh-tour-server" class="btn btn-primary">SERVER CODE</a>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                   <a href="https://simple-healthcare-website.netlify.app/" >  <img src={care} class="card-img-top" alt="..."/></a>
                    <div class="card-body">
                        <h5 class="card-title">HEALTHCARE-WEBSITE-</h5>
                        <p class="card-text">
                            
                                
                                     ● Health Service Concept with Google login. <br/>
                                     ● Users can see details by clicking on the Details button if they are logged
                                    in. <br/>
                                    ● All services are rendered from fake data from MongoDB.<br/>
                                                                    
                                    Technology used: HTML, CSS, Bootstrap, React.js, Firebase
                                </p>
                               
                    </div>
                          
                    <div className="d-flex  justify-content-around pb-3 ">
                                    <a href="https://github.com/Mahmudmhb/simple-halthcare-web" class="btn btn-primary">CLIENT CODE</a>
                                    <a href="*" class="btn btn-primary">SERVER CODE</a>
                            </div>
                    </div>
                </div>
                
        </div>
        </div>
        </div>
    );
};

export default Project;