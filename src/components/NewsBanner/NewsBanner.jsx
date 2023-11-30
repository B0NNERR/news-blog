import Image from "../Image/Image";

import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";

const NewsBanner = ({ news }) => {
	const item =
		news.length !== 0 &&
		news.find((item) => item.image !== "None" && item.image !== null);
	return (
		<section className={styles.banner}>
			<Image image={item?.image} />
			{item ? (
				<>
					<h2 className={styles.title}>{item.title}</h2>
					<p className={styles.extra}>
						{formatTimeAgo(item.published)} от {item.author}
					</p>
				</>
			) : null}
		</section>
	);
};

export default NewsBanner;
