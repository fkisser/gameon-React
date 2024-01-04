import { Formik } from "formik";
import React, { useEffect } from "react";
import { ContainerStyled, Form, PStyled, SectionStyled } from "./LogRegStyles";
import Input from "../UI/Inputs/Input";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { registerInitialValues } from "./initialValues";
import { registerValidationSchema } from "./validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import useRedirect from "../../hooks/useRedirect";
import { register } from "../../axios/auth";
import { errorUser } from "../../redux/user/userSlice";

const Register = () => {
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector((state) => state.user);
	useRedirect("/");
	useEffect(() => {
		dispatch(errorUser(false));
	}, []);
	return (
		<SectionStyled>
			<ContainerStyled>
				<h1>Registrarse</h1>
				<Formik
					initialValues={registerInitialValues}
					validationSchema={registerValidationSchema}
					onSubmit={async (values) => {
						await register(dispatch, values.name, values.mail, values.password);
					}}>
					<Form>
						<Input
							name={"name"}
							type={"text"}
							placeholder={"Nombre de usuario"}
							hasError={String(error).includes("nombre")}
						/>
						<Input
							name={"mail"}
							type={"text"}
							placeholder={"Mail"}
							hasError={String(error).includes("correo")}
						/>
						<Input
							name={"password"}
							type={"password"}
							placeholder={"Contraseña"}
							hasError={String(error).includes("contraseña")}
						/>
						<Link to={"/register"}>
							<PStyled>¿Ya tienes usuario? Ingresa</PStyled>
						</Link>
						<Button type={"submit"}>
							{isLoading ? (
								<ClipLoader
									size={22}
									color="var(--dark-blue)"
								/>
							) : (
								"Registrarse"
							)}
						</Button>
						{error && <p>{error.toString()}</p>}
					</Form>
				</Formik>
			</ContainerStyled>
		</SectionStyled>
	);
};

export default Register;
