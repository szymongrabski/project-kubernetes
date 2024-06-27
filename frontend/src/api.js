import axios from 'axios';

export const fetchBooks = async () => {
    try {
        const response = await axios.get('http://localhost:8080/books');
        return response.data;
    } catch (error) {
        throw error;
    }
};
