import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MovieProps, MovieType } from "../../types/MovieTypes";
import { MovieItem } from "./MovieItem";

export function MoviesList({ movies }: MovieType): JSX.Element {

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Typography variant="h1" sx={{ fontSize: "24px" }}>
				Movie list
			</Typography>
			<Grid container spacing={2}>
				{
					movies.map((movie: MovieProps) => (
						<MovieItem key={movie.id} {...movie} />
					))
				}
			</Grid>
		</Box>
	)
}