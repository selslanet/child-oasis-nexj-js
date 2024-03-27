import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'
import Link from 'next/link'
import Image from 'next/image'


function Motivate() {
  return (
    <div>
      {/* <Loader /> */}
        <Header />
        <>
  {/* Login-Modal */}
 
  {/* End Navbar Area */}
  {/* Login-Modal */}
  <div className="modal fade" id="modalCart" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="modal-form-left">
            <Image src="/images/modal-bg.png" alt="Image" width={347} height={450.14}/>
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
            <h1>كيف تحفز طفلك للقراءة</h1>
            <ul>
              <li>
                <a href="/">الصفحة الرئيسية</a>
                <i className="flaticon-right-arrow" />
              </li>
              <li>كيف تحفز طفلك للقراءة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End All Page Banner */}
  {/* Blog Section */}
  <section className="blog2-section blog-details pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="left-blog">
            <div className="single-blog">
              <div className="blog-image">
                <div className="single-img">
                  <Image src="/images/1.jpg" alt="Image" height={480} width={736}/>
                </div>
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  {/* <li><i class="fa fa-user" aria-hidden="true"></i>Humpty</li> */}
                  {/* <li><i class="fa fa-comments" aria-hidden="true"></i>تعليقات</li> */}
                  {/* <li><i class="fa fa-heart-o" aria-hidden="true"></i>2 يحب</li> */}
                </ul>
                <h2>كيف تحفز طفلك للقراءة </h2>
                <p>
                  {" "}
                  احتفظ بالكتب والمجلات والصحف الجيدة في المنزل- . أضف المتعة
                  لدى أطفالك من خلال مناقشة كل كتاب قرأوه. يساعدهم على تعلم
                  التعبير عن أنفسهم. سوف تستمتع بالمحادثات أيضًا- .تأكد من أن
                  أطفالك يرونك تقرأ لمدة 20-30 دقيقة على الأقل يوميًا- .تذكر أنك
                  قدوة لهم الأساسية- . إذا كنت تواجه صعوبة في القراءة، احكي
                  لأطفالك القصص. إن الاستماع إلى تاريخ عائلتك وتجاربك سيساعد
                  أطفالك على تطوير تقدير اللغة وسرد القصص والماضي.- . الحد من
                  مشاهدة التلفاز ومراقبة ما يشاهده طفل
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-blog">
            <div className="productsearchform">
              <form action="#">
                <input type="text" placeholder="منتج البحث" />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
            <div className="blog-all-category-wrapper">
              <div className="latest-posts">
                <div className="latest-title">
                  <h3>أحدث المواضيع</h3>
                  <Image src="/images/title-img.png" alt="Image" width={68} height={4}/>
                </div>
                <div className="posts-box">
                  <div className="p-img">
                    <Image src="/images/2.png" alt="image" height={75} width={100}/>
                  </div>
                  <div className="p-text">
                    <Link href="/childneed">
                      <h3>ماذا يحتاج طفلك في حقيبة الحضانة ؟</h3>
                    </Link>
                    <span>
                      <i className="fa fa-calendar" /> ١٦ مايو ٢٠١٦.
                    </span>
                  </div>
                </div>
                <div className="posts-box">
                  <div className="p-img">
                    <Image src="/images/9.jpg" alt="image" height={75} width={100} />
                  </div>
                  <div className="p-text">
                    <Link href="/health">
                      <h3>فطور صحي للأطفال في الروضة</h3>
                    </Link>
                    <span>
                      <i className="fa fa-calendar" />
                      ٢٢ مارس ٢٠٢٢.
                    </span>
                  </div>
                </div>
                <div className="posts-box">
                  <div className="p-img">
                    <Image src="/images/1.jpg" alt="image" height={75} width={100} />
                  </div>
                  <div className="p-text">
                    <Link href="/motivate">
                      <h3>كيف تحفز طفلك للقراءة</h3>
                    </Link>
                    <span>
                      <i className="fa fa-calendar" />٧ نوفمبر ٢٠٢٣.
                    </span>
                  </div>
                </div>
              </div>
              <div className="free-call-wrap">
                <h3>للمكالمة</h3>
                <p>للحصول على أي معلومات </p>
                <h4>٠٥٠٠٨٩٩١٧٣</h4>
                <div className="card-button">
                  <Link href="contact" className="card-btn">
                    اتصل بنا
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Blog Section */}
</>


        <Footer />
      
    </div>
  )
}

export default Motivate
