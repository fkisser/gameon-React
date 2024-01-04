import Button from "../UI/Button/Button";
import { Formik } from "formik";
import Input from "../UI/Inputs/Input";
import TextArea from "../UI/Inputs/TextArea";
import * as Yup from "yup";
import { ButtonsContainerStyled, DataStyled } from "./CheckoutStyles";
import { FormStyled } from "../Contact/ContactStyles";
import { useDispatch, useSelector } from "react-redux";
import { openConfirm } from "../../redux/modal/modalSlice";
import { backToCartOrder } from "../../axios/orders";

const validationSchema = Yup.object({
	name: Yup.string().trim().required("Este campo es requerido"),
	lname: Yup.string().trim().required("Este campo es requerido"),
	dni: Yup.number()
		.min(1000000, "El DNI debe ser superior a 1.000.000")
		.required("Este campo es requerido"),
	mail: Yup.string()
		.email("Correo electrónico inválido")
		.required("Este campo es requerido"),
	address: Yup.string()
		.trim()
		.max(250, "Máximo de 250 caracteres")
		.required("Este campo es requerido"),
	details: Yup.string().trim().max(500, "Máximo de 500 caracteres"),
});

const Data = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user);
	const { isLoading } = useSelector((state) => state.order);
	return (
		<DataStyled>
			<Formik
				initialValues={{
					name: "",
					lname: "",
					dni: "",
					mail: "",
					address: "",
					details: "",
				}}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					dispatch(
						openConfirm({
							msj: "Desea confirmar su compra?",
							fun: "success",
							values,
						})
					);
				}}>
				{({ touched, errors, values }) => (
					<FormStyled>
						<h2>Tus datos</h2>
						<div className="group">
							<Input
								type="text"
								name="name"
								placeholder="Nombre"
								hasError={errors.name && touched.name}
							/>

							<Input
								type="text"
								name="lname"
								placeholder="Apellido"
								hasError={errors.lname && touched.lname}
							/>
						</div>
						<div className="group">
							<Input
								type="number"
								name="dni"
								placeholder="DNI"
								hasError={errors.dni && touched.dni}
							/>

							<Input
								type="email"
								name="mail"
								placeholder="Mail"
								hasError={errors.mail && touched.mail}
							/>
						</div>

						<TextArea
							name="address"
							cols="30"
							rows="3"
							placeholder="Calle, número, localidad, provincia, CP"
							hasError={errors.address && touched.address}
						/>

						<TextArea
							name="details"
							cols="30"
							rows="3"
							placeholder="Algún dato que consideres importante..."
							hasError={errors.details && touched.details}
						/>
						<ButtonsContainerStyled className="buttons">
							<Button
								disabled={isLoading}
								type="button"
								onClick={() => {
									backToCartOrder(dispatch, currentUser.token);
								}}>
								{"< Volver"}
							</Button>
							<Button
								disabled={isLoading}
								type="submit"
								onClick={() => {
									const msj = "Desea confirmar su compra?",
										fun = "success";
									dispatch(
										openConfirm({
											msj,
											fun,
											values,
										})
									);
								}}>
								Comprar
							</Button>
						</ButtonsContainerStyled>
					</FormStyled>
				)}
			</Formik>
		</DataStyled>
	);
};

export default Data;
