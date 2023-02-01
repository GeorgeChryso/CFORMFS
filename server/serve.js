const express = require("express");
const app = express();
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())



// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });


app.post('/send_mail',cors(),async (req,res)=>{
  console.log('incoming request',req.body)
  let { text } = req.body
  const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
     
})

await transport.sendMail({
	from: process.env.MAIL_FROM,
	to: "bakoy13979@ekcsoft.com",
	subject: "test email",
	html: `<div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px; 
      ">
      <h2>Here is your email!</h2>
      <p>${text}</p>
  
      <p>All the best, Darwin</p>
       </div>
  `
})

    res.send('success')

})

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});