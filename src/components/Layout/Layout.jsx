import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { LayoutWrapper } from "./LayoutStyles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/navbar/navbarSlice";

const Layout = ({ children }) => {
	const { pathname } = useLocation();
	const open = useSelector((state) => state.navbar.open);
	const dispatch = useDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
		open && dispatch(toggleNavbar());
	}, [pathname]);

	return (
		<>
			<Navbar />
			<LayoutWrapper>{children}</LayoutWrapper>
			<Footer />
		</>
	);
};

export default Layout;
