import LogoBig from "./img/logo.png";
import LogoMin from "./img/logo-min.png";
import LogoErr from "./img/err404.png";
import ImgDev from "./img/under_construction.png";

const errStyle = {
	objectFit: "cover",
	width: "100%",
};

const Logo = ({ min, big, err, dev }) => {
	if (min)
		return (
			<img
				src={LogoMin}
				alt="logo"
			/>
		);

	if (err)
		return (
			<img
				style={errStyle}
				src={LogoErr}
				alt="logo"
			/>
		);

	if (big)
		return (
			<img
				src={LogoBig}
				alt="logo"
			/>
		);

	if (dev)
		return (
			<img
				style={errStyle}
				src={ImgDev}
				alt="logo"
			/>
		);
};

export default Logo;
