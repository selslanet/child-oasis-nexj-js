import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'
// import ExportedImage from 'next/image'
import ExportedImage from 'next-image-export-optimizer'

import shape7 from "../../../public/images/shape7.png"
import shape8 from "../../../public/images/shape8.png"
import shape9 from "../../../public/images/shape9.png"
import shape10 from "../../../public/images/shape10.png"
import shape11 from "../../../public/images/shape11.png"
import shape12 from "../../../public/images/shape12.png"
function Pricing() {
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
  <section className="all-page-banner item-six">
    <div className="d-table">
      <div className="d-tablecell">
        <div className="container">
          <div className="banner-text text-center">
            <h1>باقات الاشتراك</h1>
            <ul>
              <li>الاشتراكات</li>
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
  {/* Plan Section */}
  <section className="plan-section pp-plan-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>الباقات</h6>
        <h2>باقات الاشتراك</h2>
        <ExportedImage unoptimized={true} src="/images/title-border.png" alt="ExportedImage" width={127} height={8} />
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="single-plan">
            <div className="head">
              <h3>الاشتراك الشهري</h3>
              <h1>١٣٠٠ ريال</h1>
            </div>
            <div className="content">
              <ul>
                <li>شهر واحد</li>
                <li>0-6 سنوات</li>
                <li>دروس العلوم</li>
                <li>٨ ساعات</li>
              </ul>
            </div>
            <div className="img-shape">
              <ExportedImage unoptimized={true} src="/images/shape3.png" alt="ExportedImage" width={90} height={98.44}/>
            </div>
            <div className="card-button">
              <a href="contact" className="card-btn">
                اختر الباقة
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="single-plan">
            <div className="head">
              <h3>الاشتراك الفصلي</h3>
              <h1>٣٠٠٠ ريال</h1>
            </div>
            <div className="content">
              <ul>
                <li>٣ أشهر</li>
                <li>0-6 سنوات</li>
                <li>٨ ساعات</li>
                <li>أنشطة حسب الفئة العمرية</li>
              </ul>
            </div>
            <div className="img-shape">
            <ExportedImage unoptimized={true} src="/images/shape3.png" alt="ExportedImage" width={90} height={98.44}/>
            </div>
            <div className="card-button">
              <a href="contact" className="card-btn">
                اختر الباقة
              </a>
            </div>
          </div>
        </div>
        <div className="offset-md-3 offset-lg-0 col-md-6 col-lg-4">
          <div className="single-plan">
            <div className="head">
              <h3>الاشتراك الأسبوعي</h3>
              <h1>٥٠٠ ريال</h1>
            </div>
            <div className="content">
              <ul>
                <li>أسبوع</li>
                <li>0-6 سنوات</li>
                <li>٨ ساعات</li>
                <li>أنشطة حسب الفئة العمرية</li>
              </ul>
            </div>
            <div className="img-shape">
            <ExportedImage unoptimized={true} src="/images/shape3.png" alt="ExportedImage" width={90} height={98.44}/>
            </div>
            <div className="card-button">
              <a href="contact" className="card-btn">
                اختر الباقة
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="plan-shape-image">
      <div className="shape1">
        <ExportedImage unoptimized={true} src="/images/shape1.png" alt="ExportedImage" width={67} height={47.4}/>
      </div>
      <div className="shape2">
        <ExportedImage unoptimized={true} src="/images/shape2.png" alt="ExportedImage" width={67} height={68.4}/>
      </div>
    </div>
  </section>
  {/* End Plan Section */}
  {/* Daycare Section */}
  <section className="daycare-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 pl-0">
          <div className="daycare-bg" />
        </div>
        <div className="col-lg-6 pr-0">
          <div className="daycare-special">
            <h3>واحة الطفل وجهتك المناسبة</h3>
            <p>عملنا هو ابقاء طفلك في مكان آمن ومهتم أثناء غيابك.....</p>
            <div className="special-list">
              <ul>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  خبرتنا لأكثر من ٥ سنوات في مجال ضيافة الأطفال
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  مرخص من الجهات الرسمية
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  الكثير من الأطفال انضموا لنا من سن الولادة حتى تخرجوا من
                  المركز استعداد للمدرسة
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  نعمل على مواكبة التغيير الذي يصب في مصلحة أطفالنا
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  نهتم باختيار طاقم مناسب لتوفير الرعاية الدافئة للأطفال
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  أوقات عمل مرنة ومناسبة لغالبية الأمهات
                </li>
              </ul>
            </div>
            {/* <div class="custom-button">
                          <a href="#" class="custom-btn">للمزيد</a>
                      </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Daycare Section */}
  {/* Features2 Section */}
  <section className="features2-section bg-removed pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>مميزاتنا</h6>
        <h2>لماذا مركز واحة الطفل</h2>
        <ExportedImage unoptimized={true} src="/images/title-border.png" alt="ExportedImage" width={127} height={8}/>
      </div>
      <div className="feature-box-wrapper">
        <div className="single-feature">
          <div className="ico-bg1">
            <ExportedImage unoptimized={true} src="/images/1.png" alt="ExportedImage" width={80} height={80}/>
          </div>
          <h2>أنشطة تعليمية</h2>
        </div>
        <div className="single-feature">
          <div className="image ico-bg2">
            <ExportedImage unoptimized={true} src="/images/2_0.png" alt="ExportedImage" width={80} height={80}/>
          </div>
          <h2>أنشطة إبداعية</h2>
        </div>
        <div className="single-feature">
          <div className="image ico-bg3">
            <ExportedImage unoptimized={true} src="/images/3.png" alt="ExportedImage" width={80} height={80}/>
          </div>
          <h2>طاقم مؤهل</h2>
        </div>
        <div className="single-feature">
          <div className="image ico-bg4">
            <ExportedImage unoptimized={true} src="/images/4.png" alt="ExportedImage" width={80} height={80}/>
          </div>
          <h2>باقات اشتراك مرنة</h2>
        </div>
        <div className="offset-md-3 offset-lg-0 single-feature">
          <div className="image ico-bg5">
            <ExportedImage unoptimized={true} src="/images/5.png" alt="ExportedImage" width={80} height={80}/>
          </div>
          <h2>نعمل على مدار السنة</h2>
        </div>
      </div>
    </div>
    <div className="event-shape">
            <div className="shape1">
              <ExportedImage unoptimized={true} src={shape7} alt="Shape" width={32} height={83}/>
            </div>
            <div className="shape2">
            <ExportedImage unoptimized={true} src={shape8} alt="Shape" width={32} height={31}/>
            </div>
            <div className="shape3">
            <ExportedImage unoptimized={true} src={shape9} alt="Shape" width={32} height={34}/>
            </div>
            <div className="shape4">
            <ExportedImage unoptimized={true} src={shape10} alt="Shape" width={32} height={32}/>
            </div>
            <div className="shape5">
            <ExportedImage unoptimized={true} src={shape11} alt="Shape" width={32} height={46}/>
            </div>
            <div className="shape6">
            <ExportedImage unoptimized={true} src={shape12} alt="Shape" width={32} height={30}/>
            </div>
          </div>
  </section>
  {/* End Features2 Section */}
</>


      <Footer />
    </div>
  )
}

export default Pricing
