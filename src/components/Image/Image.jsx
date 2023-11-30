import { useState } from "react";
import styles from "./styles.module.css";

const Image = ({ image }) => {
	const [isError, setIsError] = useState(false);
	return (
		<div className={styles.wrapper}>
			{image != "None" && image != null && !isError ? (
				<img
					src={image}
					alt="banner"
					className={styles.image}
					onError={() => {
						setIsError(true);
					}}
					onLoad={() => {
						() => {
							setIsError(false);
						};
					}}
				/>
			) : (
				<div className={styles["no-photo"]}>No photo 😅</div>
			)}
		</div>
	);
};

export default Image;
