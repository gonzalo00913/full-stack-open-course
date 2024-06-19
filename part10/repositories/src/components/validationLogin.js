import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Ingresa el E-mail'),
  password: yup
    .string()
    .min(5, 'Contraseña demasiado corta')
    .max(20, 'Contraseña demasiado larga')
    .required('Ingresa contraseña'),
});


export default validationSchema;