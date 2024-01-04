import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  mail: Yup.string().email('Email inválido').required('Campo Requerido'),
  password: Yup.string().min(6, 'Mínimo de caracteres: 6').required('Campo Requerido')
})

export const loginValidationSchema = Yup.object({
  mail: Yup.string().email('Email inválido').required('Campo Requerido'),
  password: Yup.string().min(6, 'Mínimo de caracteres: 6').required('Campo Requerido'),
})