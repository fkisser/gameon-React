import React from "react";
import { useSelector } from "react-redux";
import Data from "../components/Checkout/Data";
import Items from "../components/Checkout/Items";
import {
	CheckoutStyled,
	ErrorStyled,
} from "../components/Checkout/CheckoutStyles";
import { NavLinkStyled } from "../components/Navbar/NavbarStyles";
import { BiSolidCategory } from "react-icons/bi";
import { motion } from "framer-motion";

const CheckoutPage = () => {
	const { cartItems } = useSelector((state) => state.cart);
	return cartItems.length ? (
		<CheckoutStyled>
			<Items />
			<Data />
		</CheckoutStyled>
	) : (
		<ErrorStyled>
			<p>No ha seleccionado ningún producto para comprar!</p>
			<div className="group">
				<p>Vaya a la sección de</p>
				<NavLinkStyled to={"/products"}>
					<motion.div whileTap={{ scale: 0.95 }}>
						<BiSolidCategory />
						<span>Productos</span>
					</motion.div>
				</NavLinkStyled>
			</div>
		</ErrorStyled>
	);
};

export default CheckoutPage;
