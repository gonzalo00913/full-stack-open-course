import { Link } from "react-router-dom";

const Navbar = () => {
  const padding = {
    paddingRight: 10,
  };

  return (
    <div>
      <Link style={padding} to="/authors">
        Authors
      </Link>
      <Link style={padding} to="/books">
        Books
      </Link>
      <Link style={padding} to="/create">
        Create New
      </Link>
    </div>
  );
};

export default Navbar;
