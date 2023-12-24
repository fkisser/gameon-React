import { useDispatch, useSelector } from "react-redux";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { getAllProducts } from "./axios/products";

function App() {
	const dispatch = useDispatch();
	const { products, error, isLoading } = useSelector((state) => state.products);
	useEffect(() => {
		if (!products.length) {
			getAllProducts(dispatch);
		}
	}, [dispatch, isLoading, error]);
	return (
		<>
			<Routes />
		</>
	);
}

export default App;
