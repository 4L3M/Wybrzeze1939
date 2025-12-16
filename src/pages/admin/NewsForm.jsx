import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { newsService } from '../../services/dataService';
import './AdminPages.css';

const NewsForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Aktualności',
    image: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const loadNews = async () => {
      if (!isEdit) return;
      
      try {
        const data = await newsService.getById(id);
        if (data) {
          setFormData({
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            category: data.category,
            image: data.image || ''
          });
        }
      } catch (error) {
        console.error('Error loading news:', error);
        setError('Nie można załadować aktualności');
      }
    };
    
    loadNews();
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
        await newsService.update(id, formData);
      } else {
        await newsService.create(formData);
      }
      navigate('/admin/news');
    } catch {
      setError('Błąd podczas zapisywania aktualności');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="admin-form-container">
      <h2>{isEdit ? 'Edytuj aktualność' : 'Dodaj nową aktualność'}</h2>
      
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
          <label htmlFor="category">Kategoria *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="Aktualności">Aktualności</option>
            <option value="Wystawy">Wystawy</option>
            <option value="Wydarzenia">Wydarzenia</option>
            <option value="Edukacja">Edukacja</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="excerpt">Krótki opis *</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Treść *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
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
            placeholder="/images/news/example.jpg"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Zapisywanie...' : 'Zapisz'}
          </button>
          <Link to="/admin/news" className="btn btn-outline">
            Anuluj
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;
