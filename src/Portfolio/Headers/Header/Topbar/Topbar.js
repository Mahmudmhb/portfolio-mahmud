import React from 'react';
import '../Banner/Banner.css'
import profile from '../../../Image/banner.png'
const Topbar = () => {
    return (
        <nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    {/* <a class="" href="/home">Mahmudul Hasan</a> */}

    <a href="mailto:mahmud.mhb1@gmail.com" class="btn navbar-brand shadow-inverse-sm shadow-inverse-hover-sm scale-inverse-sm btn-outline-white d-inline-block btn-lg pix-waiting animated" target="blank" rel="noopener"  data-anim-type="fade-in-left" data-anim-delay="1200"><i class="font-weight-bold  mr-1"></i> <span class="font-weight-bold " >mahmud.mhb1@gmail.com</span></a>
    
    <a href="callto:+88 01834 783 233" class="btn shadow-inverse-sm shadow-inverse-hover-sm scale-inverse-sm btn-outline-white d-inline-block btn-lg pix-waiting animated"  data-anim-type="fade-in-left" data-anim-delay="1000"><i class="font-weight-bold pixicon-call-24h   mr-1"></i> <span class="font-weight-bold " >+88 01834 783 233</span></a>
    
    
    
    
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">PORTFOLIO</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body text-center">
       <div>
            <img className="img-fluid" src={profile} width="380px" alt="" />
            
            <h2>Mahmudul Hasan</h2>
            <div className="topbar d-flex justify-content-evenly">
            <a href="https://www.linkedin.com/in/mahmud-mhb/"> <span className=""><i class="fab fa-linkedin"></i></span></a>
            <a href="https://github.com/Mahmudmhb"> <span className=""><i class="fab fa-github-square"></i></span></a>
            <a href="https://www.facebook.com/profile.php?id=100004257226376"> <span className=""><i class="fab fa-facebook-square"></i></span></a>
          </div>
            <a href="mailto:mahmud.mhb1@gmail.com" class="btn navbar-brand shadow-inverse-sm shadow-inverse-hover-sm scale-inverse-sm btn-outline-white d-inline-block btn-lg pix-waiting animated" target="blank" rel="noopener"  data-anim-type="fade-in-left" data-anim-delay="1200"><i class="font-weight-bold  mr-1"></i> <span class="font-weight-bold " >mahmud.mhb1@gmail.com</span></a>
    
    <a href="callto:+88 01834 783 233" class="btn shadow-inverse-sm shadow-inverse-hover-sm scale-inverse-sm btn-outline-white d-inline-block btn-lg pix-waiting animated"  data-anim-type="fade-in-left" data-anim-delay="1000"><i class="font-weight-bold pixicon-call-24h   mr-1"></i> <span class="font-weight-bold " >+88 01834 783 233</span></a>
          
       </div>
        <ul class="navbar-nav justify-content-end text-center flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#project">Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          
        </ul>
       
      </div>
    </div>
  </div>
</nav>
    );
};

export default Topbar;