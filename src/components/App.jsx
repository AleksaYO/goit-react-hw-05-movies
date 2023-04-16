import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Header from './Header/Header';
import Layout from './Layout/Layout';
// import Home from './Home/Home';
import MovieDetails from "./Movie'sDetails/Details";
import NotFound from './NotFound/NotFound';
import Reviews from './Reviews/Reviews';
import Movies from './Movies/Movies';

const Home = lazy(() => import('./Home/Home'));

export const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/goit-react-hw-05-movies" element={<Layout />}></Route>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
