import * as Yup from "yup";
const formSchemaDataPersonal = {
  primer_nombre: Yup.string().required("El campo es obligatorio."),
  segundo_nombre: Yup.string().required("El campo es obligatorio."),
  primer_apellido: Yup.string().required("El campo es obligatorio."),
  segundo_apellido: Yup.string().required("El campo es obligatorio."),
  email: Yup.string()
    .email("el correo electrónico no es valido")
    .required("El campo es obligatorio."),
  email_confirm: Yup.string()
    .email("el correo electrónico no es valido")
    .required("El campo es obligatorio.")
    .oneOf(
      [Yup.ref("email")],
      "El correo electrónico no coincide con el principal."
    ),
  telefono: Yup.string().required("El campo es obligatorio."),
  // .matches(phoneRegExp, "El numero de teléfono es invalido.")
  telefono_confitrm: Yup.string()
    .required("El campo es obligatorio.")
    // .matches(phoneRegExp, "El numero de teléfono es invalido.")
    .oneOf(
      [Yup.ref("telefono")],
      "El numero de telefono no coincide con el principal."
    ),
  contraseña: Yup.string()
    .required("El campo es obligatorio.")
    .min(6, "La contraseña debe tener al menos 6 caracteres."),
  contraseña_confirm: Yup.string()
    .required("El campo es obligatorio.")
    .min(6, "La contraseña debe tener al menos 6 caracteres.")
    .oneOf(
      [Yup.ref("contraseña")],
      "La contraseña no coincide con el principal."
    ),

  fecha_nacimiento: Yup.date().required("El campo es obligatorio."),
  edad: Yup.number("La edad debe ser un numero entero")
    .integer()
    .required("El campo es obligatorio.")
    .min(1),
  genero: Yup.string().required("El campo es obligatorio."),
  lugar_nacimiento: Yup.string().required("El campo es obligatorio."),
  estado: Yup.string().required("El campo es obligatorio."),
  ciudad: Yup.string().required("El campo es obligatorio."),
  municipio: Yup.string().required("El campo es obligatorio."),
  parroquia: Yup.string().required("El campo es obligatorio."),

  cedula_num: Yup.number()
    .min(1, "La cedula debe contener numeros positivos.")
    .integer()
    .test("len", "La cedula debe contener como minimo 6 digitos", (val) => {
      // console.log(val);
      return val ? val.toString().length >= 6 : false;
    })
    .required("El campo es obligatorio."),
  cedula_doc: Yup.mixed().required("El campo es obligatorio."),
  pasaporte_num: Yup.number()
    .min(1, "El pasaporte debe contener numeros positivos.")
    .integer()
    .test("len", "El pasaporte debe contener como minimo 6 digitos", (val) => {
      // console.log(val);
      return val ? val.toString().length >= 6 : false;
    })
    .required("El campo es obligatorio."),
  pasaporte_emision: Yup.date().required("El campo es obligatorio."),
  pasaporte_vensimiento: Yup.date().required("El campo es obligatorio."),
  pasaporte_doc: Yup.mixed().required("El campo es obligatorio."),

  primera_dosis: Yup.date().required("El campo es obligatorio."),
  segunda_dosis: Yup.date().required("El campo es obligatorio."),
  tercera_dosis: Yup.date().required("El campo es obligatorio."),
  cuarta_dosis: Yup.date().required("El campo es obligatorio."),
  carnet_vacunacion: Yup.mixed().required("El campo es obligatorio."),

  certificado_nacimiento_num: Yup.number(
    "El Número de certificado de nacimiento debe ser un numero entero"
  )
    .integer()
    .required("El campo es obligatorio.")
    .min(1),
  certificado_nacimiento_doc: Yup.mixed().required("El campo es obligatorio."),
};
export const formSchemaCaracteristicas = {
  estatura: Yup.string().required("El campo es obligatorio."),
  peso_corporal: Yup.string().required("El campo es obligatorio."),
  talla_franela: Yup.string().required("El campo es obligatorio."),
  talla_chaqueta: Yup.string().required("El campo es obligatorio."),
  talla_zapato: Yup.string().required("El campo es obligatorio."),
  talla_pantalon: Yup.string().required("El campo es obligatorio."),
  tipo_actividad: Yup.string().required("El campo es obligatorio."),
  disciplina: Yup.string().required("El campo es obligatorio."),
  categoria: Yup.string().required("El campo es obligatorio."),
  nivel: Yup.string().required("El campo es obligatorio."),
  otra_actividad_deportiva: Yup.string().required("El campo es obligatorio."),
  avatar: Yup.mixed().required("El campo es obligatorio."),
};
export default formSchemaDataPersonal;
