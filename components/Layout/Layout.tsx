import { ReactNode } from "react"
import { Header } from "./Header"

type ChildrenProps = {
    children: ReactNode
}
export function Layout({ children }: ChildrenProps): JSX.Element {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}