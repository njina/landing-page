import style from "../styles/Contact.module.css";
import { useState } from "react";
import baseApiUrl from "../utils/baseApiUrl";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [email, setEmail] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContents = (e) => {
    setContents(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, contents, email);

    const data = {
      title,
      contents,
      email,
    };
    console.log(data.title, data.contents, data.email);

    fetch(`${baseApiUrl}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        data: {
          title: `${data.title}`,
          contents: `${data.contents}`,
          email: `${data.email}`,
        },
      }),
    })
      .then((response) => console.log("response"))
      .then((response) => {
        console.log(response);
        alert("문의가 등록되었습니다.");
        //   if (response.token) {
        //     localStorage.setItem("wtw-token", response.token);
        //     this.props.history.push("/main_gh");
        //   } else if (!response.token) {
        //     alert("올바른 회원이 아닙니다");
        //     this.props.history.push("/signup_gh");
        //  }
      });
  };

  return (
    <section id="contact" className={style.contact_area}>
      <div className="wrapper clearfix">
        <h2 className={style.tit}>문의</h2>
        <form name="form-contact" action="" onSubmit={handleSubmit}>
          <div className={style.insert_box}>
            <input type="text" placeholder="문의제목" id="title" onChange={changeTitle} />
            <textarea type="text" placeholder="내용" id="contents" onChange={changeContents} />
            <input type="email" placeholder="답변 받을 이메일 주소" id="email" onChange={changeEmail} />
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
