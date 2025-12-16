import { Outlet, Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/dataService';
import './AdminLayout.css';

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();
  
  const handleLogout = async () => {
    await authService.logout();
    navigate('/admin/login');
  };
  
  if (!user) {
    navigate('/admin/login');
    return null;
  }
  
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Panel Administracyjny</h2>
          <p className="text-light text-small">Muzeum Wybrzeże 1939</p>
        </div>
        
        <nav className="admin-nav">
          <Link to="/admin" className="admin-nav-link">
            <span>📊</span> Dashboard
          </Link>
          <Link to="/admin/news" className="admin-nav-link">
            <span>📰</span> Aktualności
          </Link>
          <Link to="/admin/events" className="admin-nav-link">
            <span>📅</span> Wydarzenia
          </Link>
          <Link to="/admin/exhibitions" className="admin-nav-link">
            <span>🖼️</span> Wystawy
          </Link>
        </nav>
        
        <div className="admin-user">
          <p>Zalogowano jako: <strong>{user.username}</strong></p>
          <button onClick={handleLogout} className="btn btn-secondary">
            Wyloguj
          </button>
        </div>
      </aside>
      
      <div className="admin-content">
        <div className="admin-header">
          <Link to="/" className="btn btn-outline">
            ← Powrót do strony głównej
          </Link>
        </div>
        
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
