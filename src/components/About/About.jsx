import React from "react";
import ImgContainer from "./ImgContainer";
import TxtContainer from "./TxtContainer";
import { AboutContainerStyled, AboutContentStyled } from "./AboutStyles";
import AboutImage from "./img/about.jpg";

const About = () => {
	return (
		<AboutContainerStyled>
			<h2>Nosotros</h2>
			<AboutContentStyled>
				<ImgContainer>
					<img
						src={AboutImage}
						alt="nosotros"
					/>
				</ImgContainer>
				<TxtContainer>
					<p>
						Somos una empresa apasionada por la tecnología. Nuestro objetivo es
						ofrecerte <span>los mejores productos del mercado</span> para
						satisfacer tus necesidades.
					</p>
					<p>
						Desde potentes computadoras y laptops hasta accesorios para la
						oficina, tenemos <span>todo lo que necesitas</span> para llevar tus
						experiencias al siguiente nivel.
					</p>

					<p>
						Trabajamos con <span>primeras marcas</span> para asegurarnos de que
						obtengas productos de calidad y un rendimiento excepcional. Nuestro
						equipo de servicio al cliente está aquí para brindarte su apoyo en
						cada paso del camino.
					</p>

					<p>
						En <span>GameOn</span> encontrarás los productos más avanzados y
						especializados, para <span>mejorar tu rendimiento</span> o{" "}
						<span>maximizar tu diversión</span> (o ambos, ¿por qué no?).
					</p>
				</TxtContainer>
			</AboutContentStyled>
		</AboutContainerStyled>
	);
};

export default About;
