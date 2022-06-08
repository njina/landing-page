import Image from "next/image";
import style from "../styles/Company.module.css";
import { useState } from "react";
import baseApiUrl from "../utils/baseApiUrl";

const Company = () => {
  return (
    <section id="Company" className={style.company_area}>
      <div className="wrapper clearfix">
        <h2 className={style.tit}>회사소개</h2>
        <div className={style.thumb}>
          <Image src="/images/photo_1.jpg" alt="대체텍스트" width="600px" height="500px" />
        </div>
        <div className={style.txtbox}>
          <strong>Lorem ipsum dolor sit amet </strong>
          <p>
            consectetur adipisicing elit. Suscipit beatae aliquam placeat officiis optio fuga iste eveniet, nihil reprehenderit, repellendus tempore impedit, molestias ea ipsam. Aliquam soluta tempora
            iusto placeat.niet, nihil reprehenderit, repellendus tempore impedit, molestias ea ipsam. Aliquam soluta tempora iusto placeat. ipsam. Aliquam soluta tempora iusto placeat.niet, nihil
            reprehenderit, repellendus tempore impedit, molestias ea ipsam. Aliquam soluta tempora iusto placeat. ipsam. Aliquam soluta tempora iusto placeat.niet, nihil reprehenderit, repellendus
            tempore impedit, molestias ea ipsam. Aliquam soluta tempora iusto placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae aliquam placeat officiis optio fuga iste eveniet, nihil reprehenderit, repellendus tempore impedit, molestias ea
            ipsam. Aliquam soluta tempora iusto placeat.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Company;
