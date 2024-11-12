//Nora Jaafar 11/13/2024
const movies = [
  { title: "Little Nemo: Adventures in Slumberland", releaseDate: "1989" },
  { title: "Labyrinth", releaseDate: "1986" },
  { title: "Willow", releaseDate: "1988" },
  { title: "The Dark Crystal", releaseDate: "1982" },
  { title: "The Land Before Time", releaseDate: "1988" },
  { title: "The Last Unicorn", releaseDate: "1982" }
];

const sortedMovies = movies.sort((a, b) => {
  const year = parseInt(a.releaseDate) - parseInt(b.releaseDate);
    if (year == 0) {
    return a.title.localeCompare(b.title);
  }
    return year;
});

console.log("Movies in Order of Release Date:");
sortedMovies.map(movie => {
console.log(movie.title, movie.releaseDate);
});

const movieList = document.getElementById("movie-list");
sortedMovies.forEach(movie => {
  const listItem = document.createElement("li");
  listItem.textContent = `${movie.title}`;
  movieList.appendChild(listItem);
});
