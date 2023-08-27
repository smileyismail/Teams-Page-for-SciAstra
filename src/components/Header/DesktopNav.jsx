import { Link } from "react-router-dom";

import { navOptions } from "../../utils/navOptions";

const DesktopNav = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex justify-center items-center gap-10 ">
        {navOptions.map((item, idx) => (
          <li key={idx}>
            <a href={item.link} onClick={() => setActiveSection(item.link)}>
              <p
                className={`${
                  activeSection === item.link &&
                  "border-b-[3px] border-darkPurple text-transparent bg-clip-text bg-gradient-to-r from-lightPurple to-customBlue"
                } whitespace-nowrap`}
              >
                {item.title.toUpperCase()}
              </p>
            </a>
          </li>
        ))}

        <li className="bg-gradient-to-r from-customBlue to-lightPurple text-white px-2 py-1 rounded-3xl whitespace-nowrap">
          <Link to="#teams">LOG IN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
