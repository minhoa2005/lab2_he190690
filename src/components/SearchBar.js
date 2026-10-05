import React from "react";
import { FormControl } from "react-bootstrap";

export default function SearchBar({ ref, search, setSearch }) {
  return (
    <div>
      <FormControl
        placeholder="Tìm tên phim..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        ref={ref}
      />
    </div>
  );
}
