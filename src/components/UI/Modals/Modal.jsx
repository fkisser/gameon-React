import React from "react";
import { ConfirmStyled, InfoStyled } from "./ModalStyles";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modal/modalSlice";
import Button from "../Button/Button";
import {
	clearCart,
	removeItem,
	toggleHiddenCart,
} from "../../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Modal = () => {
	const { open, isConfirm, message, action, id } = useSelector(
		(state) => state.modal
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return isConfirm ? (
		<ConfirmStyled open={open}>
			<h2>{message}</h2>
			<div className="confirmBtns">
				<Button
					className="yes"
					onClick={() => {
						dispatch(closeModal());
						switch (action) {
							case "deleteItem":
								dispatch(removeItem(id));
								break;
							case "clearCart":
								dispatch(clearCart());
								break;
							case "buy":
								dispatch(clearCart());
								navigate("/checkout");
								dispatch(toggleHiddenCart());
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
