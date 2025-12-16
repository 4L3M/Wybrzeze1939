import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { eventsService } from '../../services/dataService';
import './AdminPages.css';

const EventsForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    type: 'Wykład',
    image: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const loadEvent = async () => {
      if (!isEdit) return;
      
      try {
        const data = await eventsService.getById(id);
        if (data) {
          setFormData(data);
        }
      } catch (error) {
        console.error('Error loading event:', error);
        setError('Nie można załadować wydarzenia');
      }
    };
    
    loadEvent();
  }, [id, isEdit]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (isEdit) {
        await eventsService.update(id, formData);
      } else {
        await eventsService.create(formData);
      }
      navigate('/admin/events');
    } catch {
      setError('Błąd podczas zapisywania wydarzenia');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="admin-form-container">
      <h2>{isEdit ? 'Edytuj wydarzenie' : 'Dodaj nowe wydarzenie'}</h2>
      
      {error && (
        <div className="message message-error">{error}</div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Tytuł *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Data *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="time">Godzina *</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Miejsce *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="type">Typ *</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="Wykład">Wykład</option>
              <option value="Warsztat">Warsztat</option>
              <option value="Uroczystość">Uroczystość</option>
              <option value="Wydarzenie specjalne">Wydarzenie specjalne</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Opis *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">URL zdjęcia</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            disabled={loading}
            placeholder="/images/events/example.jpg"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Zapisywanie...' : 'Zapisz'}
          </button>
          <Link to="/admin/events" className="btn btn-outline">
            Anuluj
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EventsForm;
