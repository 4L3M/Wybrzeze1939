import { useState, useEffect } from 'react';
import Hero from '../../components/common/Hero';
import EventCard from '../../components/common/EventCard';
import { eventsService } from '../../services/dataService';
import './Pages.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventsService.getAll();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);
  
  if (loading) {
    return <div className="loading">Ładowanie wydarzeń...</div>;
  }
  
  return (
    <div className="events-page">
      <Hero 
        title="Wydarzenia"
        subtitle="Wykłady, warsztaty, uroczystości i inne wydarzenia w muzeum"
      />
      
      <div className="page-content">
        <div className="container">
          <div className="cards-grid">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          {events.length === 0 && (
            <p className="text-center text-light">
              Obecnie brak zaplanowanych wydarzeń. Sprawdź ponownie wkrótce.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
