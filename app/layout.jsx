import Nav from "@components/Nav";
import "@styles/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompting",
  description: "this is my Prompting",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="mytheme">
      <body>
        <Provider>
          <div className="main"></div>
          <Nav />
          <main className="container mx-auto md:px-10 px-4">{children}</main>
          {/* <Footer /> */}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
