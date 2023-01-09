import axios from 'axios'
import { GetServerSideProps } from 'next'
import { MovieProps } from '../../@types/MovieTypes';

import { MovieDetails } from '../../components/movies/MovieDetails';

export default function MoviePage({ movie }: { movie: MovieProps }) {

    return (
        <div>
            <MovieDetails {...movie} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const response = await axios.get(`http://localhost:3001/movies/${query.id}`);

    const movie = JSON.parse(JSON.stringify(response.data))

    return {
        props: {
            movie
        }
    }
}