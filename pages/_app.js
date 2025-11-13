// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", "G-4QGYSTZEGK", {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
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
          gtag('config', 'G-4QGYSTZEGK', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Your App */}
      <div className="body">
        <Component {...pageProps} />
        <style jsx>{`
          .body {
            background-color: rgb(211, 209, 249);
          }
        `}</style>
      </div>
    </>
  );
}

export default MyApp;

