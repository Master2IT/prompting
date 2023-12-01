import Nav from "@components/Nav";
import "@styles/globals.css";
import Provider from "@components/Provider";
import Script from "next/script";

export const metadata = {
  title: "Prompting",
  description: "this is my Prompting",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="mytheme">
      <head>
        <meta name="google-adsense-account" content="ca-pub-5595968868369218" />
        <meta name="application-name" content="Prompting" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Prompting" />
        <meta
          name="description"
          content="Create your text to generate with AI to envision how the world will operate."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#C03B49" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://promptingg.vercel.app" />
        <meta name="twitter:title" content="Prompting" />
        <meta
          name="twitter:description"
          content="Create your text to generate with AI to envision how the world will operate."
        />
        <meta
          name="twitter:image"
          content="https://promptingg.vercel.app/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@Master2iT" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prompting" />
        <meta
          property="og:description"
          content="Create your text to generate with AI to envision how the world will operate."
        />
        <meta property="og:site_name" content="Prompting" />
        <meta property="og:url" content="https://promptingg.vercel.app" />
        <meta
          property="og:image"
          content="https://promptingg.vercel.app/icons/apple-touch-icon.png"
        />
      </head>
      <body>
        <Provider>
          <div className="main"></div>
          <Nav />
          <main className="container mx-auto md:px-10 px-4">{children}</main>
          {/* <Footer /> */}
        </Provider>
      </body>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5595968868369218"
              crossOrigin="anonymous"></Script>
    </html>
  );
};

export default RootLayout;
