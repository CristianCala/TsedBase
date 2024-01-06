import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeDataStep3 } from "../../redux/features/completeDataStepsSlice";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { limit } from "../../utils/helpers/words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StepsQuestions } from "../parents/StepsQuestions";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";

export default function DataPassport({ handleClick, currentStep, steps }) {
  const dispatch = useDispatch();
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const [documentPasaporte, setDocumentPasaporte] = useState(null);
  const initialValues = {
    numberPassport: "",
    dateEmition: "",
    dateExpire: "",
    file_upload_passaport: "",
  };

  const validationSchema = Yup.object().shape({
    // numberPassport: Yup.string().required(
    //   "el numero del pasaporte es requerido"
    // ),
    // dateEmition: Yup.date().required("El campo es obligatorio."),
    // dateExpire: Yup.date().required("El campo es obligatorio."),
    // file_upload_passaport: Yup.mixed().required("El campo es obligatorio."),
  });

  const handleSubmit = (valores) => {
    console.log(valores);
    dispatch(completeDataStep3(valores));
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
    <StepsQuestions bgImg={Images.tenis}>
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
                  Paso 5 de 8
                </h3>
                <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">
                  Datos Personales
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6  w-full mb-8">
                  <div className=" ">
                    <label
                      htmlFor="pasaporte"
                      className="font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Numero de Pasaporte{" "}
                      <mark className="bg-transparent text-red-600">*</mark>
                    </label>

                    <Field
                      type="text"
                      name="numberPassport"
                      className=" transition-all w-full block py-1.5 px-2 min-h-[35px] text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="numberPassport"
                      placeholder="ejemplo: 123456"
                    />

                    <div>
                      <ErrorMessage
                        name="numberPassport"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="facha de emision"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Fecha de Emision del Pasaporte{" "}
                      <mark className="bg-transparent text-red-600">*</mark>
                    </label>

                    <Field
                      type="date"
                      id=""
                      name="dateEmition"
                      className=" transition-all w-full block py-1.5 px-2 min-h-[35px] w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="dateEmition"
                    />
                    <ErrorMessage
                      name="dateEmition"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="fecha de Vencimiento"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Fecha de Vencimiento del Pasaporte{" "}
                      <mark className="bg-transparent text-red-600">*</mark>
                    </label>

                    <Field
                      type="date"
                      id=""
                      name="dateExpire"
                      className=" transition-all w-full block py-1.5 px-2 min-h-[35px] w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="dateExpire"
                    />
                    <ErrorMessage
                      name="dateExpire"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  {/* <div className=" ">
                  <label
                    htmlFor="secondName"
                    className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                  >
                    Adjuntar Pasaporte
                  </label>

                  <div>
                    <div className="max-w-xl">
                      <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <span className="font-medium text-gray-600">
                            Drop files to Attach, or
                            <span className="text-blue-600 underline">
                              browse
                            </span>
                          </span>
                        </span>
                        <Field
                          type="file"
                          name="file_upload_passaport"
                          autoComplete="secondName"
                          accept="image/*"
                          multiple
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div> */}

                  <div className="">
                    <label
                      htmlFor=""
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Adjuntar Pasaporte
                    </label>

                    <label
                      htmlFor="document_dni_data"
                      className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                    >
                      {limit(documentPasaporte?.name, 30) ||
                        "Adjuntar pasaporte"}
                    </label>
                    <Field name="file_upload_passaport">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <input
                            {...field}
                            onChange={(e) => {
                              setDocumentPasaporte(e.target.files[0]);
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
                      name="file_upload_passaport"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                    {/* {errors.cedula_doc && touched.cedula_doc ? (
                        <ErrorMessageInput msg={errors.cedula_doc} />
                      ) : null} */}
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
