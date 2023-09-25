import React from "react";
import ContactImage from "./img/contact.jpg";
import ImgContainer from "./ImgContainer";
import FormContainer from "./FormContainer";
import { ContactContainerStyled, ContactContentStyled } from "./ContactStyles";
import Button from "../UI/Button/Button";

const Contact = () => {
	return (
		<ContactContainerStyled>
			<h2>Contactanos</h2>
			<ContactContentStyled>
				<ImgContainer>
					<img
						src={ContactImage}
						alt="nosotros"
					/>
				</ImgContainer>
				<FormContainer />
			</ContactContentStyled>
		</ContactContainerStyled>
	);
};

export default Contact;
