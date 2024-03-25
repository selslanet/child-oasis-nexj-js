import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div>
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
        placeholder="أكتب هنا..."
      />
      <button type="submit" className="btn theme-btn">
        <i className="fa fa-search" /> يبحث
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
                      <h3>مركز واحة الطفل</h3>
                      <p>رعاية محبة وتنمية إبداع</p>
                      {/* <div class="custom-button">
                                              <a href="#" class="custom-btn">
                                                  عن المركز
                                              </a>
                                          </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="slider-img">
                    <div className="img wow fadeInLeft">
                      <img src="images/slider-img2.png" alt="Image" />
                    </div>
                    <div className="img-shape">
                      <img src="images/banner-shape.png" alt="Image" />
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
                      <h3>بيئة رعاية دافئة</h3>
                      <p>نحن وجهتك المناسبة لرعايتك طفلك </p>
                      {/* <div class="custom-button">
                                              <a href="#" class="custom-btn">
                                                  للمزيد
                                              </a>
                                          </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="slider-img">
                    <div className="img wow fadeInLeft">
                      <img src="images/slider-img.png" alt="Image" />
                    </div>
                    <div className="img-shape wow fadeInRight">
                      <img src="images/banner-shape.png" alt="Image" />
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
        <img src="images/shape4.png" className=" wow pulse" alt="Shape" />
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
            <h3>رعاية شاملة</h3>
            <p>
              مكان ينمي الأطفال بحب واهتمام ويقدم الرعاية الشاملة لهم من اللعب
              والنوم ....
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-feature text-center">
            <div className="image2">
              <img src="images/ibg2.png" alt="Image" />
            </div>
            <h3>تعليم فعال</h3>
            <p>
              مكان يشجع على تعليم وتطوير قدرات الأطفال وتنمية الإبداع والمهارات
              الحركية والاجتماعية من خلال الأنشطة المتنوعة&nbsp;والمناسبة....
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-feature text-center">
            <div className="image3">
              <img src="images/ibg3.png" alt="Image" />
            </div>
            <h3>بيئة سعيدة</h3>
            <p>
              في فضاء مركزنا تعتبر البيئة السعيدة أساسية لبقاء طفلك في جو ملئ
              بالرعاية والدفء مما يعزز التفاعلات الإيجابية وتطوير
              المهارات&nbsp;والتواصل....
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="single-feature text-center">
            <div className="image4">
              <img src="images/ibg4.png" alt="Image" />
            </div>
            <h3>طاقم مؤهل</h3>
            <p>
              في مركزنا يهتم طاقم مقدمي الرعاية للأطفال بتوفير بيئة آمنة ومثرية
              لرعاية&nbsp;وتعليم&nbsp;طفلك....
            </p>
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
              <h6>معلومات عنا</h6>
              <h2>مرحبًا بك في مركز واحة الطفل</h2>
              <img src="images/title-border.png" alt="Image" />
              <p>
                نحن نؤمن بأهمية مرحلة الحضانة والتأثير الإيجابي الذي يمكن أن
                يكون له على حياة الأطفال. في واحتنا، نقوم بتوفير أنشطة تعليمية
                مبتكرة وألعاب محفزة تساهم في تنمية مهاراتهم الاجتماعية واللغوية
                والحركية . نعمل بتفانٍ لضمان راحة وسعادة الأطفال.{" "}
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
                    طاقم مقدمات الرعاية المؤهلات يخلقن بيئة دافئة
                    لرعاية&nbsp;طفلك.{" "}
                  </p>
                </li>
                <li>
                  <i className="flaticon-circle-outline" />
                  ألعاب داخلية/خارجية للأطفال{" "}
                  <p>
                    اللعب داخليًا وخارجيًا هو ركن أساسي في ضمن جدول
                    رعاية&nbsp;الأطفال.{" "}
                  </p>
                </li>
                <li>
                  <i className="flaticon-circle-outline" />
                  أنشطة إبداعية{" "}
                  <p>
                    أنشطة ممتعة تعليمية وفنية تعزز مهارات وإبداع&nbsp;الأطفال.{" "}
                  </p>
                </li>
              </ul>
            </div>
            {/* <div class="custom-button">
                          <a href="#" class="custom-btn">
                              للمزيد
                          </a>
                      </div> */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-about-bg2 item-bg">
            <div className="image-shape2">
              <img src="images/bg-shapes-3.png" alt="Shape" />
            </div>
            <div className="image">
              <img src="images/about-bg2.png" alt="Image" />
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
      <img src="images/shape4_1.png" alt="Image" />
    </div>
  </section>
  {/* End About Section */}
  {/* Features2 Section */}
  <section className="features2-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>مميزاتنا</h6>
        <h2>لماذا مركز واحة الطفل</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="feature-box-wrapper">
        <div className="single-feature">
          <div className="ico-bg1">
            <img src="images/1.png" alt="Image" />
          </div>
          <h2>أنشطة تعليمية</h2>
        </div>
        <div className="single-feature">
          <div className="image ico-bg2">
            <img src="images/2_0.png" alt="Image" />
          </div>
          <h2>أنشطة إبداعية</h2>
        </div>
        <div className="single-feature">
          <div className="image ico-bg3">
            <img src="images/3.png" alt="Image" />
          </div>
          <h2>طاقم مؤهل</h2>
        </div>
        <div className="single-feature">
          <div className="image ico-bg4">
            <img src="images/4.png" alt="Image" />
          </div>
          <h2>باقات اشتراك مرنة</h2>
        </div>
        <div className="offset-md-3 offset-lg-0 single-feature">
          <div className="image ico-bg5">
            <img src="images/5.png" alt="Image" />
          </div>
          <h2>نعمل على مدار السنة</h2>
        </div>
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
  </section>
  {/* End Features2 Section */}
  {/* Program Section */}
  <section className="program-section pt-100 pb-100">
    <div className="container">
      <div className="section-title text-center">
        <h6>الأنشطة</h6>
        <h2>الأنشطة والبرامج الصفية</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="program-slider owl-carousel owl-theme">
        <div className="single-program">
          <div className="image">
            <a href="program-details.html">
              <img src="images/play activity.jpg" alt="Image" />
            </a>
          </div>
          <div className="image-caption">
            <div className="pr-content">
              {/* <a href="program-details.html"></a> */}
              <h3>أنشطة اللعب</h3>
              <p>
                أنشطة يتفاعل فيها الطفل بشكل مباشر مع وسائل وأدوات محسوسة مثل
                ألعاب التطابق والتراكيب وغيرها التي تدعم التطور الحركي .{" "}
              </p>
            </div>
            <div className="pr-bottom">
              <ul>
                <li>
                  عمر: <span>١-٦ سنوات </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="single-program">
          <div className="image">
            <a href="program-details.html">
              <img src="images/science activity.jpg" alt="Image" />
            </a>
          </div>
          <div className="image-caption">
            <div className="pr-content">
              {/* <a href="#"></a> */}
              <h3>أنشطة العلوم</h3>
              <p>
                هذه الأنشطة تسمح للأطفال استكشاف عالمهم والبحث عن إجابات أسئلة
                مما ينمي قدراتهم على التساؤل
                {/* </br> */}
                واكتشاف أفكار جديدة.
              </p>
            </div>
            <div className="pr-bottom">
              <ul>
                <li>
                  عمر: <span>٤-٦سنوات</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="single-program">
          <div className="image">
            <a href="program-details.html">
              <img src="images/3_1.jpg" alt="Image" />
            </a>
          </div>
          <div className="image-caption">
            <div className="pr-content">
              {/* <a href="program-details.html"></a> */}
              <h3>أنشطة الفنون</h3>
              <p>
                أنشطة مخصصة لتلبية الحاجات المعرفية واللغوية لدى الأطفال من خلال
                الكتب والقصص وتنمية مهارات القراءة والكتابة.
              </p>
            </div>
            <div className="pr-bottom">
              <ul>
                <li>
                  عمر: <span>٤-٦سنوات</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="custom-button text-center"> */}
      {/* <a href="#" class="custom-btn"> */}
      {/* عرض التفاصيل  */}
      {/* </a> */}
      {/* </div> */}
    </div>
  </section>
  {/* End Program Section */}
  {/* Event2 Section */}
  <section className="event2-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>الجدول</h6>
        <h2>الجدول الزمني </h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="single-event2">
        <div className="time">
          <i className="flaticon-watch" />
          <span>٩:٠٠ صباحًا</span>
        </div>
        <h2>أنشطة مركز المكتبة </h2>
        <p>
          أنشطة مخصصة لتلبية الحاجات المعرفية واللغوية لدى الأطفال من خلال
          الكتب.{" "}
        </p>
        {/* <a href="#" class="read-more-btn">اقرأ أكثر<i class="fa fa-angle-left" aria-hidden="true"></i></a> */}
      </div>
      <div className="single-event2">
        <div className="time">
          <i className="flaticon-watch" />
          <span>٧:١٥ صباحًا</span>
        </div>
        <h2>أنشطة مركز العلوم</h2>
        <p>هذه الأنشطة تسمح للأطفال استكشاف عالمهم والبحث. </p>
        {/* <a href="#" class="read-more-btn">اقرأ أكثر<i class="fa fa-angle-left" aria-hidden="true"></i></a> */}
      </div>
      <div className="single-event2">
        <div className="time">
          <i className="flaticon-watch" />
          <span>١٠:٣٠ صباحًا</span>
        </div>
        <h2> أنشطة اللعب </h2>
        <p>
          أنشطة يتفاعل فيها الطفل بشكل مباشر مع وسائل وأدوات محسوسة مثل ألعاب.{" "}
        </p>
        {/* <a href="#" class="read-more-btn">اقرأ أكثر<i class="fa fa-angle-left" aria-hidden="true"></i></a> */}
      </div>
      <div className="single-event2">
        <div className="time">
          <i className="flaticon-watch" />
          <span>٩:٣٠ </span>
          <span> صباحًا </span>
        </div>
        <h2>أنشطة مركز الفنون</h2>
        <p>أنشطة مخصصة لتلبية الحاجات المعرفية واللغوية لدى الأطفال. </p>
        {/* <a href="#" class="read-more-btn">اقرأ أكثر<i class="fa fa-angle-left" aria-hidden="true"></i></a> */}
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
  </section>
  {/* End Event2 Section */}
  {/* Plan Section */}
  <section className="plan-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>الباقات</h6>
        <h2>باقات الاشتراك</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="single-plan">
            <div className="head">
              <h3>الاشتراك الشهري</h3>
              <h1>١٣٠٠ ريال </h1>
            </div>
            <div className="content">
              <ul>
                <li>شهر واحد</li>
                <li>0-6 سنوات</li>
                <li>دروس العلوم</li>
                <li>٨ ساعات </li>
              </ul>
            </div>
            <div className="img-shape">
              <img src="images/shape3_2.png" alt="Image" />
            </div>
            <div className="card-button">
              <a href="contact.html" className="card-btn">
                اختر الباقة
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="single-plan">
            <div className="head">
              <h3>الاشتراك الفصلي </h3>
              <h1>٣٠٠٠ ريال </h1>
            </div>
            <div className="content">
              <ul>
                <li>٣ أشهر </li>
                <li>0-6 سنوات</li>
                <li>٨ ساعات </li>
                <li>أنشطة حسب الفئة العمرية</li>
              </ul>
            </div>
            <div className="img-shape">
              <img src="images/shape3_2.png" alt="Image" />
            </div>
            <div className="card-button">
              <a href="contact.html" className="card-btn">
                اختر الباقة
              </a>
            </div>
          </div>
        </div>
        <div className="offset-md-3 offset-lg-0 col-md-6 col-lg-4">
          <div className="single-plan">
            <div className="head">
              <h3>الاشتراك الأسبوعي</h3>
              <h1>٥٠٠ ريال </h1>
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
              <img src="images/shape3_2.png" alt="Image" />
            </div>
            <div className="card-button">
              <a href="contact.html" className="card-btn">
                اختر الباقة
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="plan-shape-image">
      <div className="shape1">
        <img src="images/shape1_2.png" alt="Image" />
      </div>
      <div className="shape2">
        <img src="images/shape2_2.png" alt="Image" />
      </div>
    </div>
  </section>
  {/* End Plan Section */}
  {/* Start Testimonial2 Section */}
  <section className="testimonial2-section ptb-100">
    <div className="container">
      <div className="section-title text-center">
        <h6>التعليقات</h6>
        <h2>آراء العملاء من الآباء والأمهات</h2>
        <img src="images/title-border2.png" alt="Image" />
      </div>
      <div className="testimonial-slider">
        <div className="client-image-list">
          <div>
            <div className="item">
              <div className="sl-img">
                <img src="images/slider-img1.png" alt="image" />
              </div>
            </div>
            <div className="item">
              <div className="sl-img">
                <img src="images/slider-img3.png" alt="image" />
              </div>
            </div>
            <div className="item">
              <div className="sl-img">
                <img src="images/comments-2.png" alt="image" />
              </div>
            </div>
            <div className="item">
              <div className="sl-img">
                <img src="images/slider-img4.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-client">
          <div>
            <div className="item-wrap">
              <div className="single-testimonial">
                <p>
                  <i className="fa fa-quote-right" aria-hidden="true" />
                  الحق لله من أجمل الحضانات اللي مرة علي كان فيها ولدي قبل ثلاث
                  سنين طاقم يبرد القلب تخلين ولدك وانتي مرتاحه الله يسعدهم
                  جميعاً ح.
                  <i className="fa fa-quote-left" aria-hidden="true" />{" "}
                </p>
                <h3>فيصل</h3>
              </div>
            </div>
            <div className="item-wrap">
              <div className="single-testimonial">
                <p>
                  <i className="fa fa-quote-right" aria-hidden="true" />
                  مرحلة الطفولة مهمه جداً للتعلم وبناء القدرات وهذا المكان خير
                  مكان لبناءها. ولله الحمد وفقت بهذا مع واحة الطفل.. رعايتهم
                  واهتمامهم واحتوائهم للطفل بكل حب مطمئن للأم كثيراً. الشكر لله
                  ثم لهذا المركز الذي ساعد أبنتي على انطلاقها .. وتأسيسها بأحسن
                  صورة أبنتي ولله الحمد تطورت بشكل ممتاز وأكسبت مهارات بفترة
                  قصيرة وهذا دليل على حرصهم...{" "}
                  <i className="fa fa-quote-left" aria-hidden="true" />
                </p>
                <h3>سارة سعود</h3>
              </div>
            </div>
            <div className="item-wrap">
              <div className="single-testimonial">
                <p>
                  <i className="fa fa-quote-right" aria-hidden="true" />
                  الصدق اي ام مترددة تسجل طفلها في هذي الحضانة حابه اقولك
                  لاتترددين بإذن الله ، والله اني اترك ولدي عندهم وكأني تاركته
                  في بيتي الثاني من كان عمره ٤ اشهر وبخصوص الاطفال الكباراشوفهم
                  يتفاعلون معهم بالفعاليات والأنشطة أشكرهم على حرصهم وتعاونهم
                  واهتمامهم في الطفل بأدق التفاصيل الله يجزيهم على احسانهم
                  ويبارك بوقتهم وجهدهم وحابه اخص شكر لاستاذة خلود واستاذة نورة
                  حنوناااات ومتعاونات وطيبات جدًا جدًا جدًا والله انهم عسل الله
                  يسعدهم ياربّ .
                  <i className="fa fa-quote-left" aria-hidden="true" />{" "}
                </p>
                <h3>أم تركي السعدون</h3>
              </div>
            </div>
            <div className="item-wrap">
              <div className="single-testimonial">
                <p>
                  <i className="fa fa-quote-right" aria-hidden="true" />
                  شكرا جزيلا للقائمين على هذا المركز ، عنايه واهتمام بمعنى
                  الكلمه. <i className="fa fa-quote-left" aria-hidden="true" />
                </p>
                <h3>ليلي</h3>
              </div>
            </div>
            <div className="item-wrap">
              <div className="single-testimonial">
                <p>
                  <i className="fa fa-quote-right" aria-hidden="true" />
                  بيئة تعليمية وتأسيسية جداً ممتازة ويعتبر صراحة من افضل المراكز
                  اللي جربتها لاطفالي اضافة الى كفاءة الطاقم وان شاء الله جهودكم
                  تكلل بالنجاح والتميز.{" "}
                  <i className="fa fa-quote-left" aria-hidden="true" />
                </p>
                <h3>فاتن جبر</h3>
              </div>
            </div>
            <div className="item-wrap">
              <div className="single-testimonial">
                <p>
                  <i className="fa fa-quote-right" aria-hidden="true" />
                  مستوئ ممتاز في تقديم الخدمات للطفل طفلي راح يكمل سنه معاهم
                  والحمد لله مرتاحه للاداره والمعلمات وحرصهم علئ الرعايه ..{" "}
                  <i className="fa fa-quote-left" aria-hidden="true" />
                </p>
                <h3>حنان عبدالعزيز</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonial-shape">
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
        <img src="images/shape9.png" alt="Shape" />
      </div>
      <div className="shape6">
        <img src="images/shape9.png" alt="Shape" />
      </div>
      <div className="shape7">
        <img src="images/shape8.png" alt="Shape" />
      </div>
      <div className="shape8">
        <img src="images/shape12.png" alt="Shape" />
      </div>
      <div className="shape9">
        <img src="images/shape12.png" alt="Shape" />
      </div>
    </div>
  </section>
  {/* End Testimonial2 Section */}
  {/* Member Section */}
  <section className="member-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h6>الفريق</h6>
        <h2>مقدمات الرعاية</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="single-member">
            <div className="image">
              <img src="images/t2.png" alt="Image" height={170} width={170} />
            </div>
            <div className="text-content">
              <h3>ولاء الجوير</h3>
              <h5>معلمة حضانة</h5>
            </div>
            {/* <div class="social-link"> 
                           <ul> 
                              <li><a href="#"><i class="flaticon-facebook-logo"></i></a></li>
                              <li><a href="#"><i class="flaticon-twitter-black-shape"></i></a></li>
                              <li><a href="#"><i class="flaticon-google-plus-symbol"></i></a></li>
                              <li><a href="#"><i class="flaticon-linkedin-letters"></i></a></li>
                          </ul>
                      </div>*/}
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="single-member">
            <div className="image">
              <img src="images/t1.png" alt="Image" height={170} width={170} />
            </div>
            <div className="text-content">
              <h3>هياء السبعان</h3>
              <h5>معلمة النشاط والفنون</h5>
            </div>
            {/* <div class="social-link">
                          <ul>
                              <li><a href="#"><i class="flaticon-facebook-logo"></i></a></li>
                              <li><a href="#"><i class="flaticon-twitter-black-shape"></i></a></li>
                              <li><a href="#"><i class="flaticon-google-plus-symbol"></i></a></li>
                              <li><a href="#"><i class="flaticon-linkedin-letters"></i></a></li>
                          </ul>
                      </div> */}
          </div>
        </div>
        <div className="offset-md-3 offset-lg-0 col-md-6 col-lg-4">
          <div className="single-member">
            <div className="image">
              <img src="images/t3.png" alt="Image" height={170} width={170} />
            </div>
            <div className="text-content">
              <h3>أسرار المديد</h3>
              <h5>معلمة حضانة</h5>
            </div>
            {/* <div class="social-link">
                          <ul>
                              <li><a href="#"><i class="flaticon-facebook-logo"></i></a></li>
                              <li><a href="#"><i class="flaticon-twitter-black-shape"></i></a></li>
                              <li><a href="#"><i class="flaticon-google-plus-symbol"></i></a></li>
                              <li><a href="#"><i class="flaticon-linkedin-letters"></i></a></li>
                          </ul>
                      </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Member Section */}
  {/* Logo Section */}
  <div className="logo-section">
    <div className="container">
      <div className="logo-slider owl-carousel owl-theme">
        <div className="single-logo">
          <img src="images/1_2.png" alt="Logo" />
        </div>
        <div className="single-logo">
          <img src="images/2_3.png" alt="Logo" />
        </div>
        <div className="single-logo">
          <img src="images/3_3.png" alt="Logo" />
        </div>
        <div className="single-logo">
          <img src="images/4_1.png" alt="Logo" />
        </div>
      </div>
    </div>
  </div>
  {/* End Logo Section */}
  {/* Blog2 Section */}
  {/* <section class="blog2-section ptb-100"> 
      <div class="container">
          <div class="section-title text-center">
              <h6>أحدث المواضيع</h6>
              <h2>آخر مدونة</h2>
              <img src="images/title-border.png" alt="Image">
          </div>
          <div class="blog-slider-two owl-carousel owl-theme">
              <div class="single-blog">
                  <div class="blog-image">
                      <a href="blog-details.html"><img src="images/1.jpg" alt="Image"></a>
                  </div>
                  <div class="img-caption">
                      <div class="blog-chat-list">
                          <ul>
                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>٧ نوفمبر ٢٠٢٣.</li>
                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 تعليقات</li>
                          </ul>
                      </div>
                      <a href="latest-topics-كيف-تحفز-طفلك-للقراءة.html">
                          <h3>كيف تحفز طفلك للقراءة</h3>
                      </a>
                      <p> اجعل القراءة جزءًا طبيعيًا من روتين طفلك اليومي-
                          </p>
                      <a href="blog-details.html" class="read-more-btn">اقرأ أكثر
                          <i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
                  </div>
              </div>
              <div class="single-blog">
                  <div class="blog-image">
                      <a href="blog-details.html"><img src="images/2.png" alt="Image"></a>
                  </div>
                  <div class="img-caption">
                      <div class="blog-chat-list">
                          <ul>
                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>١٦ مايو ٢٠١٦.</li>
                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 تعليقات</li>
                          </ul>
                      </div>
                      <a href="latest-topics- ماذا-يحتاج-طفلك-في-حقيبة-الحضانة.html"><h3> ماذا يحتاج طفلك في حقيبة الحضانة ؟</h3></a>
                      <p>جاء الوقت ليذهب صغيركِ إلى الحضانة حيث الأصدقاء الجدد والبيئة الاجتماعية التي لم يعتدها من قبل، وهو الأمر الذي يدفعكِ أكثر لتوفير كل احتياجاته، حتى لا ينقصه أي شيء في غيابك، سواء الطعام، أو الملابس، أو أدواته الدراسية... وغيرها من الأغراض.

                          قد تشعرين عزيزتي بالحيرة حول محتويات حقيبة الحضانة اللازمة لطفلكِ، والأدوات التي تُسهل عليه الاعتماد على نفسه، وتوفر احتياجاته دون وجودكِ.
                          
                          :لذا سنساعدكِ في هذا المقال في التعرف على احتياجات طفلك للروضة، وكيفية ترتيب حقيبة الحضانة، وغيرها من الأمور التي تحتاجين إلى معرفتها في هذه المرحلة.
                          
                          محتويات حقيبة الحضانة
                          
                          المحتويات التي قد يحتاجها طفلك خلال الحضانة، ليس من الضروري أن يحملها معه يوميًّا ذهابًا وإيابًا، فهو سيحتاج إلى ملابس، وحفاضات، وألعاب، وأغراض للنظافة الشخصية
                          
                          وبالطبع طفلك لن يحمل كل ذلك. يمكنك تخصيص حقيبة خفيفة لطفلك بها احتياجاته البسيطة خلال يومه في الحضانة، وترك الحقيبة التي تحوي جميع أغراضه هناك للمسؤولة عنه في غيابكِ، وهذه أهم الأغراض التي سيحتاجها:
                          
                          الملابس: ملابس احتياطية: احرصي على أن يكون لطفلك في الحضانة حقيبة خاصة بملابس احتياطية له، مناسبة لحالة الطقس، واحرصي على أن يكون بها أطقم داخلية، وملابس خروج، وجوارب احتياطية، حتى لو تجاوز طفلك مرحلة الحفاضات تمامًا، فلا تعرفين أبدًا ماذا يمكن أن يحدث.
                          
                          حفاضات: وفري حفاضات كافية لطفلك، إذا كان لا يزال في هذه المرحلة، مع زيادة الكمية من حين لآخر، وخاصة عند إصابته بإسهال.
                          
                          غطاء رأس: دعي طفلكِ يحمل غطاء الرأس (قبعة) الخاص به معه، لحمايته من الشمس خلال اللعب في الحضانة، وعند عودته إلى المنزل. واحرصي دائمًا على أن يرتدي ملابس مريحة مناسبة لحالة الطقس، توفر له حرية الحركة واللعب. وإذا كان عمره أكبر أو يمكنه دخول الحمام بمفرده، فاختاري ملابس يسهل عليه ارتداؤها وخلعها بنفسه دون مساعدة.
                          
                          أغراض النظافة الشخصية: منشفة (فوطة) قطنية صغيرة: ويمكنكِ حياكة اسمه عليها، ويفضل شراء أكثر من واحدة، كي تستطيعي غسلها بشكل يومي، واختيار المناشف البيضاء، ليسهل عليكِ غسلها على درجة حرارة عالية لتعقيمها.
                          
                          فرشاة أسنان للطفل ومعجون: اتركيهما في الحضانة، لتعليم طفلك عادة غسل الأسنان بعد تناول كل وجبة.
                          
                          معقم لليدين: وإذا كان طفلك لا يستطيع استخدامه، بإمكانك إعطاءه مناديل مبللة معقمة.
                          
                          عبوة مناديل: لاستخدامها في تنظيف يديه بعد الطعام، أو من الأتربة والجراثيم.
                          
                          أغراض تناول الطعام:  أدوات الطعام: اتركي لطفلك أدوات طعامه الأساسية داخل الحضانة، وهي: ملعقة وشوكة وطبق وكوب، واحرصي على أن تكون مصنوعة من مادة مقاومة للكسر، ويُفضل السيليكون.
                          
                          صندوق الطعام المدرسي: اختاري صندوق غذاء (لانش بوكس) مناسبًا لطفلك، إذا لم توفر الحضانة وجبة طعام له، واحرصي على أن يكون حجمه مناسبًا بما يكفي لاحتواء الطعام، ووزنه خفيفًا بما لا يمثل عبئًا إضافيًّا على طفلكِ في الوقت نفسه.
                          
                          ويفضل اختياره بألوان ورسوم زاهية مناسبة لسن طفلك، وبتقسيمات داخلية، بحيث يمكنكِ وضع أكثر من نوع للطعام فيه.
                          
                          زجاجة ماء: يفضل اختيارها من مادة تحفظ برودة أو حرارة السوائل داخلها، ولها ماصة (شاليمو)، كي يستطيع الطفل الشرب منها دون أن يبلل ملابسه. ودربيه على فتحها وإغلاقها، حتى يحكم إغلاقها جيدًا، ولا يتسرب منها شيء.
                          
                          كوب محكم الإغلاق: حتى يتناول فيه الحليب أو عصير الفواكه الطازجة المصنوعة بالمنزل، وهو خيار أفضل من العصائر المعلبة، واحرصي على اختياره بالشروط نفسها الخاصة بزجاجة الماء.
                          
                          الأدوات المكتبية: الأقلام والألوان: تتنوع الأدوات المكتبية المطلوب إحضارها من الطفل ، وفي جميع الأحوال احرصي على شراء نوعية جيدة من الأقلام والألوان. وابتعدي عن الألوان الخشبية الرديئة التي تحتاج إلى الكثير من الضغط عليها للرسم والتلوين، وهو أمر يكون مرهقًا ليد طفلكِ الصغيرة. وبالنسبة للألوان الفلوماستر والشمع، اختاري أقلامًا سميكة الحجم ودائرية، ليسهل على الطفل الإمساك بها.
                          
                          الممحاة والمبراة: وكذلك الأمر بالنسبة للممحاة  والمبراة (البراية)، اختاريهما كبيرتا الحجم نسبيًّا ليسهل على طفلك الإمساك بهما.
                          
                           كيفية اختيار حقيبة الحضانة؟
                          
                          اختاري حقيبة الحضانة خفيفة حتى لا تشكل عبئًا على طفلكِ، حتى ولو كنتِ أنتِ من تحملينها في طريق الذهاب والعودة، فعادة ما يصر الأطفال على حمل حقائبهم بأنفسهم. وانتقيها أيضًا مصنوعة من خامات سهلة التنظيف، وبحجم مناسب لاحتياجات طفلك في هذه المرحلة، ولا داعي لاختيار حقائب كبيرة. وحاولي أن تكون سهلة الفتح والإغلاق، وبإمكانك تركيب حلقات صغيرة في سحّاب  الحقيبة، ليسهل عليه فتحها وإغلاقها دون مساعدة. ويُفضل اختيار حقيبة متعددة الجيوب، حتى تحوي أغراض الطفل الصغيرة، مما يسهل عليه إيجادها. وفي حالة وجود درج في الحضانة، تجنبي تمامًا الحقائب ذات العجلات، لأنها قد تتسبب في وقوع طفلك.
                          
                          وأخيرًا، لا تنسي كتابة اسم صغيرك، وبيانات فصله على كل متعلقاته، لتجنب فقدها أو اختلاطها بمتعلقات زملائه.
                          
                           ترتيب حقيبة الحضانة؟
                          
                          بعد أن أعددتِ قائمة بما يحتاجه طفلك، عليكِ الآن ترتيب حقيبة الحضانة بشكل منظم، حتى يسهل على طفلك إيجاد ما يبحث عنه فيها بسهولة: اتركي حفاضات الطفل مع أغراض النظافة الشخصية، كالمناديل المبللة، وجل التعقيم، والمنشفة في جيب منفصل. ويُفضل ترك هذه الأغراض في الحضانة كما ذكرنا. لا تضعي زجاجة الماء مع الكتب حتى لا تتلفها في حال تسربه، لذا يفضل اختيار حافظة لزجاجة الماء، حتى يحملها الطفل بمفردها، أو وضعها في الحقيبة في جيب منفصل. لذا ننصحكِ بشراء الحقيبة ذات الجيوب الجانبية المخصصة لوضع الزجاجة، بعيدًا عن الأغراض الموجودة داخل الحقيبة. غلفي الفاكهة أو الخضروات المقطعة باستخدام رول البلاستيك، ثم ضعيهما في اللانش بوكس، لحفظها من التقاط الأتربة إذا وقعت من الطفل، ومنع تسرب قطرات الماء منها على أدوات طفلك.  رصي كتب الطفل والأقلام في الحقيبة، خصصي مقلمة للأدوات المكتبية. وإذا كانت حقيبة الطفل بجيب واحد، يمكنكِ شراء منظم للحقائب، وهو متوافر بالأسواق لتنظيم أغراض الطفل داخل حقيبته..... </p>
                      <a href="blog-details.html" class="read-more-btn">اقرأ أكثر<i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
                  </div>
              </div>
              <div class="single-blog">
                  <div class="blog-image">
                      <a href="blog-details.html"><img src="images/9.jpg" alt="Image"></a>
                  </div>
                  <div class="img-caption">
                      <div class="blog-chat-list">
                          <ul>
                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>٢٢ مارس ٢٠٢٢.</li>
                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 تعليقات</li>
                          </ul>
                      </div>
                      <a href="latest-topics-فطور-صحي-للأطفال-في-الروضلة.html"><h3>فطور صحي للأطفال في الروضة</h3></a>
                      <p>الوجبة الأولى التي يحصل عليها صغيرك في الروضة هي الإفطار الذي يجب أن يحتوي على العناصر الغذائية التي تساعده على بدء يومه بنشاط، وتمنحه الطاقة التي تمكنه من التركيز واللعب طوال اليوم، وأهم العناصر التي يجب توافرها فيها: البروتين.  الكربوهيدرات المعقدة.  الخضراوات.

                          بعض الاقتراحات التي يمكنك عملها لطفلك في وجبة الإفطار مثل
                         
                         بان كيك الشوفان: مكوناته متكاملة وهي الشوفان والحليب والبيض والعسل وإلى جانبه يمكنك وضع شرائح فلفل ألوان، يتناولها الطفل قبل البان كيك أو
                         
                         مافن البيض: ويتكون من بيض وخضراوات كما ترغبين بالإضافة إلى الجبن، وبذلك يحتوي على كل المكونات التي يحتاج إليها طفلك صباحًا.
                         
                         توست مع زبدة فول سوداني: اختاري توستًا صحيًا طريًا وعليه ملعقة زبدة فول سوداني ورشة قرفة وملعقة عسل، ومن الأعلى طبقة أخرى من التوست، يمكن الاكتفاء بنصف التوست أو كله حسب ما تجدين شهية طفلك.
                         
                         بسكويت الشوفان والجبن: وجبة متكاملة ولا تنسي وضع شرائح جزر أو فلفل ألوان إلى جانبها.
                         
                         ميني بيتزا: تحتوي على المكونات الأساسية التي يحتاج إليها جسم طفلك، واحرصي أن تضم المكونات التي يحبها أيضًا.
                         
                         ساندويتش جبن قريش بالنعناع وشرائح الطماطم والفلفل.
                         
                         قطعة كيك مصنوعة منزليًا، كيك الشوكولاتة أو البرتقال، واحرصي أن تستخدمي العسل بدلًا من السكر عند صنع الكيك.
                         
                         بيضة مسلوقة وقطع خيار وفلفل وطماطم، أو بيضة أومليت بالخضار.
                         
                         بطاطس ودجز مع قطع خس وفلفل وخيار.
                         
                         شوفان بالحليب والعسل.
                         
                         كل الأمثلة السابقة يمكنك وضعها مع طفلك في الحضانة، ودائمًا اختاري صندوق الغذاء الذي يحتوي على جزء مغلق من الأعلى حال وضع أي وصفة تحتوي على سوائل.
                         
                         والآن ننتقل إلى أمثلة على السناك الذي يمكنك وضعه في اللانش بوكس.
                         
                         سناك صحي للأطفال وجبة السناك يمكن أن يتناولها الطفل أو لا، حسب الوقت الذي يقضيه والكمية التي تناولها على الفطور، ولذلك احرصي أن تكون خفيفة وسهلة التناول، مثل:
                         
                         شرائح خضراوات طازجة مثل: الفلفل والجزر والخيار.  حبات فراولة مقطعة.  شرائح خس.  برتقالة.  تفاحة.  موزة.  أي نوع فواكه أو خضراوات يمكن لطفلك تناولها بمفرده اختيار مثالي في وجبة السناك.
                         
                         وجبة غداء صحية للأطفال وصلنا إلى الوجبة الأخيرة التي يتناولها طفلك في الغالب قبل الانصراف بساعة، وهي وجبة الغداء، احرصي على وضع هذه الوجبة، لأن المواعيد الخاصة بهم متأخرة عن مواعيد المدرسة المعتادة. أمثلة لوجبة غداء متكاملة:
                         
                         مكرونة أقلام مع شرائح الدجاج والمشروم.
                         
                         أرز بالملوخية وشرائح دجاج.
                         
                         مكرونة سباجيتي باللحم المفروم.
                         
                         شريحة بيتزا باللحم أو الدجاج.
                         
                         ساندويتش برجر دجاج أو لحم.
                         
                          ناجتس مصنوعة في المنزل مع الخضراوات.
                         
                         أرز والدجاج.ة.... </p>
                      <a href="blog-details.html" class="read-more-btn">اقرأ أكثر<i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
                  </div>
              </div>
          </div>
          <div class="blog-baby-image">
              <ul>
                  <li class="image-1">
                      <img src="images/5_1.png" alt="Image">
                  </li>
                  <li class="image-1">
                      <img src="images/6_1.png" alt="Image">
                  </li>
                  <li class="image-1">
                      <img src="images/5_1.png" alt="Image">
                  </li>
                  <li class="image-4">
                      <img src="images/6_1.png" alt="Image">
                  </li>
                  <li class="image-5">
                      <img src="images/5_1.png" alt="Image">
                  </li>
              </ul>
          </div>
      </div>
  </section>*/}
  {/* End Blog2 Section */}
  {/* Blog2 Section */}
  <section className="blog2-section ptb-100">
    <div className="container">
      <div className="section-title text-center">
        <h6>أحدث المواضيع</h6>
        <h2>آخر مدونة</h2>
        <img src="images/title-border.png" alt="Image" />
      </div>
      <div className="blog-slider-two owl-carousel owl-theme">
        <div className="single-blog">
          <div className="blog-image">
            <a href="How-to-motivate-your-child-to-read-details.html">
              <img src="images/1.jpg" alt="Image" />
            </a>
          </div>
          <div className="img-caption">
            <div className="blog-chat-list">
              <ul>
                <li className="date">
                  <i className="fa fa-calendar" aria-hidden="true" />٧ نوفمبر
                  ٢٠٢٣.
                </li>
                {/* <li><i class="fa fa-comments" aria-hidden="true"></i>3 تعليقات</li> */}
              </ul>
            </div>
            <a href="How-to-motivate-your-child-to-read-details.html">
              <h3>كيف تحفز طفلك للقراءة</h3>
            </a>
            <p> اجعل القراءة جزءًا طبيعيًا من روتين طفلك اليومي-</p>
            <a
              href="How-to-motivate-your-child-to-read-details.html"
              className="read-more-btn"
            >
              اقرأ أكثر
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-image">
            <a href="What-does-your-child-need-in-the-nursery-bag-details.html">
              <img src="images/2.png" alt="Image" />
            </a>
          </div>
          <div className="img-caption">
            <div className="blog-chat-list">
              <ul>
                <li className="date">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  ١٦ مايو ٢٠٢٢.
                </li>
                {/* <li><i class="fa fa-comments" aria-hidden="true"></i>3 تعليقات</li> */}
              </ul>
            </div>
            <a href="What-does-your-child-need-in-the-nursery-bag-details.html">
              <h3> ماذا يحتاج طفلك في حقيبة الحضانة ؟</h3>
            </a>
            جاء الوقت ليذهب صغيركِ إلى الحضانة حيث الأصدقاء الجدد والبيئة
            الاجتماعية --
            {/* التي لم يعتدها من قبل، وهو الأمر الذي يدفعكِ أكثر لتوفير كل احتياجاته، حتى لا ينقصه أي شيء في غيابك، سواء الطعام، أو الملابس، أو أدواته الدراسية... وغيرها من الأغراض. 

                      قد تشعرين عزيزتي بالحيرة حول محتويات حقيبة الحضانة اللازمة لطفلكِ، والأدوات التي تُسهل عليه الاعتماد على نفسه، وتوفر احتياجاته دون وجودكِ.
                      
                      :لذا سنساعدكِ في هذا المقال في التعرف على احتياجات طفلك للروضة، وكيفية ترتيب حقيبة الحضانة، وغيرها من الأمور التي تحتاجين إلى معرفتها في هذه المرحلة.
                      
                      محتويات حقيبة الحضانة
                      
                      المحتويات التي قد يحتاجها طفلك خلال الحضانة، ليس من الضروري أن يحملها معه يوميًّا ذهابًا وإيابًا، فهو سيحتاج إلى ملابس، وحفاضات، وألعاب، وأغراض للنظافة الشخصية
                      
                      وبالطبع طفلك لن يحمل كل ذلك. يمكنك تخصيص حقيبة خفيفة لطفلك بها احتياجاته البسيطة خلال يومه في الحضانة، وترك الحقيبة التي تحوي جميع أغراضه هناك للمسؤولة عنه في غيابكِ، وهذه أهم الأغراض التي سيحتاجها:
                      
                      الملابس: ملابس احتياطية: احرصي على أن يكون لطفلك في الحضانة حقيبة خاصة بملابس احتياطية له، مناسبة لحالة الطقس، واحرصي على أن يكون بها أطقم داخلية، وملابس خروج، وجوارب احتياطية، حتى لو تجاوز طفلك مرحلة الحفاضات تمامًا، فلا تعرفين أبدًا ماذا يمكن أن يحدث.
                      
                      حفاضات: وفري حفاضات كافية لطفلك، إذا كان لا يزال في هذه المرحلة، مع زيادة الكمية من حين لآخر، وخاصة عند إصابته بإسهال.
                      
                      غطاء رأس: دعي طفلكِ يحمل غطاء الرأس (قبعة) الخاص به معه، لحمايته من الشمس خلال اللعب في الحضانة، وعند عودته إلى المنزل. واحرصي دائمًا على أن يرتدي ملابس مريحة مناسبة لحالة الطقس، توفر له حرية الحركة واللعب. وإذا كان عمره أكبر أو يمكنه دخول الحمام بمفرده، فاختاري ملابس يسهل عليه ارتداؤها وخلعها بنفسه دون مساعدة.
                      
                      أغراض النظافة الشخصية: منشفة (فوطة) قطنية صغيرة: ويمكنكِ حياكة اسمه عليها، ويفضل شراء أكثر من واحدة، كي تستطيعي غسلها بشكل يومي، واختيار المناشف البيضاء، ليسهل عليكِ غسلها على درجة حرارة عالية لتعقيمها.
                      
                      فرشاة أسنان للطفل ومعجون: اتركيهما في الحضانة، لتعليم طفلك عادة غسل الأسنان بعد تناول كل وجبة.
                      
                      معقم لليدين: وإذا كان طفلك لا يستطيع استخدامه، بإمكانك إعطاءه مناديل مبللة معقمة.
                      
                      عبوة مناديل: لاستخدامها في تنظيف يديه بعد الطعام، أو من الأتربة والجراثيم.
                      
                      أغراض تناول الطعام:  أدوات الطعام: اتركي لطفلك أدوات طعامه الأساسية داخل الحضانة، وهي: ملعقة وشوكة وطبق وكوب، واحرصي على أن تكون مصنوعة من مادة مقاومة للكسر، ويُفضل السيليكون.
                      
                      صندوق الطعام المدرسي: اختاري صندوق غذاء (لانش بوكس) مناسبًا لطفلك، إذا لم توفر الحضانة وجبة طعام له، واحرصي على أن يكون حجمه مناسبًا بما يكفي لاحتواء الطعام، ووزنه خفيفًا بما لا يمثل عبئًا إضافيًّا على طفلكِ في الوقت نفسه.
                      
                      ويفضل اختياره بألوان ورسوم زاهية مناسبة لسن طفلك، وبتقسيمات داخلية، بحيث يمكنكِ وضع أكثر من نوع للطعام فيه.
                      
                      زجاجة ماء: يفضل اختيارها من مادة تحفظ برودة أو حرارة السوائل داخلها، ولها ماصة (شاليمو)، كي يستطيع الطفل الشرب منها دون أن يبلل ملابسه. ودربيه على فتحها وإغلاقها، حتى يحكم إغلاقها جيدًا، ولا يتسرب منها شيء.
                      
                      كوب محكم الإغلاق: حتى يتناول فيه الحليب أو عصير الفواكه الطازجة المصنوعة بالمنزل، وهو خيار أفضل من العصائر المعلبة، واحرصي على اختياره بالشروط نفسها الخاصة بزجاجة الماء.
                      
                      الأدوات المكتبية: الأقلام والألوان: تتنوع الأدوات المكتبية المطلوب إحضارها من الطفل ، وفي جميع الأحوال احرصي على شراء نوعية جيدة من الأقلام والألوان. وابتعدي عن الألوان الخشبية الرديئة التي تحتاج إلى الكثير من الضغط عليها للرسم والتلوين، وهو أمر يكون مرهقًا ليد طفلكِ الصغيرة. وبالنسبة للألوان الفلوماستر والشمع، اختاري أقلامًا سميكة الحجم ودائرية، ليسهل على الطفل الإمساك بها.
                      
                      الممحاة والمبراة: وكذلك الأمر بالنسبة للممحاة  والمبراة (البراية)، اختاريهما كبيرتا الحجم نسبيًّا ليسهل على طفلك الإمساك بهما.
                      
                       كيفية اختيار حقيبة الحضانة؟
                      
                      اختاري حقيبة الحضانة خفيفة حتى لا تشكل عبئًا على طفلكِ، حتى ولو كنتِ أنتِ من تحملينها في طريق الذهاب والعودة، فعادة ما يصر الأطفال على حمل حقائبهم بأنفسهم. وانتقيها أيضًا مصنوعة من خامات سهلة التنظيف، وبحجم مناسب لاحتياجات طفلك في هذه المرحلة، ولا داعي لاختيار حقائب كبيرة. وحاولي أن تكون سهلة الفتح والإغلاق، وبإمكانك تركيب حلقات صغيرة في سحّاب  الحقيبة، ليسهل عليه فتحها وإغلاقها دون مساعدة. ويُفضل اختيار حقيبة متعددة الجيوب، حتى تحوي أغراض الطفل الصغيرة، مما يسهل عليه إيجادها. وفي حالة وجود درج في الحضانة، تجنبي تمامًا الحقائب ذات العجلات، لأنها قد تتسبب في وقوع طفلك.
                      
                      وأخيرًا، لا تنسي كتابة اسم صغيرك، وبيانات فصله على كل متعلقاته، لتجنب فقدها أو اختلاطها بمتعلقات زملائه.
                      
                       ترتيب حقيبة الحضانة؟
                      
                        بعد أن أعددتِ قائمة بما يحتاجه طفلك، عليكِ الآن ترتيب حقيبة الحضانة بشكل منظم، حتى يسهل على طفلك إيجاد ما يبحث عنه فيها بسهولة: اتركي حفاضات الطفل مع أغراض النظافة الشخصية، كالمناديل المبللة، وجل التعقيم، والمنشفة في جيب منفصل. ويُفضل ترك هذه الأغراض في الحضانة كما ذكرنا. لا تضعي زجاجة الماء مع الكتب حتى لا تتلفها في حال تسربه، لذا يفضل اختيار حافظة لزجاجة الماء، حتى يحملها الطفل بمفردها، أو وضعها في الحقيبة في جيب منفصل. لذا ننصحكِ بشراء الحقيبة ذات الجيوب الجانبية المخصصة لوضع الزجاجة، بعيدًا عن الأغراض الموجودة داخل الحقيبة. غلفي الفاكهة أو الخضروات المقطعة باستخدام رول البلاستيك، ثم ضعيهما في اللانش بوكس، لحفظها من التقاط الأتربة إذا وقعت من الطفل، ومنع تسرب قطرات الماء منها على أدوات طفلك.  رصي كتب الطفل والأقلام في الحقيبة، خصصي مقلمة للأدوات المكتبية. وإذا كانت حقيبة الطفل بجيب واحد، يمكنكِ شراء منظم للحقائب، وهو متوافر بالأسواق لتنظيم أغراض الطفل داخل حقيبته..... </p>*/}
            <br />
            <br />
            <a
              href="What-does-your-child-need-in-the-nursery-bag-details.html"
              className="read-more-btn"
            >
              اقرأ أكثر
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-image">
            <a href="Healthy-breakfast-for-kids-in-the-kindergarten-details.html">
              <img src="images/9.jpg" alt="Image" />
            </a>
          </div>
          <div className="img-caption">
            <div className="blog-chat-list">
              <ul>
                <li className="date">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  ٢٢ مارس ٢٠٢٢.
                </li>
                {/* <li><i class="fa fa-comments" aria-hidden="true"></i>3 تعليقات</li> */}
              </ul>
            </div>
            <a href="Healthy-breakfast-for-kids-in-the-kindergarten-details.html">
              <h3>فطور صحي للأطفال في الروضة</h3>
            </a>
            الوجبة الأولى التي يحصل عليها صغيرك في الروضة هي الإفطار--
            {/* الذي يجب أن يحتوي على العناصر الغذائية التي تساعده على بدء يومه بنشاط، وتمنحه الطاقة التي تمكنه من التركيز واللعب طوال اليوم، وأهم العناصر التي يجب توافرها فيها: البروتين.  الكربوهيدرات المعقدة.  الخضراوات. 

                      بعض الاقتراحات التي يمكنك عملها لطفلك في وجبة الإفطار مثل
                     
                     بان كيك الشوفان: مكوناته متكاملة وهي الشوفان والحليب والبيض والعسل وإلى جانبه يمكنك وضع شرائح فلفل ألوان، يتناولها الطفل قبل البان كيك أو
                     
                     مافن البيض: ويتكون من بيض وخضراوات كما ترغبين بالإضافة إلى الجبن، وبذلك يحتوي على كل المكونات التي يحتاج إليها طفلك صباحًا.
                     
                     توست مع زبدة فول سوداني: اختاري توستًا صحيًا طريًا وعليه ملعقة زبدة فول سوداني ورشة قرفة وملعقة عسل، ومن الأعلى طبقة أخرى من التوست، يمكن الاكتفاء بنصف التوست أو كله حسب ما تجدين شهية طفلك.
                     
                     بسكويت الشوفان والجبن: وجبة متكاملة ولا تنسي وضع شرائح جزر أو فلفل ألوان إلى جانبها.
                     
                     ميني بيتزا: تحتوي على المكونات الأساسية التي يحتاج إليها جسم طفلك، واحرصي أن تضم المكونات التي يحبها أيضًا.
                     
                     ساندويتش جبن قريش بالنعناع وشرائح الطماطم والفلفل.
                     
                     قطعة كيك مصنوعة منزليًا، كيك الشوكولاتة أو البرتقال، واحرصي أن تستخدمي العسل بدلًا من السكر عند صنع الكيك.
                     
                     بيضة مسلوقة وقطع خيار وفلفل وطماطم، أو بيضة أومليت بالخضار.
                     
                     بطاطس ودجز مع قطع خس وفلفل وخيار.
                     
                     شوفان بالحليب والعسل.
                     
                     كل الأمثلة السابقة يمكنك وضعها مع طفلك في الحضانة، ودائمًا اختاري صندوق الغذاء الذي يحتوي على جزء مغلق من الأعلى حال وضع أي وصفة تحتوي على سوائل.
                     
                     والآن ننتقل إلى أمثلة على السناك الذي يمكنك وضعه في اللانش بوكس.
                     
                     سناك صحي للأطفال وجبة السناك يمكن أن يتناولها الطفل أو لا، حسب الوقت الذي يقضيه والكمية التي تناولها على الفطور، ولذلك احرصي أن تكون خفيفة وسهلة التناول، مثل:
                     
                     شرائح خضراوات طازجة مثل: الفلفل والجزر والخيار.  حبات فراولة مقطعة.  شرائح خس.  برتقالة.  تفاحة.  موزة.  أي نوع فواكه أو خضراوات يمكن لطفلك تناولها بمفرده اختيار مثالي في وجبة السناك.
                     
                     وجبة غداء صحية للأطفال وصلنا إلى الوجبة الأخيرة التي يتناولها طفلك في الغالب قبل الانصراف بساعة، وهي وجبة الغداء، احرصي على وضع هذه الوجبة، لأن المواعيد الخاصة بهم متأخرة عن مواعيد المدرسة المعتادة. أمثلة لوجبة غداء متكاملة:
                     
                     مكرونة أقلام مع شرائح الدجاج والمشروم.
                     
                     أرز بالملوخية وشرائح دجاج.
                     
                     مكرونة سباجيتي باللحم المفروم.
                     
                     شريحة بيتزا باللحم أو الدجاج.
                     
                     ساندويتش برجر دجاج أو لحم.
                     
                      ناجتس مصنوعة في المنزل مع الخضراوات.
                     
                     أرز والدجاج.ة.... </p>*/}
            <br />
            <br />
            <a
              href="Healthy-breakfast-for-kids-in-the-kindergarten-details.html"
              className="read-more-btn"
            >
              اقرأ أكثر
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="blog-baby-image">
        <ul>
          <li className="image-1">
            <img src="images/5_1.png" alt="Image" />
          </li>
          <li className="image-1">
            <img src="images/6_1.png" alt="Image" />
          </li>
          <li className="image-1">
            <img src="images/5_1.png" alt="Image" />
          </li>
          <li className="image-4">
            <img src="images/6_1.png" alt="Image" />
          </li>
          <li className="image-5">
            <img src="images/5_1.png" alt="Image" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* End Blog2 Section */}
</>



      <Footer />
    </div>
  )
}

export default Home;
