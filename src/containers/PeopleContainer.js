import React from 'react';
import PersonCard from '../components/PersonCard.js';

const PeopleContainer = ({ people }) => {
  
  const renderPersonCard = () => {
    return people?.map((person) => (
      <PersonCard key={person.id} person={person} />
    ));
  };

  return (
    <div style={{ width: '100%' }}>
      <div>{renderPersonCard()}</div>
    </div>
  );
};
export default PeopleContainer;
