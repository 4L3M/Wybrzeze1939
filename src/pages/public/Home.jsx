import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/common/Hero';
import NewsCard from '../../components/common/NewsCard';
import EventCard from '../../components/common/EventCard';
import { newsService, eventsService } from '../../services/dataService';
import './Pages.css';

const Home = () => {
  const [recentNews, setRecentNews] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [news, events] = await Promise.all([
          newsService.getRecent(3),
          eventsService.getUpcoming(3)
        ]);
        setRecentNews(news);
        setUpcomingEvents(events);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) {
    return <div className="container" style={{ padding: '2rem' }}>Ładowanie...</div>;
  }
  
  return (
    <div className="home-page">
      <Hero 
        title="Muzeum Wybrzeże 1939"
        subtitle="Pamięć o bohaterskiej obronie polskiego wybrzeża we wrześniu 1939 roku"
        backgroundImage="hero-background"
      />
      
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <h2>Witamy w Muzeum Wybrzeże 1939</h2>
            <p className="lead">
              Nasza instytucja jest poświęcona upamiętnieniu heroicznej obrony polskiego wybrzeża 
              podczas kampanii wrześniowej 1939 roku. Prezentujemy unikalne zbiory, organizujemy 
              wystawy i wydarzenia edukacyjne.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2>Najnowsze aktualności</h2>
            <Link to="/aktualnosci" className="btn btn-outline">
              Zobacz wszystkie
            </Link>
          </div>
          
          <div className="cards-grid">
            {recentNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Nadchodzące wydarzenia</h2>
            <Link to="/wydarzenia" className="btn btn-outline">
              Zobacz wszystkie
            </Link>
          </div>
          
          <div className="cards-grid">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-alt">
        <div className="container text-center">
          <h2>Zaplanuj swoją wizytę</h2>
          <p className="lead mb-lg">
            Zapraszamy do odwiedzenia naszego muzeum. Sprawdź godziny otwarcia, 
            ceny biletów i dojazd.
          </p>
          <Link to="/zwiedzanie" className="btn btn-primary">
            Informacje dla zwiedzających
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
