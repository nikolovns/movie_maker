import Link from "next/link";
import { Button } from "@mui/material";

export function MainNavigation() {
    return (
        <nav>
            <Link href="/movies" passHref>
                <Button variant="outlined" color="secondary">All Movies</Button>
            </Link>
        </nav>
    )
}