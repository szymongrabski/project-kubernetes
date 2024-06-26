import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axios.get('http://bookstore-spring-service:8080/books');
                setBooks(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, []);

    return (
        <BookContext.Provider value={{ books, loading, error }}>
            {children}
        </BookContext.Provider>
    );
};

export { BookProvider, BookContext };
