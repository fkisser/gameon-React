import React, { useEffect } from "react";
import { ConfirmStyled, InfoStyled } from "./ModalStyles";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modal/modalSlice";
import Button from "../Button/Button";
import {
	addItems,
	clearCart,
	removeItem,
	success,
	toggleHiddenCart,
} from "../../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { successUser } from "../../../redux/user/userSlice";
import {
	checkoutOrder,
	deleteCartOrder,
	deleteOrder,
	loadUserOrders,
	pendingOrder,
	updateCartOrder,
} from "../../../axios/orders";
import { removeProduct } from "../../../redux/cart/cartUtils";
import { sendOrderEmail } from "../../../emailJS/sendEmail";

const Modal = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { open, isConfirm, message, action, id, values } = useSelector(
		(state) => state.modal
	);
	const { currentUser } = useSelector((state) => state.user);
	const { checkoutOrder: order } = useSelector((state) => state.checkout);
	const { cartItems } = useSelector((state) => state.cart);
	let price = cartItems?.reduce((acc, item) => {
		return (acc += item.price * item.quantity);
	}, 0);

	return isConfirm ? (
		<ConfirmStyled open={open}>
			<h2>{message}</h2>
			<div className="confirmBtns">
				<Button
					className="yes"
					onClick={async () => {
						dispatch(closeModal());
						switch (action) {
							case "deleteItem":
								updateCartOrder(
									dispatch,
									currentUser.token,
									removeProduct(cartItems, id),
									price
								);
								dispatch(addItems(removeProduct(cartItems, id)));
								break;
							case "clearCart":
								dispatch(clearCart());
								deleteCartOrder(dispatch, currentUser.token);
								break;
							case "checkout":
								navigate("/checkout");
								checkoutOrder(dispatch, currentUser.token);
								dispatch(clearCart());
								dispatch(toggleHiddenCart());
								break;
							case "buy":
								pendingOrder(dispatch, currentUser.token);
								break;
							case "success":
								dispatch(success());
								const mailOrder = { ...order, shippingDetails: { ...values } };
								sendOrderEmail(mailOrder);
								pendingOrder(dispatch, currentUser.token, values);
								navigate("/success");
								break;
							case "logout":
								dispatch(clearCart());
								dispatch(successUser(null));
								navigate("/");
								break;
							case "deleteOrder":
								deleteOrder(dispatch, currentUser.token, id);
								break;
							default:
								break;
						}
					}}>
					Si
				</Button>
				<Button
					className="no"
					onClick={() => {
						dispatch(closeModal());
					}}>
					No
				</Button>
			</div>
		</ConfirmStyled>
	) : (
		<InfoStyled open={open}> {message} </InfoStyled>
	);
};

export default Modal;
