import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { MovieProps } from "../../types/MovieTypes";
import { formatDate } from "../utilities/format-date";

export function MovieItem({ name, release, id }: MovieProps): JSX.Element {

	const { formatedDate } = formatDate(release)

	return (
		<Grid item xs={6} md={3} >
			<CardContent >
				<Link href={`/movies/${id}`}>
					<CardMedia
						component="img"
						image={`https://picsum.photos/seed/${id}/256/359`}
						alt={name}
						sx={{ borderRadius: "5px" }}
					/>
				</Link>

				<Typography variant="h2" fontSize="22px" sx={{ marginTop: '10px' }}>
					{name}
				</Typography>

				<Typography component="p" gutterBottom>
					{formatedDate}
				</Typography>
			</CardContent>
		</Grid>
	)
}