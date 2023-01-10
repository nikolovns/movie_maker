import Container from "@mui/material/Container"
import { ReactNode } from "react"
import { Header } from "./Header"

type ChildrenProps = {
    children: ReactNode
}
export function Layout({ children }: ChildrenProps): JSX.Element {
    return (
        <Container fixed>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
        </Container>
    )
}