import { useState } from 'react';
import {useMutation } from "@apollo/client";
import { EDIT_AUTHOR } from '../queries';
import Select from 'react-select';


const Authors = ({ authors }) => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [born, setBorn] = useState('');
  const [editAuthor, { error }] = useMutation(EDIT_AUTHOR);

  const submit = async (event) => {
    event.preventDefault();
    if (selectedAuthor) {
      await editAuthor({ variables: { name: selectedAuthor.value, born: parseInt(born) } });
      setSelectedAuthor(null);
      setBorn('');
    }
  };

  const authorOptions = authors.map(a => ({ value: a.name, label: a.name }));

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Set birth year</h3>
      <form onSubmit={submit}>
        <div>
          <Select
            value={selectedAuthor}
            onChange={setSelectedAuthor}
            options={authorOptions}
            placeholder="Select author"
          />
        </div>
        <div>
          born
          <input
            type="number"
            value={born}
            onChange={({ target }) => setBorn(target.value)}
            disabled={!selectedAuthor}
          />
        </div>
        <button type="submit" disabled={!selectedAuthor || !born}>update author</button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Authors;
