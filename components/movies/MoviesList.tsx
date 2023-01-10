import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MovieProps, MovieType } from "../../types/MovieTypes";
import { MovieItem } from "./MovieItem";

export function MoviesList({ movies }: MovieType): JSX.Element {

	const renderMovies = movies.map((movie: MovieProps) => {
		return (
			<MovieItem key={movie.id} {...movie} />
		)
	});

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Typography variant="h1" sx={{ fontSize: "24px" }}>
				Movie list
			</Typography>
			<Grid container spacing={2}>
				{renderMovies}
			</Grid>
		</Box>
	)
}