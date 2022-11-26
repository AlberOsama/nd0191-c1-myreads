import Shelf from "../components/Shelf";
import { Link } from "react-router-dom";

const HomePage = ({ books, moveBook }) => {
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
            moveBook={moveBook}
          />
          <Shelf
            title={"Want to Read"}
            books={books.filter((book) => book.shelf === "wantToRead")}
            moveBook={moveBook}
          />
          <Shelf
            title={"Read"}
            books={books.filter((book) => book.shelf === "read")}
            moveBook={moveBook}
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
