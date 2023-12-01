import Image from "../Image/Image";

import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";

const NewsBanner = ({ item }) => {
	return (
		<section className={styles.banner}>
			<Image image={item?.image} />
			{item ? (
				<>
					<h2 className={styles.title}>{item.title}</h2>
					<p className={styles.extra}>
						{formatTimeAgo(item.published)} by {item.author}
					</p>
				</>
			) : null}
		</section>
	);
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
