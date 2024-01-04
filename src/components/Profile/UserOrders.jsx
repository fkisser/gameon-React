import React, { useEffect } from "react";
import { loadUserOrders } from "../../axios/orders";
import { useDispatch, useSelector } from "react-redux";
import { UserOrdersStyled } from "./ProfileStyles";
import Order from "./Order";
import BigLoader from "../UI/Loaders/BigLoader";

const UserOrders = () => {
	const dispatch = useDispatch();
	const { currentUser, orders, loadingOrders } = useSelector(
		(state) => state.user
	);
	useEffect(() => {
		if (!loadingOrders || !orders?.length)
			loadUserOrders(dispatch, currentUser.token);
	}, [loadingOrders]);

	return orders ? (
		<UserOrdersStyled>
			{orders?.length ? (
				orders
					.map((order) => {
						return (
							<Order
								key={order._id}
								{...order}
							/>
						);
					})
					.reverse()
			) : (
				<p>No hay órdenes para este usuario</p>
			)}
		</UserOrdersStyled>
	) : (
		<div>
			<BigLoader />
		</div>
	);
};

export default UserOrders;
