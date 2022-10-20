import Link from "next/link";
import navStyles from "../styles/components/Nav.module.scss";

const Nav = () => {
  return (
    <>
      <div className={navStyles.sidenav}>
        <Link href="/">
          <a>Recipe</a>
        </Link>
        <Link href="/">
          <a>Recipe</a>
        </Link>
        <Link href="/">
          <a>Recipe</a>
        </Link>
        <Link href="/">
          <a>Recipe</a>
        </Link>
      </div>
    </>
  );
};
export default Nav;
