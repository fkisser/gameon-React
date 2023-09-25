import { StyledButton } from "./ButtonStyles";
import { motion } from "framer-motion";

const Button = ({
	children,
	disabled = false,
	radius = ".5rem",
	onClick,
	type,
}) => {
	return (
		<motion.div whileTap={{ scale: 0.95 }}>
			<StyledButton
				type={type}
				disabled={disabled}
				radius={radius}
				onClick={onClick}>
				{children}
			</StyledButton>
		</motion.div>
	);
};

export default Button;
