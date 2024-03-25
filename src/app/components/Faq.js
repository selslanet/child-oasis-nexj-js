import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'

function Faq() {
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
            <h1>الأسئلة الشائعة</h1>
            <ul>
              <li>الأسئلة الشائعة</li>
              <i className="flaticon-left-arrow" />
              <li>
                <a href="/home">الصفحة الرئيسية</a>
              </li>
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
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>متى يفتح المركز ؟ </h3>
                </a>
                <p>يبدأ دوام المركز من الساعة ٦:٠٠ صباحا </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>هل التسجيل مفتوح طوال السنة؟</h3>
                </a>
                <p>نعم المركز يستقبل تسجيل الأطفال على مدار السنة .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>من عمر كم تستقبلون الأطفال ؟</h3>
                </a>
                <p>
                  يبدأ من عمر حديث الولادة حتى ماقبل سن ١٠ سنوات للبنين و ١٢ سنة
                  للبنات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>ماهي الأوراق المطلوبة للتسجيل ؟</h3>
                </a>
                <p>
                  بطاقة العائلة / شهادة الميلاد / كشف طبي بالإضافة إلى أوراق
                  أخرى يتم تسليمها لك أثناء التسجيل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>هل تقبلون الأطفال ذوي الإعاقة ؟</h3>
                </a>
                <p>
                  لانقبل لأن المركز غير مخصص لاستقبال الأطفال من ذوي الاحتياجات
                  الخاصة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>ماهي أنواع الاشتراكات المتوفرة ؟</h3>
                </a>
                <p>ساعة - يومي - أسبوعي - شهري - فصلي</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>هل المركز مسجل في برنامج قرة ؟</h3>
                </a>
                <p>نعم</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>هل المركز مصرح من الجهات ذات العلاقة ؟</h3>
                </a>
                <p>نعم</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>هل يغلق المركز في إجازة نهاية الأسبوع ؟</h3>
                </a>
                <p>نعم</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="class-img-wrap"
              style={{ width: "100px !important" }}
            >
              <img src="images/faq.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="class-service-wrap">
              <div className="class-main-content">
                <a href="#">
                  <h3>ماهي جنسيات الموظفات&nbsp;؟&nbsp;</h3>
                </a>
                <p>سعوديات</p>
              </div>
            </div>
          </div>
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
                <h4>موقع</h4>
                <p>زكريا الساجي، ۷۳۸٦ ، الشفا، ۱٤۷۲۱، الرياض</p>
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
                <h4>ساعات مفتوحة</h4>
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
                  <h4>هاتف</h4>
                </a>
                <a href="tel:٠ ٥٠ ٠٨٩ ٩١٧٣">
                  <p>٠ ٥٠ ٠٨٩ ٩١٧٣</p>
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
                  <h4>بريد إلكتروني</h4>
                </a>
                <p>info@childoasis.com.sa</p>
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

export default Faq
