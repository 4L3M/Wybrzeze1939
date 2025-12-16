import { useState, useEffect } from 'react';
import Hero from '../../components/common/Hero';
import NewsCard from '../../components/common/NewsCard';
import { newsService } from '../../services/dataService';
import './Pages.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
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
    
    fetchNews();
  }, []);
  
  if (loading) {
    return <div className="loading">Ładowanie aktualności...</div>;
  }
  
  return (
    <div className="news-page">
      <Hero 
        title="Aktualności"
        subtitle="Najnowsze wiadomości z muzeum"
      />
      
      <div className="page-content">
        <div className="container">
          <div className="cards-grid">
            {news.map(item => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
