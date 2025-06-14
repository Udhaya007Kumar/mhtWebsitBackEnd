import transporter from '../config/mailer.js';

export const sendFormMail = async (req, res) => {
  const { fullname, designation, company, phone, email, remark } = req.body;
   console.log("💡 Incoming request:", req.body);

  const mailOptions = {
    from: `"Website Form" <${process.env.EMAIL_USER}>`,
    to: "udhaya.rajendr@gmail.com",
    cc: [
      'tamilarasi.rajendr@gmail.com',
      'devismurugan@gmail.com ',
      'udhaya.rajendr@gmail.com'
    //   'mail4@example.com',
    //   'mail5@example.com'
    ],
    subject: 'New Website Enquiry',
    html: `
      <h3>New Form Submission:</h3>
      <p><strong>Name:</strong> ${fullname}</p>
      <p><strong>Designation:</strong> ${designation}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Remark:</strong> ${remark}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Mail Error:', err);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};
