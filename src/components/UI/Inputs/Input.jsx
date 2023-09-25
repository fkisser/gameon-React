import React from "react";
import { ErrorStyled, InputContainerStyled, InputStyled } from "./InputsStyles";
import { ErrorMessage, Field } from "formik";

const Input = ({ type, name, placeholder, hasError }) => {
	return (
		<InputContainerStyled>
			<Field
				type={type}
				name={name}
				placeholder={placeholder}
				error={hasError}
				as={InputStyled}
			/>
			<ErrorMessage
				name={name}
				component={ErrorStyled}
			/>
		</InputContainerStyled>
	);
};

export default Input;
