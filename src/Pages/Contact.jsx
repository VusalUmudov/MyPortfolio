import React from 'react'
import './contact.css'
import Swal from 'sweetalert2'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ca4a8f22-7701-4a78-b504-50ceb28a41ad");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      document.getElementById("myForm").reset();
    }

  };



  return (
    <section id='contact' className='contact'>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Me</h1>
          <p>Email: <a href="vusalumudov707@gmail.com">vusalumudov707@gmail.com</a></p>
          <p>Phone: +994 50 640 65 64</p>

          <p>
            Feel free to <span style={{ color: "#cd5ff8" }}>connect </span>with
            me
          </p>
          <ul className="socialLinks">
            <li className="socialLink">
              <a
                href="https://github.com/VusalUmudov"
                className="socialIcon"
              >
                <FaGithub />
              </a>
            </li>
            <li className="socialLink">
              <a
                href="https://www.instagram.com/v.umudoov/"
                className="socialIcon"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="socialLink">
              <a
                href="https://www.linkedin.com/in/vusal-umudov-a1791a204/"
                className="socialIcon"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>

        </div>

        <div className="contact-form">
          <form id='myForm' onSubmit={onSubmit}>
            <div class="input-group">
              <input type="text" name='name' placeholder="Name" required />
              <input type="email" name='email' placeholder="Email" required />
            </div>
            <textarea name='message' placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact