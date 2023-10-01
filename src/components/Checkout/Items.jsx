import React from "react";
import CartItem from "../Navbar/Cart/CartItem";
import {
	ItemsContainerStyled,
	ItemsStyled,
	TotalStyled,
} from "./CheckoutStyles";
import { useSelector } from "react-redux";

const Items = () => {
	const { cartItems } = useSelector((state) => state.cart);
	const totalPrice = cartItems?.reduce((acc, item) => {
		return (acc += item.price * item.quantity);
	}, 0);
	return (
		<ItemsContainerStyled>
			<ItemsStyled>
				{cartItems.map((item) => {
					return (
						<CartItem
							key={item.id}
							{...item}
						/>
					);
				})}
			</ItemsStyled>
			<TotalStyled>
				<p>Total:</p>
				<span>${totalPrice.toFixed(2)}</span>
			</TotalStyled>
		</ItemsContainerStyled>
	);
};

export default Items;
