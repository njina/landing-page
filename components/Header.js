import Link from "next/link";
import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="wrapper clearfix">
        <h1 className={style.logo}>
          <Link href="/">
            <a>logo</a>
          </Link>
        </h1>
        <nav id="gnb" className={style.gnb}>
          <ul className="">
            <li>
              <Link href="#company">
                <a>회사소개</a>
              </Link>
            </li>
            <li>
              <Link href="#products">
                <a>제품소개</a>
              </Link>
            </li>
            <li>
              <Link href="#posts">
                <a>알립니다</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>문의</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
