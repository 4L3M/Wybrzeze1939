import Hero from '../../components/common/Hero';
import './Pages.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Hero 
        title="Kontakt"
        subtitle="Skontaktuj się z nami"
      />
      
      <div className="page-content">
        <div className="container">
          <section className="content-section">
            <h2>Dane kontaktowe</h2>
            <div className="two-column">
              <div className="info-box">
                <h3>Adres</h3>
                <p>
                  Muzeum Wybrzeże 1939<br/>
                  ul. Wybrzeża 1<br/>
                  80-001 Gdańsk<br/>
                  Polska
                </p>
              </div>
              
              <div className="info-box">
                <h3>Kontakt ogólny</h3>
                <p>
                  <strong>Telefon:</strong> +48 58 123 45 67<br/>
                  <strong>Email:</strong> kontakt@wybrzeze1939.pl<br/>
                  <strong>Fax:</strong> +48 58 123 45 68
                </p>
              </div>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Działy</h2>
            <div className="two-column">
              <div className="card">
                <h4>Dział Edukacji</h4>
                <p>
                  Zapisy na warsztaty i lekcje muzealne<br/>
                  <strong>Tel:</strong> +48 58 123 45 67 wew. 2<br/>
                  <strong>Email:</strong> edukacja@wybrzeze1939.pl
                </p>
              </div>
              
              <div className="card">
                <h4>Dział Zbiorów</h4>
                <p>
                  Darowizny, depozyty, badania naukowe<br/>
                  <strong>Tel:</strong> +48 58 123 45 67 wew. 3<br/>
                  <strong>Email:</strong> zbiory@wybrzeze1939.pl
                </p>
              </div>
              
              <div className="card">
                <h4>Rezerwacje</h4>
                <p>
                  Rezerwacje dla grup i oprowadzanie<br/>
                  <strong>Tel:</strong> +48 58 123 45 67 wew. 4<br/>
                  <strong>Email:</strong> rezerwacje@wybrzeze1939.pl
                </p>
              </div>
              
              <div className="card">
                <h4>Prasowe i medialne</h4>
                <p>
                  Kontakt dla mediów<br/>
                  <strong>Tel:</strong> +48 58 123 45 67 wew. 5<br/>
                  <strong>Email:</strong> media@wybrzeze1939.pl
                </p>
              </div>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Godziny pracy biura</h2>
            <p>
              Poniedziałek - Piątek: 8:00 - 16:00
            </p>
          </section>
          
          <section className="content-section">
            <h2>Media społecznościowe</h2>
            <p>
              Śledź nas w mediach społecznościowych, aby być na bieżąco z aktualnościami 
              i wydarzeniami:
            </p>
            <ul>
              <li>Facebook: /MuzeumWybrzeze1939</li>
              <li>Instagram: @wybrzeze1939</li>
              <li>Twitter: @Wybrzeze1939</li>
            </ul>
          </section>
          
          <section className="content-section">
            <h2>Napisz do nas</h2>
            <div className="info-box">
              <p>
                Jeśli masz pytania lub sugestie, skorzystaj z naszego formularza kontaktowego 
                lub napisz bezpośrednio na adres: kontakt@wybrzeze1939.pl
              </p>
              <p className="text-light text-small">
                Staramy się odpowiadać na wszystkie wiadomości w ciągu 48 godzin roboczych.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
