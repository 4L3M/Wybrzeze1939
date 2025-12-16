import Hero from '../../components/common/Hero';
import './Pages.css';

const Visit = () => {
  return (
    <div className="visit-page">
      <Hero 
        title="Zwiedzanie"
        subtitle="Godziny otwarcia, bilety i informacje praktyczne"
      />
      
      <div className="page-content">
        <div className="container">
          <section className="content-section">
            <h2>Godziny otwarcia</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Dzień tygodnia</th>
                    <th>Godziny</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Poniedziałek</td>
                    <td>Zamknięte</td>
                  </tr>
                  <tr>
                    <td>Wtorek - Niedziela</td>
                    <td>10:00 - 18:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-light text-small">
              Ostatni wstęp 30 minut przed zamknięciem. W święta muzeum może być zamknięte.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Cennik biletów</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Typ biletu</th>
                    <th>Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bilet normalny</td>
                    <td>20 zł</td>
                  </tr>
                  <tr>
                    <td>Bilet ulgowy (uczniowie, studenci, seniorzy)</td>
                    <td>12 zł</td>
                  </tr>
                  <tr>
                    <td>Bilet rodzinny (2 dorosłych + dzieci)</td>
                    <td>45 zł</td>
                  </tr>
                  <tr>
                    <td>Grupy szkolne (od 10 osób)</td>
                    <td>8 zł/os.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="info-box">
              <h3>Wstęp bezpłatny</h3>
              <ul>
                <li>Dzieci do lat 7</li>
                <li>Kombatanci i osoby represjonowane</li>
                <li>Osoby niepełnosprawne i ich opiekunowie</li>
                <li>Każda pierwsza niedziela miesiąca - dla wszystkich</li>
              </ul>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Dojazd</h2>
            <div className="two-column">
              <div className="info-box">
                <h3>Komunikacja miejska</h3>
                <p>
                  <strong>Autobusy:</strong> linie 106, 138, 158<br/>
                  <strong>Tramwaje:</strong> linie 3, 8, 11<br/>
                  <strong>Przystanek:</strong> Muzeum Wybrzeże
                </p>
              </div>
              
              <div className="info-box">
                <h3>Dojazd samochodem</h3>
                <p>
                  <strong>Adres:</strong> ul. Wybrzeża 1, 80-001 Gdańsk<br/>
                  <strong>Parking:</strong> Bezpłatny parking dla zwiedzających (50 miejsc)
                </p>
              </div>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Dostępność</h2>
            <p>
              Muzeum jest w pełni dostępne dla osób z niepełnosprawnościami:
            </p>
            <ul>
              <li>Winda dla osób poruszających się na wózkach inwalidzkich</li>
              <li>Toalety przystosowane dla osób niepełnosprawnych</li>
              <li>Możliwość zwiedzania z psem przewodnikiem</li>
              <li>Pętle indukcyjne dla osób niedosłyszących</li>
            </ul>
          </section>
          
          <section className="content-section">
            <h2>Oprowadzanie</h2>
            <p>
              Oferujemy profesjonalne oprowadzanie po wystawach w języku polskim, angielskim 
              i niemieckim.
            </p>
            <div className="info-box">
              <h3>Rezerwacja oprowadzania</h3>
              <p>
                Oprowadzanie należy zarezerwować z minimum 3-dniowym wyprzedzeniem.<br/>
                <strong>Koszt:</strong> 80 zł (do 15 osób)<br/>
                <strong>Czas trwania:</strong> ok. 90 minut
              </p>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Regulamin zwiedzania</h2>
            <ul>
              <li>Zakaz fotografowania z użyciem flesza</li>
              <li>Zakaz jedzenia i picia na terenie wystaw</li>
              <li>Zakaz dotykania eksponatów</li>
              <li>Duże plecaki i torby należy pozostawić w szatni</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Visit;
