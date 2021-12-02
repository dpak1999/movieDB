/** @format */

import movies from './data';
import MovieCard from './MovieCard';

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-red-300 to-purple-700 min-h-screen overflow-hidden">
        <h1 className="text-white text-4xl text-center underline italic mt-4 font-bold">
          Favorite movies
        </h1>
        <div className="text-center mt-14">
          {Object.keys(movies).map((item) => (
            <span
              key={item}
              className="mr-5 border rounded px-4 py-2 text-2xl cursor-pointer text-white hover:bg-blue-500"
            >
              {item}
            </span>
          ))}
        </div>
        <hr className="mt-8" />
      </div>

      {Object.values(movies).map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
      ))}
    </>
  );
}

export default App;
