import { Link } from "react-router-dom";
import { useState } from "react";

import tacoCloseUp from "../img/tacos_close_up_1000x649.png";
import Footer from "./Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState("");

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlert("Form submitted!");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__h1">Little Taco Shop</h1>
        <nav className="header__nav">
          <ul className="header__ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hours">Hours</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <figure>
          <img
            src={tacoCloseUp}
            alt="Little Taco Shop Tacos"
            title="Tacos ready to eat!"
            width="1000"
            height="649"
          />
          <figcaption className="offscreen">Little Taco Shop Tacos</figcaption>
        </figure>
      </section>

      <main className="main">
        <article className="main__article contact">
          <h2 className="contact__h2">Our Location</h2>
          <address>
            555 Taco Temptation Lane, Suite T<br />
            Kansas City, MO 55555-5555
            <br />
            <br />
            Phone: <a href="tel:+5555555555">555-555-5555</a>
          </address>
        </article>

        <hr />

        <article className="main__article">
          <h2>Our Contact Form</h2>
          {alert && <div className="alert center">{alert}</div>}

          <form className="contact__form" onSubmit={handleSubmit}>
            <fieldset className="contact__fieldset">
              <legend className="offscreen">Send Us A Message</legend>
              <p className="contact__p">
                <label className="contact__label" for="name">
                  Name:
                </label>
                <input
                  className="contact__input"
                  value={form.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  onChange={(e) => setForm({ name: e.target.value })}
                  required
                />
              </p>
              <p className="contact__p">
                <label className="contact__label" for="email">
                  Email:
                </label>
                <input
                  className="contact__input"
                  value={form.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your email"
                  onChange={(e) => setForm({ email: e.target.value })}
                  required
                />
              </p>
              <p className="contact__p">
                <label className="contact__label" for="message">
                  Your Message:
                </label>
                <br />
                <textarea
                  className="contact__textarea"
                  value={form.message}
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Type your message here"
                  onChange={(e) => setForm({ message: e.target.value })}
                  required
                ></textarea>
              </p>
            </fieldset>
            <button className="contact__button" type="submit">
              Send
            </button>
            <button
              className="contact__button"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default Contact;
