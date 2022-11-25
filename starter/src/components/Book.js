import { update } from "../BooksAPI";

const Book = ({ book, onBookChange }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks
              ? `url("${book.imageLinks.smallThumbnail}")`
              : "",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf ? book.shelf : "none"}
            onChange={async (e) => {
              const shelf = e.target.value;

              await update(book, shelf);
              if (onBookChange) {
                onBookChange();
              }
            }}
          >
            <option value="x" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && (
        <div className="book-authors">{book.authors.join()}</div>
      )}
    </div>
  );
};
export default Book;
