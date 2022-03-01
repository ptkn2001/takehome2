import React from 'react';

const Physician = (props) => {

  return <div>
      <h2>Physicians</h2>
      <ul>
        {props.physicians.map((physician) => (
            <li key={physician._id}>{physician.name}</li>
        ))}
      </ul>
  </div>;
};

export default Physician;
