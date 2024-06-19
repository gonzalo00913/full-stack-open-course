import React from "react";

const Persons = ({ filterPersons, removePerson }) => {
  return (
    <div>
      <h3>Numbers</h3>
      <ul>
        {filterPersons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => removePerson(person.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;