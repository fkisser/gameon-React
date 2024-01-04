import React from "react";
import { useSelector } from "react-redux";
import { UserDataStyled } from "./ProfileStyles";

const UserData = () => {
	const { currentUser } = useSelector((state) => state.user);
	return (
		<UserDataStyled>
			<h1>Tus Datos:</h1>
			<h2>Nombre de usuario: {currentUser.name}</h2>
			<h2>Mail: {currentUser.mail}</h2>
		</UserDataStyled>
	);
};

export default UserData;
