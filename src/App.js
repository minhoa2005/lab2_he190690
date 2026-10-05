import logo from "./logo.svg";
import "./App.css";
import { ThemeContext, ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import { useEffect, useRef, useState } from "react";
import { movies } from "./datas/movies";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("all");
  const searchRef = useRef(null);
  const [favorite, setFavorite] = useLocalStorage("favorite", []);
  const filter = () => {
    return movies.filter((m) => {
      const searchResult =
        search === "" || m.title.toLowerCase().includes(search.toLowerCase());
      const genre = filterGenre === "all" || filterGenre === m.genre;
      return searchResult && genre;
    });
  };
  return (
    <ThemeProvider>
      <div className="container">
        <Header />
        <div>
          <SearchBar ref={searchRef} search={search} setSearch={setSearch} />
          <div className="d-flex flex-row ">
            <GenreFilter filter={filterGenre} setFilter={setFilterGenre} />
            <select className="form-select">
              <option>Mặc định</option>
              <option>Rating Cao</option>
              <option>Rating thấp</option>
            </select>
          </div>
        </div>
        <MovieList list={filter()} />
      </div>
    </ThemeProvider>
  );
}

export default App;
