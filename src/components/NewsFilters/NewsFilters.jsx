import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

const NewsFilters = ({ filters, changeFilters }) => {
	const { data: dataCategories } = useFetch(getCategories);
	return (
		<div className={styles.filters}>
			{dataCategories ? (
				<Slider>
					<Categories
						categories={dataCategories}
						selectedCategory={filters.category}
						setSelectedCategory={(category) =>
							changeFilters("category", category)
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) => changeFilters("keywords", keywords)}
			/>
		</div>
	);
};

export default NewsFilters;
