import React from "react";

import { ItemStyled } from "./CheckoutStyles";

const Item = ({ url, title, desc, price, quantity }) => {
	return (
		<ItemStyled>
			<div className="item-content">
				{/* mantener este */}
				<div className="item-img">
					{/* mantener este */}
					<img
						src={url}
						alt={title}
					/>
				</div>
				<div className="item-text">
					<h3 className="item-title">{title}</h3>
					<p className="item-description">{desc}</p>
					<div className="item-numbers">
						<span className="item-quantity">Cantidad: {quantity}</span>
						<span className="item-price">${price?.toFixed(2)}</span>
					</div>
				</div>
			</div>
		</ItemStyled>
	);
};

export default Item;
