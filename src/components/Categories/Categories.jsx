import { forwardRef } from "react";
import styles from "./styles.module.css";

const Categories = forwardRef(
	({ categories, setSelectedCategory, selectedCategory }, ref) => {
		return (
			<div ref={ref} className={styles.categories}>
				{["all", ...categories].map((category) => {
					{
						return (
							<button
								onClick={() => setSelectedCategory(category)}
								className={
									selectedCategory === category
										? styles.active
										: styles.item
								}
								key={category}
							>
								{category.slice(0, 1).toUpperCase() +
									category.slice(1)}
							</button>
						);
					}
				})}
			</div>
		);
	}
);

export default Categories;
