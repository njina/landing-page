import Link from "next/link";

const Sidemenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="#">
            <a>문의 관리</a>
          </Link>
        </li>
        <li>문의 관리</li>
        <li>문의 관리</li>
        <li>문의 관리</li>
      </ul>
    </div>
  );
};

export default Sidemenu;
