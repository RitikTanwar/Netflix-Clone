import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Navbar from './Nav';
import Banner from './Banner';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner> Banner</Banner>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
