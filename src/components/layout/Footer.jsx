import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Muzeum Wybrzeże 1939</h4>
            <p className="text-light">
              Instytucja kultury poświęcona pamięci obrony polskiego wybrzeża we wrześniu 1939 roku.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Nawigacja</h4>
            <ul className="footer-links">
              <li><Link to="/o-muzeum">O muzeum</Link></li>
              <li><Link to="/wystawy">Wystawy</Link></li>
              <li><Link to="/wydarzenia">Wydarzenia</Link></li>
              <li><Link to="/zwiedzanie">Zwiedzanie</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul className="footer-links">
              <li>ul. Wybrzeża 1</li>
              <li>80-001 Gdańsk</li>
              <li>Tel: +48 58 123 45 67</li>
              <li>Email: kontakt@wybrzeze1939.pl</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Godziny otwarcia</h4>
            <ul className="footer-links">
              <li>Wt-Nd: 10:00 - 18:00</li>
              <li>Poniedziałki: zamknięte</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Muzeum Wybrzeże 1939. Wszelkie prawa zastrzeżone.</p>
          <div>
            <Link to="/admin" className="admin-link">Panel administratora</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
