import { useSelector } from "react-redux";
import About from "../components/About/About";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AboutPage = () => {
	const { checkoutOrder } = useSelector((state) => state.checkout);
	const navigate = useNavigate();
	useEffect(() => {
		if (checkoutOrder) navigate("/checkout");
	}, [checkoutOrder]);
	return <About />;
};

export default AboutPage;
