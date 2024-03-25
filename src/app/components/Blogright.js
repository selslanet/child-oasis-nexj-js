import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

function Blogright() {
  return (

   <>
   <Loader />
  {/* Header Start */}
    <Header />
  {/* End Navbar Area */}
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
  <section className="all-page-banner item-eight">
    <div className="d-table">
      <div className="d-tablecell">
        <div className="container">
          <div className="banner-text text-center">
            <h1>المدونة</h1>
            <ul>
              <li>
                <a href="/home">الصفحة الرئيسية</a>
                <i className="flaticon-right-arrow" />
              </li>
              <li>المدونة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End All Page Banner */}
  {/* Blog Section */}
  {/*<section class="blog2-section right-blog-section ptb-100">
      <div class="container">
          <div class="row">
              <div class="col-lg-8">
                  <div class="left-blog">
                      <div class="row">
                          <div class="col-md-6 col-lg-6">
                              <div class="single-blog mb-30">
                                  <div class="blog-image">
                                      <a href="blog-details.html"><img src="images/14.jpg" alt="Image"></a>
                                  </div>
                                  <div class="img-caption">
                                      <div class="blog-chat-list">
                                          <ul>
                                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li>
                                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li>
                                          </ul>
                                      </div>
                                      <a href="blog-details.html"><h3>The Indoor Activities for Everyone</h3></a>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
                                      <a href="blog-details.html" class="read-more-btn">read more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-6">
                              <div class="single-blog mb-30">
                                  <div class="blog-image">
                                      <a href="blog-details.html"><img src="images/15.jpg" alt="Image"></a>
                                  </div>
                                  <div class="img-caption">
                                      <div class="blog-chat-list">
                                          <ul>
                                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li>
                                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li>
                                          </ul>
                                      </div>
                                      <a href="blog-details.html"><h3>The Indoor Activities for Everyone</h3></a>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
                                      <a href="blog-details.html" class="read-more-btn">read more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-6">
                              <div class="single-blog mb-30">
                                  <div class="blog-image">
                                      <a href="blog-details.html"><img src="images/16.jpg" alt="Image"></a>
                                  </div>
                                  <div class="img-caption">
                                      <div class="blog-chat-list">
                                          <ul>
                                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li>
                                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li>
                                          </ul>
                                      </div>
                                      <a href="blog-details.html"><h3>The Indoor Activities for Everyone</h3></a>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
                                      <a href="blog-details.html" class="read-more-btn">read more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-6">
                              <div class="single-blog mb-30">
                                  <div class="blog-image">
                                      <a href="blog-details.html"><img src="images/17.jpg" alt="Image"></a>
                                  </div>
                                  <div class="img-caption">
                                      <div class="blog-chat-list">
                                          <ul>
                                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li>
                                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li>
                                          </ul>
                                      </div>
                                      <a href="blog-details.html"><h3>The Indoor Activities for Everyone</h3></a>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
                                      <a href="blog-details.html" class="read-more-btn">read more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-6">
                              <div class="single-blog mb-30">
                                  <div class="blog-image">
                                      <a href="blog-details.html"><img src="images/12.jpg" alt="Image"></a>
                                  </div>
                                  <div class="img-caption">
                                      <div class="blog-chat-list">
                                          <ul>
                                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li>
                                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li>
                                          </ul>
                                      </div>
                                      <a href="blog-details.html"><h3>The Indoor Activities for Everyone</h3></a>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
                                      <a href="blog-details.html" class="read-more-btn">read more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-6">
                              <div class="single-blog mb-30">
                                  <div class="blog-image">
                                      <a href="blog-details.html"><img src="images/13.jpg" alt="Image"></a>
                                  </div>
                                  <div class="img-caption">
                                      <div class="blog-chat-list">
                                          <ul>
                                              <li class="date"><i class="fa fa-calendar" aria-hidden="true"></i>8 September 2019</li>
                                              <li><i class="fa fa-comments" aria-hidden="true"></i>3 comments</li>
                                          </ul>
                                      </div>
                                      <a href="blog-details.html"><h3>The Indoor Activities for Everyone</h3></a>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... </p>
                                      <a href="blog-details.html" class="read-more-btn">read more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <nav class="pagination-wrap" aria-label="...">
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
                      </nav>
                  </div>
              </div>
              <div class="col-lg-4">
                  <div class="right-blog">
                      <div class="productsearchform">
                          <form action="#">
                              <input type="text" placeholder="Search Product">
                              <button type="submit">
                                  <i class="fa fa-search"></i>
                              </button>
                          </form>
                      </div>
                      <div class="blog-all-category-wrapper">
                          <div class="cate-box">
                              <div class="cate-title">
                                  <h3>categories:</h3>
                                  <img src="images/title-img.png" alt="Image">
                              </div>
                              <ul class="cate-list">
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          kids
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          child care
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#" class="active">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          Nurturing
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          Baby Shower
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div class="archievs">
                              <div class="archiev-title">
                                  <h3>Archives</h3>
                                  <img src="images/title-img.png" alt="Image">
                              </div>
                              <ul class="archiev-list">
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          May 2019
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          June 2019
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#" class="active">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          April 2019
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          June 2019
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                                          February 2019
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div class="latest-posts">
                              <div class="latest-title">
                                  <h3>latest post</h3>
                                  <img src="images/title-img.png" alt="Image">
                              </div>
                              <div class="posts-box">
                                  <div class="p-img">
                                      <img src="images/post1.jpg" alt="image">
                                  </div>
                                  <div class="p-text">
                                      <a href="#"><h3>8 ways forever your heart yong</h3></a>
                                      <span><i class="fa fa-calendar"></i>20, August</span>
                                  </div>
                              </div>
                              <div class="posts-box">
                                  <div class="p-img">
                                      <img src="images/post2.jpg" alt="image">
                                  </div>
                                  <div class="p-text">
                                      <a href="#"><h3>8 ways forever your heart yong</h3></a>
                                      <span><i class="fa fa-calendar"></i>20, August</span>
                                  </div>
                              </div>
                              <div class="posts-box">
                                  <div class="p-img">
                                      <img src="images/post3.jpg" alt="image">
                                  </div>
                                  <div class="p-text">
                                      <a href="#"><h3>8 ways forever your heart yong</h3></a>
                                      <span><i class="fa fa-calendar"></i>20, August</span>
                                  </div>
                              </div>
                          </div>
                          <div class="free-call-wrap">
                              <h3>free call</h3>
                              <p>For any information </p>
                              <h4>1-999-44-66-55</h4>
                              <div class="card-button">
                                  <a href="#" class="card-btn">contact us</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>*/}
  {/* End Blog Section */}
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
            <a href="blog-details.html">
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
                <li>
                  <i className="fa fa-comments" aria-hidden="true" />3 تعليقات
                </li>
              </ul>
            </div>
            <a href="latest-topics-كيف-تحفز-طفلك-للقراءة.html">
              <h3>كيف تحفز طفلك للقراءة</h3>
            </a>
            <p> اجعل القراءة جزءًا طبيعيًا من روتين طفلك اليومي-</p>
            <a href="blog-details.html" className="read-more-btn">
              اقرأ أكثر
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-image">
            <a href="blog-details.html">
              <img src="images/2.png" alt="Image" />
            </a>
          </div>
          <div className="img-caption">
            <div className="blog-chat-list">
              <ul>
                <li className="date">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  ١٦ مايو ٢٠١٦.
                </li>
                <li>
                  <i className="fa fa-comments" aria-hidden="true" />3 تعليقات
                </li>
              </ul>
            </div>
            <a href="latest-topics- ماذا-يحتاج-طفلك-في-حقيبة-الحضانة.html">
              <h3> ماذا يحتاج طفلك في حقيبة الحضانة ؟</h3>
            </a>
            <p>
              جاء الوقت ليذهب صغيركِ إلى الحضانة حيث الأصدقاء الجدد والبيئة
              الاجتماعية التي لم يعتدها من قبل، وهو الأمر الذي يدفعكِ أكثر
              لتوفير كل احتياجاته، حتى لا ينقصه أي شيء في غيابك، سواء الطعام، أو
              الملابس، أو أدواته الدراسية... وغيرها من الأغراض. قد تشعرين عزيزتي
              بالحيرة حول محتويات حقيبة الحضانة اللازمة لطفلكِ، والأدوات التي
              تُسهل عليه الاعتماد على نفسه، وتوفر احتياجاته دون وجودكِ. :لذا
              سنساعدكِ في هذا المقال في التعرف على احتياجات طفلك للروضة، وكيفية
              ترتيب حقيبة الحضانة، وغيرها من الأمور التي تحتاجين إلى معرفتها في
              هذه المرحلة. محتويات حقيبة الحضانة المحتويات التي قد يحتاجها طفلك
              خلال الحضانة، ليس من الضروري أن يحملها معه يوميًّا ذهابًا وإيابًا،
              فهو سيحتاج إلى ملابس، وحفاضات، وألعاب، وأغراض للنظافة الشخصية
              وبالطبع طفلك لن يحمل كل ذلك. يمكنك تخصيص حقيبة خفيفة لطفلك بها
              احتياجاته البسيطة خلال يومه في الحضانة، وترك الحقيبة التي تحوي
              جميع أغراضه هناك للمسؤولة عنه في غيابكِ، وهذه أهم الأغراض التي
              سيحتاجها: الملابس: ملابس احتياطية: احرصي على أن يكون لطفلك في
              الحضانة حقيبة خاصة بملابس احتياطية له، مناسبة لحالة الطقس، واحرصي
              على أن يكون بها أطقم داخلية، وملابس خروج، وجوارب احتياطية، حتى لو
              تجاوز طفلك مرحلة الحفاضات تمامًا، فلا تعرفين أبدًا ماذا يمكن أن
              يحدث. حفاضات: وفري حفاضات كافية لطفلك، إذا كان لا يزال في هذه
              المرحلة، مع زيادة الكمية من حين لآخر، وخاصة عند إصابته بإسهال.
              غطاء رأس: دعي طفلكِ يحمل غطاء الرأس (قبعة) الخاص به معه، لحمايته
              من الشمس خلال اللعب في الحضانة، وعند عودته إلى المنزل. واحرصي
              دائمًا على أن يرتدي ملابس مريحة مناسبة لحالة الطقس، توفر له حرية
              الحركة واللعب. وإذا كان عمره أكبر أو يمكنه دخول الحمام بمفرده،
              فاختاري ملابس يسهل عليه ارتداؤها وخلعها بنفسه دون مساعدة. أغراض
              النظافة الشخصية: منشفة (فوطة) قطنية صغيرة: ويمكنكِ حياكة اسمه
              عليها، ويفضل شراء أكثر من واحدة، كي تستطيعي غسلها بشكل يومي،
              واختيار المناشف البيضاء، ليسهل عليكِ غسلها على درجة حرارة عالية
              لتعقيمها. فرشاة أسنان للطفل ومعجون: اتركيهما في الحضانة، لتعليم
              طفلك عادة غسل الأسنان بعد تناول كل وجبة. معقم لليدين: وإذا كان
              طفلك لا يستطيع استخدامه، بإمكانك إعطاءه مناديل مبللة معقمة. عبوة
              مناديل: لاستخدامها في تنظيف يديه بعد الطعام، أو من الأتربة
              والجراثيم. أغراض تناول الطعام: أدوات الطعام: اتركي لطفلك أدوات
              طعامه الأساسية داخل الحضانة، وهي: ملعقة وشوكة وطبق وكوب، واحرصي
              على أن تكون مصنوعة من مادة مقاومة للكسر، ويُفضل السيليكون. صندوق
              الطعام المدرسي: اختاري صندوق غذاء (لانش بوكس) مناسبًا لطفلك، إذا
              لم توفر الحضانة وجبة طعام له، واحرصي على أن يكون حجمه مناسبًا بما
              يكفي لاحتواء الطعام، ووزنه خفيفًا بما لا يمثل عبئًا إضافيًّا على
              طفلكِ في الوقت نفسه. ويفضل اختياره بألوان ورسوم زاهية مناسبة لسن
              طفلك، وبتقسيمات داخلية، بحيث يمكنكِ وضع أكثر من نوع للطعام فيه.
              زجاجة ماء: يفضل اختيارها من مادة تحفظ برودة أو حرارة السوائل
              داخلها، ولها ماصة (شاليمو)، كي يستطيع الطفل الشرب منها دون أن يبلل
              ملابسه. ودربيه على فتحها وإغلاقها، حتى يحكم إغلاقها جيدًا، ولا
              يتسرب منها شيء. كوب محكم الإغلاق: حتى يتناول فيه الحليب أو عصير
              الفواكه الطازجة المصنوعة بالمنزل، وهو خيار أفضل من العصائر
              المعلبة، واحرصي على اختياره بالشروط نفسها الخاصة بزجاجة الماء.
              الأدوات المكتبية: الأقلام والألوان: تتنوع الأدوات المكتبية المطلوب
              إحضارها من الطفل ، وفي جميع الأحوال احرصي على شراء نوعية جيدة من
              الأقلام والألوان. وابتعدي عن الألوان الخشبية الرديئة التي تحتاج
              إلى الكثير من الضغط عليها للرسم والتلوين، وهو أمر يكون مرهقًا ليد
              طفلكِ الصغيرة. وبالنسبة للألوان الفلوماستر والشمع، اختاري أقلامًا
              سميكة الحجم ودائرية، ليسهل على الطفل الإمساك بها. الممحاة
              والمبراة: وكذلك الأمر بالنسبة للممحاة والمبراة (البراية)،
              اختاريهما كبيرتا الحجم نسبيًّا ليسهل على طفلك الإمساك بهما. كيفية
              اختيار حقيبة الحضانة؟ اختاري حقيبة الحضانة خفيفة حتى لا تشكل عبئًا
              على طفلكِ، حتى ولو كنتِ أنتِ من تحملينها في طريق الذهاب والعودة،
              فعادة ما يصر الأطفال على حمل حقائبهم بأنفسهم. وانتقيها أيضًا
              مصنوعة من خامات سهلة التنظيف، وبحجم مناسب لاحتياجات طفلك في هذه
              المرحلة، ولا داعي لاختيار حقائب كبيرة. وحاولي أن تكون سهلة الفتح
              والإغلاق، وبإمكانك تركيب حلقات صغيرة في سحّاب الحقيبة، ليسهل عليه
              فتحها وإغلاقها دون مساعدة. ويُفضل اختيار حقيبة متعددة الجيوب، حتى
              تحوي أغراض الطفل الصغيرة، مما يسهل عليه إيجادها. وفي حالة وجود درج
              في الحضانة، تجنبي تمامًا الحقائب ذات العجلات، لأنها قد تتسبب في
              وقوع طفلك. وأخيرًا، لا تنسي كتابة اسم صغيرك، وبيانات فصله على كل
              متعلقاته، لتجنب فقدها أو اختلاطها بمتعلقات زملائه. ترتيب حقيبة
              الحضانة؟ بعد أن أعددتِ قائمة بما يحتاجه طفلك، عليكِ الآن ترتيب
              حقيبة الحضانة بشكل منظم، حتى يسهل على طفلك إيجاد ما يبحث عنه فيها
              بسهولة: اتركي حفاضات الطفل مع أغراض النظافة الشخصية، كالمناديل
              المبللة، وجل التعقيم، والمنشفة في جيب منفصل. ويُفضل ترك هذه
              الأغراض في الحضانة كما ذكرنا. لا تضعي زجاجة الماء مع الكتب حتى لا
              تتلفها في حال تسربه، لذا يفضل اختيار حافظة لزجاجة الماء، حتى
              يحملها الطفل بمفردها، أو وضعها في الحقيبة في جيب منفصل. لذا ننصحكِ
              بشراء الحقيبة ذات الجيوب الجانبية المخصصة لوضع الزجاجة، بعيدًا عن
              الأغراض الموجودة داخل الحقيبة. غلفي الفاكهة أو الخضروات المقطعة
              باستخدام رول البلاستيك، ثم ضعيهما في اللانش بوكس، لحفظها من التقاط
              الأتربة إذا وقعت من الطفل، ومنع تسرب قطرات الماء منها على أدوات
              طفلك. رصي كتب الطفل والأقلام في الحقيبة، خصصي مقلمة للأدوات
              المكتبية. وإذا كانت حقيبة الطفل بجيب واحد، يمكنكِ شراء منظم
              للحقائب، وهو متوافر بالأسواق لتنظيم أغراض الطفل داخل حقيبته.....{" "}
            </p>
            <a href="blog-details.html" className="read-more-btn">
              اقرأ أكثر
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-image">
            <a href="blog-details.html">
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
                <li>
                  <i className="fa fa-comments" aria-hidden="true" />3 تعليقات
                </li>
              </ul>
            </div>
            <a href="latest-topics-فطور-صحي-للأطفال-في-الروضلة.html">
              <h3>فطور صحي للأطفال في الروضة</h3>
            </a>
            <p>
              الوجبة الأولى التي يحصل عليها صغيرك في الروضة هي الإفطار الذي يجب
              أن يحتوي على العناصر الغذائية التي تساعده على بدء يومه بنشاط،
              وتمنحه الطاقة التي تمكنه من التركيز واللعب طوال اليوم، وأهم
              العناصر التي يجب توافرها فيها: البروتين. الكربوهيدرات المعقدة.
              الخضراوات. بعض الاقتراحات التي يمكنك عملها لطفلك في وجبة الإفطار
              مثل بان كيك الشوفان: مكوناته متكاملة وهي الشوفان والحليب والبيض
              والعسل وإلى جانبه يمكنك وضع شرائح فلفل ألوان، يتناولها الطفل قبل
              البان كيك أو مافن البيض: ويتكون من بيض وخضراوات كما ترغبين
              بالإضافة إلى الجبن، وبذلك يحتوي على كل المكونات التي يحتاج إليها
              طفلك صباحًا. توست مع زبدة فول سوداني: اختاري توستًا صحيًا طريًا
              وعليه ملعقة زبدة فول سوداني ورشة قرفة وملعقة عسل، ومن الأعلى طبقة
              أخرى من التوست، يمكن الاكتفاء بنصف التوست أو كله حسب ما تجدين شهية
              طفلك. بسكويت الشوفان والجبن: وجبة متكاملة ولا تنسي وضع شرائح جزر
              أو فلفل ألوان إلى جانبها. ميني بيتزا: تحتوي على المكونات الأساسية
              التي يحتاج إليها جسم طفلك، واحرصي أن تضم المكونات التي يحبها
              أيضًا. ساندويتش جبن قريش بالنعناع وشرائح الطماطم والفلفل. قطعة كيك
              مصنوعة منزليًا، كيك الشوكولاتة أو البرتقال، واحرصي أن تستخدمي
              العسل بدلًا من السكر عند صنع الكيك. بيضة مسلوقة وقطع خيار وفلفل
              وطماطم، أو بيضة أومليت بالخضار. بطاطس ودجز مع قطع خس وفلفل وخيار.
              شوفان بالحليب والعسل. كل الأمثلة السابقة يمكنك وضعها مع طفلك في
              الحضانة، ودائمًا اختاري صندوق الغذاء الذي يحتوي على جزء مغلق من
              الأعلى حال وضع أي وصفة تحتوي على سوائل. والآن ننتقل إلى أمثلة على
              السناك الذي يمكنك وضعه في اللانش بوكس. سناك صحي للأطفال وجبة
              السناك يمكن أن يتناولها الطفل أو لا، حسب الوقت الذي يقضيه والكمية
              التي تناولها على الفطور، ولذلك احرصي أن تكون خفيفة وسهلة التناول،
              مثل: شرائح خضراوات طازجة مثل: الفلفل والجزر والخيار. حبات فراولة
              مقطعة. شرائح خس. برتقالة. تفاحة. موزة. أي نوع فواكه أو خضراوات
              يمكن لطفلك تناولها بمفرده اختيار مثالي في وجبة السناك. وجبة غداء
              صحية للأطفال وصلنا إلى الوجبة الأخيرة التي يتناولها طفلك في الغالب
              قبل الانصراف بساعة، وهي وجبة الغداء، احرصي على وضع هذه الوجبة، لأن
              المواعيد الخاصة بهم متأخرة عن مواعيد المدرسة المعتادة. أمثلة لوجبة
              غداء متكاملة: مكرونة أقلام مع شرائح الدجاج والمشروم. أرز بالملوخية
              وشرائح دجاج. مكرونة سباجيتي باللحم المفروم. شريحة بيتزا باللحم أو
              الدجاج. ساندويتش برجر دجاج أو لحم. ناجتس مصنوعة في المنزل مع
              الخضراوات. أرز والدجاج.ة....{" "}
            </p>
            <a href="blog-details.html" className="read-more-btn">
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

  <Footer />
  
</>

  )
}

export default Blogright;

