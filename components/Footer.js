import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="wrapper">
        <div className={style.logo}>로고</div>
        <div className={style.info}>
          <p>서울특별시 금천구 가산디지털1로 skv1 1606호</p>
          <p>02-000-0000</p>
          <p>email@email.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
