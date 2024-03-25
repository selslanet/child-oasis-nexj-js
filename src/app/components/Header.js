import React from 'react'

function Header() {
  return (
    <header>
    <div className="header-top-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ul className="head-top-list">
              <li>
                {/* <i class="flaticon-facebook-placeholder-for-locate-places-on-maps" style="height:15px !important"></i> */}
                <i className="fa fa-map-marker" />
                زكريا الساجي، ۷۳۸٦ ، الشفا، ۱٤۷۲۱، الرياض
              </li>
              <li>
                <a href="tel:٠ ٥٠ ٠٨٩ ٩١٧٣">
                  <i className="fa fa-phone" />
                  ٠٥٠٠٨٩٩١٧٣
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope" />
                  {/* babycare@gmail.com */}
                  Info@childoasis.com.sa
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="social-link">
              <ul>
                {/* <li>
                                    <a href="https://www.facebook.com/wahat.altefl.5">
                                        <i class="flaticon-facebook-logo"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                <a href="https://iwtsp.com/966500899173"></a>
                                <img src="fonts/whatsapp.png" height="24">
                            </li>  */}
                <li>
                  <a href="https://iwtsp.com/966500899173">
                    <i className="fa fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/childoasis_sa?t=BbD-NZe-07NQuIIabZQk1g">
                    <i className="flaticon-twitter-black-shape" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/childoasis_sa?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                    <i className="flaticon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/%D9%85%D8%B1%D9%83%D8%B2-%D9%88%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D8%B7%D9%81%D9%84-%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9-%D8%A7%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84-0230342a6/?originalSubdomain=sa">
                    <i className="flaticon-linkedin-letters" />
                  </a>
                </li>
                <li>
                  <a
                    href="#modalCart"
                    className="log-btn cart modalCart"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCart"
                  >
                    log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Start Navbar Area */}
    <div className="navbar-area">
      {/* Menu For Mobile Device */}
      <div className="mobile-nav menu-shrink">
        <a href="/home" className="logo">
          <img src="images/child-logo.png" alt="Image" />
        </a>
      </div>
      {/* Menu For Desktop Device */}
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="logo">
              <a className="navbar-brand" href="/home">     
                <img src="images/child-logo.png" alt="Logo" />
              </a>
            </div>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <a href="/home" className="nav-link active">
                    الصفحة الرئيسية
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    من نحن
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/pricing" className="nav-link">
                    باقات الاشتراك
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/faq" className="nav-link">
                    الأسئلة الشائعة
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/blog" className="nav-link">
                    أحدث المواضيع
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">
                    اتصل بنا
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".search">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li className="custom-button">
                  <a href="/pricing" className="custom-btn">
                    باقات الاشتراك
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    {/* End Navbar Area */}
  </header>
  
  )
}

export default Header;
