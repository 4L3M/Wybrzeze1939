import { Link } from 'react-router-dom';
import './Card.css';

const ExhibitionCard = ({ exhibition }) => {
  const statusText = exhibition.status === 'current' ? 'Aktualna' : 'Archiwalna';
  const statusClass = exhibition.status === 'current' ? 'status-current' : 'status-archive';
  
  return (
    <div className="card exhibition-card">
      {exhibition.image && (
        <div className="card-image">
          <img src={exhibition.image} alt={exhibition.title} />
          <span className={`card-status ${statusClass}`}>{statusText}</span>
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{exhibition.title}</h3>
        <p className="card-excerpt">{exhibition.description}</p>
        {exhibition.endDate && (
          <p className="card-dates text-light text-small">
            {new Date(exhibition.startDate).toLocaleDateString('pl-PL')} - 
            {new Date(exhibition.endDate).toLocaleDateString('pl-PL')}
          </p>
        )}
        <Link to={`/wystawy/${exhibition.id}`} className="btn btn-primary">
          Zobacz wystawę
        </Link>
      </div>
    </div>
  );
};

export default ExhibitionCard;
