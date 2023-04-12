import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';

export const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<p>Movies</p>}></Route>
        </Routes>
      </div>
    </>
  );
};
