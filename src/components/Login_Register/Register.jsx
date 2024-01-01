import { Formik } from "formik";
import React from "react";
import { ContainerStyled, Form, PStyled, SectionStyled } from "./LogRegStyles";
import Input from "../UI/Inputs/Input";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { registerInitialValues } from "./initialValues";
import { registerValidationSchema } from "./validationSchema";
import { useDispatch } from "react-redux";
// import { setCurrentUser } from "../../redux/user/userSlice";
import useRedirect from "../../hooks/useRedirect";

const Register = () => {
	const dispatch = useDispatch();
	useRedirect("/");
	return (
		<SectionStyled>
			<ContainerStyled>
				<h1>Registrarse</h1>
				<Formik
					initialValues={registerInitialValues}
					validationSchema={registerValidationSchema}
					onSubmit={(values) => {
						// dispatch(setCurrentUser(values.user));
					}}>
					<Form>
						<Input
							name={"user"}
							type={"text"}
							placeholder={"Usuario"}
						/>
						<Input
							name={"email"}
							type={"text"}
							placeholder={"Email"}
						/>
						<Input
							name={"password"}
							type={"password"}
							placeholder={"Contraseña"}
						/>
						<Link to={"/register"}>
							<PStyled>¿Ya tienes usuario? Ingresa</PStyled>
						</Link>
						<Button>Registrarse</Button>
					</Form>
				</Formik>
			</ContainerStyled>
		</SectionStyled>
	);
};

export default Register;
