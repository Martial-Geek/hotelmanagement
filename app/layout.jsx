import "@styles/globals.css";

import Nav from "@components/shared/Nav";
import Provider from "@components/Provider";
import Sidebar from "@components/shared/Sidebar";

export const metadata = {
  title: "UAA",
  description: "Hotel Management System",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* <div className="main">
            <div className="gradient" />
          </div> */}
          <Nav />
          <div className="flex">
            <Sidebar />
            <main className="app bg-gray-950">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
