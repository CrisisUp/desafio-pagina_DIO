import * as yup from "yup";

export const signupSchema = yup.object({
    name: yup.string()
        .min(3, 'O nome deve ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
    email: yup.string()
        .email('Insira um e-mail válido')
        .required('Campo obrigatório'),
    password: yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Campo obrigatório'),
}).required();