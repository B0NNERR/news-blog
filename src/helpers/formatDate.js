export const formatDate = (date = null) => {
	const options = {
		dateStyle: "full",
	};

	if (date) {
		return date.toLocaleDateString("en", options);
	} else {
		return new Date().toLocaleDateString("en", options);
	}
};
