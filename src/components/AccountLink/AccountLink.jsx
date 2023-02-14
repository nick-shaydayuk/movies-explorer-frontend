import { NavLink } from 'react-router-dom';
import './AccountLink.scss';

function AccountLink() {
  return (
    <NavLink
      to="/profile"
      className="account-link"
      activeClassName="account-link account-link_active"
    >
      Аккаунт
    </NavLink>
  );
}

export default AccountLink;