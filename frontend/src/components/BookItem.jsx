import React from "react";

const BookItem = ({ book }) => {
    const { title, subtitle, authors, image } = book
    return (
        <div className="book-content">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={image} alt="book" />
            <p>{authors}</p>
        </div>
    );
};

export default BookItem;
