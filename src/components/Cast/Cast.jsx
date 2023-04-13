// import CastList from 'Api/castApi';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import CastList from 'Api/castApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'http://image.tmdb.org/t/p/w154';

const Cast = () => {
  const [actors, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    CastList(movieId).then(setCasts);
  }, [movieId]);

  return (
    // console.log(actors.cast), (<p>12313123</p>)
    actors.cast && (
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {actors.cast.map(item => {
          return (
            <li
              style={{
                padding: '5px',
                border: '1px solid black',
              }}
              key={item.id}
            >
              <img
                width={154}
                height={231}
                src={
                  item.profile_path
                    ? `${BASE_URL + item.profile_path}`
                    : 'https://cdn.pixabay.com/photo/2018/04/04/13/41/woman-3289818_960_720.jpg'
                }
                alt=""
              />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Cast;
