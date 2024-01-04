import { useDispatch, useSelector } from "react-redux";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import {
	loadCartOrder,
	loadCheckoutOrder,
	updateCartOrder,
} from "./axios/orders";

function App() {
	const { checkoutOrder } = useSelector((state) => state.checkout);
	const { currentUser } = useSelector((state) => state.user);
	const { isLoading } = useSelector((state) => state.order);
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isLoading && currentUser && !checkoutOrder) {
			loadCartOrder(dispatch, currentUser?.token);
			loadCheckoutOrder(dispatch, currentUser?.token);
		}
	}, [currentUser]);
	useEffect(() => {
		if (!cartItems?.length) {
		} else {
			const price = cartItems?.reduce((acc, item) => {
				return (acc += item.price * item.quantity);
			}, 0);
			updateCartOrder(dispatch, currentUser?.token, cartItems, price);
		}
	}, [cartItems]);
	return (
		<>
			<Routes />
		</>
	);
}

export default App;
