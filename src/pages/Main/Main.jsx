import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";

import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 10;
	const pageSize = 10;

	const fetchNews = async (currentPage) => {
		setIsLoading(true);
		const data = await getNews(currentPage, pageSize);
		setNews(data.news);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchNews(currentPage);
	}, [currentPage]);

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prevState) => {
				return prevState - 1;
			});
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prevState) => {
				return prevState + 1;
			});
		}
	};

	const handlePageClick = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<main className={styles.main}>
			{news.length > 0 && !isLoading ? (
				<NewsBanner news={news} />
			) : (
				<Skeleton />
			)}

			<Pagination
				totalPages={totalPages}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				isLoading={isLoading}
			/>

			{news.length > 0 && !isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton count={10} type={"item"} />
			)}

			<Pagination
				totalPages={totalPages}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				isLoading={isLoading}
			/>
		</main>
	);
};

export default Main;
