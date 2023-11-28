export const formatDate = (date = null) => {
	const options = {
		dateStyle: "full",
	};

	if (date) {
		return date.toLocaleDateString("ru", options);
	} else {
		return new Date().toLocaleDateString("ru", options);
	}
};
