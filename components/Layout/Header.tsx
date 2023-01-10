import React, { ReactNode } from "react";
import { MainNavigation } from "./MainNavigation";
import { Branding } from "./Branding";

export function Header(): JSX.Element {
	return (
		<>
			<Branding />
			<MainNavigation />
		</>
	)
}