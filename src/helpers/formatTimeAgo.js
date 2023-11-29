export const formatTimeAgo = (dateString) => {
	const now = new Date();
	const date = new Date(dateString);
	const secondPast = (now.getTime() - date.getTime()) / 1000;
	const arrayOfNumbers = [2, 3, 4, "2", "3", "4"];

	if (secondPast < 60) {
		return `${Math.floor(secondPast)} сек назад`;
	}

	if (secondPast < 3600) {
		const value = Math.floor(secondPast / 60);
		return `${value} мин назад`;
	}

	if (secondPast <= 86400) {
		const value = Math.floor(secondPast / 3600);
		return `${value} ч назад`;
	}

	if (secondPast > 86400) {
		const value = Math.floor(secondPast / 86400);
		let valueString = "дней";
		if (value === 1) {
			valueString = "день";
		}
		if (
			arrayOfNumbers.includes(value) ||
			(String(value).length > 1 &&
				arrayOfNumbers.includes(String(value).at(-1)))
		) {
			valueString = "дня";
		}

		return `${value} ${valueString} назад`;
	}
};
