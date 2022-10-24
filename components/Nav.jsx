import { BiFoodMenu } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import Controls from "../public/images/Controls.png";

const Nav = () => {
  return (
    <>
      <div className="sidenav">
        {/* <Image src={Controls} alt="controls" /> */}
        <Image className="logo" src={Logo} alt="Logo" />

        {/* <div className="searchCon">

          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 mr-2">
              <ImSearch className="searchIcon" />
            </span>
            <input
              className="search placeholder:italic block rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div> */}

        <div className="search--con">
          <div className="card">
            <label className="input">
              <input className="input__field" type="text" placeholder=" " />
              <span className="input__label">Search Anything...</span>
            </label>
          </div>
        </div>

        <nav className="sideNav">
          <Link href="/">
            <a>
              <BiFoodMenu className="mr-5" /> <h1>Menu</h1>
            </a>
          </Link>
          <Link href="/">
            <a>
              <MdFastfood className="mr-5" /> Ingredients
            </a>
          </Link>
          <Link href="/">
            <a>
              <GiFruitBowl className="mr-5" /> Recipe
            </a>
          </Link>
          <Link href="/">
            <a>
              <GiFruitBowl className="mr-5" />
              Vegan
            </a>
          </Link>
        </nav>
        <div className="switch">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
};
export default Nav;
