// Home.js
import React, { useState } from 'react';
import MovieCards from "../components/moviecards/cards";
import Pagination from "../components/pagination/pagination";
import Welcom from "../components/welcoming/welcom";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Welcom />
      <MovieCards currentPage={currentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
