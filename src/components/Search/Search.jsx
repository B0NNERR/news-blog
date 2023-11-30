import styles from "./styles.module.css";

const Search = ({ keywords, setKeywords }) => {
	return (
		<div>
			<input
				type="text"
				value={keywords}
				className={styles.input}
				onChange={(e) => setKeywords(e.target.value)}
				placeholder="search..."
			/>
		</div>
	);
};

export default Search;
