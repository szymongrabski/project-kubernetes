import logo from './logo.svg';
import './App.css';
import { BookProvider } from './context/BookProvider';
import BookList from './components/BooksList';
import AddBookForm from './components/AddBookForm';

function App() {
  return (
    <BookProvider>
      <div className="App">
        <AddBookForm />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
