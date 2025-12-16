import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Exhibitions from './pages/public/Exhibitions';
import Events from './pages/public/Events';
import Education from './pages/public/Education';
import Collections from './pages/public/Collections';
import Visit from './pages/public/Visit';
import News from './pages/public/News';
import Contact from './pages/public/Contact';

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import NewsList from './pages/admin/NewsList';
import NewsForm from './pages/admin/NewsForm';
import EventsList from './pages/admin/EventsList';
import EventsForm from './pages/admin/EventsForm';
import ExhibitionsList from './pages/admin/ExhibitionsList';
import ExhibitionsForm from './pages/admin/ExhibitionsForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="o-muzeum" element={<About />} />
          <Route path="wystawy" element={<Exhibitions />} />
          <Route path="wydarzenia" element={<Events />} />
          <Route path="edukacja" element={<Education />} />
          <Route path="zbiory" element={<Collections />} />
          <Route path="zwiedzanie" element={<Visit />} />
          <Route path="aktualnosci" element={<News />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
        
        {/* Admin Login (without layout) */}
        <Route path="/admin/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          
          {/* News Management */}
          <Route path="news" element={<NewsList />} />
          <Route path="news/new" element={<NewsForm />} />
          <Route path="news/edit/:id" element={<NewsForm />} />
          
          {/* Events Management */}
          <Route path="events" element={<EventsList />} />
          <Route path="events/new" element={<EventsForm />} />
          <Route path="events/edit/:id" element={<EventsForm />} />
          
          {/* Exhibitions Management */}
          <Route path="exhibitions" element={<ExhibitionsList />} />
          <Route path="exhibitions/new" element={<ExhibitionsForm />} />
          <Route path="exhibitions/edit/:id" element={<ExhibitionsForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
