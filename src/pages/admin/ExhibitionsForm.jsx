import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { exhibitionsService } from '../../services/dataService';
import './AdminPages.css';

const ExhibitionsForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    status: 'current',
    startDate: '',
    endDate: '',
    image: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const loadExhibition = async () => {
      if (!isEdit) return;
      
      try {
        const data = await exhibitionsService.getById(id);
        if (data) {
          setFormData({
            title: data.title,
            description: data.description,
            longDescription: data.longDescription,
            status: data.status,
            startDate: data.startDate,
            endDate: data.endDate || '',
            image: data.image || ''
          });
        }
      } catch (error) {
        console.error('Error loading exhibition:', error);
        setError('Nie można załadować wystawy');
      }
    };
    
    loadExhibition();
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
        await exhibitionsService.update(id, formData);
      } else {
        await exhibitionsService.create(formData);
      }
      navigate('/admin/exhibitions');
    } catch {
      setError('Błąd podczas zapisywania wystawy');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="admin-form-container">
      <h2>{isEdit ? 'Edytuj wystawę' : 'Dodaj nową wystawę'}</h2>
      
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
        
        <div className="form-group">
          <label htmlFor="status">Status *</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="current">Aktualna</option>
            <option value="archive">Archiwalna</option>
          </select>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Data rozpoczęcia *</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="endDate">Data zakończenia</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Krótki opis *</label>
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
          <label htmlFor="longDescription">Pełny opis *</label>
          <textarea
            id="longDescription"
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            required
            disabled={loading}
            style={{ minHeight: '200px' }}
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
            placeholder="/images/exhibitions/example.jpg"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Zapisywanie...' : 'Zapisz'}
          </button>
          <Link to="/admin/exhibitions" className="btn btn-outline">
            Anuluj
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ExhibitionsForm;
