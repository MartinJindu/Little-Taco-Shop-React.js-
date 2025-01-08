import { Link } from "react-router-dom";

import tacoDeliciouso from "../img/tacos_delicioso_1000x667.png";
import Footer from "./Footer";

const About = () => {
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <figure>
          <img
            src={tacoDeliciouso}
            alt="Tacos Delicioso"
            title="Tacos Delicioso"
            width="1000"
            height="667"
          />
          <figcaption className="offscreen">
            Try this delicious Tacos
          </figcaption>
        </figure>
      </section>

      <main className="main">
        <article id="about" className="main__article about">
          <h2>
            About <abbr title="The Little Taco Shop">LTS</abbr>
          </h2>
          <p>
            <abbr title="The Little Taco Shop">LTS</abbr> was founded in
            <time datetime="2022">2024</time>. Our shop was built from a
            <strong>love of tacos</strong> 🌮🌮🌮. We hope our shop adds a
            unique and interesting place to our little town.
          </p>
          <aside className="about__trivia">
            <h3>Taco Trivia</h3>
            <details>
              <summary>
                When did tacos first appear in the United Stated?
              </summary>
              <p className="about__trivia-answer">
                Jeffrey M. Pilcher, taco historian and professor of history at
                the University of Minnesota, says the earliest mention of tacos
                in the United States are in a newspaper from
                <time datetime="1905">1905</time>. (Source:
                <cite>
                  <a
                    href="https://www.smithsonianmag.com/arts-culture/where-did-the-taco-come-from-81228162/"
                    target="_blank"
                  >
                    Smithsonian Magazine
                  </a>
                </cite>
                )
              </p>
            </details>
          </aside>
        </article>
      </main>

      <Footer />
    </div>
  );
};
export default About;
