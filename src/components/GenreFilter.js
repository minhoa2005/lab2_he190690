import React from "react";
import { movies } from "../datas/movies";

export default function GenreFilter({ filter, setFilter }) {
  const getGenres = () => {
    const genres = [];
    movies.forEach((m) => {
      if (!genres.includes(m.genre)) {
        genres.push(m.genre);
      }
    });
    return genres;
  };
  return (
    <select
      className="form-select"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="all">All Genres</option>
      {getGenres().map((g) => (
        <option key={g} value={g}>
          {g}
        </option>
      ))}
    </select>
  );
}
