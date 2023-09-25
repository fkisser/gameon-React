import { FooterContainerStyled, FooterLinkStyled } from "./FooterStyles";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillSkype,
	AiFillMail,
} from "react-icons/ai";

const Footer = () => {
	return (
		<FooterContainerStyled>
			<FooterLinkStyled>
				<AiFillFacebook />
				<AiFillInstagram />
				<AiFillLinkedin />
				<AiFillSkype />
				<AiFillMail />
			</FooterLinkStyled>
			<p>Hecho por Facundo Kisser</p>
		</FooterContainerStyled>
	);
};

export default Footer;
