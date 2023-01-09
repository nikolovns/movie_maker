import { MovieProps, MovieType } from "../../@types/MovieTypes";
import { MovieItem } from "./MovieItem";

export function MoviesList({ movies }: MovieType): JSX.Element {

    const renderMovies = movies.map((movie: MovieProps) => {
        return (
            <MovieItem key={movie.id} {...movie} />
        )
    });

    return (
        <div>
            <h1>Movie list</h1>
            <div>
                {renderMovies}
            </div>
        </div>
    )
}