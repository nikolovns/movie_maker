export function formatDate(release: Date) {
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const releaseDate = new Date(release);
	const formatedDate = `${monthNames[releaseDate.getMonth()]} ${releaseDate.getDate()}, ${releaseDate.getFullYear()}`

	return { formatedDate }
}