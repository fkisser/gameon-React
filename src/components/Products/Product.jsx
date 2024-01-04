import { FaCartPlus } from "react-icons/fa6";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";
import Button from "../UI/Button/Button";
import { ProductCardStyled } from "./ProductsStyles";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addItems } from "../../redux/cart/cartSlice";
import { closeModal, openModal } from "../../redux/modal/modalSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Product = ({ title, desc, price, url, id }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentUser } = useSelector((state) => state.user);
	const { isLoading } = useSelector((state) => state.order);
	const location = useLocation();
	return (
		<ProductCardStyled>
			<div className="image">
				<img
					src={url}
					alt={title}
				/>
			</div>
			<div className="text">
				<h4>{title}</h4>
				<p>{desc}</p>
				<div>
					{location.pathname === "/" ? (
						<Link to={`products/${id}`}>
							<Button radius="50%">
								<PiMagnifyingGlassPlusBold />
							</Button>
						</Link>
					) : (
						<Link to={`${id}`}>
							<Button radius="50%">
								<PiMagnifyingGlassPlusBold />
							</Button>
						</Link>
					)}

					<p className="price">${price}</p>

					<Button
						disabled={isLoading}
						onClick={() => {
							if (!currentUser) {
								navigate("/login");
							} else {
								dispatch(addItem({ title, price, url, id }));
								dispatch(openModal("Producto agregado al carrito"));
								setTimeout(() => {
									dispatch(closeModal());
								}, 1500);
							}
						}}
						radius="50%">
						<FaCartPlus />
					</Button>
				</div>
			</div>
		</ProductCardStyled>
	);
};

export default Product;
