import Shelf from "../components/Shelf";
import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";
import { Link } from "react-router-dom";

const HomePage = ({}) => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    setBooks(await getAll());
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            title={"Currently Reading"}
            books={books.filter((book) => book.shelf === "currentlyReading")}
            onShelfChange={fetchBooks}
          />
          <Shelf
            title={"Want to Read"}
            books={books.filter((book) => book.shelf === "wantToRead")}
            onShelfChange={fetchBooks}
          />
          <Shelf
            title={"Read"}
            books={books.filter((book) => book.shelf === "read")}
            onShelfChange={fetchBooks}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to={"search"}></Link>
      </div>
    </div>
  );
};
export default HomePage;
