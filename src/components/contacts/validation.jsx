import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
    fullname: Yup.string().required("required"),
    photo: Yup.string()
        .url("invalid url")
        .required("required"),
    mobile: Yup.number().required("required"),
    email: Yup.string()
        .email("invalid email")
        .required("required"),
    job: Yup.string().nullable(),
    group: Yup.string().required("required"),
})