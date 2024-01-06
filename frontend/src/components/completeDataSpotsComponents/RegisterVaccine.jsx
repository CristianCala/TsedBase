import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeDataStep5 } from "../../redux/features/completeDataStepsSlice";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { limit } from "../../utils/helpers/words";
import { StepsQuestions } from "../parents/StepsQuestions";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";

export default function RegisterVaccine({ handleClick, currentStep, steps }) {
  const dispatch = useDispatch();
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const [carnetVacunacion, setCarnetVacunacion] = useState(null);
  const initialValues = {
    first: "",
    second: "",
    third: "",
    fourth: "",
    file_upload_vaccine: "",
  };

  const validationSchema = Yup.object().shape({
    // first: Yup.date().required("El campo es obligatorio."),
    // second: Yup.date().required("El campo es obligatorio."),
    // third: Yup.date().required("El campo es obligatorio."),
    // fourth: Yup.date().required("El campo es obligatorio."),
    // file_upload_vaccine: Yup.mixed().required("El campo es obligatorio."),
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
    dispatch(completeDataStep5(valores));
    handleClick("next");
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
    <StepsQuestions bgImg={Images.chica_cardio}>
      <div className="w-full h-full flex flex-col justify-center items-center max-w-[500px] lg:max-w-[700px] m-auto">
        <a href="./../../index.html" className="flex p-2 items-center">
          <img
            src={logo}
            className="mr-3 sm:h-16 h-12 py-1 px-1"
            alt="Atletas Logo"
          ></img>
        </a>

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
                  Paso 7 de 8
                </h3>
                <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">
                  Registro de Vacunas
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6  w-full mb-8 ">
                  <div className=" ">
                    <label
                      htmlFor="Primera dosis"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Primera Dosis{" "}
                    </label>

                    <Field
                      type="date"
                      id=""
                      name="first"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="first"
                      placeholder=""
                    />

                    <div>
                      <ErrorMessage
                        name="first"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="Segunda dosis"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Segunda Dosis{" "}
                    </label>

                    <Field
                      type="date"
                      id=""
                      name="second"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="second"
                      placeholder=""
                    />

                    <div>
                      <ErrorMessage
                        name="second"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="Tercera dosis"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Tercera Dosis{" "}
                    </label>

                    <Field
                      type="date"
                      id=""
                      name="third"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="third"
                      placeholder=""
                    />

                    <div>
                      <ErrorMessage
                        name="third"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="Cuarta dosis"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Cuarta Dosis{" "}
                    </label>

                    <Field
                      type="date"
                      id=""
                      name="fourth"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="fourth"
                      placeholder=""
                    />

                    <div>
                      <ErrorMessage
                        name="fourth"
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
                      Adjuntar Imagen De Carnet De Vacunacion (Tamanio Y Formato
                      Por Definir)
                    </label>

                    <label
                      htmlFor="document_dni_data"
                      className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                    >
                      {limit(carnetVacunacion?.name, 30) ||
                        "Adjuntar Carnet De Vacunacion"}
                    </label>
                    <Field name="file_upload_vaccine">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <input
                            {...field}
                            onChange={(e) => {
                              setCarnetVacunacion(e.target.files[0]);
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
                      name="file_upload_vaccine"
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
                    {currentStep === steps.length - 1
                      ? "Confirmar"
                      : "Siguiente"}
                  </ButtonForm>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </StepsQuestions>
  );
}
