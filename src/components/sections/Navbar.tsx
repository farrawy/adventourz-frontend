import { navLinks } from "../../assets/data/data";
import { Link } from "react-router-dom";

const Navbar = ({ isHomePage }: { isHomePage?: boolean }) => {
  return (
    // <nav className="fixed z-50 flex w-full items-center justify-center py-10 text-neutral">
    <nav
      className={` z-50 flex w-full items-center justify-center py-6 ${isHomePage ? "absolute" : "sticky bg-neutral "}  `}
    >
      <div className="flex items-center gap-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className={`cursor-pointer text-lg hover:text-primary lg:text-2xl ${isHomePage ? "text-neutral" : "text-black"}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
