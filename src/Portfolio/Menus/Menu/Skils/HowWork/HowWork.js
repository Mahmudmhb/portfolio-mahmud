import React from 'react';
import './HowWork.css'

const HowWork = () => {
    return (
       <div className="py-5"> 
            <div className="container text-center" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <h1 className="fw-bold mt-5">How do  <span className="text-primary ">i work?</span></h1>
            <p className="py-3 fs-4 border-bottom">
            Understand what is needed to make a website functional and easy to use
            </p>
            <div className="row text-center g-3 gx-2" >
                <div className="col-md-4 col-12 g-3   ">
                     <div className=" text-white rounded-3 work p-5">
                             <span className="icons"><i class="fas lh-sm fa-laptop-code"></i></span>
                             <h3>Discussion</h3>
                            <p>To understand the project needs & requirements it’s very important for me, for that I discuss with every detail to related projects.</p>
                     </div>
                     
                </div>
                <div className="col-md-4  col-12 ">
                         <div className=" work rounded-3 text-white p-5">
                             <span className="icons"><i class="fas fa-american-sign-language-interpreting"></i></span>
                            <h3> Planning </h3>
                            <p>Then I can create a plan for the whole project. Planning gives the high potential to every project to do successful. </p>
                        </div>
                   
                </div>
                <div className="col-md-4  col-12 ">
                    <div className=" work rounded-3 text-white p-5">
                             <span className="icons"><i class="fas fa-drafting-compass"></i></span>
                        <h3> Design</h3>
                        <p>I give highly concentration to website design, every time I try to give my best to do clean and services related awesome design for the website.</p>
                    </div>
                </div>
                <div className="col-md-4  col-12 ">
                    <div className=" work rounded-3 text-white p-5">
                             <span className="icons"><i class="fas fa-code"></i></span>
                        <h3>Coding</h3>
                        <p>We need to code for every website. it’s very important to have hand coding, clean and developer friendly coding.</p>
                    </div>
                </div>
                <div className="col-md-4 col-12 ">
                        <div className="  work rounded-3 text-white p-5">
                             <span className="icons"><i class="fas fa-star-of-david"></i></span>
                         <h3>Submit for Review</h3>
                            <p>After design and coding, I send for review to client. After client’s checking, If have to change or revision I again do this.</p>
                        </div>
                </div>
                <div className="col-md-4  col-12 ">
                    <div className="work text-white rounded-3 p-5">
                             <span className="icons"><i class="fas fa-globe-americas"></i></span>
                        <h3> Website Is Ready!</h3>
                        <p>After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone. </p>
                    </div>
                </div>
                
            </div>
            
        </div>
       </div>
    );
};

export default HowWork;