import { Link } from 'react-router-dom';
import './Card.css';

const EventCard = ({ event }) => {
  return (
    <div className="card event-card">
      {event.image && (
        <div className="card-image">
          <img src={event.image} alt={event.title} />
        </div>
      )}
      <div className="card-content">
        <div className="card-meta">
          <span className="card-date">
            {new Date(event.date).toLocaleDateString('pl-PL')} | {event.time}
          </span>
          <span className="card-category">{event.type}</span>
        </div>
        <h3 className="card-title">{event.title}</h3>
        <p className="card-excerpt">{event.description}</p>
        <p className="card-location">
          <strong>Miejsce:</strong> {event.location}
        </p>
        <Link to={`/wydarzenia/${event.id}`} className="btn btn-accent">
          Szczegóły
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
