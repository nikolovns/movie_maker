import { MovieProps } from "../../@types/MovieTypes";
import { useFormatDate } from "../custom_hooks/format-date";

export function MovieDetails({ name, description, id, release, categories, season }: MovieProps) {

    const { formatedDate } = useFormatDate(release);

    const renderCategory = categories.map((category: string) => {
        return (
            <span key={category}>{category}</span>
        )
    })

    return (
        <div>
            <h2>{name}</h2>
            <div>
                {
                    season ?
                        <p>Season {season} <span>{formatedDate}</span></p>
                        : <p>{formatedDate}</p>
                }

            </div>
            <div><p>{description}</p></div>
            <div>
                {renderCategory}
            </div>

            <div>
                <img
                    src={`https://picsum.photos/seed/${id}/200/300`}
                    alt={name}
                />
            </div>
        </div>
    )
}