import React from "react";
import {
	ItemsContainerStyled,
	ItemsStyled,
	SubtotalStyled,
	TotalStyled,
} from "./CheckoutStyles";
import { useSelector } from "react-redux";
import Item from "./Item";

const Items = () => {
	const { checkoutOrder } = useSelector((state) => state.checkout);
	return (
		<ItemsContainerStyled>
			<ItemsStyled>
				{checkoutOrder?.items.map((item) => {
					const { _id: id, title, desc, price, url } = item.product;
					const { quantity } = item;
					const checkoutItem = {
						url,
						title,
						desc,
						price,
						quantity,
						id,
					};
					return (
						<Item
							key={id}
							{...checkoutItem}
						/>
					);
				})}
			</ItemsStyled>
			<SubtotalStyled>
				<p>Subtotal:</p>
				<span>${(checkoutOrder?.price).toFixed(2)}</span>
			</SubtotalStyled>
			<SubtotalStyled>
				<p>Costo de envío:</p>
				<span>${checkoutOrder?.shippingCost}</span>
			</SubtotalStyled>
			<TotalStyled>
				<p>Total:</p>
				<span>
					${(checkoutOrder?.price + checkoutOrder?.shippingCost).toFixed(2)}
				</span>
			</TotalStyled>
		</ItemsContainerStyled>
	);
};

export default Items;
