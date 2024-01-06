import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeDataStep2 } from "../../redux/features/completeDataStepsSlice";
import logo from "../../assets/Logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { limit } from "../../utils/helpers/words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StepsQuestions } from "../parents/StepsQuestions";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";
import { InputWithSelect } from "../form/InputWithSelect";

export default function PersonalDataAthlete({
  handleClick,
  currentStep,
  steps,
}) {
  const dispatch = useDispatch();
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const [documentCedula, setDocumentCedula] = useState(null);
  const initialValues = {
    id: "",
    file_upload_id: "",
    //secondName: '',
  };

  const validationSchema = Yup.object().shape({
    // id: Yup.string().required("la cedula es requerida."),
    // file_upload_id: Yup.mixed().required("la cedula es requerida."),
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
    dispatch(completeDataStep2(valores));
    handleClick("next");
    //handleClick("next")
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

  /*const changeImage = (e) => {
    
    };*/

  return (
    <StepsQuestions bgImg={Images.haciendo_flexion}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <a href="./../../index.html" className="flex p-2 items-center">
          <img
            src={logo}
            className="mr-3 sm:h-16 h-12 py-1 px-1"
            alt="Atletas Logo"
          />
        </a>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full h-full">
            <div className="">
              <div className="h-full w-full flex flex-col justify-center items-center max-w-[500px] lg:max-w-[700px] m-auto">
                <h3 className=" text-md text-[#00D3E0]">
                  <FontAwesomeIcon
                    onClick={() => handleClick("back")}
                    icon={faArrowLeft}
                    className="text-white inline-block mr-3"
                  />
                  Paso 2 de 8
                </h3>
                <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">
                  Datos Personales
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6  w-full mb-8">
                  <div className=" ">
                    <label
                      htmlFor="cedula"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Numero de Cedula de Identidad{" "}
                      <mark className="bg-transparent text-red-600">*</mark>
                    </label>

                    <Field name="id">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputWithSelect
                            // labelClass="font-bold"
                            // label="C.I atleta a representar:"
                            id="cedula_art_asig"
                            placeholder="ejemplo: 10747247"
                            type="number"
                            field={field}
                            dataDrop={[
                              { label: "V", value: "V", selected: true },
                              { label: "E", value: "E" },
                              { label: "J", value: "J" },
                              { label: "G", value: "G" },
                            ]}
                          ></InputWithSelect>
                        );
                      }}
                    </Field>

                    {/* <Field
                      type="text"
                      id="firstName"
                      name="id"
                      className="min-h-[35px] transition-all w-full block p-2 py-1.5 w-full text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="id"
                      placeholder="ejemplo: 10747247"
                    /> */}

                    <div>
                      <ErrorMessage
                        name="id"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor=""
                      className="block font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Adjuntar cedula de identidad
                    </label>

                    <label
                      htmlFor="document_dni_data"
                      className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                    >
                      {limit(documentCedula?.name, 30) ||
                        "Adjuntar cedula de identidad"}
                    </label>
                    <Field name="file_upload_id">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <input
                            {...field}
                            onChange={(e) => {
                              setDocumentCedula(e.target.files[0]);
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
                      name="file_upload_id"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                    {/* {errors.cedula_doc && touched.cedula_doc ? (
                        <ErrorMessageInput msg={errors.cedula_doc} />
                      ) : null} */}
                  </div>
                  {/* <div className=" ">
                  <div>
                    <div className="max-w-xl">
                                            <label
                                                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                                <span className="flex items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>
                                                    <span className="font-medium text-gray-600">
                                                        Drop files to Attach, or
                                                        <span className="text-blue-600 underline">browse</span>
                                                    </span>
                                                </span>
                                                <Field 
                                                    type="file" 
                                                    name="file_upload_id" 
                                                    autoComplete="secondName"
                                                    accept="image/*"
                                                    multiple
                                                    className="hidden" 
                                                />
                                            </label>
                                        </div>    
                  </div>
                </div> */}
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
