import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader';

function Hometwo() {
  return (
    <div>
      <Loader />
      <Header />
      <>
  {/* Login-Modal */}
  <div className="modal fade" id="modalCart" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="modal-form-left">
              <img src="images/modal-bg.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">
                Login
              </h4>
              <form>
                <label>Email</label>
                <input
                  type="text"
                  name="username"
                  className="username form-control"
                  placeholder="Enter your username"
                />
                <label className="password-label">password</label>
                <input
                  type="password"
                  name="password"
                  className="password form-control"
                  placeholder="Enter your password"
                />
              </form>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="frm-all-btn">
                <div className="forgot-password">
                  <a href="#" className="f-pass">
                    lost your password
                  </a>
                  <a href="#">create a account</a>
                </div>
                <button type="submit" className="btn login-btn btn-xs">
                  login
                </button>
                <div className="social-link">
                  <ul>
                    <li>
                      <a href={3} className="color-1">
                        <i className="flaticon-facebook-logo" />
                      </a>
                    </li>
                    <li>
                      <a href={3} className="color-2">
                        <i className="flaticon-google-plus-symbol" />
                      </a>
                    </li>
                    <li>
                      <a href={3} className="color-3">
                        <i className="flaticon-twitter-black-shape" />
                      </a>
                    </li>
                    <li>
                      <a href={3} className="color-4">
                        <i className="flaticon-linkedin-letters" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*End Login Modal*/}
  {/* SearchBox Modal */}
  <div className="search">
    <button type="button" className="close">
      ×
    </button>
    <form>
      <input
        type="search"
        defaultValue=""
        className="form-control"
        placeholder="Type Here..."
      />
      <button type="submit" className="btn theme-btn">
        <i className="fa fa-search" /> Search
      </button>
    </form>
  </div>
  {/* End SearchBox Modal */}
  {/* End Header */}
  {/* Child Care Slider */}
  <section className="child-care-section">
    <div className="child-care-slider owl-carousel owl-theme">
      <div className="child-care-slider-wrap">
        <div className="d-table">
          <div className="d-tablecell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-6">
                  <div className="single-slider">
                    <div className="slider-text">
                      <h3>we are child care profssional</h3>
                      <p>
                        We understand the importance of finding quality day care
                        center for little ones.
                      </p>
                      <div className="custom-button">
                        <a href="#" className="custom-btn">
                          get a quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="img-video-shape">
                    <div className="play-video-icon">
                      <a
                        className="popup-youtube"
                        href="https://www.youtube.com/watch?v=szuchBiLrEM"
                      >
                        <i className="fa fa-play" aria-hidden="true" />
                        <div className="sonar-wrapper">
                          <div className="sonar-emitter">
                            <div className="sonar-wave" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-shape">
                  <div className="img-shape2">
                    <img src="images/slider-shape.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="child-care-slider-wrap">
        <div className="d-table">
          <div className="d-tablecell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-6">
                  <div className="single-slider">
                    <div className="slider-text">
                      <h3>we are child care profssional</h3>
                      <p>
                        We understand the importance of finding quality day care
                        center for little ones.
                      </p>
                      <div className="custom-button">
                        <a href="#" className="custom-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="img-video-shape">
                    <div className="img-video-shape">
                      <div className="play-video-icon">
                        <a
                          className="popup-youtube"
                          href="https://www.youtube.com/watch?v=szuchBiLrEM"
                        >
                          <i className="fa fa-play" aria-hidden="true" />
                          <div className="sonar-wrapper">
                            <div className="sonar-emitter">
                              <div className="sonar-wave" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-shape">
                  <div className="img-shape2">
                    <img src="images/slider-shape.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-all-shape">
      <div className="shape1">
        <img src="images/shape1.png" alt="Shape" />
      </div>
      <div className="shape2">
        <img src="images/shape2.png" className=" wow pulse" alt="Shape" />
      </div>
      <div className="shape3">
        <img src="images/shape3.png" alt="Shape" />
      </div>
      <div className="shape4">
        <img src="images/shape2.png" className=" wow pulse" alt="Shape" />
      </div>
    </div>
  </section>
  {/* End Child Care Slider */}
  {/* Features Section */}
  <section className="features-section pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="single-feature text-center">
            <div className="image1">
              <img src="images/ibg1.png" alt="Image" />
            </div>
            <h3>Learning &amp; Fun</h3>
            <p>Lorem Ipsum is simply dummy text of the printing..</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-feature text-center">
            <div className="image2">
              <img src="images/ibg2.png" alt="Image" />
            </div>
            <h3>healthy meal</h3>
            <p>Lorem Ipsum is simply dummy text of the printing..</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-feature text-center">
            <div className="image3">
              <img src="images/ibg3.png" alt="Image" />
            </div>
            <h3>Expert Teacher</h3>
            <p>Lorem Ipsum is simply dummy text of the printing..</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-feature text-center">
            <div className="image4">
              <img src="images/ibg4.png" alt="Image" />
            </div>
            <h3>play area</h3>
            <p>Lorem Ipsum is simply dummy text of the printing..</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Features Section */}
  {/* About Section */}
  <section className="about-section pb-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="single-about">
            <div className="section-title">
              <h6>about us</h6>
              <h2>welcome to the learning leader baby care</h2>
              <img src="images/title-border.png" alt="Image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
            </div>
            <div className="about-list">
              <ul>
                <li>
                  <i className="flaticon-circle-outline" />
                  Supporting the child Personality
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                </li>
                <li>
                  <i className="flaticon-circle-outline" />
                  Professional &amp; Qualified Teacher
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                </li>
                <li>
                  <i className="flaticon-circle-outline" />
                  Indoor/Outdoor Games For Kids
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                </li>
                <li>
                  <i className="flaticon-circle-outline" />
                  Best learning School For Kids
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className="custom-button">
              <a href="#" className="custom-btn">
                discover more
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-about-bg item-bg">
            <div className="about-img-cartwrap">
              <div className="image">
                <img src="images/about-bg.png" alt="" />
                <div className="benefits-cart">
                  <div className="d-table">
                    <div className="d-tablecell">
                      <h4>our</h4>
                      <p>benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape1">
      <img src="images/shape1_1.png" alt="Image" />
    </div>
    <div className="shape2">
      <img src="images/shape2_1.png" alt="Image" />
    </div>
    <div className="shape3">
      <img src="images/shape3_1.png" alt="Image" />
    </div>
    <div className="shape4">
      <img src="images/shape4.png" alt="Image" />
    </div>
  </section>
  {/* End About Section */}
  {/* Work Section */}
  <section className="work-section ptb-100">
    <div className="container">
      <div className="section-title text-center">
        <h6>how it work</h6>
        <h2>Since 10 Years Experience</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="single-work">
            <div className="image ico-bg1">
              <img src="images/icon1.png" alt="Image" />
            </div>
            <div className="text">
              <h3>Check their Credentials</h3>
              <p>It is so easy to find a babysitter who suits you best</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="single-work">
            <div className="image ico-bg2">
              <img src="images/icon2.png" alt="Image" />
            </div>
            <div className="text">
              <h3>Find a Babysitter</h3>
              <p>It is so easy to find a babysitter who suits you best</p>
            </div>
          </div>
        </div>
        <div className="offset-md-3 offset-lg-0 col-md-6 col-lg-4">
          <div className="single-work">
            <div className="image ico-bg3">
              <img src="images/icon3.png" alt="Image" />
            </div>
            <div className="text">
              <h3>Lock in a Date</h3>
              <p>It is so easy to find a babysitter who suits you best</p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-button text-center">
        <a href="#" className="custom-btn">
          sign up free
        </a>
      </div>
    </div>
    <div className="shape1">
      <img src="images/shape1_1.png" alt="Shape" />
    </div>
    <div className="shape2">
      <img src="images/shape2_1.png" alt="Shape" />
    </div>
    <div className="shape3">
      <img src="images/shape5.png" alt="Shape" />
    </div>
    <div className="shape4">
      <img src="images/shape4.png" alt="Shape" />
    </div>
    <div className="shape5">
      <img src="images/shape5.png" alt="Shape" />
    </div>
    <div className="bg-shape">
      <img src="images/bg-shape2.png" alt="Shape" />
    </div>
  </section>
  {/* End Work Section */}
  {/* Choose Section */}
  <section className="choose-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>why us</h6>
        <h2>why choose us</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="single-choose choose2">
            <div className="image ico-1">
              <img src="images/ico-bg.png" alt="Image" />
            </div>
            <a href="#">
              <h3>Safe Environment </h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a href="#" className="rd-mre-btn">
              read more
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-choose choose2">
            <div className="image ico-2">
              <img src="images/ico-bg2.png" alt="Image" />
            </div>
            <a href="#">
              <h3>great teacher</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a href="#" className="rd-mre-btn">
              read more
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-choose choose2">
            <div className="image ico-3">
              <img src="images/ico-bg3.png" alt="Image" />
            </div>
            <a href="#">
              <h3>music training</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a href="#" className="rd-mre-btn">
              read more
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-choose choose2">
            <div className="image ico-4">
              <img src="images/ico-bg4.png" alt="Image" />
            </div>
            <a href="#">
              <h3>sports training</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a href="#" className="rd-mre-btn">
              read more
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Choose Section */}
  {/* Event Section */}
  <section className="event-section">
    <div className="container">
      <div className="section-title text-center">
        <h6>event</h6>
        <h2>Upcoming event</h2>
        <img src="images/title-border2.png" alt="Image" />
      </div>
      <div className="single-event">
        <div className="time">
          <i className="flaticon-watch" />
          <span>11.00 am</span>
        </div>
        <h4>math classes</h4>
        <div className="calender">
          <i className="flaticon-calendar" />
        </div>
      </div>
      <div className="single-event">
        <div className="time">
          <i className="flaticon-watch" />
          <span>11.00 am</span>
        </div>
        <h4>Imagination Classes</h4>
        <div className="calender">
          <i className="flaticon-calendar" />
        </div>
      </div>
      <div className="single-event">
        <div className="time">
          <i className="flaticon-watch" />
          <span>11.00 am</span>
        </div>
        <h4>Happiness is Joy of Learning</h4>
        <div className="calender">
          <i className="flaticon-calendar" />
        </div>
      </div>
      <div className="single-event">
        <div className="time">
          <i className="flaticon-watch" />
          <span>11.00 am</span>
        </div>
        <h4>Painting Studio</h4>
        <div className="calender">
          <i className="flaticon-calendar" />
        </div>
      </div>
      <div className="single-event">
        <div className="time">
          <i className="flaticon-watch" />
          <span>11.00 am</span>
        </div>
        <h4>Super Hero Party</h4>
        <div className="calender">
          <i className="flaticon-calendar" />
        </div>
      </div>
      <div className="single-event">
        <div className="time">
          <i className="flaticon-watch" />
          <span>11.00 am</span>
        </div>
        <h4>Birthday Party</h4>
        <div className="calender">
          <i className="flaticon-calendar" />
        </div>
      </div>
      <div className="event-shape">
        <div className="shape1">
          <img src="images/shape7.png" alt="Shape" />
        </div>
        <div className="shape2">
          <img src="images/shape8.png" alt="Shape" />
        </div>
        <div className="shape3">
          <img src="images/shape9.png" alt="Shape" />
        </div>
        <div className="shape4">
          <img src="images/shape10.png" alt="Shape" />
        </div>
        <div className="shape5">
          <img src="images/shape11.png" alt="Shape" />
        </div>
        <div className="shape6">
          <img src="images/shape12.png" alt="Shape" />
        </div>
      </div>
    </div>
  </section>
  {/* End Event Section */}
  {/* Services Section */}
  <section className="services-section unique-services">
    <div className="container">
      <div className="section-title text-center">
        <h6>service</h6>
        <h2>our services</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-4">
          <div className="single-service">
            <div className="services-all">
              <div className="image">
                <a href="service-details.html">
                  <img
                    src="images/ico1.png"
                    className="wow fadeInLeft"
                    alt="Image"
                  />
                </a>
                <div className="img-bg1" />
                <div className="img-bg2" />
              </div>
              <div className="text">
                <a href="service-details.html">
                  <h3 className="sitting">baby sitting</h3>
                </a>
                <p>It is so easy to find a babysitter who suits you best.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-4">
          <div className="single-service">
            <div className="services-all">
              <div className="image">
                <a href="service-details.html">
                  <img
                    src="images/ico2.png"
                    className="wow fadeInLeft"
                    alt="Image"
                  />
                </a>
                <div className="img-bg1 img-bg3" />
                <div className="img-bg2 img-bg4" />
              </div>
              <div className="text">
                <a href="service-details.html">
                  <h3 className="shower">baby shower</h3>
                </a>
                <p>It is so easy to find a babysitter who suits you best.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-sm-3 offset-md-3 offset-lg-0 col-md-6 col-sm-6 col-lg-4">
          <div className="single-service">
            <div className="services-all">
              <div className="image">
                <a href="service-details.html">
                  <img
                    src="images/ico3.png"
                    className="wow fadeInLeft"
                    alt="Image"
                  />
                </a>
                <div className="img-bg1 img-bg5" />
                <div className="img-bg2 img-bg6" />
              </div>
              <div className="text">
                <a href="service-details.html">
                  <h3 className="time-nan">full time nany</h3>
                </a>
                <p>It is so easy to find a babysitter who suits you best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Services Section */}
  {/* Testimonial Section */}
  <section className="testimonial-section ptb-100">
    <div className="container">
      <div className="section-title text-center">
        <h6>testimonials</h6>
        <h2>what parents say</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="testi-slider owl-carousel owl-theme">
        <div className="single-testimonial">
          <div className="test-text-img">
            <img src="images/cardbg-1.png" alt="Image" />
            <p>
              <i className="flaticon-quote" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.{" "}
              <i className="flaticon-quote-1" />
            </p>
          </div>
          <div className="test-profile">
            <img src="images/ico-1.png" alt="Image" />
            <p>Malisa Queen</p>
          </div>
        </div>
        <div className="single-testimonial">
          <div className="test-text-img">
            <img src="images/cardbg-2.png" alt="Image" />
            <p>
              <i className="flaticon-quote" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.{" "}
              <i className="flaticon-quote-1" />
            </p>
          </div>
          <div className="test-profile">
            <img src="images/ico-2.png" alt="Image" />
            <p>Stewart Merry</p>
          </div>
        </div>
        <div className="single-testimonial">
          <div className="test-text-img">
            <img src="images/cardbg-3.png" alt="Image" />
            <p>
              <i className="flaticon-quote" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.{" "}
              <i className="flaticon-quote-1" />
            </p>
          </div>
          <div className="test-profile">
            <img src="images/ico-3.png" alt="Image" />
            <p>Lisa Watson</p>
          </div>
        </div>
        <div className="single-testimonial">
          <div className="test-text-img">
            <img src="images/cardbg-1.png" alt="Image" />
            <p>
              <i className="flaticon-quote" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.{" "}
              <i className="flaticon-quote-1" />
            </p>
          </div>
          <div className="test-profile">
            <img src="images/ico-1.png" alt="Image" />
            <p>Malisa Queen</p>
          </div>
        </div>
        <div className="single-testimonial">
          <div className="test-text-img">
            <img src="images/cardbg-2.png" alt="Image" />
            <p>
              <i className="flaticon-quote" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.{" "}
              <i className="flaticon-quote-1" />
            </p>
          </div>
          <div className="test-profile">
            <img src="images/ico-2.png" alt="Image" />
            <p>Lisa Watson</p>
          </div>
        </div>
        <div className="single-testimonial">
          <div className="test-text-img">
            <img src="images/cardbg-3.png" alt="Image" />
            <p>
              <i className="flaticon-quote" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.{" "}
              <i className="flaticon-quote-1" />
            </p>
          </div>
          <div className="test-profile">
            <img src="images/ico-3.png" alt="Image" />
            <p>Stewart Merry</p>
          </div>
        </div>
      </div>
      <div className="test-baby-image">
        <ul>
          <li className="image-1">
            <img src="images/bottom-bg1.png" alt="Image" />
          </li>
          <li className="image-2">
            <img src="images/bottom-bg2.png" alt="Image" />
          </li>
          <li className="image-3">
            <img src="images/bottom-bg3.png" alt="Image" />
          </li>
          <li className="image-4">
            <img src="images/bottom-bg4.png" alt="Image" />
          </li>
          <li className="image-5">
            <img src="images/bottom-bg5.png" alt="Image" />
          </li>
          <li className="image-6">
            <img src="images/bottom-bg6.png" alt="Image" />
          </li>
        </ul>
      </div>
    </div>
    <div className="testi-all-shape">
      <div className="shape1">
        <img src="images/shape7.png" alt="Shape" />
      </div>
      <div className="shape2">
        <img src="images/shape7.png" alt="Shape" />
      </div>
      <div className="shape3">
        <img src="images/shape7.png" alt="Shape" />
      </div>
      <div className="shape4">
        <img src="images/shape8.png" alt="Shape" />
      </div>
      <div className="shape5">
        <img src="images/shape8.png" alt="Shape" />
      </div>
      <div className="shape6">
        <img src="images/shape8.png" alt="Shape" />
      </div>
      <div className="shape7">
        <img src="images/shape9.png" alt="Shape" />
      </div>
      <div className="shape8">
        <img src="images/shape9.png" alt="Shape" />
      </div>
      <div className="shape9">
        <img src="images/shape9.png" alt="Shape" />
      </div>
      <div className="shape10">
        <img src="images/shape12.png" alt="Shape" />
      </div>
      <div className="shape11">
        <img src="images/shape12.png" alt="Shape" />
      </div>
    </div>
  </section>
  {/* End Testimonial Section */}
  {/* News Letter Section */}
  <section className="news-letter">
    <div className="container">
      <div className="news-letter-item">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-5">
            <div className="head float-left">
              <h2>subscribe to newsletter</h2>
            </div>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="form float-left">
              <form>
                <input
                  type="email"
                  className="form-control"
                  placeholder="your email"
                />
              </form>
            </div>
            <div className="news-button text-center">
              <a href="#" className="news-btn">
                subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End News Letter Section */}
  {/* Blog2 Section */}
  <section className="blog2-section ptb-100">
    <div className="container">
      <div className="section-title text-center">
        <h6>latest news</h6>
        <h2>latest blog</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="blog-slider-two owl-carousel owl-theme">
        <div className="single-blog">
          <div className="blog-image">
            <a href="blog-details.html">
              <img src="images/10.jpg" alt="Image" />
            </a>
          </div>
          <div className="img-caption">
            <div className="blog-chat-list">
              <ul>
                <li className="date">
                  <i className="fa fa-calendar" aria-hidden="true" />8
                  September, 2019
                </li>
                <li>
                  <i className="fa fa-comments" aria-hidden="true" />3 comments
                </li>
              </ul>
            </div>
            <a href="blog-details.html">
              <h3>The Indoor Activites for Everyone</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore...{" "}
            </p>
            <a href="blog-details.html" className="read-more-btn">
              read more
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-image">
            <a href="blog-details.html">
              <img src="images/11.jpg" alt="Image" />
            </a>
          </div>
          <div className="img-caption">
            <div className="blog-chat-list">
              <ul>
                <li className="date">
                  <i className="fa fa-calendar" aria-hidden="true" />8
                  September, 2019
                </li>
                <li>
                  <i className="fa fa-comments" aria-hidden="true" />3 comments
                </li>
              </ul>
            </div>
            <a href="blog-details.html">
              <h3>Kids Grooming with New Lesson</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore...{" "}
            </p>
            <a href="blog-details.html" className="read-more-btn">
              read more
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-image">
            <a href="blog-details.html">
              <img src="images/12.jpg" alt="Image" />
            </a>
          </div>
          <div className="img-caption">
            <div className="blog-chat-list">
              <ul>
                <li className="date">
                  <i className="fa fa-calendar" aria-hidden="true" />8
                  September, 2019
                </li>
                <li>
                  <i className="fa fa-comments" aria-hidden="true" />3 comments
                </li>
              </ul>
            </div>
            <a href="blog-details.html">
              <h3>An Inspired Approach To Education</h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore...{" "}
            </p>
            <a href="blog-details.html" className="read-more-btn">
              read more
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="blog-baby-image">
        <ul>
          <li className="image-1">
            <img src="images/5.png" alt="Image" />
          </li>
          <li className="image-2">
            <img src="images/5.png" alt="Image" />
          </li>
          <li className="image-3">
            <img src="images/5.png" alt="Image" />
          </li>
          <li className="image-4">
            <img src="images/6.png" alt="Image" />
          </li>
          <li className="image-5">
            <img src="images/6.png" alt="Image" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* End Blog2 Section */}
  {/* Logo Section */}
  <div className="logo-section">
    <div className="container">
      <div className="logo-slider owl-carousel owl-theme">
        <div className="single-logo">
          <img src="images/1.png" alt="Logo" />
        </div>
        <div className="single-logo">
          <img src="images/2.png" alt="Logo" />
        </div>
        <div className="single-logo">
          <img src="images/3.png" alt="Logo" />
        </div>
        <div className="single-logo">
          <img src="images/4.png" alt="Logo" />
        </div>
      </div>
    </div>
  </div>
  {/* End Logo Section */}
</>


      <Footer />
    </div>
  )
}

export default Hometwo;
