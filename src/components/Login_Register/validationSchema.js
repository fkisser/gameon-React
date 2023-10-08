import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
  user: Yup.string().required('Campo Requerido'),
  email: Yup.string().email('Email inválido').required('Campo Requerido'),
  password: Yup.string().min(6, 'Mínimo de caracteres: 6').required('Campo Requerido')
})

export const loginValidationSchema = Yup.object({
  user: Yup.string().required('Campo Requerido'),
  password: Yup.string().min(6, 'Mínimo de caracteres: 6').required('Campo Requerido')
})