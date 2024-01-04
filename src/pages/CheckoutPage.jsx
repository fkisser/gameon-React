import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Data from "../components/Checkout/Data";
import Items from "../components/Checkout/Items";
import {
	CheckoutStyled,
	ErrorStyled,
} from "../components/Checkout/CheckoutStyles";
import BigLoader from "../components/UI/Loaders/BigLoader";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
	const { checkoutOrder } = useSelector((state) => state.checkout);
	const { isLoading } = useSelector((state) => state.order);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isLoading) {
			checkoutOrder ? navigate("/checkout") : navigate("/");
		}
	}, [checkoutOrder, isLoading]);
	return checkoutOrder ? (
		<CheckoutStyled>
			<Items />
			<Data />
		</CheckoutStyled>
	) : (
		<CheckoutStyled>
			<BigLoader />
		</CheckoutStyled>
	);
};

export default CheckoutPage;
