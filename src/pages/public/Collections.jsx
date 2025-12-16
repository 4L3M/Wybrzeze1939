import Hero from '../../components/common/Hero';
import './Pages.css';

const Collections = () => {
  return (
    <div className="collections-page">
      <Hero 
        title="Zbiory"
        subtitle="Nasze kolekcje muzealne i archiwum"
      />
      
      <div className="page-content">
        <div className="container">
          <section className="content-section">
            <h2>O naszych zbiorach</h2>
            <p>
              Muzeum Wybrzeże 1939 posiada jedną z najważniejszych kolekcji poświęconych 
              obronie polskiego wybrzeża we wrześniu 1939 roku. Nasze zbiory liczą ponad 
              10 000 eksponatów, w tym dokumenty, fotografie, pamiątki osobiste żołnierzy, 
              uzbrojenie i wyposażenie wojskowe.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Kategorie zbiorów</h2>
            <div className="two-column">
              <div className="info-box">
                <h3>Broń i wyposażenie wojskowe</h3>
                <p>
                  Kolekcja obejmuje broń strzelecką, broń białą, umundurowanie oraz wyposażenie 
                  polskich i niemieckich jednostek wojskowych.
                </p>
              </div>
              
              <div className="info-box">
                <h3>Dokumenty i fotografie</h3>
                <p>
                  Archiwum zawiera dokumenty wojskowe, korespondencję, rozkazy oraz zbiór 
                  ponad 5000 fotografii z okresu kampanii wrześniowej.
                </p>
              </div>
              
              <div className="info-box">
                <h3>Pamiątki osobiste</h3>
                <p>
                  Przedmioty osobiste żołnierzy - listy, pamiętniki, odznaczenia, 
                  fotografie rodzinne i inne pamiątki.
                </p>
              </div>
              
              <div className="info-box">
                <h3>Modele i makiety</h3>
                <p>
                  Szczegółowe modele okrętów, fortyfikacji i pola bitwy oraz makiety 
                  przedstawiające przebieg walk.
                </p>
              </div>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Digitalizacja zbiorów</h2>
            <p>
              Prowadzimy systematyczną digitalizację naszych zbiorów, aby udostępnić je 
              szerszemu gronu odbiorców. Cyfrowe archiwum dokumentów i fotografii jest 
              dostępne dla badaczy i osób zainteresowanych historią.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Darowizny i depozyty</h2>
            <p>
              Zapraszamy do współpracy osoby posiadające przedmioty związane z historią 
              polskiego wybrzeża w 1939 roku. Przyjmujemy darowizny oraz depozyty przedmiotów 
              historycznych.
            </p>
            <div className="info-box">
              <h3>Kontakt w sprawie darowizn</h3>
              <p>
                <strong>Email:</strong> zbiory@wybrzeze1939.pl<br/>
                <strong>Telefon:</strong> +48 58 123 45 67 (wew. 3)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Collections;
