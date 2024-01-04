import React from "react";
import { useSelector } from "react-redux";
import UserOrders from "../components/Profile/UserOrders";
import UserData from "../components/Profile/UserData";
import { UserProfileStyled } from "../components/Profile/ProfileStyles";

const UserPage = () => {
	return (
		<UserProfileStyled>
			<UserData />
			<UserOrders />
		</UserProfileStyled>
	);
};

export default UserPage;
