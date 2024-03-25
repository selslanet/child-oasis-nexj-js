import React from 'react'
import Footer from './Footer';
import Loader from './Loader';

function Childneed() {
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
            <h1>ماذا يحتاج طفلك في حقيبة الحضانة ؟</h1>
            <ul>
              <li>
                <a href="/home">الصفحة الرئيسية</a>
                <i className="flaticon-right-arrow" />
              </li>
              <li>ماذا يحتاج طفلك في حقيبة الحضانة ؟</li>
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
                  <img src="images/2.png" alt="Image" height={480} />
                </div>
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  {/* <li><i class="fa fa-user" aria-hidden="true"></i>Humpty</li> */}
                  {/* <li><i class="fa fa-comments" aria-hidden="true"></i>تعليقات</li> */}
                  {/* <li><i class="fa fa-heart-o" aria-hidden="true"></i>2 يحب</li> */}
                </ul>
                <h2>ماذا يحتاج طفلك في حقيبة الحضانة ؟</h2>
                <p>
                  جاء الوقت ليذهب صغيركِ إلى الحضانة حيث الأصدقاء الجدد والبيئة
                  الاجتماعية التي لم يعتدها من قبل، وهو الأمر الذي يدفعكِ أكثر
                  لتوفير كل احتياجاته، حتى لا ينقصه أي شيء في غيابك، سواء
                  الطعام، أو الملابس، أو أدواته الدراسية... وغيرها من الأغراض.
                  قد تشعرين عزيزتي بالحيرة حول محتويات حقيبة الحضانة اللازمة
                  لطفلكِ، والأدوات التي تُسهل عليه الاعتماد على نفسه، وتوفر
                  احتياجاته دون وجودكِ. :لذا سنساعدكِ في هذا المقال في التعرف
                  على احتياجات طفلك للروضة، وكيفية ترتيب حقيبة الحضانة، وغيرها
                  من الأمور التي تحتاجين إلى معرفتها في هذه المرحلة. محتويات
                  حقيبة الحضانة المحتويات التي قد يحتاجها طفلك خلال الحضانة، ليس
                  من الضروري أن يحملها معه يوميًّا ذهابًا وإيابًا، فهو سيحتاج
                  إلى ملابس، وحفاضات، وألعاب، وأغراض للنظافة الشخصية وبالطبع
                  طفلك لن يحمل كل ذلك. يمكنك تخصيص حقيبة خفيفة لطفلك بها
                  احتياجاته البسيطة خلال يومه في الحضانة، وترك الحقيبة التي تحوي
                  جميع أغراضه هناك للمسؤولة عنه في غيابكِ، وهذه أهم الأغراض التي
                  سيحتاجها: الملابس: ملابس احتياطية: احرصي على أن يكون لطفلك في
                  الحضانة حقيبة خاصة بملابس احتياطية له، مناسبة لحالة الطقس،
                  واحرصي على أن يكون بها أطقم داخلية، وملابس خروج، وجوارب
                  احتياطية، حتى لو تجاوز طفلك مرحلة الحفاضات تمامًا، فلا تعرفين
                  أبدًا ماذا يمكن أن يحدث. حفاضات: وفري حفاضات كافية لطفلك، إذا
                  كان لا يزال في هذه المرحلة، مع زيادة الكمية من حين لآخر، وخاصة
                  عند إصابته بإسهال. غطاء رأس: دعي طفلكِ يحمل غطاء الرأس (قبعة)
                  الخاص به معه، لحمايته من الشمس خلال اللعب في الحضانة، وعند
                  عودته إلى المنزل. واحرصي دائمًا على أن يرتدي ملابس مريحة
                  مناسبة لحالة الطقس، توفر له حرية الحركة واللعب. وإذا كان عمره
                  أكبر أو يمكنه دخول الحمام بمفرده، فاختاري ملابس يسهل عليه
                  ارتداؤها وخلعها بنفسه دون مساعدة. أغراض النظافة الشخصية: منشفة
                  (فوطة) قطنية صغيرة: ويمكنكِ حياكة اسمه عليها، ويفضل شراء أكثر
                  من واحدة، كي تستطيعي غسلها بشكل يومي، واختيار المناشف البيضاء،
                  ليسهل عليكِ غسلها على درجة حرارة عالية لتعقيمها. فرشاة أسنان
                  للطفل ومعجون: اتركيهما في الحضانة، لتعليم طفلك عادة غسل
                  الأسنان بعد تناول كل وجبة. معقم لليدين: وإذا كان طفلك لا
                  يستطيع استخدامه، بإمكانك إعطاءه مناديل مبللة معقمة. عبوة
                  مناديل: لاستخدامها في تنظيف يديه بعد الطعام، أو من الأتربة
                  والجراثيم. أغراض تناول الطعام: أدوات الطعام: اتركي لطفلك أدوات
                  طعامه الأساسية داخل الحضانة، وهي: ملعقة وشوكة وطبق وكوب،
                  واحرصي على أن تكون مصنوعة من مادة مقاومة للكسر، ويُفضل
                  السيليكون. صندوق الطعام المدرسي: اختاري صندوق غذاء (لانش بوكس)
                  مناسبًا لطفلك، إذا لم توفر الحضانة وجبة طعام له، واحرصي على أن
                  يكون حجمه مناسبًا بما يكفي لاحتواء الطعام، ووزنه خفيفًا بما لا
                  يمثل عبئًا إضافيًّا على طفلكِ في الوقت نفسه. ويفضل اختياره
                  بألوان ورسوم زاهية مناسبة لسن طفلك، وبتقسيمات داخلية، بحيث
                  يمكنكِ وضع أكثر من نوع للطعام فيه. زجاجة ماء: يفضل اختيارها من
                  مادة تحفظ برودة أو حرارة السوائل داخلها، ولها ماصة (شاليمو)،
                  كي يستطيع الطفل الشرب منها دون أن يبلل ملابسه. ودربيه على
                  فتحها وإغلاقها، حتى يحكم إغلاقها جيدًا، ولا يتسرب منها شيء.
                  كوب محكم الإغلاق: حتى يتناول فيه الحليب أو عصير الفواكه
                  الطازجة المصنوعة بالمنزل، وهو خيار أفضل من العصائر المعلبة،
                  واحرصي على اختياره بالشروط نفسها الخاصة بزجاجة الماء. الأدوات
                  المكتبية: الأقلام والألوان: تتنوع الأدوات المكتبية المطلوب
                  إحضارها من الطفل ، وفي جميع الأحوال احرصي على شراء نوعية جيدة
                  من الأقلام والألوان. وابتعدي عن الألوان الخشبية الرديئة التي
                  تحتاج إلى الكثير من الضغط عليها للرسم والتلوين، وهو أمر يكون
                  مرهقًا ليد طفلكِ الصغيرة. وبالنسبة للألوان الفلوماستر والشمع،
                  اختاري أقلامًا سميكة الحجم ودائرية، ليسهل على الطفل الإمساك
                  بها. الممحاة والمبراة: وكذلك الأمر بالنسبة للممحاة والمبراة
                  (البراية)، اختاريهما كبيرتا الحجم نسبيًّا ليسهل على طفلك
                  الإمساك بهما. كيفية اختيار حقيبة الحضانة؟ اختاري حقيبة الحضانة
                  خفيفة حتى لا تشكل عبئًا على طفلكِ، حتى ولو كنتِ أنتِ من
                  تحملينها في طريق الذهاب والعودة، فعادة ما يصر الأطفال على حمل
                  حقائبهم بأنفسهم. وانتقيها أيضًا مصنوعة من خامات سهلة التنظيف،
                  وبحجم مناسب لاحتياجات طفلك في هذه المرحلة، ولا داعي لاختيار
                  حقائب كبيرة. وحاولي أن تكون سهلة الفتح والإغلاق، وبإمكانك
                  تركيب حلقات صغيرة في سحّاب الحقيبة، ليسهل عليه فتحها وإغلاقها
                  دون مساعدة. ويُفضل اختيار حقيبة متعددة الجيوب، حتى تحوي أغراض
                  الطفل الصغيرة، مما يسهل عليه إيجادها. وفي حالة وجود درج في
                  الحضانة، تجنبي تمامًا الحقائب ذات العجلات، لأنها قد تتسبب في
                  وقوع طفلك. وأخيرًا، لا تنسي كتابة اسم صغيرك، وبيانات فصله على
                  كل متعلقاته، لتجنب فقدها أو اختلاطها بمتعلقات زملائه. ترتيب
                  حقيبة الحضانة؟ بعد أن أعددتِ قائمة بما يحتاجه طفلك، عليكِ الآن
                  ترتيب حقيبة الحضانة بشكل منظم، حتى يسهل على طفلك إيجاد ما يبحث
                  عنه فيها بسهولة: اتركي حفاضات الطفل مع أغراض النظافة الشخصية،
                  كالمناديل المبللة، وجل التعقيم، والمنشفة في جيب منفصل. ويُفضل
                  ترك هذه الأغراض في الحضانة كما ذكرنا. لا تضعي زجاجة الماء مع
                  الكتب حتى لا تتلفها في حال تسربه، لذا يفضل اختيار حافظة لزجاجة
                  الماء، حتى يحملها الطفل بمفردها، أو وضعها في الحقيبة في جيب
                  منفصل. لذا ننصحكِ بشراء الحقيبة ذات الجيوب الجانبية المخصصة
                  لوضع الزجاجة، بعيدًا عن الأغراض الموجودة داخل الحقيبة. غلفي
                  الفاكهة أو الخضروات المقطعة باستخدام رول البلاستيك، ثم ضعيهما
                  في اللانش بوكس، لحفظها من التقاط الأتربة إذا وقعت من الطفل،
                  ومنع تسرب قطرات الماء منها على أدوات طفلك. رصي كتب الطفل
                  والأقلام في الحقيبة، خصصي مقلمة للأدوات المكتبية. وإذا كانت
                  حقيبة الطفل بجيب واحد، يمكنكِ شراء منظم للحقائب، وهو متوافر
                  بالأسواق لتنظيم أغراض الطفل داخل حقيبته
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-blog">
            <div className="productsearchform">
              <form action="#">
                <input type="text" placeholder="منتج البحث " />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
            <div className="blog-all-category-wrapper">
              <div className="latest-posts">
                <div className="latest-title">
                  <h3>أحدث المواضيع</h3>
                  <img src="images/title-img.png" alt="Image" />
                </div>
                <div className="posts-box">
                  <div className="p-img">
                    <img src="images/2.png" alt="image" height={75} />
                  </div>
                  <div className="p-text">
                    <a href="What-does-your-child-need-in-the-nursery-bag-details.html">
                      <h3>ماذا يحتاج طفلك في حقيبة الحضانة ؟</h3>
                    </a>
                    <span>
                      <i className="fa fa-calendar" /> ١٦ مايو ٢٠١٦.
                    </span>
                  </div>
                </div>
                <div className="posts-box">
                  <div className="p-img">
                    <img src="images/9.jpg" alt="image" height={75} />
                  </div>
                  <div className="p-text">
                    <a href="Healthy-breakfast-for-kids-in-the-kindergarten-details.html">
                      <h3>فطور صحي للأطفال في الروضة</h3>
                    </a>
                    <span>
                      <i className="fa fa-calendar" />
                      ٢٢ مارس ٢٠٢٢.
                    </span>
                  </div>
                </div>
                <div className="posts-box">
                  <div className="p-img">
                    <img src="images/1.jpg" alt="image" height={75} />
                  </div>
                  <div className="p-text">
                    <a href="How-to-motivate-your-child-to-read-details.html">
                      <h3>كيف تحفز طفلك للقراءة</h3>
                    </a>
                    <span>
                      <i className="fa fa-calendar" />٧ نوفمبر ٢٠٢٣.
                    </span>
                  </div>
                </div>
              </div>
              <div className="free-call-wrap">
                <h3>للمكالمة </h3>
                <p>للحصول على أي معلومات </p>
                <h4>٠٥٠٠٨٩٩١٧٣</h4>
                <div className="card-button">
                  <a href="contact.html" className="card-btn">
                    اتصل بنا
                  </a>
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

export default Childneed;
