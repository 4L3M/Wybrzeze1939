import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventsService } from '../../services/dataService';
import './AdminPages.css';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetchEvents();
  }, []);
  
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
  
  const handleDelete = async (id) => {
    if (!window.confirm('Czy na pewno chcesz usunąć to wydarzenie?')) {
      return;
    }
    
    try {
      await eventsService.delete(id);
      setMessage('Wydarzenie zostało usunięte');
      fetchEvents();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting event:', error);
      setMessage('Błąd podczas usuwania wydarzenia');
    }
  };
  
  if (loading) {
    return <div className="loading">Ładowanie...</div>;
  }
  
  return (
    <div>
      <div className="admin-list-header">
        <h1>Zarządzanie wydarzeniami</h1>
        <Link to="/admin/events/new" className="btn btn-primary">
          + Dodaj wydarzenie
        </Link>
      </div>
      
      {message && (
        <div className={`message ${message.includes('Błąd') ? 'message-error' : 'message-success'}`}>
          {message}
        </div>
      )}
      
      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Tytuł</th>
              <th>Data</th>
              <th>Typ</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{new Date(event.date).toLocaleDateString('pl-PL')} {event.time}</td>
                <td>{event.type}</td>
                <td>
                  <div className="table-actions">
                    <Link to={`/admin/events/edit/${event.id}`} className="btn btn-secondary btn-small">
                      Edytuj
                    </Link>
                    <button 
                      onClick={() => handleDelete(event.id)} 
                      className="btn btn-small"
                      style={{ backgroundColor: 'var(--color-danger)', color: 'white' }}
                    >
                      Usuń
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsList;
