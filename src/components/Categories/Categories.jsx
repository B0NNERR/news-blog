import styles from "./styles.module.css";

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
	return (
		<div
			className={styles.categories}
			onWheel={(e) => {
				const delta = e.deltaY;
				e.screenX += 1;
			}}
		>
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
};

export default Categories;
