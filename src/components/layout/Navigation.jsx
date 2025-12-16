import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <h1 className="logo-text">
              <span className="logo-line">Muzeum</span>
              <span className="logo-line">Wybrzeże</span>
              <span className="logo-line">1939</span>
            </h1>
          </Link>
          
          <ul className="nav-menu">
            <li><Link to="/" className={isActive('/')}>Strona główna</Link></li>
            <li><Link to="/o-muzeum" className={isActive('/o-muzeum')}>O muzeum</Link></li>
            <li><Link to="/wystawy" className={isActive('/wystawy')}>Wystawy</Link></li>
            <li><Link to="/wydarzenia" className={isActive('/wydarzenia')}>Wydarzenia</Link></li>
            <li><Link to="/edukacja" className={isActive('/edukacja')}>Edukacja</Link></li>
            <li><Link to="/zbiory" className={isActive('/zbiory')}>Zbiory</Link></li>
            <li><Link to="/zwiedzanie" className={isActive('/zwiedzanie')}>Zwiedzanie</Link></li>
            <li><Link to="/aktualnosci" className={isActive('/aktualnosci')}>Aktualności</Link></li>
            <li><Link to="/kontakt" className={isActive('/kontakt')}>Kontakt</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
