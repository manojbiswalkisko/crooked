import Script from 'next/script';

export const metadata = {
  title: 'Contact Us',
  description: 'All in one marketing tool for your business',
  keyword: 'crooked, marketing tool, ai tool, ai marketing tool, marketing automation tool',
};
 
export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

  {/* Fontawesome CSS */}
  <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
  {/* ElegentIcon CSS */}
  <link rel="stylesheet" href="assets/css/elegant-icons.min.css" />
  {/* Animate CSS */}
  <link rel="stylesheet" href="assets/css/animate.min.css" />
  {/* Bootstrap CSS */}
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  {/* Slick CSS */}
  <link rel="stylesheet" href="assets/css/slick.css" />
  <link rel="stylesheet" href="assets/css/slick-theme.css" />
  {/* SwiperJs CSS */}
  <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
  {/* NiceSlelect CSS */}
  <link rel="stylesheet" href="assets/css/nice-select.css" />
  {/* Fancybox CSS */}
  <link rel="stylesheet" href="assets/css/jquery.fancybox.min.css" />
  {/* Main CSS */}
  <link rel="stylesheet" href="assets/css/style.css" />
  {/* Responsive CSS */}
  <link rel="stylesheet" href="assets/css/responsive.css" />

  <body>{children}</body>


    <Script src="assets/js/plugin/jquery-3.5.0.min.js"></Script>
    <Script src="assets/js/plugin/popper.min.js"></Script>
    <Script src="assets/js/plugin/bootstrap.min.js"></Script>
    <Script src="assets/js/plugin/TweenMax.min.js"></Script>
    <Script src="assets/js/plugin/ScrollMagic.js"></Script>
    <Script src="assets/js/plugin/animation.gsap.js"></Script>
    <Script src="assets/js/plugin/debug.addIndicators.min.js"></Script>
    <Script src="assets/js/plugin/squareCountDownClock.js"></Script>
    <Script src="assets/js/plugin/wow.min.js"></Script>
    <Script src="assets/js/plugin/jquery.nice-select.min.js"></Script>
    <Script src="assets/js/plugin/jquery.fancybox.min.js"></Script>
    <Script src="assets/js/plugin/slick.min.js"></Script>
    <Script src="assets/js/plugin/swiper-bundle.min.js"></Script>
    <Script src="assets/js/plugin/jquery.waypoints.min.js"></Script>
    <Script src="assets/js/plugin/jquery.counterup.min.js"></Script>
    <Script src="assets/js/plugin/jquery.parallax-scroll.js"></Script>
    <Script src="assets/js/plugin/jquery.paroller.js"></Script>
    <Script src="assets/js/Script.js"></Script>
    </html>
  );
}