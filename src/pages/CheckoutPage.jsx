import React from "react";
import { useSelector } from "react-redux";
import Data from "../components/Checkout/Data";
import Items from "../components/Checkout/Items";
import {
	CheckoutStyled,
	ErrorStyled,
} from "../components/Checkout/CheckoutStyles";

const CheckoutPage = () => {
	const { cartItems } = useSelector((state) => state.cart);
	if (cartItems.length)
		return (
			<CheckoutStyled>
				<Items />
				<Data />
			</CheckoutStyled>
		);
	return (
		<ErrorStyled>
			<p>No ha seleccionado ningún producto para comprar!</p>
			<p>Vaya a la sección de Productos y agregue algo al carrito!</p>
		</ErrorStyled>
	);
};

export default CheckoutPage;
