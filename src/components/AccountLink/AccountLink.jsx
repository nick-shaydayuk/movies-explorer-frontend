import { NavLink } from 'react-router-dom';
import './AccountLink.scss';

function AccountLink() {
  return (
    <div className="account-link">
      <div className="account-link__container">
        <NavLink to="/profile" className="account-link__text">
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
}

export default AccountLink;
