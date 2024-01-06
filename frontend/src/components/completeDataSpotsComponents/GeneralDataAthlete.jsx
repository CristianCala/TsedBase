import React from "react";
import { useDispatch } from "react-redux";
import { completeDataStep1 } from "../../redux/features/completeDataStepsSlice";
import logo from "../../assets/Logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StepsQuestions } from "../parents/StepsQuestions";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";

export default function GeneralDataAthlete({
  handleClick,
  currentStep,
  steps,
}) {
  const dispatch = useDispatch();
  const initialValues = {
    birthday: "",
    age: "",
    gener: "",
    placebourn: "",
    state: "",
    city: "",
    municipality: "",
    parish: "",
  };

  const validationSchema = Yup.object().shape({
    // birthday: Yup.string().required("la fecha de nacimiento es requerida"),
    // age: Yup.number().integer().required("Este campo es obligatorio"),
    // gener: Yup.string().required("Este campo es obligatorio"),
    // placebourn: Yup.string().required("Este campo es obligatorio"),
    // state: Yup.string().required("Este campo es obligatorio"),
    // city: Yup.string().required("Este campo es obligatorio"),
    // municipality: Yup.string().required("Este campo es obligatorio"),
    // parish: Yup.string().required("Este campo es obligatorio"),
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
    dispatch(completeDataStep1(valores));
    handleClick("next");
  };
  //flex flex-col justify-center items-center

  return (
    <StepsQuestions bgImg={Images.voleibol_2}>
      <div className="w-full h-full flex flex-col justify-center items-center">
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
              <div className="h-full w-full flex flex-col justify-center items-center gap-10 max-w-[500px] lg:max-w-[700px] m-auto">
                <div className="text-center">
                  <div className="">
                    <h3 className=" text-md text-[#00D3E0]">
                      <FontAwesomeIcon
                        onClick={() => handleClick("back")}
                        icon={faArrowLeft}
                        className="text-white inline-block mr-3"
                      />
                      Paso 1 de 6
                    </h3>
                  </div>
                  <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">
                    Completa Tus Datos
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6  w-full">
                  <div className=" ">
                    <label
                      htmlFor="firstName"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Fecha de Nacimiento{" "}
                      <mark className="bg-transparent text-red-600">*</mark>
                    </label>

                    <Field
                      type="date"
                      id="firstName"
                      name="birthday"
                      className=" transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                focus:shadow-outline font-semibold"
                      autoComplete="birthday"
                      placeholder=""
                    />

                    <div>
                      <ErrorMessage
                        name="birthday"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="Edad"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Edad
                    </label>

                    <Field
                      type="text"
                      id="secondName"
                      name="age"
                      className=" transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                focus:shadow-outline font-semibold"
                      autoComplete="age"
                      placeholder="ejemplo: 21"
                    />

                    <div>
                      <ErrorMessage
                        name="age"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="gener"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Genero
                    </label>

                    <Field
                      type="text"
                      id="surname"
                      name="gener"
                      className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                focus:shadow-outline font-semibold"
                      autoComplete="gener"
                      placeholder="ejemplo: masculino"
                    />

                    <ErrorMessage
                      name="gener"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="place"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Lugar de Nacimineto
                    </label>

                    <Field
                      type="text"
                      id="secondSurname"
                      name="placebourn"
                      className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                focus:shadow-outline font-semibold"
                      autoComplete="placebourn"
                      placeholder="ejemplo: Caracas"
                    />
                    <ErrorMessage
                      name="placebourn"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="estado"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Estado
                    </label>

                    <Field
                      type="text"
                      id="email"
                      name="state"
                      className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                text-[#4E4B4B] rounded-lg text-center shadow-sm focus:outline-none 
                                focus:shadow-outline font-semibold"
                      autoComplete="state"
                      placeholder="ejemplo: Carabobo"
                    />
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="ciudad"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Ciudad
                    </label>

                    <Field
                      type="text"
                      id="emailconfirmation"
                      name="city"
                      className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                text-[#4E4B4B] rounded-lg text-center shadow-sm focus:outline-none 
                                focus:shadow-outline font-semibold"
                      autoComplete="city"
                      placeholder="ejemplo: Caracas"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="municipality"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Municipio
                    </label>

                    <Field
                      type="parroquia"
                      id="mobilePhoneNumber"
                      name="municipality"
                      className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                text-[#4E4B4B] rounded-lg  shadow-sm focus:outline-none 
                                focus:shadow-outline font-semibold text-center"
                      autoComplete="municipality"
                      placeholder="ejemplo: some municipality"
                    />
                    <ErrorMessage
                      name="municipality"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="parroquia"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Parroquia{" "}
                    </label>

                    <Field
                      type="parroquia"
                      id="mobilePhoneNumber"
                      name="parish"
                      className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                text-[#4E4B4B] rounded-lg text-center shadow-sm focus:outline-none 
                                focus:shadow-outline font-semibold"
                      autoComplete="parish"
                      placeholder="ejemplo: Santa rosa"
                    />
                    <ErrorMessage
                      name="parish"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                </div>

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

/*



                        



                        
                        
                       


                        


                        

                        

                        

                        

                        
                    </div>
                </div>

id="startDateTime"
            name="startDateTime"
            label="Start Date & Time"
            dateFormat="MMMM d, yyyy hh:mmaa"
            showTimeSelect


*/
