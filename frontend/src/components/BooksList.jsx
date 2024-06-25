import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';
import BookItem from './BookItem';

function BooksList() {
    const { books, loading, error } = useContext(BookContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul className='books-container'>
            {books.map(book => (
                <li className="book-item" key={book.id}>
                    <BookItem book={book}/>
                </li>
            ))}
        </ul>
    );
}

export default BooksList;
