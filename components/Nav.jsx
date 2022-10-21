import { BiFoodMenu } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import Controls from "../public/images/Controls.png";

const Nav = () => {
  return (
    <>
      <div className="sidenav">
        <Image src={Controls} alt="controls" />
        <Image className="logo" src={Logo} alt="Logo" />

        <div className="searchCon">
          <input className="search" type="text" placeholder="Search Recipe" />
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
      </div>
    </>
  );
};
export default Nav;
