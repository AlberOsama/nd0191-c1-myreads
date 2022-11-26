import Book from "./Book";

const Shelf = ({ title, books, moveBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} moveBook={moveBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
