const mailer = require("nodemailer");

module.exports = (email, nome, mensagem, anexo) => {
  const smtpTransport = mailer.createTransport({
    host: "smtps.uhserver.com",
    port: 465,
    secure: true, //SSL/TLS
    auth: {
      user: "marketing@hospitalfluminense.com.br",
      pass: "MKTGHF2022",
    },
  });

  const toEmail = "curriculo@hospitalfluminense.com.br";

  const mail = {
    from: "marketing@hospitalfluminense.com.br",
    to: toEmail,
    subject: `Trabalhe Conosco - Hospital Fluminense de :${nome}`,
    text: ` Trabalhe Conosco - Hospital Fluminense.
    Nome Completo: ${nome}
    email: ${email}
    Mensagem: ${mensagem}
    `,
    //html: "<b>Opcionalmente, pode enviar como HTML</b>"
  };

  if (anexo) {
    console.log(anexo);
    mail.attachments = [];
    mail.attachments.push({
      filename: anexo.originalname,
      content: anexo.buffer,
    });
  }

  return new Promise((resolve, reject) => {
    smtpTransport
      .sendMail(mail)
      .then((response) => {
        smtpTransport.close();
        return resolve(response);
      })
      .catch((error) => {
        smtpTransport.close();
        return reject(error);
      });
  });
};
