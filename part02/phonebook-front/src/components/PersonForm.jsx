import React from "react";

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addName }) => {
  return (
    <div>
      <h3>Add a new</h3>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;