import { AppWrap, MotionWrap } from "../wrapper";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsEnvelopeFill, BsCup } from "react-icons/bs";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Let&lsquo;s work together 🤝</h2>

      <div className="contact__info">
        <p>Mail me at 👇</p>
        <div className="email">
          <BsEnvelopeFill />
          <a
            href="mailto:contact@chkoushik.com"
            target="_blank"
            rel="noreferrer"
          >
            contact@chkoushik.com
          </a>
        </div>

      </div>

      <div className="app__Social">
        <p>Follow me here 👇</p>

        <div className="app__social__links">
          <a
            href="https://www.linkedin.com/in/chalasanikoushik/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://www.instagram.com/chkk.chk/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>

          <a
            href="https://twitter.com/Koushikch7"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>

          <a
            href="https://www.facebook.com/chalasanikaushik"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>

    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
