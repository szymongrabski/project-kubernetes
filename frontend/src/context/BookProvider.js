// src/context/BookContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchBooks } from '../api'; // Adjust the path as needed

const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadBooks() {
            try {
                const booksData = await fetchBooks();
                setBooks(booksData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        loadBooks();
    }, []);

    return (
        <BookContext.Provider value={{ books, setBooks, loading, error }}>
            {children}
        </BookContext.Provider>
    );
};

export { BookProvider, BookContext };
