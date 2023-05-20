import Link from 'next/link';

export default function Crooked (){
    return (
        <>
        

  {/* Preloader 
  <div id="preloader">
    <div id="ctn-preloader" className="ctn-preloader">
      <div className="round_spinner">
        <div className="spinner" />
        <div className="text">
          <img
            className="mx-auto"
            src="assets/images/spinner_logo.svg"
            alt=""
          />
          <h4>
            <span>Crooked</span>
          </h4>
        </div>
      </div>
      <h2 className="head">Did You Know?</h2>
      <p />
    </div>
  </div>

  */}
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
              <a href="index.html" className="nav-link dropdown-toggle active">
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
                <li className="nav-item active">
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
    {/* Banner Area */}
    <section className="cloud-banner-area pt-160 pb-130">
      <div className="container position-relative">
        <div className="bg-shapes">
          <div className="shape">
            <img
              data-parallax='{"x":50, "y":70, "rotateY":0}'
              src="assets/images/home_9/shapes/shape1.svg"
              alt=""
            />
          </div>
          <div className="shape">
            <img
              data-parallax='{"x":-50, "y":-40, "rotateY":0}'
              src="assets/images/home_9/shapes/shape2.svg"
              alt=""
            />
          </div>
          <div className="shape">
            <img
              data-parallax='{"x":0, "y":30, "rotateY":0}'
              src="assets/images/home_9/shapes/shape3.svg"
              alt=""
            />
          </div>
          <div className="shape">
            <img
              data-parallax='{"x":60, "y":60, "rotateY":0}'
              src="assets/images/home_9/shapes/shape4.svg"
              alt=""
            />
          </div>
          <div className="shape">
            <img
              data-parallax='{"x":0, "y":-70, "rotateY":0}'
              src="assets/images/home_9/shapes/shape5.svg"
              alt=""
            />
          </div>
          <div className="shape">
            <img src="assets/images/home_9/shapes/shape6.svg" alt="" />
          </div>
          <div className="shape">
            <img src="assets/images/home_9/shapes/shape7.svg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="cloud-banner-content text-center pt-80">
              <h1
                className="banner-title animatable fadeInDown mb-35"
                data-wow-delay="0.3s"
              >
                Best Marketing
                <span>
                  Tool
                  <svg
                    width={183}
                    height={81}
                    viewBox="0 0 183 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="animatable draw"
                      d="M12.9677 22.1512C87.33 -23.7497 215.615 14.9169 173.556 52.8019C140.491 82.5856 -7.39191 98.5042 1.51001 44.3796C6.91522 11.5154 133.588 -8.53048 169.449 30.7166"
                      stroke="#EFBA34"
                    />
                  </svg>
                </span>
                For your Business
              </h1>
              <p className="banner-text wow fadeInDown" data-wow-delay="0.2s">
                Manage and run all your ad at one place
                based on absolute privacy and uncompromising security.
              </p>
              <p className="offer-text wow fadeInDown" data-wow-delay="0.1s">
                Sign up to get a Free Demox1
              </p>
              <a
                
                className="btn btn-red wow fadeInDown"
                data-wow-delay="0.1s"
              >
                <Link href="/signup">
                Start for free
                </Link>
              </a>
              <p className="meta-text wow fadeInDown" data-wow-delay="0.5s">
                No billing information required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner Area */}
    {/* Services Area */}
    <section className="cloud-services-area pt-45 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="w-50 w-md-20">
            <div className="client-image">
              <img src="assets/images/brand/brand-1.svg" alt="Brand Image" />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image">
              <img src="assets/images/brand/brand-2.svg" alt="Brand Image" />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image">
              <img src="assets/images/brand/brand-3.svg" alt="Brand Image" />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image">
              <img src="assets/images/brand/brand-4.svg" alt="Brand Image" />
            </div>
          </div>
          <div className="w-50 w-md-20">
            <div className="client-image">
              <img src="assets/images/brand/brand-5.svg" alt="Brand Image" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="services-title cloud-heading-2 animatable fadeInDown text-center mt-100 mb-55">
              Available on all Your
              <span>
                Devices.
                <svg
                  width={211}
                  height={80}
                  viewBox="0 0 211 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M13.4125 23.3317C96.6483 -23.0858 247.523 12.0638 201.182 49.9753C164.751 79.7798 -5.43528 98.4048 1.5241 45.3019C5.74981 13.0581 151.13 -9.16318 195.064 28.4671"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="accordion-images wow fadeInLeft mt-30"
              data-wow-delay="0.3s"
            >
              <div className="img">
                <img src="assets/images/home_9/shapes/shape8.svg" alt="" />
              </div>
              <div className="img">
                <img src="assets/images/home_9/desktop2.png" alt="" />
              </div>
              <div className="img">
                <img src="assets/images/home_9/desktop3.png" alt="" />
              </div>
              <img src="assets/images/home_9/desktop1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="accordion accordion-flush cloud-accordion wow fadeInRight"
              id="accordionExample"
              data-wow-delay="0.3s"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".one"
                    aria-expanded="true"
                    aria-controls="cloud-collapseOne"
                  >
                    Web App
                  </button>
                </h2>
                <div
                  id="cloud-collapseOne"
                  className="accordion-collapse collapse show one"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Crooked cloud. Available for Windows, Mac and Linux.
                    </p>
                    <a className="btn-more" href="#">
                      {" "}
                      Learn more <i className="fas fa-arrow-right" />{" "}
                    </a>
                    <a className="btn-apple" href="#">
                      <i className="fab fa-apple" />
                    </a>
                    <a className="btn-windows" href="#">
                      <i className="fab fa-windows" />
                    </a>
                    <a className="btn-linux" href="#">
                      <i className="fab fa-linux" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".two"
                    aria-expanded="false"
                    aria-controls="cloud-collapseTwo"
                  >
                    Mobile Apps
                  </button>
                </h2>
                <div
                  id="cloud-collapseTwo"
                  className="accordion-collapse collapse two"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Crooked cloud. Available for Windows, Mac and Linux.
                    </p>
                    <a className="btn-more" href="#">
                      {" "}
                      Learn more <i className="fas fa-arrow-right" />{" "}
                    </a>
                    <a className="btn-apple" href="#">
                      <i className="fab fa-apple" />
                    </a>
                    <a className="btn-windows" href="#">
                      <i className="fab fa-windows" />
                    </a>
                    <a className="btn-linux" href="#">
                      <i className="fab fa-linux" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".three"
                    aria-expanded="false"
                    aria-controls="cloud-collapseThree"
                  >
                    Desktop App
                  </button>
                </h2>
                <div
                  id="cloud-collapseThree"
                  className="accordion-collapse collapse three"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Crooked cloud. Available for Windows, Mac and Linux.
                    </p>
                    <a className="btn-more" href="#">
                      {" "}
                      Learn more <i className="fas fa-arrow-right" />{" "}
                    </a>
                    <a className="btn-apple" href="#">
                      <i className="fab fa-apple" />
                    </a>
                    <a className="btn-windows" href="#">
                      <i className="fab fa-windows" />
                    </a>
                    <a className="btn-linux" href="#">
                      <i className="fab fa-linux" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".four"
                    aria-expanded="false"
                    aria-controls="cloud-collapseFour"
                  >
                    Extensions
                  </button>
                </h2>
                <div
                  id="cloud-collapseFour"
                  className="accordion-collapse collapse four"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Crooked cloud. Available for Windows, Mac and Linux.
                    </p>
                    <a className="btn-more" href="#">
                      {" "}
                      Learn more <i className="fas fa-arrow-right" />{" "}
                    </a>
                    <a className="btn-apple" href="#">
                      <i className="fab fa-apple" />
                    </a>
                    <a className="btn-windows" href="#">
                      <i className="fab fa-windows" />
                    </a>
                    <a className="btn-linux" href="#">
                      <i className="fab fa-linux" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".five"
                    aria-expanded="false"
                    aria-controls="cloud-collapseFive"
                  >
                    Crooked bird
                  </button>
                </h2>
                <div
                  id="cloud-collapseFive"
                  className="accordion-collapse collapse five"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Easy automated synchronization between your computer and
                      your Crooked cloud. Available for Windows, Mac and Linux.
                    </p>
                    <a className="btn-more" href="#">
                      {" "}
                      Learn more <i className="fas fa-arrow-right" />{" "}
                    </a>
                    <a className="btn-apple" href="#">
                      <i className="fab fa-apple" />
                    </a>
                    <a className="btn-windows" href="#">
                      <i className="fab fa-windows" />
                    </a>
                    <a className="btn-linux" href="#">
                      <i className="fab fa-linux" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Services Area */}
    {/* Features Area */}
    <section className="cloud-features-area pt-130 pb-135">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="features-title cloud-heading-2 mb-10">
              Secure.
              <span>
                Private.
                <svg
                  width={208}
                  height={73}
                  viewBox="0 0 208 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M14.3309 16.756C98.2165 -21.285 245.261 19.7412 198.052 52.0475C160.938 77.4454 -7.37435 84.8951 1.70571 36.333C7.21908 6.84625 151.264 -5.33622 192.932 31.8679"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
              Simple to use.
            </h2>
            <p className="features-title-text mx-auto mb-65">
              A functional and intuitive interface with a variety of different
              customizations and features, such as encrypted file sharing.
            </p>
            <div className="features-images position-relative">
              <img
                src="assets/images/home_9/features-img.png"
                alt="Image"
                className="features-img mx-auto mb-40"
              />
              <img
                src="assets/images/home_9/shapes/shape9.svg"
                alt="Shape"
                className="shape"
              />
            </div>
            <a href="#" className="features-btn">
              {" "}
              Learn more{" "}
              <img
                className="icon"
                src="assets/images/home_9/shapes/right.svg"
                alt="Icon"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Features Area */}
    {/* Pricing Area */}
    <section className="cloud-pricing-area bg-gray pt-130 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="pricing-title text-center cloud-heading-2 mb-55">
              Find the Storage
              <span>
                Plan
                <svg
                  width={139}
                  height={62}
                  viewBox="0 0 139 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M14.3231 6.11344C76.5807 -15.8595 166.546 32.3538 129.57 53.4949C100.5 70.1151 -12.1598 58.7405 2.48812 20.5742C11.3823 -2.60027 108.832 2.45841 129.774 36.7172"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
              that’s Right for You.
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="cloud-pricing-images wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <div className="bg-shapes">
                <div className="shape">
                  <img
                    src="assets/images/home_9/shapes/shape10.svg"
                    alt="Shape"
                  />
                </div>
                <div className="shape">
                  <img
                    data-parallax='{"x":-20, "y":0, "rotateY":0}'
                    src="assets/images/home_9/shapes/shape11-1.svg"
                    alt="Shape"
                  />
                </div>
                <div className="shape">
                  <img
                    data-parallax='{"x":20, "y":0, "rotateY":0}'
                    src="assets/images/home_9/shapes/shape11-2.svg"
                    alt="Shape"
                  />
                </div>
                <div className="shape">
                  <img
                    data-parallax='{"x":30, "y":0, "rotateY":0}'
                    src="assets/images/home_9/shapes/shape11-3.svg"
                    alt="Shape"
                  />
                </div>
                <div className="shape">
                  <img
                    data-parallax='{"x":0, "y":20, "rotateY":0}'
                    src="assets/images/home_9/shapes/shape11-4.svg"
                    alt="Shape"
                  />
                </div>
                <div className="shape">
                  <img
                    data-parallax='{"x":0, "y":30, "rotateY":0}'
                    src="assets/images/home_9/shapes/shape11-5.svg"
                    alt="Shape"
                  />
                </div>
                <div className="shape">
                  <img
                    data-parallax='{"x":30, "y":0, "rotateY":0}'
                    src="assets/images/home_9/shapes/shape11-6.svg"
                    alt="Shape"
                  />
                </div>
              </div>
              <img src="assets/images/home_9/pricing-img.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="cloud-pricing-wrapp wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="cloud-monthly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cloud-monthly"
                    type="button"
                    role="tab"
                    aria-controls="cloud-monthly"
                    aria-selected="true"
                  >
                    <span />
                    Billed monthly
                  </button>
                  <button
                    className="nav-link"
                    id="cloud-annually-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cloud-annually"
                    type="button"
                    role="tab"
                    aria-controls="cloud-annually"
                    aria-selected="false"
                  >
                    <span />
                    Billed annually
                  </button>
                </div>
              </nav>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="cloud-monthly"
                  role="tabpanel"
                  aria-labelledby="cloud-monthly-tab"
                >
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Included</p>
                      <p className="space">10GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Good for safely storing all the basics, like contacts,
                        calendars, and notes.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">Free</p>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">
                        Most Popular
                        <span className="tag">
                          <i className="fas fa-heart" />
                        </span>
                      </p>
                      <p className="space">50GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Recommended for storing your photos, videos, files, and
                        apps and backing up your device.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$1.99/month</p>
                      <a href="#" className="btn-purchase">
                        Purchase
                      </a>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Lots of Photos</p>
                      <p className="space">100GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Good for families or one person with lots of photos and
                        videos.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$4.99/month</p>
                      <a href="#" className="btn-purchase">
                        Purchase
                      </a>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Great for Families</p>
                      <p className="space">1TB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        A lifetime of photos, videos, and everything else for
                        you and up to five family members. Ideal for families to
                        share.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$9.99/month</p>
                      <a href="#" className="btn-purchase">
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="cloud-annually"
                  role="tabpanel"
                  aria-labelledby="cloud-annually-tab"
                >
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Included</p>
                      <p className="space">10GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Good for safely storing all the basics, like contacts,
                        calendars, and notes.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">Free</p>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">
                        Most Popular
                        <span className="tag">
                          <i className="fas fa-heart" />
                        </span>
                      </p>
                      <p className="space">50GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Recommended for storing your photos, videos, files, and
                        apps and backing up your device.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$19.99/annual</p>
                      <a href="#" className="btn-purchase">
                        Purchase
                      </a>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Lots of Photos</p>
                      <p className="space">100GB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        Good for families or one person with lots of photos and
                        videos.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$49.99/annual</p>
                      <a href="#" className="btn-purchase">
                        Purchase
                      </a>
                    </div>
                  </div>
                  <div className="cloud-pricing-item">
                    <div className="plan">
                      <p className="label">Great for Families</p>
                      <p className="space">1TB</p>
                    </div>
                    <div className="content">
                      <p className="plan-text">
                        A lifetime of photos, videos, and everything else for
                        you and up to five family members. Ideal for families to
                        share.
                      </p>
                    </div>
                    <div className="price">
                      <p className="type">$99.99/annual</p>
                      <a href="#" className="btn-purchase">
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Pricing Area */}
    {/* Testimonial Area */}
    <section className="cloud-testimonial-area pt-125">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="testimonial-title cloud-heading-2 mb-30">
              More than
              <span>
                10,000
                <svg
                  width={175}
                  height={70}
                  viewBox="0 0 175 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M2.74687 18.4067C73.9377 -29.3958 233.396 32.857 150.873 62.1057C102.25 79.3392 -15.2107 62.8661 2.7469 30.511C14.4708 9.3874 95.2742 -7.64876 152.309 30.511"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
              Teams use Crooked Business
            </h2>
            <a href="#" className="testimonial-btn mb-70">
              Learn more about our customers{" "}
              <img
                className="icon"
                src="assets/images/home_9/shapes/right.svg"
                alt="Icon"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 gx-lg-0">
            <div className="nav nav-tabs cloud-team-tab" role="tablist">
              <button
                className="nav-link active"
                id="user1-tab"
                data-bs-toggle="tab"
                data-bs-target="#user1"
                type="button"
                role="tab"
                aria-controls="user1"
                aria-selected="true"
              >
                <img
                  src="assets/images/home_9/users/user-logo1.svg"
                  alt="User Brand"
                />
              </button>
              <button
                className="nav-link"
                id="user2-tab"
                data-bs-toggle="tab"
                data-bs-target="#user2"
                type="button"
                role="tab"
                aria-controls="user2"
                aria-selected="false"
              >
                <img
                  src="assets/images/home_9/users/user-logo2.svg"
                  alt="User Brand"
                />
              </button>
              <button
                className="nav-link"
                id="user3-tab"
                data-bs-toggle="tab"
                data-bs-target="#user3"
                type="button"
                role="tab"
                aria-controls="user3"
                aria-selected="false"
              >
                <img
                  src="assets/images/home_9/users/user-logo3.svg"
                  alt="User Brand"
                />
              </button>
              <button
                className="nav-link"
                id="user4-tab"
                data-bs-toggle="tab"
                data-bs-target="#user4"
                type="button"
                role="tab"
                aria-controls="user4"
                aria-selected="false"
              >
                <img
                  src="assets/images/home_9/users/user-logo4.svg"
                  alt="User Brand"
                />
              </button>
            </div>
          </div>
          <div className="col-lg-4 gx-lg-0">
            <div className="tab-content cloud-team-content">
              <div
                className="tab-pane fade show active"
                id="user1"
                role="tabpanel"
                aria-labelledby="user1-tab"
              >
                <div className="user-content">
                  <div className="progress-bar" />
                  <div className="user-img">
                    <img
                      src="assets/images/home_9/users/user-logo1.svg"
                      alt="User Brand"
                    />
                  </div>
                  <p className="user-quote">
                    “With Crooked, educators can collaborate securely with
                    colleagues on any device and platform — across campus and
                    across the world.”
                  </p>
                  <p className="user-name">Marcus Levin, Designer</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="user2"
                role="tabpanel"
                aria-labelledby="user2-tab"
              >
                <div className="user-content">
                  <div className="progress-bar" />
                  <div className="user-img">
                    <img
                      src="assets/images/home_9/users/user-logo2.svg"
                      alt="User Brand"
                    />
                  </div>
                  <p className="user-quote">
                    “With Crooked, educators can collaborate securely with
                    colleagues on any device and platform — across campus and
                    across the world.”
                  </p>
                  <p className="user-name">Marcus Levin, Designer</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="user3"
                role="tabpanel"
                aria-labelledby="user3-tab"
              >
                <div className="user-content">
                  <div className="progress-bar" />
                  <div className="user-img">
                    <img
                      src="assets/images/home_9/users/user-logo3.svg"
                      alt="User Brand"
                    />
                  </div>
                  <p className="user-quote">
                    “With Crooked, educators can collaborate securely with
                    colleagues on any device and platform — across campus and
                    across the world.”
                  </p>
                  <p className="user-name">Marcus Levin, Designer</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="user4"
                role="tabpanel"
                aria-labelledby="user4-tab"
              >
                <div className="user-content">
                  <div className="progress-bar" />
                  <div className="user-img">
                    <img
                      src="assets/images/home_9/users/user-logo4.svg"
                      alt="User Brand"
                    />
                  </div>
                  <p className="user-quote">
                    “With Crooked, educators can collaborate securely with
                    colleagues on any device and platform — across campus and
                    across the world.”
                  </p>
                  <p className="user-name">Marcus Levin, Designer</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="user5"
                role="tabpanel"
                aria-labelledby="user5-tab"
              >
                <div className="user-content">
                  <div className="progress-bar" />
                  <div className="user-img">
                    <img
                      src="assets/images/home_9/users/user-logo5.svg"
                      alt="User Brand"
                    />
                  </div>
                  <p className="user-quote">
                    “With Crooked, educators can collaborate securely with
                    colleagues on any device and platform — across campus and
                    across the world.”
                  </p>
                  <p className="user-name">Marcus Levin, Designer</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="user6"
                role="tabpanel"
                aria-labelledby="user6-tab"
              >
                <div className="user-content">
                  <div className="progress-bar" />
                  <div className="user-img">
                    <img
                      src="assets/images/home_9/users/user-logo6.svg"
                      alt="User Brand"
                    />
                  </div>
                  <p className="user-quote">
                    “With Crooked, educators can collaborate securely with
                    colleagues on any device and platform — across campus and
                    across the world.”
                  </p>
                  <p className="user-name">Marcus Levin, Designer</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="user7"
                role="tabpanel"
                aria-labelledby="user7-tab"
              >
                <div className="user-content">
                  <div className="progress-bar" />
                  <div className="user-img">
                    <img
                      src="assets/images/home_9/users/user-logo7.svg"
                      alt="User Brand"
                    />
                  </div>
                  <p className="user-quote">
                    “With Crooked, educators can collaborate securely with
                    colleagues on any device and platform — across campus and
                    across the world.”
                  </p>
                  <p className="user-name">Marcus Levin, Designer</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="user8"
                role="tabpanel"
                aria-labelledby="user8-tab"
              >
                <div className="user-content">
                  <div className="progress-bar" />
                  <div className="user-img">
                    <img
                      src="assets/images/home_9/users/user-logo8.svg"
                      alt="User Brand"
                    />
                  </div>
                  <p className="user-quote">
                    “With Crooked, educators can collaborate securely with
                    colleagues on any device and platform — across campus and
                    across the world.”
                  </p>
                  <p className="user-name">Marcus Levin, Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 gx-lg-0">
            <div
              className="nav nav-tabs cloud-team-tab column-2nd"
              role="tablist"
            >
              <button
                className="nav-link"
                id="user5-tab"
                data-bs-toggle="tab"
                data-bs-target="#user5"
                type="button"
                role="tab"
                aria-controls="user5"
                aria-selected="false"
              >
                <img
                  src="assets/images/home_9/users/user-logo5.svg"
                  alt="User Brand"
                />
              </button>
              <button
                className="nav-link"
                id="user6-tab"
                data-bs-toggle="tab"
                data-bs-target="#user6"
                type="button"
                role="tab"
                aria-controls="user6"
                aria-selected="false"
              >
                <img
                  src="assets/images/home_9/users/user-logo6.svg"
                  alt="User Brand"
                />
              </button>
              <button
                className="nav-link"
                id="user7-tab"
                data-bs-toggle="tab"
                data-bs-target="#user7"
                type="button"
                role="tab"
                aria-controls="user7"
                aria-selected="false"
              >
                <img
                  src="assets/images/home_9/users/user-logo7.svg"
                  alt="User Brand"
                />
              </button>
              <button
                className="nav-link"
                id="user8-tab"
                data-bs-toggle="tab"
                data-bs-target="#user8"
                type="button"
                role="tab"
                aria-controls="user8"
                aria-selected="false"
              >
                <img
                  src="assets/images/home_9/users/user-logo8.svg"
                  alt="User Brand"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonial Area */}
    {/* App Integration Area */}
    <section className="cloud-apps-area pt-130 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="apps-title cloud-heading-2 mb-30 mx-auto">
              Crooked
              <span>
                Integrated
                <svg
                  width={287}
                  height={89}
                  viewBox="0 0 287 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M15.1813 18.929C119.226 -20.9336 332.756 11.627 276.862 60.7958C232.086 100.185 -9.7646 99.5033 1.39234 40.2395C8.16679 4.25482 202.461 -0.375429 266.643 34.2224"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
              with These Softwares
            </h2>
            <a href="#" className="apps-btn mb-100">
              Learn more about Integration{" "}
              <img
                className="icon"
                src="assets/images/home_9/shapes/right.svg"
                alt="Icon"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="cloud-integrated-apps mx-auto">
              <div className="apps-wrapp">
                <div className="app">
                  <img src="assets/images/home_9/apps/logo1.png" alt="app" />
                </div>
                <div className="app">
                  <img src="assets/images/home_9/apps/logo7.png" alt="app" />
                </div>
                <div className="app">
                  <img src="assets/images/home_9/apps/logo9.png" alt="app" />
                </div>
                <div className="app">
                  <img src="assets/images/home_9/apps/logo2.png" alt="app" />
                </div>
                <div className="app">
                  <img src="assets/images/home_9/apps/logo4.png" alt="app" />
                </div>
                <div className="app">
                  <img src="assets/images/home_9/apps/logo8.png" alt="app" />
                </div>
                <div className="app">
                  <img src="assets/images/home_9/apps/logo3.png" alt="app" />
                </div>
                <div className="app">
                  <img src="assets/images/home_9/apps/logo5.png" alt="app" />
                </div>
                <div className="app">
                  <img src="assets/images/home_9/apps/logo6.png" alt="app" />
                </div>
                <div className="main app">
                  <img src="assets/images/home_9/apps/main-app.svg" alt="app" />
                </div>
              </div>
              <div className="bubbles-wrapp">
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
              </div>
              <div className="apps-circle-mid" />
              <div className="apps-circle-small" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* App Integration Area */}
    {/* CTA Area */}
    <section className="cloud-cta-area bg-blue-light pt-130 pb-140">
      <div className="bg-shapes">
        <div className="shape" data-parallax='{"x":0, "y":0, "rotateY":100}' />
        <div className="shape" data-parallax='{"x":0, "y":0, "rotateY":200}' />
        <div className="shape" data-parallax='{"x":0, "y":0, "rotateY":300}' />
        <div className="shape" data-parallax='{"x":-80, "y":0, "rotateY":0}'>
          <img src="assets/images/home_9/shapes/shape12.svg" alt="" />
        </div>
        <div className="shape" data-parallax='{"x":-80, "y":0, "rotateY":0}'>
          <img src="assets/images/home_9/shapes/shape13.svg" alt="" />
        </div>
        <div className="shape">
          <img src="assets/images/home_9/shapes/shape14.svg" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="cta-title cloud-heading-2 mb-85">
              All in one Marketing Tool for your Business. 15 Days
              <span>
                Free
                <svg
                  width={126}
                  height={57}
                  viewBox="0 0 126 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animatable draw"
                    d="M8.66837 13.6685C61.285 -18.3672 168.407 17.1404 105.103 45.7818C55.8244 68.0772 -15.794 49.2105 4.09327 23.0387C15.1944 8.4296 61.8283 -0.720028 101.716 12.2351"
                    stroke="#EFBA34"
                  />
                </svg>
              </span>
              Trial
            </h2>
            <a href="#" className="btn btn-red">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Area */}
    {/* Join Us Area */}
    <div className="cloud-join-us-area pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cloud-join-left">
              <h2 className="join-title cloud-heading-2 mb-10">
                Start being
                <span>
                  Secure.
                  <svg
                    width={208}
                    height={70}
                    viewBox="0 0 208 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="animatable draw"
                      d="M12.3913 15.8907C99.954 -22.4824 242.396 21.6662 198.813 54.8272C168.732 77.7158 1.36509 74.1514 1.36499 36.4575C1.36493 12.3477 73.6476 -1.71354 153.903 14.2707"
                      stroke="#16C79A"
                    />
                  </svg>
                </span>
                Join us Today!
              </h2>
              <p className="join-text mb-40">
                Millions of people trust Crooked to store billions of files
                using our state of the art infrastructure. Join them and protect
                your data using one of the Internet’s most secure cloud and
                communication providers.
              </p>
              <a href="#" className="btn btn-red">
                {" "}
                Book a Free Demo{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cloud-join-right ml-40">
              <div className="right-item mb-30">
                <div className="w-30">
                  <img src="assets/images/home_9/shapes/icon1.svg" alt="" />
                </div>
                <div className="w-70">
                  <p className="item-text">Number of registered users</p>
                  <p className="amount counter">210500</p>
                </div>
              </div>
              <div className="right-item">
                <div className="w-30">
                  <img src="assets/images/home_9/shapes/icon2.svg" alt="" />
                </div>
                <div className="w-70">
                  <p className="item-text">Number of Active Campaign</p>
                  <p className="amount counter">9110500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Join Us Area */}
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
                  <option value="English">English</option>
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