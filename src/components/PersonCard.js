import React from 'react';
import API from '../API';

const PersonCard = ({ person }) => {
  const [films, setFilms] = React.useState([]);
  console.log(person);

  React.useEffect(() => {
    person?.films?.map((film) =>
      API.getFilms(film)
        .then((films) => setFilms(films))
        // .then((films) => console.log(films))
        .catch((error) => console.error(error))
    );
  }, [person?.films]);

  const renderFilms = () => {
    return films?.map((f) => <li key={f.title}>{f.title}</li>);
  };

  return (
    <div>
      <div>
        <h3>{person.name}</h3>
        <h4>{person.height}</h4>
      </div>
      <ul>{renderFilms()}</ul>
    </div>
  );
};
export default PersonCard;
