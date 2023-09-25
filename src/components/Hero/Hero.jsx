import {
	HeroContainerStyled,
	HeroImgStyled,
	HeroTextStyled,
	LogoHeroStyled,
} from "./HeroStyles";
import {
	FaPowerOff,
	FaHeadphones,
	FaGamepad,
	FaHeart,
	FaDisplay,
	FaLaptop,
	FaWifi,
	FaKeyboard,
	FaCamera,
} from "react-icons/fa6";
import { FaMouse, FaDatabase } from "react-icons/fa";
import Logo from "../UI/Logo/Logo";

const Hero = () => {
	return (
		<HeroContainerStyled>
			<HeroImgStyled>
				<span>
					<FaHeadphones />
					<FaGamepad />
					<FaHeart />
					<FaDisplay />
					<FaLaptop />
				</span>
				<LogoHeroStyled>
					<Logo />
				</LogoHeroStyled>

				<span>
					<FaWifi />
					<FaMouse />
					<FaKeyboard />
					<FaDatabase />
					<FaCamera />
				</span>
			</HeroImgStyled>
			<HeroTextStyled>
				<p>
					El sitio donde <span>siempre</span> vas a encontrar{" "}
					<span>la mejor calidad</span>
				</p>
			</HeroTextStyled>
		</HeroContainerStyled>
	);
};

export default Hero;
