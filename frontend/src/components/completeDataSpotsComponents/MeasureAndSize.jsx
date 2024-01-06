import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeDataStep4 } from "../../redux/features/completeDataStepsSlice";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StepsQuestions } from "../parents/StepsQuestions";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";

export default function MeasureAndSize({ handleClick, currentStep, steps }) {
  const dispatch = useDispatch();
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);

  const initialValues = {
    estatura: "",
    peso: "",
    tallaFranela: "",
    tallaChaqueta: "",
    tallaPantalon: "",
    tallaZapato: "",
  };

  const validationSchema = Yup.object().shape({
    // estatura: Yup.string().required("El campo es obligatorio."),
    // peso: Yup.string().required("El campo es obligatorio."),
    // tallaFranela: Yup.string().required("El campo es obligatorio."),
    // tallaChaqueta: Yup.string().required("El campo es obligatorio."),
    // tallaPantalon: Yup.string().required("El campo es obligatorio."),
    // tallaZapato: Yup.string().required("El campo es obligatorio."),
  });

  const handleSubmit = (valores) => {
    dispatch(completeDataStep4(valores));
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
    <StepsQuestions bgImg={Images.cancha_tenis_azul}>
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
              <div className="h-full w-full flex flex-col justify-center items-center max-w-[500px] lg:max-w-[700px] m-auto">
                <h3 className=" text-md text-[#00D3E0]">
                  <FontAwesomeIcon
                    onClick={() => handleClick("back")}
                    icon={faArrowLeft}
                    className="text-white inline-block mr-3"
                  />
                  Paso 6 de 8
                </h3>
                <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">
                  Medidas Y Tallas
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6  w-full mb-8">
                  <div className=" ">
                    <label
                      htmlFor="estatura"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Estatura{" "}
                    </label>

                    <Field
                      type="text"
                      id=""
                      name="estatura"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="estatura"
                      placeholder="ejemplo 1.70"
                    />
                    <ErrorMessage
                      name="estatura"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="peso"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Peso corporal{" "}
                    </label>

                    <Field
                      type="text"
                      id=""
                      name="peso"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="peso"
                      placeholder="ejemplo: 40kg"
                    />
                    <ErrorMessage
                      name="peso"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="tallaFranela"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Talla de Franela{" "}
                    </label>

                    <Field
                      type="text"
                      id=""
                      name="tallaFranela"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="tallaFranela"
                      placeholder="ejemplo: s"
                    />
                    <ErrorMessage
                      name="tallaFranela"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="tallaChaqueta"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Talla de Chaqueta{" "}
                    </label>

                    <Field
                      type="text"
                      id=""
                      name="tallaChaqueta"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="tallaChaqueta"
                      placeholder="ejemplo: s"
                    />
                    <ErrorMessage
                      name="tallaChaqueta"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="tallaPantalon"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Talla de Pantalon, mono o short{" "}
                    </label>

                    <Field
                      type="text"
                      id=""
                      name="tallaPantalon"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="tallaPantalon"
                      placeholder="ejemplo: 26"
                    />
                    <ErrorMessage
                      name="tallaPantalon"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className=" ">
                    <label
                      htmlFor="tallaZapato"
                      className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                    >
                      Talla de zapatos
                    </label>

                    <Field
                      type="text"
                      id=""
                      name="tallaZapato"
                      className=" transition-all w-full block p-2 text-[11px] sm:text-sm 
                                        text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                        focus:shadow-outline font-semibold"
                      autoComplete="tallaZapato"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="tallaZapato"
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
