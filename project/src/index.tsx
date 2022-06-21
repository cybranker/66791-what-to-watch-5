import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const Film = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App currentFilm={Film} />
  </React.StrictMode>,
  document.getElementById('root'));
