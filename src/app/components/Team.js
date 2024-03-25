import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

function Team() {
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
  <section className="all-page-banner item-four">
    <div className="d-table">
      <div className="d-tablecell">
        <div className="container">
          <div className="banner-text text-center">
            <h1>الفريق</h1>
            <ul>
              <li>
                <a href="/home">الصفحة الرئيسية</a>
                <i className="flaticon-right-arrow" />
              </li>
              <li>الفريق</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End All Page Banner */}
  {/* Team Section */}
  <section className="team-section pb-70 pt-100">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="single-team">
            <div className="image">
              <img src="images/team/1.jpg" alt="Image" />
            </div>
            <div className="img-caption">
              <h3>أسرار المديد </h3>
              <p>معلمة حضانة </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="single-team">
            <div className="image">
              <img src="images/team/2.jpg" alt="Image" />
            </div>
            <div className="img-caption">
              <h3>هياء السبعان </h3>
              <p>معلمة النشاط والفنون </p>
            </div>
          </div>
        </div>
        <div className="offset-md-3 offset-lg-0 col-md-6 col-lg-4">
          <div className="single-team">
            <div className="image">
              <img src="images/team/4.jpg" alt="Image" />
            </div>
            <div className="img-caption">
              <h3>ولاء الجوير </h3>
              <p>معلمة حضانة </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Team Section */}
</>

      <Footer />
    </div>
  )
}

export default Team;
