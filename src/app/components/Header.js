
'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";

import childlogo from "../../../public/images/child-logo.png"
import Image from 'next/image';
function Header() {
  const pathname = usePathname()
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
        <a href="/" className="logo">
          <Image src={childlogo} alt="Image" width={200} height={75}/>
        </a>
      </div>
      {/* Menu For Desktop Device */}
      <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="logo">
                  <Link className="navbar-brand" href='/'>
                    <img src="/images/child-logo.png" alt="Logo" />
                  </Link>
                </div>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav m-auto">
                    {/* <li className="nav-item">
                      <Link href="/" className="nav-link">
                        الصفحة الرئيسية
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>
                        الصفحة الرئيسية
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''}`}>
                        من نحن
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/pricing" className={`link ${pathname === '/pricing' ? 'active' : ''}`}>
                        باقات الاشتراك
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/faq" className={`link ${pathname === '/faq' ? 'active' : ''}`}>
                        الأسئلة الشائعة
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog" className={`link ${pathname === '/blog' ? 'active' : ''}`}>
                        أحدث المواضيع
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''}`}>
                        اتصل بنا
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href=".search">
                        <i className="fa fa-search"></i>
                      </Link>
                    </li>
                    <li className="custom-button">
                      <Link href="/pricing" className="custom-btn">
                        باقات الاشتراك
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
      {/* <div className="main-nav">
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
      </div> */}
    </div>
    {/* End Navbar Area */}
  </header>
  
  )
}

export default Header;
