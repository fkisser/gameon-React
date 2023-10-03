import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SuccessStyled } from "../components/Checkout/CheckoutStyles";
import { useSelector } from "react-redux";

const SuccessPage = () => {
	const { success } = useSelector((state) => state.cart);
	const navigate = useNavigate();
	useEffect(() => {
		if (!success) navigate("/checkout");
	}, []);

	return (
		<SuccessStyled>
			<p>Gracias por su compra!</p>
			<p>Nos comunicaremos a su mail para coordinar la entrega!</p>
		</SuccessStyled>
	);
};

export default SuccessPage;
