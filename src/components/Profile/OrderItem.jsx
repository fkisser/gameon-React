import React from "react";
import { OrderItemStyled } from "./ProfileStyles";

const OrderItem = ({ product, quantity }) => {
	const { title, desc, price } = product;
	return (
		<OrderItemStyled>
			<div>
				<h5>{title}</h5>
				<p>{desc}</p>
				<p>Precio unitario: ${price}</p>
				<p>Cantidad: {quantity}</p>
			</div>
		</OrderItemStyled>
	);
};

export default OrderItem;
