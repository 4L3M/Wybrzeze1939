import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsService } from '../../services/dataService';
import './AdminPages.css';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetchNews();
  }, []);
  
  const fetchNews = async () => {
    try {
      const data = await newsService.getAll();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (id) => {
    if (!window.confirm('Czy na pewno chcesz usunąć tę aktualność?')) {
      return;
    }
    
    try {
      await newsService.delete(id);
      setMessage('Aktualność została usunięta');
      fetchNews();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting news:', error);
      setMessage('Błąd podczas usuwania aktualności');
    }
  };
  
  if (loading) {
    return <div className="loading">Ładowanie...</div>;
  }
  
  return (
    <div>
      <div className="admin-list-header">
        <h1>Zarządzanie aktualnościami</h1>
        <Link to="/admin/news/new" className="btn btn-primary">
          + Dodaj aktualność
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
              <th>Kategoria</th>
              <th>Data</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {news.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{new Date(item.date).toLocaleDateString('pl-PL')}</td>
                <td>
                  <div className="table-actions">
                    <Link to={`/admin/news/edit/${item.id}`} className="btn btn-secondary btn-small">
                      Edytuj
                    </Link>
                    <button 
                      onClick={() => handleDelete(item.id)} 
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

export default NewsList;
