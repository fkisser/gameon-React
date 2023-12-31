import React, { useEffect } from "react";
import {
	BtnsContainerStyled,
	CartStyled,
	ProductsContainerStyled,
	TotalContainerStyled,
} from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack, BiSolidTrash } from "react-icons/bi";
import CartItem from "./CartItem";
import Button from "../../UI/Button/Button";
import { toggleHiddenCart, updateItems } from "../../../redux/cart/cartSlice";
import { openConfirm } from "../../../redux/modal/modalSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const { isLoading: orderLoading } = useSelector((state) => state.order);
	const { cartItems, open } = useSelector((state) => state.cart);
	const { products, isLoading } = useSelector((state) => state.products);
	const totalPrice = cartItems?.reduce((acc, item) => {
		return (acc += item.price * item.quantity);
	}, 0);
	useEffect(() => {
		if (products?.length && !isLoading) dispatch(updateItems(products));
	}, [isLoading]);
	return (
		<CartStyled open={open}>
			<div className="cartHeader">
				<Button
					className="backButton"
					onClick={() => {
						dispatch(toggleHiddenCart());
					}}>
					<BiArrowBack />
				</Button>
				<h2>Tu carrito</h2>
			</div>
			<ProductsContainerStyled>
				{cartItems?.length ? (
					cartItems.map((item) => {
						return (
							<CartItem
								key={item.id}
								{...item}
							/>
						);
					})
				) : (
					<p className="empty-msg">No hay productos en el carrito</p>
				)}
			</ProductsContainerStyled>
			<TotalContainerStyled>
				<p>Total:</p>
				<span>${totalPrice?.toFixed(2)}</span>
			</TotalContainerStyled>
			<BtnsContainerStyled>
				<Button
					className="clear-btn"
					onClick={() => {
						const msj = "Desea vaciar el carrito?",
							fun = "clearCart";
						dispatch(
							openConfirm({
								msj,
								fun,
							})
						);
					}}
					disabled={!cartItems?.length || orderLoading}>
					<BiSolidTrash />
				</Button>
				<Button
					whileTap={{ scale: 0.95 }}
					onClick={() => {
						const msj = "Desea realizar la compra?",
							fun = "checkout";
						dispatch(
							openConfirm({
								msj,
								fun,
							})
						);
					}}
					disabled={!cartItems?.length || orderLoading}>
					Comprar
				</Button>
			</BtnsContainerStyled>
		</CartStyled>
	);
};

export default Cart;
