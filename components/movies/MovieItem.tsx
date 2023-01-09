import Link from "next/link";
import { MovieProps } from "../../@types/MovieTypes";
import { useFormatDate } from "../custom_hooks/format-date";

export function MovieItem({ name, release, id }: MovieProps): JSX.Element {

    const { formatedDate } = useFormatDate(release)

    return (
        <div>
            <div>
                <Link href={`/movies/${id}`}>
                    <img
                        src={`https://picsum.photos/seed/${id}/200/300`}
                        alt={name}
                    />
                </Link>
            </div>
            <h2>{name}</h2>
            <div>
                <p>{formatedDate}</p>
            </div>
        </div>
    )
}