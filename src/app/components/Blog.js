import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import Link from 'next/link';
// import ExportedImage from 'next/image';
import ExportedImage from 'next-image-export-optimizer';

function Blog() {
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
            <h1>أحدث المواضيع</h1>
            <ul>
              <li>أحدث المواضيع</li>
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
  {/* Blog Section */}
  <section className="blog2-section single-blog-section pt-100 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="single-blog mb-30">
            <div className="blog-image">
              <Link href="/motivate">
                <ExportedImage unoptimized={true} src="/images/1.jpg" alt="ExportedImage" width={356} height={264.64}/>
              </Link>
            </div>
            <div className="img-caption">
              <div className="blog-chat-list">
                <ul>
                  {/* <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li> */}
                  {/* <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li> */}
                </ul>
              </div>
              <Link href="/motivate">
                <h3>كيف تحفز طفلك للقراءة</h3>
              </Link>
              <p> اجعل القراءة جزءًا طبيعيًا من روتين طفلك اليومي-</p>
              <Link
                href="/motivate"
                className="read-more-btn"
              >
                اقرأ أكثر
                <i className="fa fa-long-arrow-left" aria-hidden="true" />
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="single-blog mb-30">
            <div className="blog-image">
              <Link href="/childneed">
                <ExportedImage unoptimized={true} src="/images/2.png" alt="ExportedImage"  width={356} height={264.64}/>
              </Link>
            </div>
            <div className="img-caption">
              <div className="blog-chat-list">
                <ul>
                  {/* <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li> */}
                  {/* <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li> */}
                </ul>
              </div>
              <Link href="/childneed">
                <h3> ماذا يحتاج طفلك في حقيبة الحضانة ؟</h3>
              </Link>
              <p>
                جاء الوقت ليذهب صغيركِ إلى الحضانة حيث الأصدقاء الجدد والبيئة
                الاجتماعية --
              </p>
              <Link
                href="/childneed"
                className="read-more-btn"
              >
                اقرأ أكثر
                <i className="fa fa-long-arrow-left" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="single-blog mb-30">
            <div className="blog-image">
              <Link href="/health">
                <ExportedImage unoptimized={true} src="/images/9.jpg" alt="ExportedImage"  width={356} height={264.64}/>
              </Link>
            </div>
            <div className="img-caption">
              <div className="blog-chat-list">
                <ul>
                  {/* <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li> */}
                  {/* <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li> */}
                </ul>
              </div>
              <Link href="/health">
                <h3>فطور صحي للأطفال في الروضة</h3>
              </Link>
              <p>الوجبة الأولى التي يحصل عليها صغيرك في الروضة هي الإفطار--</p>
              <Link
                href="/health"
                className="read-more-btn"
              >
                اقرأ أكثر
                <i className="fa fa-long-arrow-left" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        {/* <nav class="pagination-wrap" aria-label="...">
                  <ul class="pagination pagination-lg m-0">
                      <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <li class="page-item">
                          <a class="page-link" href="#" tabindex="-1">1</a>
                      </li>
                      <li class="page-item active"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">4</a></li>
                      <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                              <span class="sr-only">Next</span>
                          </a>
                      </li>
                  </ul>
              </nav> */}
      </div>
    </div>
  </section>
  {/* End Blog Section */}
</>


      <Footer />
    </div>
  )
}

export default Blog;

