import './Portfolio.scss';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              href="https://github.com/coldrainsnow/how-to-learn"
              target="blank"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              href="https://github.com/coldrainsnow/russian-travel"
              target="blank"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              href="https://github.com/coldrainsnow/react-mesto-api-full"
              target="blank"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
