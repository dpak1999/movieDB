/** @format */

import { useState } from 'react';
import movies from './data';
import MovieCard from './MovieCard';

function App() {
  const [genre, setGenre] = useState('Action');

  return (
    <div className="bg-purple-500 min-h-screen overflow-hidden">
      <h1 className="text-white text-4xl text-center underline italic mt-4 font-bold">
        Favorite movies
      </h1>
      <div className="text-center mt-14">
        {Object.keys(movies).map((item) => (
          <span
            key={item}
            onClick={() => setGenre(item)}
            className="mr-5 border rounded px-4 py-2 text-2xl cursor-pointer text-white hover:bg-blue-500"
          >
            {item}
          </span>
        ))}
      </div>
      <hr className="mt-8" />
      {Object.entries(movies).map((movie, idx) => (
        <MovieCard key={idx} movie={movie} genre={genre} />
      ))}
    </div>
  );
}

export default App;
