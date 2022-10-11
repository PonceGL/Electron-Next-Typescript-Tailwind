import React, { FC, ReactNode } from "react";

//Components
import Aside from "../Aside";
// import Footer from "../Footer";

// Interface's
interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Aside />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
