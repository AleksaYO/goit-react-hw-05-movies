import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Header from './Header/Header';
import Home from './Home/Home';
import MovieDetails from "./Movie'sDetails/Details";
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<p>Movies</p>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
