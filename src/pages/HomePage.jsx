import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import { useEffect } from "react";
import { getAllProducts } from "../axios/products";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();
	const { products, error, isLoading } = useSelector((state) => state.products);
	const { checkoutOrder } = useSelector((state) => state.checkout);
	const { isLoading: orderLoading } = useSelector((state) => state.order);
	const navigate = useNavigate();
	useEffect(() => {
		!orderLoading && checkoutOrder ? navigate("/checkout") : navigate("/");
	}, [checkoutOrder]);
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
