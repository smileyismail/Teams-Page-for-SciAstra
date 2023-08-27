import { navOptions } from "../../utils/navOptions";

const MobileNav = ({
  activeSection,
  setActiveSection,
  setIsMenuOpen,
  menuOpen,
  mobileNavToggleHandler,
}) => {
  return (
    <nav className="flex lg:hidden">
      {!menuOpen && (
        <button onClick={mobileNavToggleHandler} className="space-y-1.5">
          <div className="h-1.5 w-5 rounded-2xl bg-gradient-to-r from-customBlue to-customPurple" />
          <div className="h-1.5 w-8 rounded-2xl bg-gradient-to-r from-customBlue to-customPurple" />
          <div className="h-1.5 w-5 ml-auto rounded-2xl bg-gradient-to-r from-customBlue to-customPurple" />
        </button>
      )}

      {menuOpen && (
        <div className="z-50 flex-1 top-0 min-w-[100vw] min-h-[100vh] flex justify-center items-center bg-gradient-to-br to-lightPurple from-customPurple">
          <ul>
            {navOptions.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  onClick={() => {
                    setActiveSection(item.link);
                    mobileNavToggleHandler();
                  }}
                >
                  <button className="text-center border-[1px] w-60 py-1 rounded-xl mb-3 text-white font-semibold">
                    {item.title.toUpperCase()}
                  </button>
                </a>
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-customBlue to-lightPurple whitespace-nowrap text-center border-[1px] w-60 py-1 rounded-xl mb-3 text-white font-semibold">
                LOG IN
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
