import { useEffect, useState } from "react";
import { getCategories, getNews } from "../../api/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";

import styles from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";

const Main = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [keywords, setKeywords] = useState("");
	const debouncedKeywords = useDebounce(keywords, 1500);

	const totalPages = 10;
	const pageSize = 10;

	const fetchNews = async (currentPage) => {
		setIsLoading(true);
		const data = await getNews({
			page_number: currentPage,
			page_size: pageSize,
			category: selectedCategory === "all" ? null : selectedCategory,
			keywords: keywords,
		});
		setNews(data.news);
		setIsLoading(false);
	};

	const fetchCategories = async () => {
		const categories = await getCategories();
		setCategories(["all", ...categories]);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		fetchNews(currentPage);
	}, [currentPage, selectedCategory, debouncedKeywords]);

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
			<Categories
				categories={categories}
				setSelectedCategory={setSelectedCategory}
				selectedCategory={selectedCategory}
			/>

			<Search keywords={keywords} setKeywords={setKeywords} />

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
