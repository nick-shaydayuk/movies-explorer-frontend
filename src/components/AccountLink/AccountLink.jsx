import { NavLink } from 'react-router-dom';
import './AccountLink.scss';
import accountImg from '../../images/account.svg';
import manIcon from '../../images/man-icon.svg';
import './AccountLink.scss';

function AccountLink() {
  return (
    <div className="account-link">
      <div className="account-link__container">
        <NavLink to="/profile" className="account-link__text">
          Аккаунт
        </NavLink>
        <div className="account-link__img-container">
          <img src={accountImg} className="account-link__man-icon-background" />
          <img src={manIcon} alt="мэн" className="account-link__man-icon" />
        </div>
      </div>
    </div>
  );
}

export default AccountLink;
