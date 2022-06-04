import style from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={style.contact_area}>
      <div className="wrapper clearfix">
        <h2 className={style.tit}>문의</h2>
        <form action="">
          <div className={style.insert_box}>
            <input type="text" placeholder="문의제목" />
            <textarea type="text" placeholder="내용" />
            <div className={style.btn_wrap}>
              <input type="submit" value="문의하기" className={style.btn} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
