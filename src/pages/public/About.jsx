import Hero from '../../components/common/Hero';
import './Pages.css';

const About = () => {
  return (
    <div className="about-page">
      <Hero 
        title="O Muzeum"
        subtitle="Historia, misja i wartości Muzeum Wybrzeże 1939"
      />
      
      <div className="page-content">
        <div className="container">
          <section className="content-section">
            <h2>Nasza Historia</h2>
            <p>
              Muzeum Wybrzeże 1939 zostało powołane w celu upamiętnienia bohaterskiej obrony 
              polskiego wybrzeża podczas kampanii wrześniowej 1939 roku. Od momentu naszego 
              powstania w 2015 roku, poświęciliśmy się zbieraniu, zachowaniu i prezentowaniu 
              historii tych dramatycznych wydarzeń.
            </p>
            <p>
              Nasza kolekcja obejmuje tysiące eksponatów, dokumentów, fotografii i przedmiotów 
              osobistych żołnierzy, którzy bronili polskiego wybrzeża. Przez nasze wystawy i 
              programy edukacyjne dotarliśmy już do setek tysięcy odwiedzających z całego świata.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Misja</h2>
            <p>
              Misją Muzeum Wybrzeże 1939 jest:
            </p>
            <ul>
              <li>Upamiętnienie bohaterów obrony polskiego wybrzeża we wrześniu 1939 roku</li>
              <li>Zachowanie i ochrona dziedzictwa historycznego związanego z tym okresem</li>
              <li>Edukacja młodych pokoleń o historii i znaczeniu tych wydarzeń</li>
              <li>Prowadzenie badań naukowych nad kampanią wrześniową na wybrzeżu</li>
              <li>Współpraca z innymi instytucjami zajmującymi się historią II wojny światowej</li>
            </ul>
          </section>
          
          <section className="content-section">
            <h2>Wartości</h2>
            <div className="three-column">
              <div className="info-box">
                <h3>Pamięć</h3>
                <p>
                  Dbamy o pamięć o bohaterach i ich poświęceniu dla ojczyzny.
                </p>
              </div>
              <div className="info-box">
                <h3>Edukacja</h3>
                <p>
                  Przekazujemy wiedzę historyczną w sposób przystępny i angażujący.
                </p>
              </div>
              <div className="info-box">
                <h3>Autentyczność</h3>
                <p>
                  Prezentujemy historię w oparciu o rzetelne źródła i badania naukowe.
                </p>
              </div>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Zespół</h2>
            <p>
              W Muzeum Wybrzeże 1939 pracuje zespół profesjonalistów - historyków, kuratorów, 
              edukatorów i konserwatorów - którzy wspólnie tworzą przestrzeń pamięci i edukacji. 
              Nasz zespół łączy pasja do historii z zaangażowaniem w misję muzeum.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
