import Head from "next/head";

import Link from "next/link";
import style from "../../styles/Admin.module.css";

const AdminLayout = () => {
  return (
    <>
      <Head>
        <title>관리자</title>
      </Head>
      <div>
        <div className="wrapper" style={{ width: "940px", backgroundColor: "#faf" }}></div>
      </div>
    </>
  );
};

export default AdminLayout;
