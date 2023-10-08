import React from "react";
import { ErrorStyled } from "../components/UI/Error/ErrorStyles";
import Logo from "../components/UI/Logo/Logo";
import { useSelector } from "react-redux";

const UserPage = () => {
	const { currentUser } = useSelector((state) => state.user);
	return (
		<ErrorStyled>
			<Logo dev></Logo>
			<h4>
				Lo sentimos <span>{currentUser}</span>, aún no hay nada para ofrecerte
				por aquí
			</h4>
		</ErrorStyled>
	);
};

export default UserPage;
