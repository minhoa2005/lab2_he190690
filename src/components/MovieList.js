import React, { useState } from "react";
import { movies } from "../datas/movies";
import { Button, Table } from "react-bootstrap";
import MovieDetail from "./MovieDetail";

export default function MovieList({ list, favorite, setFavorite }) {
  const [selected, setSelected] = useState(null);
  const [fav, setFav] = useState([]);
  return (
    <div className="container border mt-3 rounded p-3">
      <div className="d-flex flex-row gap-3">
        <p>Tổng: {movies.length}</p>
        <p>Yêu thích: {fav.length}</p>
        <p>Đang hiển thị: {list.length}</p>
      </div>
      {list.map((m) => (
        <div className="d-flex flex-row justify-content-between ">
          <div>
            <p>{m.title}</p>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row gap-3 justify-content-evenly">
              <p>{m.genre}</p>
              <p>{m.year}</p>
              <p>{m.rating}</p>
            </div>
            <div className="d-flex flex-row gap-2">
              <Button
                onClick={() => {
                  const find = fav.includes(m.id);
                  if (!find) {
                    setFav([...fav, m.id]);
                  } else {
                    setFav(fav.filter((id) => id !== m.id));
                  }
                }}
              >
                {fav.includes(m.id) ? "Bỏ yêu thích" : "Yêu thích"}
              </Button>
              <Button onClick={() => setSelected(m)}>Chi tiết</Button>
            </div>
          </div>
        </div>
      ))}
      {selected !== null && (
        <MovieDetail selectedMovie={selected} setSelected={setSelected} />
      )}
    </div>
  );
}
