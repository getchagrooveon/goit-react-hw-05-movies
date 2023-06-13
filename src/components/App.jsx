import { Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import Home from './Home';
import Movie from './Movie';
import Cast from './Cast';
import Reviews from './Reviews';
import SharedLayout from './SharedLayout';
import NoPage from './NoPage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'flex-start',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NoPage to={'/'} />} />
        </Route>
      </Routes>
    </div>
  );
};
