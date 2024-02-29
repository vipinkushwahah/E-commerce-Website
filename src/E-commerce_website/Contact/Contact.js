import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import jojo from '../../assets/gojo (2).png'
import koko from '../../assets/gojo (1).png'

const Contact = () => {
  const form = useRef();

  const [done, setdone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z9n8vyv",
        "template_vf4sybz",
        form.current,
        "t2yFoMzPBmP6iBN9m"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <p>hey</p>
      <div className="form">
        <div className="leftmargin">
            <img className="koko" src={koko} alt="i" />
          <div className="upertext">Get in Touch</div>
          <div className="downtext">Contact me</div>
        </div>
        <div className="rightmargin">
          <form className="form1" ref={form} onSubmit={sendEmail}>
            <img className="jojo" src={jojo} alt="i" />
            <input className="username" type="text" name="user_name" placeholder="Name" />
            <input type="email" className="username" name="user_email" placeholder="E-mail" />
            <textarea name="message" rows={6} cols={10} placeholder="Message" />
            <input type="submit" value="Send" className="sendbtn" />
            <div>{done && "Thanks for Contecting me i will reply soon!"}</div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
