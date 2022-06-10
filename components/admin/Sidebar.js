import Link from "next/link";
import style from "../../styles/Admin.module.css";

const Sidebar = () => {
  return (
    <ul className={style.sidebar}>
      <li className={style.sidebar_item}>
        <Link href="#">
          <a>문의글 보기</a>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
