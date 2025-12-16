import { useState, useEffect } from 'react';
import { newsService, eventsService, exhibitionsService } from '../../services/dataService';
import './AdminPages.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    newsCount: 0,
    eventsCount: 0,
    exhibitionsCount: 0
  });
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [news, events, exhibitions] = await Promise.all([
          newsService.getAll(),
          eventsService.getAll(),
          exhibitionsService.getAll()
        ]);
        
        setStats({
          newsCount: news.length,
          eventsCount: events.length,
          exhibitionsCount: exhibitions.length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    
    fetchStats();
  }, []);
  
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="text-light">Witaj w panelu administracyjnym Muzeum Wybrzeże 1939</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.newsCount}</div>
          <div className="stat-label">Aktualności</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-number">{stats.eventsCount}</div>
          <div className="stat-label">Wydarzenia</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-number">{stats.exhibitionsCount}</div>
          <div className="stat-label">Wystawy</div>
        </div>
      </div>
      
      <div className="info-box">
        <h3>Szybki start</h3>
        <p>
          Użyj menu po lewej stronie, aby zarządzać treścią strony. Możesz dodawać, 
          edytować i usuwać aktualności, wydarzenia oraz wystawy.
        </p>
        <ul>
          <li>📰 <strong>Aktualności</strong> - Zarządzaj newsami i wiadomościami</li>
          <li>📅 <strong>Wydarzenia</strong> - Dodawaj i edytuj nadchodzące wydarzenia</li>
          <li>🖼️ <strong>Wystawy</strong> - Zarządzaj wystawami aktualnymi i archiwalnymi</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
