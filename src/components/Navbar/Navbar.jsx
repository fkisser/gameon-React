import {
	LinksContainerStyled,
	LogoNavStyled,
	NavLinkStyled,
	NavbarContainerStyled,
	NavbarContentWrapperStyled,
	UserNavLinkStyled,
} from "./NavbarStyles";
import Logo from "../UI/Logo/Logo";
import { HiHome } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { FaMessage, FaPersonWalkingArrowRight } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton/MenuButton";
import CartButton from "./CartButton/CartButton";
import Overlay from "../UI/Overlay/Overlay";
import Cart from "./Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modals/Modal";
import { successUser } from "../../redux/user/userSlice";
import Button from "../UI/Button/Button";
import { openConfirm } from "../../redux/modal/modalSlice";

const Navbar = () => {
	const { open } = useSelector((state) => state.navbar);
	const user = useSelector((state) => state.user);
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	if (!user) dispatch(successUser(null));
	return (
		<NavbarContainerStyled>
			<Cart />
			<NavbarContentWrapperStyled>
				<LogoNavStyled href="/">
					<Logo min />
				</LogoNavStyled>
				<Overlay />
				<Modal />
				<span className="contentRight">
					<LinksContainerStyled open={open}>
						<NavLinkStyled to={"/"}>
							<motion.div whileTap={{ scale: 0.95 }}>
								<HiHome />
								<span>Home</span>
							</motion.div>
						</NavLinkStyled>

						<NavLinkStyled to={"/products"}>
							<motion.div whileTap={{ scale: 0.95 }}>
								<BiSolidCategory />
								<span>Productos</span>
							</motion.div>
						</NavLinkStyled>

						<NavLinkStyled to={"/about"}>
							<motion.div whileTap={{ scale: 0.95 }}>
								<MdEmojiPeople />
								<span>Nosotros</span>
							</motion.div>
						</NavLinkStyled>

						<NavLinkStyled to={"/contact"}>
							<motion.div whileTap={{ scale: 0.95 }}>
								<FaMessage />
								<span>Contactanos</span>
							</motion.div>
						</NavLinkStyled>

						<UserNavLinkStyled to={user.currentUser ? "/user" : "/login"}>
							<span>
								{user.currentUser
									? `Hola ${user.currentUser.name}!`
									: "Iniciar sesión"}
							</span>
							<FaUserAlt />
						</UserNavLinkStyled>
						{user.currentUser && (
							<Button
								onClick={() => {
									const msj = "Seguro/a que desea salir? Se vaciará el carrito",
										fun = "logout";
									dispatch(
										openConfirm({
											msj,
											fun,
										})
									);
								}}>
								{" "}
								Salir <FaPersonWalkingArrowRight />
							</Button>
						)}
					</LinksContainerStyled>

					<CartButton />
					<MenuButton />
				</span>
			</NavbarContentWrapperStyled>
		</NavbarContainerStyled>
	);
};

export default Navbar;
