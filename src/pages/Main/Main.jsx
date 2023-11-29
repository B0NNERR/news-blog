import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";

import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

const Main = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchNews = async () => {
			setIsLoading(true);
			const data = await getNews();
			setNews(data.news);
			setIsLoading(false);
		};

		fetchNews();
	}, []);

	return (
		<main className={styles.main}>
			{news.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton />
			)}
			{news.length > 0 && !isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton count={10} type={"item"} />
			)}
		</main>
	);
};

export default Main;
