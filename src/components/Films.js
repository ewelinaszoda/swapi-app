import React from 'react';
import API from '../API';

const Films = () => {
  const [films, setFilms] = React.useState([]);

  // React.useEffect(() => {
  //   person?.films?.map((film) =>
  //     API.getFilms(film)
  //       .then((films) => setFilms(films))
  //       // .then((films) => console.log(films))
  //       .catch((error) => console.error(error))
  //   );
  // }, [person?.films]);

  React.useEffect(() => {
    API.getFilmList(films).then((res) => setFilms(res));
  });

  // const getFilmList = (films) => {
  //   const allFilms = films.map((films) => {
  //     return fetch(films).then((response) => response.json());
  //   });

  //   return Promise.all(allFilms);
  // };

  const renderFilms = () => {
    return films?.map((film) => <li key={film.title}>{film.title}</li>);
  };

  return (
    <div>
      <ul>{renderFilms()}</ul>
    </div>
  );
};
export default Films;
