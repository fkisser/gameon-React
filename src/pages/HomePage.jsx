import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import { useEffect } from "react";
import { getAllProducts } from "../axios/products";

const Home = () => {
	const dispatch = useDispatch();
	const { products, error, isLoading } = useSelector((state) => state.products);
	useEffect(() => {
		if (!products.length) {
			getAllProducts(dispatch);
		}
	}, [dispatch, products, isLoading, error]);

	return (
		<>
			<Hero />
			<Products starred />
		</>
	);
};

export default Home;
