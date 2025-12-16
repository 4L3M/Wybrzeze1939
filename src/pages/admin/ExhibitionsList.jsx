import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { exhibitionsService } from '../../services/dataService';
import './AdminPages.css';

const ExhibitionsList = () => {
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetchExhibitions();
  }, []);
  
  const fetchExhibitions = async () => {
    try {
      const data = await exhibitionsService.getAll();
      setExhibitions(data);
    } catch (error) {
      console.error('Error fetching exhibitions:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (id) => {
    if (!window.confirm('Czy na pewno chcesz usunąć tę wystawę?')) {
      return;
    }
    
    try {
      await exhibitionsService.delete(id);
      setMessage('Wystawa została usunięta');
      fetchExhibitions();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting exhibition:', error);
      setMessage('Błąd podczas usuwania wystawy');
    }
  };
  
  if (loading) {
    return <div className="loading">Ładowanie...</div>;
  }
  
  return (
    <div>
      <div className="admin-list-header">
        <h1>Zarządzanie wystawami</h1>
        <Link to="/admin/exhibitions/new" className="btn btn-primary">
          + Dodaj wystawę
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
              <th>Status</th>
              <th>Data rozpoczęcia</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {exhibitions.map(exhibition => (
              <tr key={exhibition.id}>
                <td>{exhibition.title}</td>
                <td>
                  <span style={{ 
                    color: exhibition.status === 'current' ? 'var(--color-success)' : 'var(--color-text-light)' 
                  }}>
                    {exhibition.status === 'current' ? 'Aktualna' : 'Archiwalna'}
                  </span>
                </td>
                <td>{new Date(exhibition.startDate).toLocaleDateString('pl-PL')}</td>
                <td>
                  <div className="table-actions">
                    <Link to={`/admin/exhibitions/edit/${exhibition.id}`} className="btn btn-secondary btn-small">
                      Edytuj
                    </Link>
                    <button 
                      onClick={() => handleDelete(exhibition.id)} 
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

export default ExhibitionsList;
