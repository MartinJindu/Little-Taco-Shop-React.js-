import { Link } from "react-router-dom";

import tacoTray from "../img/tacos_tray_1000x667.png";
import Footer from "./Footer";

const Hours = () => {
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
              <Link to="/contact">Contact</Link>
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
            src={tacoTray}
            alt="A Tray of Tasty Tacos"
            title="We love trays of tacos!"
            width="1000"
            height="667"
          />
          <figcaption className="offscreen">A Tray of Tasty Tacos</figcaption>
        </figure>
      </section>

      <main className="main">
        <article className="main__article">
          <h2>Hours</h2>
          <p>We are open 7 days a week!</p>
          <dl>
            <dt>Sunday-Thursday</dt>
            <dd>11am-9pm</dd>
            <dt>Friday-Saturday</dt>
            <dd>11am-11pm</dd>
          </dl>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default Hours;
