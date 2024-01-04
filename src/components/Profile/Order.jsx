import React from "react";
import { OrderStyled } from "./ProfileStyles";
import { ImCancelCircle } from "react-icons/im";
import Button from "../UI/Button/Button";
import OrderItem from "./OrderItem";
import { useDispatch } from "react-redux";
import { openConfirm } from "../../redux/modal/modalSlice";

const Order = ({
	_id,
	createdAt,
	items,
	price,
	shippingCost,
	total,
	status,
}) => {
	const dispatch = useDispatch();
	const date = new Date(createdAt);
	if (status === "pending" || status === "success")
		return (
			<OrderStyled status={status}>
				<span>
					<h4>Orden Id: {_id}</h4>
					<Button
						disabled={status !== "pending"}
						onClick={() => {
							dispatch(
								openConfirm({
									msj: "Está seguro/a que desea cancelar la órden? No podrá volver atras",
									fun: "deleteOrder",
									id: _id,
								})
							);
						}}>
						<ImCancelCircle />
					</Button>
				</span>

				<p>Estado de la órden: {status}</p>
				<p>Fecha de creación: {date.toLocaleString()}</p>
				<p>Productos: </p>
				{items?.length ? (
					items.map((item) => {
						return (
							<OrderItem
								key={item._id}
								{...item}
							/>
						);
					})
				) : (
					<p>Error, no se pudieron cargar los productos</p>
				)}
				<p>Subtotal: {price}</p>
				<p>Costo de envío: {shippingCost}</p>
				<p>Total: {total}</p>
			</OrderStyled>
		);
};

export default Order;
