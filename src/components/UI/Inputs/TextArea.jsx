import React from "react";
import { ErrorMessage, Field } from "formik";
import {
	ErrorStyled,
	InputContainerStyled,
	TextAreaStyled,
} from "./InputsStyles";

const TextArea = ({ name, placeholder, cols, rows, hasError }) => {
	return (
		<InputContainerStyled>
			<Field
				name={name}
				placeholder={placeholder}
				cols={cols}
				rows={rows}
				error={hasError}
				as={TextAreaStyled}
			/>
			<ErrorMessage
				name={name}
				component={ErrorStyled}
			/>
		</InputContainerStyled>
	);
};

export default TextArea;
