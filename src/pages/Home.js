import React from 'react';
import API from '../API';
import PeopleContainer from '../containers/PeopleContainer.js';

const Home = () => {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    API.getAllPeople()
      .then((data) => setPeople(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        <h2>PEOPLE</h2>
        <PeopleContainer people={people} />
      </div>
      <div>
        <h2>people object</h2>
        <pre>{JSON.stringify(people, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Home;
