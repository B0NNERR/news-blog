import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (fetchFunction, params = null) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoadding] = useState(false);
	const [error, setError] = useState(null);

	const stringParams = params ? new URLSearchParams(params).toString() : "";

	useEffect(() => {
		(async () => {
			try {
				setIsLoadding(true);

				const result = await fetchFunction(params);

				setData(result);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoadding(false);
			}
		})();
	}, [fetchFunction, stringParams]);

	return { data, error, isLoading };
};

export { useFetch };
