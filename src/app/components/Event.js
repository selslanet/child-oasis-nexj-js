import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

function Event() {
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
  {/* All Page Banner */}
  <section className="all-page-banner item-five">
    <div className="d-table">
      <div className="d-tablecell">
        <div className="container">
          <div className="banner-text text-center">
            <h1>upcoming event</h1>
            <ul>
              <li>
                <a href="/home">home</a>
                <i className="flaticon-right-arrow" />
              </li>
              <li>event</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End All Page Banner */}
  {/* Classes Section */}
  <section className="classes-section ptb-100">
    <div className="container">
      <div className="single-box">
        <div className="row">
          <div className="col-lg-4">
            <div className="class-img-wrap">
              <img src="images/1.jpg" alt="Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="class-service-wrap">
              <div className="time">
                <i className="flaticon-watch" />
                <span>11.00 am</span>
              </div>
              <div className="class-main-content">
                <a href="#">
                  <h3>babysitting service</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
                <a href="#" className="readmore-btn">
                  read more
                </a>
              </div>
              <div className="date-btn">
                <a href="#">27 may</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-4">
            <div className="class-img-wrap">
              <img src="images/2.jpg" alt="Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="class-service-wrap">
              <div className="time">
                <i className="flaticon-watch" />
                <span>11.00 am</span>
              </div>
              <div className="class-main-content">
                <a href="#">
                  <h3>Art Classes</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
                <a href="#" className="readmore-btn">
                  read more
                </a>
              </div>
              <div className="date-btn">
                <a href="#">27 may</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-4">
            <div className="class-img-wrap">
              <img src="images/3.jpg" alt="Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="class-service-wrap">
              <div className="time">
                <i className="flaticon-watch" />
                <span>11.00 am</span>
              </div>
              <div className="class-main-content">
                <a href="#">
                  <h3>dance classes</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
                <a href="#" className="readmore-btn">
                  read more
                </a>
              </div>
              <div className="date-btn">
                <a href="#">27 may</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-4">
            <div className="class-img-wrap">
              <img src="images/4.jpg" alt="Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="class-service-wrap">
              <div className="time">
                <i className="flaticon-watch" />
                <span>11.00 am</span>
              </div>
              <div className="class-main-content">
                <a href="#">
                  <h3>Birthday Party</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
                <a href="#" className="readmore-btn">
                  read more
                </a>
              </div>
              <div className="date-btn">
                <a href="#">27 may</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-4">
            <div className="class-img-wrap">
              <img src="images/5.jpg" alt="Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="class-service-wrap">
              <div className="time">
                <i className="flaticon-watch" />
                <span>11.00 am</span>
              </div>
              <div className="class-main-content">
                <a href="#">
                  <h3>Sports Competition</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
                <a href="#" className="readmore-btn">
                  read more
                </a>
              </div>
              <div className="date-btn">
                <a href="#">27 may</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="classes-section-button">
        <div className="export-button">
          <a href="#" className="exprt-btn">
            + exports events
          </a>
        </div>
        <div className="next-prev-button">
          <ul>
            <li>
              <a href="#">
                <i className="flaticon-left-arrow" />
                prev events
              </a>
            </li>
            <li>
              <a href="#">
                next events
                <i className="flaticon-right-arrow" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* End Classes Section */}
  {/* Address Section */}
  <section className="address-section pb-70">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-3">
          <div className="single-address">
            <div className="add-it">
              <div className="icon">
                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps" />
              </div>
              <div className="add-it-text">
                <h4>location</h4>
                <p>58 st California, Us 0356</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-3">
          <div className="single-address">
            <div className="add-it">
              <div className="icon">
                <i className="flaticon-watch" />
              </div>
              <div className="add-it-text">
                <h4>open hours</h4>
                <p>Monday, 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-3">
          <div className="single-address">
            <div className="add-it">
              <div className="icon">
                <i className="flaticon-call-answer" />
              </div>
              <div className="add-it-text">
                <a href="#">
                  <h4>phone</h4>
                </a>
                <a href="tel:+852593715523">
                  <p>+852593715523</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-3">
          <div className="single-address">
            <div className="add-it">
              <div className="icon">
                <a href="#">
                  <i className="flaticon-mail" />
                </a>
              </div>
              <div className="add-it-text">
                <a href="#">
                  <h4>email</h4>
                </a>
                <a href="#">
                  <p>
                    <span
                      className="__cf_email__"
                      data-cfemail="fd9f9c9f849e9c8f98bd9a909c9491d39e9290"
                    >
                      [email�&nbsp;protected]
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Address Section */}
</>


        <Footer />
      
    </div>
  )
}

export default Event;

