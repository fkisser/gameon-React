import Button from "../UI/Button/Button";
import { Formik } from "formik";
import Input from "../UI/Inputs/Input";
import TextArea from "../UI/Inputs/TextArea";
import * as Yup from "yup";
import { DataStyled } from "./CheckoutStyles";
import { FormStyled } from "../Contact/ContactStyles";
import { useDispatch } from "react-redux";
import { openConfirm } from "../../redux/modal/modalSlice";

const validationSchema = Yup.object({
	name: Yup.string().trim().required("Este campo es requerido"),
	lname: Yup.string().trim().required("Este campo es requerido"),
	dni: Yup.number()
		.min(1000000, "El DNI debe ser superior a 1.000.000")
		.required("Este campo es requerido"),
	email: Yup.string()
		.email("Correo electrónico inválido")
		.required("Este campo es requerido"),
	address: Yup.string()
		.trim()
		.max(250, "Máximo de 250 caracteres")
		.required("Este campo es requerido"),
	comments: Yup.string().trim().max(500, "Máximo de 500 caracteres"),
});

const Data = () => {
	const dispatch = useDispatch();
	return (
		<DataStyled>
			<Formik
				initialValues={{
					name: "",
					lname: "",
					dni: "",
					email: "",
					address: "",
					comments: "",
				}}
				validationSchema={validationSchema}
				onSubmit={({ resetForm }) => {
					const msj = "Desea confirmar su compra?",
						fun = "success";
					dispatch(
						openConfirm({
							msj,
							fun,
						})
					);
					resetForm();
				}}>
				{({ touched, errors }) => (
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
								name="email"
								placeholder="Mail"
								hasError={errors.email && touched.email}
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
							name="comments"
							cols="30"
							rows="3"
							placeholder="Algún dato que consideres importante..."
							hasError={errors.comments && touched.comments}
						/>

						<Button type="submit">Comprar</Button>
					</FormStyled>
				)}
			</Formik>
		</DataStyled>
	);
};

export default Data;
