import './NotFoundView.scss';
import { Link } from 'react-router-dom';

function NotFoundView() {
  return (
    <section className="not-found-view">
      <div className="not-found-view__container">
        <div>
          <h1 className="not-found-view__title">404</h1>
          <p className="not-found-view__text">Страница не найдена</p>
        </div>
        <Link className="not-found-view__button" to="/">
          Назад
        </Link>
      </div>
    </section>
  );
}

export default NotFoundView;
