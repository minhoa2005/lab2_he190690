import React from "react";
import { Button, Table } from "react-bootstrap";

export default function MovieDetail({ selectedMovie, setSelected }) {
  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        <Table>
          <td>
            <tr>Title:</tr>
            <tr>Genre:</tr>
            <tr>Year:</tr>
            <tr>Rating:</tr>
            <tr>Director:</tr>
            <tr>Duration:</tr>
            <tr>Description:</tr>
          </td>
          <td>
            <tr>{selectedMovie.title}</tr>
            <tr>{selectedMovie.genre}</tr>
            <tr>{selectedMovie.year}</tr>
            <tr>{selectedMovie.rating}</tr>
            <tr>{selectedMovie.director}</tr>
            <tr>{selectedMovie.duration}</tr>
            <tr>{selectedMovie.description}</tr>
          </td>
        </Table>
      </div>
      <Button onClick={() => setSelected(null)}>Close</Button>
    </div>
  );
}
