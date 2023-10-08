import { FaCartPlus } from "react-icons/fa6";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";
import Button from "../UI/Button/Button";
import { ProductCardStyled } from "./ProductsStyles";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import { closeModal, openModal } from "../../redux/modal/modalSlice";
import { Link } from "react-router-dom";

const Product = ({ title, description, price, url, id }) => {
	const dispatch = useDispatch();
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
				<p>{description}</p>
				<div>
					<Link to={`${id}`}>
						<Button radius="50%">
							<PiMagnifyingGlassPlusBold />
						</Button>
					</Link>

					<p className="price">${price}</p>

					<Button
						onClick={() => {
							dispatch(addItem({ title, price, url, id }));
							dispatch(openModal("Producto agregado al carrito"));
							setTimeout(() => {
								dispatch(closeModal());
							}, 1500);
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
