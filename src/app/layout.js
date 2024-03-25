import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "مركز واحة الطفل",
  description: "Child Care Next Project",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head lang="ar" dir="rtl">
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* <!-- bootstrap.min.css --> */}
        <link rel="stylesheet" href="css/bootstrap.rtl.min.css" />
        {/* <!-- owl.carousel.min.css --> */}
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        {/* <!-- animate.css --> */}
        <link rel="stylesheet" href="css/animate.css" />
        {/* <!-- font-awesome.min.css --> */}
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        {/* <!-- flaticon.css --> */}
        <link rel="stylesheet" href="css/flaticon.css" />
        {/* <!-- flaticon.css --> */}
        <link rel="stylesheet" href="css/magnific-popup.css" />
        {/* <!-- slick.css --> */}
        <link rel="stylesheet" href="css/slick.css" />
        {/* <!-- meanmenu.css --> */}
        <link rel="stylesheet" href="css/meanmenu.css" />
        {/* <!-- style.css --> */}
        <link rel="stylesheet" href="css/style.css" />
        {/* <!-- responsive.css --> */}
        <link rel="stylesheet" href="css/responsive.css" />
        {/* <!-- RTL.css --> */}
        <link rel="stylesheet" href="css/rtl.css" />
        <link rel="icon" type="image/png" href="images/favicon.png" />
        <Script data-cfasync="false" src="js/email-decode.min.js" />
        <Script src="js/jquery.min.js" />
        <Script src="js/bootstrap.bundle.min.js" />
        <Script src="js/owl.carousel.min.js" />
        <Script src="js/jquery.magnific-popup.min.js" />
        <Script src="js/slick.min.js" />
        <Script src="js/wow.min.js" />
        <Script src="js/jquery.meanmenu.js" />
        <Script src="js/active.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
