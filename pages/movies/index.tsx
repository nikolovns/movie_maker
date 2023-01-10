import { GetServerSideProps } from "next"
import { MoviesList } from "../../components/movies/MoviesList"

import axios from 'axios'
import { MovieProps, MovieType } from "../../types/MovieTypes"

export default function AllMovies({ movies }: MovieType) {
	return (
		<div>
			<MoviesList movies={movies} />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

	const response = await axios.get('http://localhost:3001/movies');

	const movies: MovieProps[] = JSON.parse(JSON.stringify(response.data));

	return {
		props: {
			movies: movies
		}
	}
}