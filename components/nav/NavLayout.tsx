"use client";

import React from "react";
import RightNavbar from "./RightNavbar";
import Nav from "./Nav";
import { useState } from "react";

interface NavLayoutProps {
  numRef?: React.MutableRefObject<number>;
  displayNav?: boolean;
  isMobile?: boolean;
}

const NavLayout: React.FC<NavLayoutProps> = ({ numRef, displayNav }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <RightNavbar active={active} setActive={setActive} />
      {active === false && (
        <Nav
          numRef={numRef}
          displayNav={displayNav}
          active={active}
          setActive={setActive}
        />
      )}
    </>
  );
};

export default NavLayout;