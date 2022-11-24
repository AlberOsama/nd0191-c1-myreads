import Shelf from "../components/Shelf";
import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";

const HomePage = ({ onClick }) => {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    setBooks(await getAll());
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
          />
          <Shelf
            title={"Want to Read"}
            books={books.filter((book) => book.shelf === "wantToRead")}
          />
          <Shelf
            title={"Read"}
            books={books.filter((book) => book.shelf === "read")}
          />
        </div>
      </div>
      <div className="open-search">
        <a onClick={onClick}>Add a book</a>
      </div>
    </div>
  );
};
export default HomePage;
