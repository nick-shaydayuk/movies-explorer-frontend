import './Promo.scss';
import promoImg from '../../images/promo-img.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img src={promoImg} className="promo__logo" alt="Логотип проекта" />
      </div>
      <div className="promo__links">
        <div className="promo__links-container">
          <a href="/#about" className="promo__link">
            О проекте
          </a>
          <a href="/#techs" className="promo__link">
            Технологии
          </a>
          <a href="/#aboutme" className="promo__link">
            Студент
          </a>
        </div>
      </div>
    </section>
  );
}

export default Promo;
