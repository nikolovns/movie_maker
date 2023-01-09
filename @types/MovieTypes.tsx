export interface MovieProps {
    id?: number,
    name: string,
    categories: string[],
    description: string,
    season: number,
    release: Date
}

export type MovieType = {
    movies: MovieProps[]
}