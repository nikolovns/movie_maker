import { CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { MovieProps } from "../../@types/MovieTypes";
import { useFormatDate } from "../custom_hooks/format-date";

export function MovieDetails({ name, description, id, release, categories, season }: MovieProps) {

    const { formatedDate } = useFormatDate(release);
    const renderCategory = categories.map((category: string) => {
        return (
            <Paper
                variant="outlined"
                key={category}
                component="span"
                sx={{ padding: "5px", marginRight: "5px" }}
            >
                {category}
            </Paper>
        )
    })

    return (
        <CardContent>
            <Typography variant="h2" fontSize="22px">
                {name}
            </Typography>

            <Grid container spacing={4}>

                <Grid item xs={12} md={6}>
                    {
                        season ?
                            <Typography component="p">Season {season}
                                <Typography component="span">{formatedDate}</Typography>
                            </Typography>
                            : <Typography component="p">{formatedDate}</Typography>
                    }

                    <Typography component="p" sx={{ margin: '10px 0' }}>
                        {description}
                    </Typography>

                    <Typography component="div">
                        {renderCategory}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        image={`https://picsum.photos/seed/${id}/540/400`}
                        alt={name}
                        sx={{ borderRadius: "5px" }}
                    />
                </Grid>

            </Grid>

        </CardContent>
    )
}