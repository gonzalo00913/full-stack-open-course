import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { gql, useQuery, useMutation} from '@apollo/client';
import Navbar from "./components/Navbar";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { ALL_AUTHORS, ALL_BOOKS } from "./queries";

const App = () => {
  const resultBooks = useQuery(ALL_BOOKS);
  const resultAuthors = useQuery(ALL_AUTHORS);

  if (resultBooks.loading || resultAuthors.loading) {
    return <div>Loading...</div>;
  }

  if (resultBooks.error || resultAuthors.error) {
    return <div>Error: {resultBooks.error?.message || resultAuthors.error?.message}</div>;
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/authors" element={<Authors authors={resultAuthors.data.allAuthors} />} />
          <Route path="/books" element={<Books books={resultBooks.data.allBooks} />} />
          <Route path="/create" element={<NewBook />} />
          <Route path="/" element={<Navigate to="/books" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
