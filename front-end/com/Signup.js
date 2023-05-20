'use client';

import Link from 'next/link';
import { useState } from 'react';
//import { useRouter } from 'next/router';

export default function Signup () {

  //const router = useRouter();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fname, lname, email, phone, service }),
    });

    if (response.ok) {
      //router.push('/thanks'); // redirect to login page on successful registration
      window.alert("Thanks for your details");
    } else {
      // handle registration failure
      window.alert("Unable to post your details");
    }
  };

    return (

        <>
        {/* Header Area */}
        <header className="header-area">
          <nav className="navbar navbar-expand-lg menu_three sticky-nav">
            <div className="container-fluid">
              <a className="navbar-brand header_logo">
              <Link href="/">
                <img className="main_logo" src="assets/images/logo.png" alt="logo" />
                </Link>
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="hamburger-cross">
                    <span />
                    <span />
                  </span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul className="navbar-nav menu mx-auto">
                  <li className="nav-item dropdown submenu mega-home active">
                    <a href="index.html" className="nav-link dropdown-toggle">
                      Home
                    </a>
                    <i
                      className="arrow_carrot-right mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          <img
                            src="assets/images/home_demos/project.png"
                            alt="Demo"
                          />
                          <span>Project Management</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-software.html" className="nav-link">
                          <img
                            src="assets/images/home_demos/software.png"
                            alt="Demo"
                          />
                          <span>Software Company</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-software2.html" className="nav-link">
                          <img
                            src="assets/images/home_demos/software-2.png"
                            alt="Demo"
                          />
                          <span>Software Demo Landing</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-payment.html" className="nav-link">
                          <img
                            src="assets/images/home_demos/payment.png"
                            alt="Demo"
                          />
                          <span>Payment Processing</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-billing.html" className="nav-link">
                          <img
                            src="assets/images/home_demos/billing.png"
                            alt="Demo"
                          />
                          <span>Account Billing Software</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-cloud.html" className="nav-link">
                          <img src="assets/images/home_demos/cloud.png" alt="Demo" />
                          <span>Cloud Saas</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-app.html" className="nav-link">
                          <img src="assets/images/home_demos/app.png" alt="Demo" />
                          <span>Mobile App Landing</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-hrm.html" className="nav-link">
                          <img src="assets/images/home_demos/hrm.png" alt="Demo" />
                          <span>HRM Software</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-pos.html" className="nav-link">
                          <img src="assets/images/home_demos/pos.png" alt="Demo" />
                          <span>POS Software</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-proto.html" className="nav-link">
                          <img src="assets/images/home_demos/proto.png" alt="Demo" />
                          <span>Prototype</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="help-center.html" className="nav-link">
                          <img src="assets/images/home_demos/help.png" alt="Demo" />
                          <span>Help Center</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu active">
                    <a href="#" className="nav-link dropdown-toggle">
                      Pages
                    </a>
                    <i
                      className="arrow_carrot-right mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="product.html" className="nav-link">
                          Product
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="services.html" className="nav-link">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="404.html" className="nav-link">
                          404
                        </a>
                      </li>
                      <li className="nav-item dropdown submenu">
                        <a href="about.html" className="nav-link">
                          About
                        </a>
                        <i
                          className="arrow_carrot-right mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="about.html" className="nav-link">
                              About One
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="about-2.html" className="nav-link">
                              About Two
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown submenu">
                        <a href="contact.html" className="nav-link">
                          Contact
                        </a>
                        <i
                          className="arrow_carrot-right mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="contact.html" className="nav-link">
                              Contact One
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="contact-2.html" className="nav-link">
                              Contact Two
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown submenu">
                        <a href="comming-soon.html" className="nav-link">
                          Comming Soon
                        </a>
                        <i
                          className="arrow_carrot-right mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="comming-soon.html" className="nav-link">
                              Comming Soon One
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="comming-soon-2.html" className="nav-link">
                              Comming Soon Two
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="comming-soon-3.html" className="nav-link">
                              Comming Soon Three
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="comming-soon-4.html" className="nav-link">
                              Comming Soon Four
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu mega-menu active">
                    <a href="#" className="nav-link dropdown-toggle">
                      Elements
                    </a>
                    <i
                      className="arrow_carrot-right mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    />
                    <ul className="dropdown-menu container">
                      <li className="nav-item">
                        <a className="nav-link">Elements 01</a>
                        <i
                          className="arrow_carrot-right mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="accordion.html" className="nav-link">
                              Accordions
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="team.html" className="nav-link">
                              Team
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="integration.html" className="nav-link">
                              Integration
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="client.html" className="nav-link">
                              Clients
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Elements 02</a>
                        <i
                          className="arrow_carrot-right mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="testimonial.html" className="nav-link">
                              Testimonials
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="video.html" className="nav-link">
                              Video
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="contact.html" className="nav-link">
                              Contact Form
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="process.html" className="nav-link">
                              Process
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">Elements 03</a>
                        <i
                          className="arrow_carrot-right mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="pricing.html" className="nav-link">
                              Pricing Table
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="pricing-2.html" className="nav-link">
                              Pricing Table 2
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="subscribe.html" className="nav-link">
                              subscribe
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="tab.html" className="nav-link">
                              tab
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link"> Elements 04 </a>
                        <i
                          className="arrow_carrot-right mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="stories.html" className="nav-link">
                              Timeline Stories
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="get-app.html" className="nav-link">
                              Get App
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="google-map.html" className="nav-link">
                              Google Map
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="comming-soon-4.html" className="nav-link">
                              Countdown Timer
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link"> Elements 05 </a>
                        <i
                          className="arrow_carrot-right mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="fun-fact.html" className="nav-link">
                              Fun Fact
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="faq.html" className="nav-link">
                              FAQ's
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="features.html" className="nav-link">
                              Features
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu active">
                    <a href="career.html" className="nav-link dropdown-toggle">
                      Jobs
                    </a>
                    <i
                      className="arrow_carrot-right mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="career.html" className="nav-link">
                          Career
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="job-post.html" className="nav-link">
                          Jobs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="job-application.html" className="nav-link">
                          Job Application
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu active">
                    <a href="blog.html" className="nav-link dropdown-toggle">
                      Blog
                    </a>
                    <i
                      className="arrow_carrot-right mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    />
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-single.html" className="nav-link">
                          Blog Single
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-grid.html" className="nav-link">
                          Extended Grid
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="right-nav">
                  <a href="#" className="language-bar mr-50">
                    <span className="active">En.</span> <span>Ru</span>
                  </a>
                  
                  <a className="btn btn-red">
                  <Link href="/signup">
                    Sign Up
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* Header Area */}
        <main>
          {/* Sign Up Area */}
          <section className="sign-up-wrapper overflow-hidden pt-215 pb-165">
            <div className="container">
              <div className="sign-up-box">
                <div className="bg-shapes">
                  <div className="shape">
                    <img src="assets/images/signup/shape2.svg" alt="Shape" />
                  </div>
                  <div
                    className="shape"
                    data-parallax='{"x":-30, "y": 0, "rotateY":0}'
                  >
                    <img src="assets/images/signup/shape3.svg" alt="Shape" />
                  </div>
                  <div className="shape">
                    <img src="assets/images/signup/shape4.svg" alt="Shape" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-images d-lg-block d-none">
                      <div
                        className="shapes object-element"
                        data-paroller-factor="0.1"
                        data-paroller-type="foreground"
                        data-paroller-direction="horizontal"
                        data-paroller-transition="transform .2s linear"
                      />
                      <div className="shapes object-element" />
                      <div
                        className="shapes object-element"
                        data-paroller-factor="0.05"
                        data-paroller-type="foreground"
                        data-paroller-direction="horizontal"
                        data-paroller-transition="transform .2s linear"
                      />
                      <div
                        className="shapes object-element"
                        data-paroller-factor="0.05"
                        data-paroller-type="foreground"
                        data-paroller-transition="transform .2s linear"
                      />
                      <div
                        className="shapes object-element"
                        data-paroller-type="foreground"
                        data-paroller-factor="0.1"
                        data-paroller-transition="transform .2s linear"
                      />
                      <div className="shapes">
                        <img src="assets/images/signup/shape1.svg" alt="Shape" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-wrapper">
                      <div className="text-center">
                        <h2 className="heading-3 mb-15">Fill the Details</h2>
                        <p className="heading-text">
                          We don't use your data for thirdparty 
                        </p>
                        
                        <span className="divider">or</span>
                      </div>
                      <form method = 'POST' className="sign-up-form" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <input type="text" value={fname}  onChange={(e) => setFname(e.target.value)} placeholder="First Name*" />
                          </div>
                          <div className="col-md-6 mt-4 mt-md-0">
                            <input type="text" value={lname}  onChange={(e) => setLname(e.target.value)} placeholder="Last Name*" />
                          </div>
                          <div className="col-md-12 mt-20">
                            <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Email address*" />
                          </div>
                          <div className="col-md-12 mt-20">
                            <input type="phone" value={phone}  onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number*" />
                          </div>
                          <div className="col-md-12 mt-20">
                            <input type="service" value={service}  onChange={(e) => setService(e.target.value)} placeholder="Service*" />
                          </div>
                         
                          
                         
                          <div className="col-md-12">
                            <input type="checkbox" id="news" />
                            <label className="check-text" htmlFor="news">
                              {" "}
                              I’d like being informed about latest news and tips{" "}
                            </label>
                          </div>
                          <div className="col-md-12 mt-30">
                            <input
                              className="btn btn-red"
                              type="submit"
                              defaultValue="Sign Up"
                            />
                          </div>
                          <div className="col-md-12">
                            <p className="form-text mt-15">
                              By clicking “Submit” you agree to our
                              <a href="#">Terms of Service.</a>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Sign Up Area */}
        </main>
       {/* Footer Area */}
  <footer className="footer-cloud bg-gray-2">
    <div className="bg-shapes">
      <div className="shape">
        <svg
          width={65}
          height={108}
          viewBox="0 0 65 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="animatable draw"
            d="M55.5862 1.99086C47.1391 -0.676343 -0.209184 35.3349 2.23603 55.3412C4.87354 76.9208 59.3433 48.4171 42.6932 35.3349C30.2448 25.554 -9.52908 55.8047 4.23673 75.1252C15.7977 91.3512 45.6014 75.6225 51.3627 68.901C56.6977 62.6768 54.0302 50.0062 35.1354 59.1203C15.9877 68.3563 24.0207 85.3506 35.1354 83.35C46.25 81.3493 55.8085 74.236 56.6977 74.0137C57.5869 73.7914 38.2474 95.3538 64.0333 106.913"
            stroke="black"
            strokeWidth={2}
          />
        </svg>
      </div>
      <div className="shape">
        <img src="assets/images/home_9/shapes/shape16.svg" alt="" />
      </div>
      <div className="shape">
        <img src="assets/images/home_9/shapes/shape17.svg" alt="" />
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Company</h4>
                  <ul className="widget-link-list">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Plans</a>
                    </li>
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Support</h4>
                  <ul className="widget-link-list">
                    <li>
                      <a href="#">Help center</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Cookies</a>
                    </li>
                    <li>
                      <a href="#">Privacy &amp; terms</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Download</h4>
                  <ul className="widget-link-list">
                    <li>
                      <a href="#">Drive for Mac/PC</a>
                    </li>
                    <li>
                      <a href="#">Drive for Android</a>
                    </li>
                    <li>
                      <a href="#">Drive for iOS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="footer-widget">
              <h4 className="widget-title">Subscribe Newsletter</h4>
              <form className="form-group">
                <input type="email" placeholder="Email address" />
                <button type="submit" className="btn btn-red">
                  <img
                    className="icon"
                    src="assets/images/home_9/shapes/arrow-forward.svg"
                    alt="Icon"
                  />
                </button>
              </form>
              <p className="mb-40">We promise to never spam your inbox.</p>
              <ul className="widget-social-list">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright pb-40">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <a href="index.html" className="footer-logo">
              <img src="assets/images/logo.svg" alt="Logo" />
            </a>
          </div>
          <div className="col-lg-6 col-md-5">
            <p className="copyright-text text-md-center">
              Copyright 2021, All Rights Reserved
            </p>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="language-list float-md-end">
              <form>
                <i className="fas fa-globe-americas" />
                <select id="select-lang">
                  <option value="English">English </option>
                  <option value="Hindi">Hindi</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Area */}
        
  </>
      


    );
}