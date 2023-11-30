import styles from "./styles.module.css";

const Pagination = ({
	totalPages,
	handleNextPage,
	handlePreviousPage,
	handlePageClick,
	currentPage,
	isLoading,
}) => {
	return (
		<div className={styles.pagination}>
			<button
				className={styles.arrow}
				onClick={handlePreviousPage}
				disabled={isLoading || currentPage <= 1}
			>
				{"<"}
			</button>

			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							className={`${styles["page-number"]}${
								!isLoading && currentPage === index + 1
									? " " + styles.active
									: ""
							}`}
							key={index}
							onClick={() => handlePageClick(index + 1)}
							disabled={isLoading || currentPage === index + 1}
						>
							{index + 1}
						</button>
					);
				})}
			</div>

			<button
				className={styles.arrow}
				onClick={handleNextPage}
				disabled={isLoading || currentPage >= totalPages}
			>
				{">"}
			</button>
		</div>
	);
};

export default Pagination;
