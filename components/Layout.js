import Head from "next/head";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  position: "relative",
  padding: "1rem 1rem 0rem 1rem",
  minHeight: "80vh",
};

const Layout = (props) => (
  <div>
    <Head>
      {/* Add other head elements like Bootstrap */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>

    {/* Google Analytics GA4 */}
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-4QGYSTZEGK"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4QGYSTZEGK');
      `}
    </Script>

    <Header />

    <div style={layoutStyle}>{props.children}</div>
    <Footer />

    <style global jsx>{`
      body { font-size: 16px; }
      li, p { line-height: 1.5rem; }
      a { text-decoration: none; }
      a:hover { text-decoration: underline; }
      .breadcrumbs { margin-left: 4rem; font-size: 0.8rem; }
    `}</style>
  </div>
);

export default Layout;
