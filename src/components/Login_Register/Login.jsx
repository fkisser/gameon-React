import { Formik } from "formik";
import React from "react";
import { ContainerStyled, Form, PStyled, SectionStyled } from "./LogRegStyles";
import Input from "../UI/Inputs/Input";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { loginInitialValues } from "./initialValues";
import { loginValidationSchema } from "./validationSchema";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import useRedirect from "../../hooks/useRedirect";

const Login = () => {
	const dispatch = useDispatch();
	useRedirect("/");
	return (
		<SectionStyled>
			<ContainerStyled>
				<h1>Iniciar Sesión</h1>
				<Formik
					initialValues={loginInitialValues}
					validationSchema={loginValidationSchema}
					onSubmit={(values) => {
						dispatch(setCurrentUser(values.user));
					}}>
					<Form>
						<Input
							name={"user"}
							type={"text"}
							placeholder={"Usuario"}
						/>
						<Input
							name={"password"}
							type={"password"}
							placeholder={"Contraseña"}
						/>
						<Link to={"/register"}>
							<PStyled>¿No tienes usuario? Regístrate</PStyled>
						</Link>
						<Button>Ingresar</Button>
					</Form>
				</Formik>
			</ContainerStyled>
		</SectionStyled>
	);
};

export default Login;
