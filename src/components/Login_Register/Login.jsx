import { Formik } from "formik";
import React, { useEffect } from "react";
import { ContainerStyled, Form, PStyled, SectionStyled } from "./LogRegStyles";
import Input from "../UI/Inputs/Input";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { loginInitialValues } from "./initialValues";
import { loginValidationSchema } from "./validationSchema";
import { useDispatch, useSelector } from "react-redux";
import useRedirect from "../../hooks/useRedirect";
import { login } from "../../axios/auth";
import { ClipLoader } from "react-spinners";
import { errorUser } from "../../redux/user/userSlice";

const Login = () => {
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector((state) => state.user);
	useRedirect("/");
	useEffect(() => {
		dispatch(errorUser(false));
	}, []);
	return (
		<SectionStyled>
			<ContainerStyled>
				<h1>Iniciar Sesión</h1>
				<Formik
					initialValues={loginInitialValues}
					validationSchema={loginValidationSchema}
					onSubmit={async (values) => {
						await login(dispatch, values.mail, values.password);
					}}>
					<Form>
						<Input
							name={"mail"}
							type={"email"}
							placeholder={"Mail"}
							hasError={String(error).includes("usuario")}
						/>
						<Input
							name={"password"}
							type={"password"}
							placeholder={"Contraseña"}
							hasError={String(error).includes("Contraseña")}
						/>
						<Link to={"/register"}>
							<PStyled>¿No tienes usuario? Regístrate</PStyled>
						</Link>
						<Button type={"submit"}>
							{isLoading ? (
								<ClipLoader
									size={22}
									color="var(--dark-blue)"
								/>
							) : (
								"Ingresar"
							)}
						</Button>
						{error && <p>{error.toString()}</p>}
					</Form>
				</Formik>
			</ContainerStyled>
		</SectionStyled>
	);
};

export default Login;
