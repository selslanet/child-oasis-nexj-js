import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

function About() {
  return (
    <>
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
  <section className="all-page-banner item-one">
    <div className="d-table">
      <div className="d-tablecell">
        <div className="container">
          <div className="banner-text text-center">
            <h1>معلومات عنا</h1>
            <ul>
              <li>معلومات عنا</li>
              <i className="flaticon-left-arrow" />
              <li>
                <a href="/home">الصفحة الرئيسية</a>
              </li>
              {/* <li>معلومات عنا</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End All Page Banner */}
  {/* About Section */}
  <section className="about-section ap-about-section ptb-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="single-about">
            <div className="section-title">
              <h6>معلومات عنا</h6>
              <h2>مرحبا بك في مركز واحة الطفل</h2>
              <img src="images/title-border.png" alt="Image" />
              <p>
                تأسس مركز واحة الطفل عام ٢٠١٨ ،وهو مرخص من وزارة الموارد البشرية
                والتنمية الاجتماعية. نهتم في المركز بالرعاية المتميزة و بتقديم
                بيئة آمنة وداعمة لنمو وتطوير أطفالكم الصغار. في واحتنا، نجمع بين
                الاهتمام الفردي وبرامج تعليمية متقدمة، بهدف توفير تجربة فريدة
                لكل طفل. نحن نؤمن بأهمية مرحلة الحضانة والتأثير الإيجابي الذي
                يمكن أن يكون له على حياة الأطفال. في واحتنا، نقوم بتوفير أنشطة
                تعليمية مبتكرة وألعاب محفزة تساهم في تنمية مهاراتهم الاجتماعية
                واللغوية والحركية . نعمل بتفانٍ لضمان راحة وسعادة الأطفال، ونسعى
                دائمًا لتوفير بيئة إيجابية تشجع على الاستكشاف والابتكار. في واحة
                الطفل، نسعد برؤية الأطفال ينمون ويتطورون، ونفخر بأن نكون جزءًا
                من رحلتهم التعليمية والتطور الشخصي. في واحة الطفل، نحن هنا
                لرعاية ودعم طفلكم.
              </p>
            </div>
            <div className="about-list">
              <ul>
                <li>
                  <i className="flaticon-circle-outline" />
                  دعم شخصية الطفل
                  <p>
                    بالتفاؤل نبني، بالعطاء نزرع، وبالحب نملأ حياتنا بالجمال
                    والسعادة الدائمة.{" "}
                  </p>
                </li>
                <li>
                  <i className="flaticon-circle-outline" />
                  مدرس محترف ومؤهل
                  <p>
                    طاقم مقدمات الرعاية المؤهلات يخلقن بيئة دافئة لرعاية طفلك.{" "}
                  </p>
                </li>
                <li>
                  <i className="flaticon-circle-outline" />
                  ألعاب داخلية/خارجية للأطفال
                  <p>
                    اللعب داخليًا وخارجيًا هو ركن أساسي في ضمن جدول رعاية
                    الأطفال.{" "}
                  </p>
                </li>
              </ul>
            </div>
            {/* <div class="custom-button">
                          <a href="#" class="custom-btn">للمزيد</a>
                      </div> */}
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
      <img src="images/shape1.png" alt="Image" />
    </div>
    <div className="shape2">
      <img src="images/shape2.png" alt="Image" />
    </div>
    <div className="shape3">
      <img src="images/shape3.png" alt="Image" />
    </div>
    <div className="shape4">
      <img src="images/shape4.png" alt="Image" />
    </div>
  </section>
  {/* End About Section */}
  {/* Services Section */}
  <section className="services-section about-services-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>الخدمات</h6>
        <h2>خدمات الرعاية والضيافة</h2>
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
                  <h3 className="sitting">تعليم فعال</h3>
                </a>
                <p>
                  تعليم فعال للأطفال يجمع بين الفهم الشامل والتفاعل الإيجابي
                  لتعزيز فهمهم وتنمية مهاراتهم بروح محفزة وملهمة.
                </p>
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
                  <h3 className="shower">حضانة ورعاية</h3>
                </a>
                <p>
                  حضانة الأطفال توفر بيئة دافئة وآمنة حيث ينمو الأطفال بفعالية،
                  من خلال برنامج متنوع يهتم بتنمية المهارات الشخصية، برعاية محبة
                  ومهنية.
                </p>
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
                  <h3 className="time-nan">مخيمات وأندية</h3>
                </a>
                <p>
                  يوفر المركز المخيمات و الأندية الصيفية في أوقات الإجازات
                  وأيضًا برامج منوعة في أوقات مختلفة للأطفال.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Services Section */}
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
            <p>عملنا هو ابقاء طفلك في مكان آمن ومهتم أثناء غيابك...</p>
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
  {/* Babysitter Section */}
  <section className="babysitter-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>الفريق</h6>
        <h2>مقدمات الرعاية</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="single-baby">
            <div className="image">
              <a href="service-details.html">
                <img src="images/1-1.png" alt="Image" />
              </a>
            </div>
            <div className="image-caption">
              <a href="service-details.html">
                <h3>هياء السبعان</h3>
              </a>
              {/* <ul class="social-icon">
                              <li><a href="#"><i class="flaticon-facebook-logo"></i></a></li>
                              <li><a href="#"><i class="flaticon-twitter-black-shape"></i></a></li>
                              <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                          </ul> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="single-baby">
            <div className="image">
              <a href="service-details.html">
                <img src="images/1-1.png" alt="Image" />
              </a>
            </div>
            <div className="image-caption">
              <a href="service-details.html">
                <h3>منال الغشيان</h3>
              </a>
              {/* <ul class="social-icon">
                              <li><a href="#"><i class="flaticon-facebook-logo"></i></a></li>
                              <li><a href="#"><i class="flaticon-twitter-black-shape"></i></a></li>
                              <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                          </ul> */}
            </div>
          </div>
        </div>
        <div className="offset-md-3 offset-lg-0 col-md-6 col-lg-4">
          <div className="single-baby">
            <div className="image">
              <a href="service-details.html">
                <img src="images/1-1.png" alt="Image" />
              </a>
            </div>
            <div className="image-caption">
              <a href="service-details.html">
                <h3>ولاء الجوير</h3>
              </a>
              {/* <ul class="social-icon">
                              <li><a href="#"><i class="flaticon-facebook-logo"></i></a></li>
                              <li><a href="#"><i class="flaticon-twitter-black-shape"></i></a></li>
                              <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                          </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Babysitter Section */}
</>


    <Footer />
    
    </>
  
  )
}

export default About;
