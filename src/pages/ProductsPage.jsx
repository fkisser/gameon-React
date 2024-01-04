import { useSelector } from "react-redux";
import Products from "../components/Products/Products";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProductsPage = () => {
	const { checkoutOrder } = useSelector((state) => state.checkout);
	const navigate = useNavigate();
	useEffect(() => {
		if (checkoutOrder) navigate("/checkout");
	}, [checkoutOrder]);
	return <Products />;
};

export default ProductsPage;
