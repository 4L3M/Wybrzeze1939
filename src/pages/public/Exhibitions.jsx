import { useState, useEffect } from 'react';
import Hero from '../../components/common/Hero';
import ExhibitionCard from '../../components/common/ExhibitionCard';
import { exhibitionsService } from '../../services/dataService';
import './Pages.css';

const Exhibitions = () => {
  const [currentExhibitions, setCurrentExhibitions] = useState([]);
  const [archiveExhibitions, setArchiveExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const [current, archive] = await Promise.all([
          exhibitionsService.getCurrent(),
          exhibitionsService.getArchive()
        ]);
        setCurrentExhibitions(current);
        setArchiveExhibitions(archive);
      } catch (error) {
        console.error('Error fetching exhibitions:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchExhibitions();
  }, []);
  
  if (loading) {
    return <div className="loading">Ładowanie wystaw...</div>;
  }
  
  return (
    <div className="exhibitions-page">
      <Hero 
        title="Wystawy"
        subtitle="Odkryj nasze wystawy stałe i czasowe"
      />
      
      <div className="page-content">
        <div className="container">
          <section className="content-section">
            <h2>Wystawy aktualne</h2>
            <div className="cards-grid">
              {currentExhibitions.map(exhibition => (
                <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
              ))}
            </div>
          </section>
          
          {archiveExhibitions.length > 0 && (
            <section className="content-section">
              <h2>Archiwum wystaw</h2>
              <div className="cards-grid">
                {archiveExhibitions.map(exhibition => (
                  <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
