import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeDataStep6 } from "../../redux/features/completeDataStepsSlice";
import ValidatorLoginFinalStepData from "../../utils/validators/ValidatorLoginFinalStepData";
import logo from "../../assets/Logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { limit } from "../../utils/helpers/words";
import { StepsQuestions } from "../parents/StepsQuestions";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";

export default function RegisterInformation({
  handleClick,
  currentStep,
  steps,
}) {
  const dispatch = useDispatch();
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const [fotografia, setFotografia] = useState(null);
  const [enviar, setEnviar] = useState(false);
  const data = useSelector((state) => state);
  console.log(data);

  const initialValues = {
    actividad: "",
    displina: "",
    categoria: "",
    nivel: "",
    otraActividad: "",
    file_upload_info: "",
  };

  const validationSchema = Yup.object().shape({
    // actividad: Yup.string().required("El campo es obligatorio."),
    // displina: Yup.string().required("El campo es obligatorio."),
    // categoria: Yup.string().required("El campo es obligatorio."),
    // nivel: Yup.string().required("El campo es obligatorio."),
    // otraActividad: Yup.string().required("El campo es obligatorio."),
    // file_upload_info: Yup.mixed().required("El campo es obligatorio."),
    /*firstName: Yup.string().required('type your firstName'),
        surname: Yup.string().required('type your surname'),
        email: Yup.string().email('el email no es valido').required('el email es requerido'),
        emailconfirmation: Yup.string().email('el email no es valido')
            .required('el email es requerido').oneOf([Yup.ref('email')], 'emails does not match'),
        mobilePhoneNumber: Yup.string().required('type your mobilePhoneNumber'),
        PhoneNumberConfirmation: Yup.string().required('type your mobilePhoneNumber')
            .oneOf([Yup.ref('mobilePhoneNumber')], 'mobilePhoneNumber does not match'),
        password: Yup.string().required('el password es obligatorio')
            .min(6,'el password debe tener al menos 6 caracteres'),
        passwordConfirmation: Yup.string().required('re inserta el password')
            .min(6,'el password debe tener al menos 6 caracteres'),
            .oneOf([Yup.ref('password')], 'Passwords does not match')*/
  });

  const handleSubmit = (valores) => {
    console.log(valores);
    setEnviar(true);
    dispatch(completeDataStep6(valores));
    setTimeout(() => {
      setEnviar(false);
      handleClick("next");
    }, 2000);
    /*console.log(e.target.files);
        if (e.target.files[0] !== undefined) {
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = (e) => {
            e.preventDefault();
            setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
          };
        }*/
    //userTypeStep(valores)
  };

  return (
    <StepsQuestions bgImg={Images.juego_voleibol}>
      <div className="w-full h-full flex flex-col justify-center items-center max-w-[500px] lg:max-w-[700px] m-auto">
        <a href="./../../index.html" className="flex p-2 items-center">
          <img
            src={logo}
            className="mr-3 sm:h-16 h-12 py-1 px-1"
            alt="Atletas Logo"
          ></img>
        </a>
        {enviar ? (
          <ValidatorLoginFinalStepData />
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-full h-full">
              <div className="">
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <h3 className=" text-md text-[#00D3E0]">
                    <FontAwesomeIcon
                      onClick={() => handleClick("back")}
                      icon={faArrowLeft}
                      className="text-white inline-block mr-3"
                    />
                    Paso 8 de 8
                  </h3>
                  <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">
                    Registro de Informacion
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6  w-full mb-8">
                    <div className=" ">
                      <label
                        htmlFor="actividad"
                        className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                      >
                        Tipo de Actividad Deportiva{" "}
                      </label>

                      <Field
                        type="text"
                        id=""
                        name="actividad"
                        className=" transition-all w-full block px-2 py-1.5 min-h-[35px] text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                        autoComplete="actividad"
                        placeholder=""
                      />

                      <div>
                        <ErrorMessage
                          name="actividad"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                    </div>

                    <div className=" ">
                      <label
                        htmlFor="Displina"
                        className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                      >
                        Displina{" "}
                      </label>

                      <Field
                        type="text"
                        id="firstName"
                        name="displina"
                        className=" transition-all w-full block px-2 py-1.5 min-h-[35px] text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                        autoComplete="displina"
                        placeholder=""
                      />

                      <div>
                        <ErrorMessage
                          name="displina"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                    </div>

                    <div className=" ">
                      <label
                        htmlFor="categoria"
                        className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                      >
                        Categoria{" "}
                      </label>

                      <Field
                        type="text"
                        id="firstName"
                        name="categoria"
                        className=" transition-all w-full block px-2 py-1.5 min-h-[35px] text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                        autoComplete="categoria"
                        placeholder=""
                      />

                      <div>
                        <ErrorMessage
                          name="categoria"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                    </div>

                    <div className=" ">
                      <label
                        htmlFor="nivel"
                        className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                      >
                        Nivel{" "}
                      </label>

                      <Field
                        type="text"
                        id="firstName"
                        name="nivel"
                        className=" transition-all w-full block px-2 py-1.5 min-h-[35px] text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                        autoComplete="nivel"
                        placeholder=""
                      />

                      <div>
                        <ErrorMessage
                          name="nivel"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                    </div>

                    <div className=" ">
                      <label
                        htmlFor="otraActividad"
                        className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                      >
                        Otra Actividad Deportiva{" "}
                      </label>

                      <Field
                        type="text"
                        id="firstName"
                        name="otraActividad"
                        className=" transition-all w-full block px-2 py-1.5 min-h-[35px] text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                        autoComplete="otraActividad"
                        placeholder=""
                      />

                      <div>
                        <ErrorMessage
                          name="otraActividad"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                    </div>

                    <div className=" ">
                      <label
                        htmlFor="imagen"
                        className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                      >
                        Adjuntar la Fotografia
                      </label>

                      <label
                        htmlFor="document_dni_data"
                        className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                      >
                        {limit(fotografia?.name, 30) ||
                          "Adjuntar Carnet De Vacunacion"}
                      </label>
                      <Field name="file_upload_info">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <input
                              {...field}
                              onChange={(e) => {
                                setFotografia(e.target.files[0]);
                                field.onChange(e);
                              }}
                              className="hidden"
                              id="document_dni_data"
                              type="file"
                            />
                          );
                        }}
                      </Field>
                      <ErrorMessage
                        name="file_upload_info"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>
                  {/*<div className="items-center justify-center">
                                  <img
                                    src={ImageSelectedPrevious}
                                    alt=""
                                    style={{height: "150px", width: "250px"}}
                                    
                                  />
                                </div>*/}

                  <div className="flex items-center justify-center w-full max-w-[300px]">
                    <ButtonForm
                      type="submit"
                      className="bg-[#693CBA] rounded-full w-full text-white"
                    >
                      Registrar
                    </ButtonForm>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        )}
      </div>
    </StepsQuestions>
  );
}
