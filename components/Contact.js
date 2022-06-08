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

  const clearForm = (e) => {
    setTitle("");
    setContents("");
    setEmail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, contents, email);

    const formData = {
      title,
      contents,
      email,
    };
    // console.log(formdata.title, formdata.contents, formdata.email);

    // strpi admin에 목록화하기
    fetch(`${baseApiUrl}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        data: {
          title: `${formData.title}`,
          contents: `${formData.contents}`,
          email: `${formData.email}`,
        },
      }),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert("정상적으로 문의가 등록되었습니다.");
        clearForm();
      } else {
        alert("정상적으로 문의가 등록되지 않았습니다. 다시 시도해주세요.");
      }
    });

    //sendgrid 이용하여 관리자 메일로 문의글 보내기
    fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((response) => {
      // console.log(response);
    });
  };

  return (
    <section id="contact" className={style.contact_area}>
      <div className="wrapper clearfix">
        <h2 className={style.tit}>문의</h2>
        <form name="form-contact" action="" onSubmit={handleSubmit}>
          <div className={style.insert_box}>
            <input type="text" placeholder="문의제목" id="title" onChange={changeTitle} value={title} />
            <textarea type="text" placeholder="내용" id="contents" onChange={changeContents} value={contents} />
            <input type="email" placeholder="답변 받을 이메일 주소" id="email" onChange={changeEmail} value={email} />
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
