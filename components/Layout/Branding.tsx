import { Button } from "@mui/material";
import Link from "next/link";

export function Branding() {
	return (
		<Link href="/" passHref>
			<Button variant="outlined" color="secondary">Movie Maker</Button>
		</Link>
	)
}