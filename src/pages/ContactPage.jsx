import React, { useEffect } from "react";
import Contact from "../components/Contact/Contact";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
	const { checkoutOrder } = useSelector((state) => state.checkout);
	const navigate = useNavigate();
	useEffect(() => {
		if (checkoutOrder) navigate("/checkout");
	}, [checkoutOrder]);
	return <Contact />;
};

export default ContactPage;
