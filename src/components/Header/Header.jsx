import React, { useState } from "react";
import { Link } from "react-router-dom";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import Logo from "../../assets/logo.webp";

const Header = () => {
  const [activeSection, setActiveSection] = useState("#teams");
  const [menuOpen, setIsMenuOpen] = useState(false);

  function mobileNavToggleHandler() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header
      className={`z-50 flex justify-between items-center transition-all duration-150 ${
        menuOpen ? "p-0" : "py-4 px-[6%]"
      }`}
    >
      <div className="">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-16 rounded-full" />
        </Link>
      </div>

      <div className="hidden lg:flex">
        <DesktopNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      <div className="flex lg:hidden">
        <MobileNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          menuOpen={menuOpen}
          setIsMenuOpen={setIsMenuOpen}
          mobileNavToggleHandler={mobileNavToggleHandler}
        />
      </div>
    </header>
  );
};

export default Header;
