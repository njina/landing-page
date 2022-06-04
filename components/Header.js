import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="wrapper clearfix">
        <h1 className={style.logo}>
          <a href="/">logo</a>
        </h1>
        <nav id="gnb" className={style.gnb}>
          <ul className="">
            <li>
              <a href="#company">회사소개</a>
            </li>
            <li>
              <a href="#products">제품소개</a>
            </li>
            <li>
              <a href="#posts">알립니다</a>
            </li>
            <li>
              <a href="#contact">문의</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
