import Button from "../Button/Button";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const handleSearch = (searchTerm) => {};
  return (
    <div className="app__header">
      <div className="app__header-brand">
        <Link to="/">
          <h1>DEV@Deakin</h1>
        </Link>
      </div>
      <Search onSearch={handleSearch} />
      <div className="app__header-buttons">
        <Link to="/post">
          <Button>Post</Button>
        </Link>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
