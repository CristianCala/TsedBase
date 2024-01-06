import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { StepsQuestions } from "../components/parents/StepsQuestions";
import Images from "../utils/images/images";
import { GoBack } from "../components/parents/GoBack";
import { ButtonForm } from "../components/form/ButtonForm";

export default function ChangePassword() {
  //Login

  const initialValues = {
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("el password es obligatorio")
      .min(8, "el password debe tener al menos 6 caracteres"),
    passwordConfirmation: Yup.string()
      .required("re inserta el password")
      .min(8, "el password debe tener al menos 6 caracteres")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const handleSubmit = (values) => {
    //e.preventDefault();
    console.log(values);
    /*axios
            .post(' http://18.222.226.76/api/auth/login', {
                email: values.email,
                password: values.pass,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err.response.data);
            });*/
  };

  return (
    <StepsQuestions className="justify-center" bgImg={Images.juego_voleibol_1}>
      <div className="flex justify-center items-center flex-col h-full">
        <a
          href="https://Atletasdevenezuela.com"
          className="flex p-2 items-center"
        >
          <img
            src={logo}
            className="mr-3 sm:h-16 h-12 py-1 px-1"
            alt="Atletas Logo"
          ></img>
        </a>

        <div className=" max-w-[400px] w-full">
          <h2 className="text-2xl mb-4 text-white text-center font-bold">
            Cambia tu contrasenia!
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="mb-8 mt-6  font-bold  text-center leading-loose">
              <div className="w-full items-center flex-col flex pt-4">
                <label
                  htmlFor="telephone"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  {" "}
                  Nueva Contrasenia
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>
                <Field
                  type="password"
                  name="password"
                  className="my-3 px-3 transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] 
                                            sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm 
                                            focus:outline-none focus:shadow-outline font-semibold"
                  placeholder="Ejem: *******"
                  autoComplete="password"
                  required
                />
              </div>

              <div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              <div className="w-full items-center flex-col flex pt-4">
                <label
                  htmlFor="telephone"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  {" "}
                  Confirmar Contrasenia
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>
                <Field
                  type="password"
                  name="passwordConfirmation"
                  className="my-3 px-3 transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] 
                                            sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm 
                                            focus:outline-none focus:shadow-outline font-semibold"
                  placeholder="Ejem: *********"
                  autoComplete="passwordConfirmation"
                  required
                />
              </div>

              <div>
                <ErrorMessage
                  name="passwordConfirmation"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              <p className="text-xs text-white">
                {" "}
                La contrasenia debe contener 8 caracteres con una letra
                mayuscula y un caracter especial
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-[20px]">
                <div className="">
                  <ButtonForm
                    className="bg-[#693CBA] text-white rounded-full w-full"
                    type="submit"
                  >
                    Aceptar
                  </ButtonForm>
                </div>
                <div className="">
                  <GoBack>
                    <ButtonForm className="bg-white text-black rounded-full w-full">
                      Cerrar
                    </ButtonForm>
                  </GoBack>
                </div>
                {/* 
                  <Link
                    to="/"
                    className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Cerrar
                  </Link> */}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </StepsQuestions>
  );
}
