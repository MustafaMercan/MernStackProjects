import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import {NewBook} from "./pages/NewBook";
import {NotFound} from "./pages/NotFound";
import { BookLayout } from "./BookLayout";
import { BookRoutes } from "./BookRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>}/>
      </Routes>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <br/>
          <li><Link to = "/books">Books</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books/*" element={<BookRoutes />}/>



        {/* <Route path="/books" element={<BookList />}/>
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook/>}/> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
