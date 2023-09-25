import React from "react";
import { OverlayStyled } from "./OverlayStyled";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../../redux/navbar/navbarSlice";
import { toggleHiddenCart } from "../../../redux/cart/cartSlice";
import { closeModal } from "../../../redux/modal/modalSlice";

const Overlay = () => {
	const openNavbar = useSelector((state) => state.navbar.open);
	const openCart = useSelector((state) => state.cart.open);
	const openModal = useSelector((state) => state.modal.open);
	const { isConfirm } = useSelector((state) => state.modal);
	const dispatch = useDispatch();
	return (
		<>
			{openNavbar && (
				<OverlayStyled
					open={openNavbar}
					onClick={() => dispatch(toggleNavbar())}
				/>
			)}
			{openCart && (
				<OverlayStyled
					open={openCart}
					onClick={() => dispatch(toggleHiddenCart())}
				/>
			)}
			{openModal && (
				<OverlayStyled
					open={openModal}
					modal={openModal}
					onClick={() => (isConfirm ? null : dispatch(closeModal()))}
				/>
			)}
		</>
	);
};

export default Overlay;
