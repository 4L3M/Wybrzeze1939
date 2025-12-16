import Hero from '../../components/common/Hero';
import './Pages.css';

const Education = () => {
  return (
    <div className="education-page">
      <Hero 
        title="Edukacja"
        subtitle="Programy edukacyjne, warsztaty i materiały dla szkół"
      />
      
      <div className="page-content">
        <div className="container">
          <section className="content-section">
            <h2>Oferta edukacyjna</h2>
            <p>
              Muzeum Wybrzeże 1939 oferuje szeroki wachlarz programów edukacyjnych dla różnych 
              grup wiekowych. Nasze zajęcia łączą wiedzę historyczną z interaktywnymi metodami 
              nauczania.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Programy dla szkół</h2>
            <div className="two-column">
              <div className="info-box">
                <h3>Szkoły podstawowe</h3>
                <p>
                  Warsztaty dostosowane do młodszych uczniów, z elementami zabaw edukacyjnych 
                  i storytellingu historycznego.
                </p>
                <ul>
                  <li>Lekcje muzealne</li>
                  <li>Warsztaty plastyczne</li>
                  <li>Gry historyczne</li>
                </ul>
              </div>
              
              <div className="info-box">
                <h3>Szkoły średnie</h3>
                <p>
                  Pogłębione zajęcia historyczne z wykorzystaniem oryginalnych źródeł i 
                  eksponatów muzealnych.
                </p>
                <ul>
                  <li>Lekcje historii w muzeum</li>
                  <li>Analiza źródeł historycznych</li>
                  <li>Debaty i projekty edukacyjne</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Warsztaty tematyczne</h2>
            <div className="three-column">
              <div className="card">
                <h4>Historia wojskowości</h4>
                <p>
                  Poznaj organizację i wyposażenie polskiej armii w 1939 roku.
                </p>
              </div>
              
              <div className="card">
                <h4>Konserwacja zabytków</h4>
                <p>
                  Zobacz jak pracują konserwatorzy muzealnych eksponatów.
                </p>
              </div>
              
              <div className="card">
                <h4>Fotografia historyczna</h4>
                <p>
                  Warsztaty z analizy i interpretacji fotografii archiwalnych.
                </p>
              </div>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Materiały edukacyjne</h2>
            <p>
              Dla nauczycieli przygotowaliśmy materiały edukacyjne do wykorzystania podczas 
              lekcji historii. Materiały dostępne są do pobrania z naszej strony.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Rezerwacje</h2>
            <div className="info-box">
              <p>
                Aby umówić wizytę dla grupy szkolnej lub zarejestrować się na warsztaty, 
                prosimy o kontakt:
              </p>
              <p>
                <strong>Email:</strong> edukacja@wybrzeze1939.pl<br/>
                <strong>Telefon:</strong> +48 58 123 45 67 (wew. 2)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Education;
