const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    제목: ${body.title}\r\n
    이메일: ${body.email}\r\n
    내용: ${body.contents}
  `;

  const data = {
    to: "najina603@gmail.com", //메일을 받는 사람=>관리자 메일주소
    from: "najina603@gmail.com", //sendgrid API key를 할당한 send grid 계정의 메일주소와 동일해야함.
    subject: `[문의사항] ${body.title}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
};
