import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getNews = async (page_number = 1, page_size = 20) => {
	try {
		const response = await axios.get(`${BASE_URL}search`, {
			params: {
				language: "ru",
				apiKey: API_KEY,
				page_number,
				page_size,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error.message);
	}
};
