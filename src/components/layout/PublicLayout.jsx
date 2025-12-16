import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const PublicLayout = () => {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
