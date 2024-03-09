import Header from './components/Header';
import './App.css';
import React,{useState, useEffect} from 'react';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <Header />
      <div className="show-container">
        {shows.map((show) => (
          <div key={show.id} className="show-card">
            <h2>{show.name}</h2>
            <img src={show.image.medium} alt={show.name} />
            <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
