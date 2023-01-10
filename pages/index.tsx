import axios from "axios"
import { GetServerSideProps } from "next"

import { MovieProps, MovieType } from '../types/MovieTypes'
import { MoviesList } from "../components/movies/MoviesList"

function Homepage({ movies }: MovieType) {

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await axios.get('http://localhost:3001/movies');

  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()

  const filteredMovies = response.data.filter((movie: MovieProps) => {
    const movieDate = new Date(movie.release);
    return currentMonth === movieDate.getMonth() + 1 && currentYear === movieDate.getFullYear()
  });

  const movies: MovieProps[] = JSON.parse(JSON.stringify(filteredMovies));

  return {
    props: {
      movies: movies
    }
  }
}

export default Homepage