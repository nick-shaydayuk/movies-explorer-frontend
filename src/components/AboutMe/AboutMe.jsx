import './AboutMe.scss';
import foto from '../../images/student.png';

function AboutMe() {
  return (
    <section className="about-me" id="aboutme">
      <h2 className="about__title">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__container-text">
          <h1 className="about-me__header">Виталий</h1>
          <p className="about-me__description-title">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/coldrainsnow"
            target="blank"
          >
            Github
          </a>
        </div>
        <img src={foto} className="about-me__photo" alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
