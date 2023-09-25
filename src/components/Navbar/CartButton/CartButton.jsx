import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartBubbleStyled, CartContainerStyled } from "./CartButtonStyles";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../redux/cart/cartSlice";
import { toggleNavbar } from "../../../redux/navbar/navbarSlice";

const CartButton = () => {
	const totalCartItems = useSelector((state) => state.cart.cartItems)?.reduce(
		(acc, item) => (acc += item.quantity),
		0
	);
	const { open } = useSelector((state) => state.navbar);
	const dispatch = useDispatch();

	return (
		<motion.div whileTap={{ scale: 0.95 }}>
			<CartContainerStyled
				onClick={() => {
					dispatch(toggleHiddenCart());
					open && dispatch(toggleNavbar());
				}}>
				<FaCartShopping />
				<CartBubbleStyled>{totalCartItems}</CartBubbleStyled>
			</CartContainerStyled>
		</motion.div>
	);
};

export default CartButton;
