import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookService from "./server/phonebook";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [errorMessage, setErrorMessage] = useState("...");

  useEffect(() => {
    phonebookService.getAll().then((initialPhonebook) => {
      setPersons(initialPhonebook);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const existName = persons.find((person) => person.name === newName);
    if (existName) {
      const ok = window.confirm(
        `${newName} is already added to the phonebook. Replace the old number with a new one?`
      );

      if (ok) {
        const updatedPerson = { ...existName, number: newNumber };
        phonebookService
          .update(existName.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existName.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      };
      phonebookService.create(nameObject).then((returnedPhonebook) => {
        setPersons(persons.concat(returnedPhonebook));
        {
          setErrorMessage(`Added ${newName}`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        }

        setNewName("");
        setNewNumber("");
      })
      .catch(error => {
        setErrorMessage(error.response.data.error);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
    }
    
  };

  const removePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    if (person) {
      const ok = window.confirm(`Remove ${person.name} from phonebook?`);
      if (ok) {
        phonebookService.deleted(id).then(() => {
          setPersons(persons.filter((p) => p.id !== id));
        });
      }
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setFilterName(event.target.value);
  };

  const filterPersons = persons.filter(
    (person) =>
      person &&
      person.name &&
      person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <Filter filterName={filterName} handleSearchChange={handleSearchChange} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <Persons filterPersons={filterPersons} removePerson={removePerson} />
    </div>
  );
};

export default App;
