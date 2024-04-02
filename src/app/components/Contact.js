import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
// import ExportedImage from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
function Contact() {
  return (
    <div>
      {/* <Loader /> */}
        <Header />
        <>
  {/* Login-Modal */}
  <div className="modal fade" id="modalCart" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="modal-form-left">
            <ExportedImage unoptimized={true} src="/images/modal-bg.png" alt="ExportedImage" width={347} height={450.14}/>
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
  <section className="all-page-banner item-eight">
    <div className="d-table">
      <div className="d-tablecell">
        <div className="container">
          <div className="banner-text text-center">
            <h1>تواصل معنا</h1>
            <ul>
              <li>التواصل</li>
              <i className="flaticon-left-arrow" />
              <li>
                <a href="/">الصفحة الرئيسية</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End All Page Banner */}
  {/* Contact Form */}
  <section className="contact-form ptb-100">
    <div className="container">
      <div className="section-title text-center">
        <h2>طلب تسجيل أو استفسار </h2>
        <ExportedImage unoptimized={true} src="/images/title-border.png" alt="ExportedImage" width={127} height={8}/>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="single-contact">
            <div className="contact-form">
              <form id="contactForm" className="form-inline">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="form-control"
                        required=""
                        data-error="من فضلك أدخل إسمك"
                        placeholder="الاسم"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="form-control"
                        required=""
                        data-error="الرجاء إدخال اسمك الأخير"
                        placeholder="العائلة"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="form-control"
                        required=""
                        data-error="رجاءا أدخل بريدك الإلكتروني"
                        placeholder="بريد إلكتروني"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        required=""
                        data-error="Please Enter your subject"
                        placeholder="الموضوع"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={6}
                        required=""
                        data-error="Write your message"
                        placeholder="رسالتك"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                    >
                      إرسال الان
                    </button>
                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Form */}
  {/* Get In Touch */}
  <section className="getin-touch-section pt-70">
    <div className="container">
      <div className="section-title text-center">
        <h2>تواصل معنا</h2>
        <ExportedImage unoptimized={true} src="/images/title-border.png" alt="ExportedImage" width={127} height={8}/>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="get-box">
            <div className="icon">
              <i className="flaticon-call-answer" />
              <div className="text">
                <a href="#">
                  <h3>الجوال</h3>
                </a>
                <a href="tel:+87895884546">
                  <span>٠&nbsp;٥٠&nbsp;٠٨٩&nbsp;٩١٧٣</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="get-box">
            <div className="icon">
              <i className="flaticon-mail" />
              <div className="text">
                <a href="#">
                  <h3>البريد</h3>
                </a>
                {/* <span>CHILDOASIS.SA@GMAIL.COM</span> */}
                <span>Info@childoasis.com.sa</span>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-md-3 offset-lg-0 col-md-6 col-lg-4">
          <div className="get-box">
            <div className="icon">
              <i className="flaticon-facebook-placeholder-for-locate-places-on-maps" />
              <div className="text">
                <a href="#">
                  <h3>العنوان</h3>
                </a>
                <span>زكريا الساجي، ۷۳۸٦ ، الشفا، ۱٤۷۲۱، الرياض</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Get In Touch */}
</>


        <Footer />
      
    </div>
  )
}

export default Contact;
