import { Link } from 'react-router-dom';
import './Card.css';

const NewsCard = ({ news }) => {
  return (
    <div className="card news-card">
      {news.image && (
        <div className="card-image">
          <img src={news.image} alt={news.title} />
        </div>
      )}
      <div className="card-content">
        <div className="card-meta">
          <span className="card-date">{new Date(news.date).toLocaleDateString('pl-PL')}</span>
          <span className="card-category">{news.category}</span>
        </div>
        <h3 className="card-title">{news.title}</h3>
        <p className="card-excerpt">{news.excerpt}</p>
        <Link to={`/aktualnosci/${news.id}`} className="btn btn-outline">
          Czytaj więcej
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
