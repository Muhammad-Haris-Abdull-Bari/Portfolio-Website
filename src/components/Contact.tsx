import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:M.haris.abdul.bari@gmail.com" data-cursor="disable">
                M.haris.abdul.bari@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:https://wa.me/923463065173?text=Hello%20Bro" data-cursor="disable">
                +92-346-3065173
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Muhammad-Haris-Abdull-Bari/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadharis786"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

            <a
              href="https://www.behance.net/muhammadharis786"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Muhammad Haris Abdul Bari</span>
            </h2>
            <h5>
              <MdCopyright /> 2025 - 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
