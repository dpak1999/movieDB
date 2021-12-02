/** @format */

const MovieCard = ({ movie, genre }) => {
  return (
    <div className="flex flex-col mb-4">
      {movie[0] === genre &&
        movie[1].map((item, index) => (
          <div
            key={index}
            className="border mt-4 rounded max-w-4xl ml-auto mr-auto p-7"
          >
            <div className="flex flex-row items-center">
              <h1 className="text-3xl text-white">{item.name}</h1>
              <p className="border rounded px-4 py-0 ml-3 mt-1 text-white">
                Imdb {item.imdb}
              </p>
            </div>
            <p className="mt-4 text-white">{item.plot}</p>
          </div>
        ))}
    </div>
  );
};

export default MovieCard;
