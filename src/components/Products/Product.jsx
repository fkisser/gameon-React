import { FaCartPlus } from "react-icons/fa6";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";
import Button from "../UI/Button/Button";
import { ProductCardStyled } from "./ProductsStyles";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import { closeModal, openModal } from "../../redux/modal/modalSlice";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ title, desc, price, url, id }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentUser } = useSelector((state) => state.user);
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
					<Link to={`${id}`}>
						<Button radius="50%">
							<PiMagnifyingGlassPlusBold />
						</Button>
					</Link>

					<p className="price">${price}</p>

					<Button
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
