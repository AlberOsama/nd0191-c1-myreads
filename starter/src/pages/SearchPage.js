import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "../components/Book";

const SearchPage = ({ onClick }) => {
  const [query, setQuery] = useState("");

  const [books, setBooks] = useState([]);
  useEffect(async () => {
    if (query === "") return;
    setBooks(await search(query, 20));
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.title}>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
