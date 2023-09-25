import LogoBig from "./img/logo.png";
import LogoMin from "./img/logo-min.png";

const Logo = ({ min }) => {
	return min ? (
		<img
			src={LogoMin}
			alt="logo"
		/>
	) : (
		<img
			src={LogoBig}
			alt="logo"
		/>
	);
};

export default Logo;
