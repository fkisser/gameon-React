import React from "react";
import { FormContainerStyled, FormStyled } from "./ContactStyles";
import Button from "../UI/Button/Button";
import { Formik } from "formik";
import Input from "../UI/Inputs/Input";
import TextArea from "../UI/Inputs/TextArea";
import * as Yup from "yup";

const validationSchema = Yup.object({
	name: Yup.string().trim().required("Este campo es requerido"),
	lname: Yup.string().trim().required("Este campo es requerido"),
	subject: Yup.string().trim().required("Este campo es requerido"),
	message: Yup.string()
		.trim()
		.max(500, "Máximo de 500 caracteres")
		.required("Este campo es requerido"),
	email: Yup.string()
		.email("Correo electrónico inválido")
		.required("Este campo es requerido"),
});

const FormContainer = () => {
	return (
		<FormContainerStyled>
			<Formik
				initialValues={{
					name: "",
					lname: "",
					email: "",
					subject: "",
					message: "",
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					resetForm();
				}}>
				{({ touched, errors }) => (
					<FormStyled>
						<Input
							type="text"
							name="name"
							placeholder="Tu nombre"
							hasError={errors.name && touched.name}
						/>

						<Input
							type="text"
							name="lname"
							placeholder="Tu apellido"
							hasError={errors.lname && touched.lname}
						/>

						<Input
							type="email"
							name="email"
							placeholder="Tu mail"
							hasError={errors.email && touched.email}
						/>

						<Input
							type="text"
							name="subject"
							placeholder="Asunto"
							hasError={errors.subject && touched.subject}
						/>

						<TextArea
							name="message"
							cols="30"
							rows="7"
							placeholder="Tu mensaje"
							hasError={errors.message && touched.message}
						/>

						<Button type="submit">Enviar</Button>
					</FormStyled>
				)}
			</Formik>
		</FormContainerStyled>
	);
};

export default FormContainer;
