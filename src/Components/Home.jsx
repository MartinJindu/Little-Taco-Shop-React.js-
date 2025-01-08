import { Link } from "react-router-dom";

// Images
import tacoAndDrink from "../img/tacos_and_drink_1000x667.png";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__h1">Little Taco Shop</h1>
        <nav className="header__nav">
          <ul className="header__ul">
            <li>
              <Link to="/about">About</Link>
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
        <h2 className="hero__h2">Bienvenidos!</h2>
        <figure>
          <img
            src={tacoAndDrink}
            alt="Tacos and drink"
            title="We love tacos"
            width="1000"
            height="667"
          />
          <figcaption className="offscreen">Taco and a drink</figcaption>
        </figure>
      </section>

      <main className="main">
        <article id="menu" className="main__article menu">
          <h2 className="menu__h2">Our Menu</h2>
          <table className="menu__container">
            <caption className="offscreen">Our Tacos</caption>
            <thead>
              <tr>
                <th className="menu__header" scope="col">
                  Tacos
                </th>
                <th className="menu__header" scope="col">
                  Quantity
                </th>
                <th className="menu__header" scope="col">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="menu__item menu__cr" scope="row" rowspan="3">
                  Crunchy
                </th>
                <td className="menu__item">1</td>
                <td className="menu__item">$1.50</td>
              </tr>
              <tr>
                <td className="menu__item">2</td>
                <td className="menu__item">$2.50</td>
              </tr>
              <tr>
                <td className="menu__item">3</td>
                <td className="menu__item">$3.25</td>
              </tr>
              <tr>
                <th className="menu__item menu__sf" scope="row" rowspan="3">
                  Soft
                </th>
                <td className="menu__item">1</td>
                <td className="menu__item">$2.00</td>
              </tr>
              <tr>
                <td className="menu__item">2</td>
                <td className="menu__item">$3.50</td>
              </tr>
              <tr>
                <td className="menu__item">3</td>
                <td className="menu__item">$4.50</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="menu__item menu__cs" colspan="3">
                  Chips &amp; Salsa $2
                </td>
              </tr>
            </tfoot>
          </table>
          <p className="center">
            <a href="#">Back To Top</a>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
};
export default Home;
