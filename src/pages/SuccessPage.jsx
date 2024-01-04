import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SuccessStyled } from "../components/Checkout/CheckoutStyles";
import { useSelector } from "react-redux";
import BigLoader from "../components/UI/Loaders/BigLoader";

const SuccessPage = () => {
	const { success } = useSelector((state) => state.cart);
	const { isLoading } = useSelector((state) => state.order);
	const navigate = useNavigate();
	useEffect(() => {
		if (!success) navigate("/");
	}, []);

	return isLoading ? (
		<SuccessStyled>
			<BigLoader />
		</SuccessStyled>
	) : (
		<SuccessStyled>
			<p>Gracias por su compra!</p>
			<p>
				Nos comunicaremos a su mail para coordinar la forma de pago y entrega!
			</p>
			<p>Puede ver el detalle de su orden en su perfil</p>
		</SuccessStyled>
	);
};

export default SuccessPage;
