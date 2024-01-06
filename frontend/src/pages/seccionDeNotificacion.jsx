import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seccionDeNotificaciones } from "../redux/features/consultasSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ButtonForm } from "../components/form/ButtonForm";
import { StepsQuestions } from "../components/parents/StepsQuestions";
import Images from "../utils/images/images";

const SeccionDeNotificacion = () => {
  const [notificationWithNotMarcketing, setNotificationWithNotMarcketing] =
    useState(false);
  const [opciones, setOpciones] = useState(false);
  const [enviar, setEnviar] = useState(false);
  const [comentarios, setComentarios] = useState("");
  const dispatch = useDispatch();

  const handleNotifications = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const { opcion, checked } = opciones;
    const valores = {
      opcion,
      checked,
      comentarios,
    };
    console.log(valores);
    dispatch(seccionDeNotificaciones(valores));
  };

  return (
    <StepsQuestions bgImg={Images.juego_voleibol} className="justify-center">
      <div className="px-4">
        <section className="max-w-[800px] p-5 mx-auto bg-white rounded-md shadow-md mb-10">
          <h2 className="my-6 text-lg font-semibold text-black  ">
            Correos electronicos urgentes/transaccionales
          </h2>
          <div className="whitespace-pre-line ">
            <p>Selecione esta opcion si desea unicamente recibir correos</p>
            <p>
              electronicos criticos (por ejemplo: facturas, ordenes, solicitudes
              de
            </p>
            <p>cambio de contrasenia, etc.)</p>
          </div>

          <div className="flex justify-start my-6">
            {/* <button className="px-8 py-2.5 leading-5 text-white bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300">
            Deseo recibir correos que no sean de marketing
          </button> */}

            <ButtonForm
              onClick={handleNotifications}
              className="bg-[#693CBA] text-white"
            >
              Cancelar Suscripcion
            </ButtonForm>
          </div>
        </section>

        <section className="max-w-[800px] mx-auto bg-white rounded-md shadow-md">
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center m-auto shadow-lg translate-y-[-50%]">
            or
          </div>
          <div className="p-5">
            <h2 className="my-4 text-lg font-semibold text-black">
              Cancela suscripcion de todas las listas
            </h2>
            <div className="whitespace-pre-line ">
              <p>
                si fuera posible, por favor aclarenos por que decidio cancelar
                su{" "}
              </p>
              <p>suscripcion</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center my-6">
                <input
                  type="radio"
                  name="option_subs"
                  value=""
                  id="default-radio-1"
                  onChange={() => {
                    setOpciones({
                      opcion: "Ya no deseo recibir mas sus correos",
                      checked: true,
                    });
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2  dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-500"
                >
                  Ya no deseo recibir mas sus correos
                </label>
              </div>
              <div className="flex items-center my-6">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="option_subs"
                  onChange={() => {
                    setOpciones({
                      opcion: "Nunca pedi recibir este correo electronico",
                      checked: true,
                    });
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2  dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-sm font-medium text-gray-500"
                >
                  Nunca pedi recibir este correo electronico
                </label>
              </div>

              <div className="flex items-center my-6">
                <input
                  id="default-radio-3"
                  type="radio"
                  value=""
                  name="option_subs"
                  onChange={() => {
                    setOpciones({
                      opcion: "El contenido no esta realmente interesante",
                      checked: true,
                    });
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2  dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-3"
                  className="ml-2 text-sm font-medium text-gray-500"
                >
                  El contenido no esta realmente interesante
                </label>
              </div>

              <div className="flex items-center my-6">
                <input
                  id="default-radio-4"
                  type="radio"
                  value=""
                  name="option_subs"
                  onChange={() => {
                    setOpciones({
                      opcion: "Usted esta enviando con demasiada frecuencia",
                      checked: true,
                    });
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2  dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-4"
                  className="ml-2 text-sm font-medium text-gray-500"
                >
                  Usted esta enviando con demasiada frecuenciaz
                </label>
              </div>

              <div className="flex items-center my-6">
                <input
                  id="default-radio-5"
                  type="radio"
                  value=""
                  name="option_subs"
                  onChange={() => {
                    setOpciones({
                      opcion: "El correo electronico tiene contenido enganioso",
                      checked: true,
                    });
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2  dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-5"
                  className="ml-2 text-sm font-medium text-gray-500"
                >
                  El correo electronico tiene contenido enganioso
                </label>
              </div>

              <div className="w-full  mb-5">
                <div className="rounded-t-lg ">
                  <label htmlFor="comment" className="sr-only">
                    Mensaje
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    onChange={(e) => {
                      setComentarios(e.target.value);
                    }}
                    className="w-full text-sm text-gray-900  bg-white p-3
				           	focus:ring-0"
                    placeholder="Write a comment..."
                  ></textarea>
                </div>
                <div className="flex items-center justify-between py-2 ">
                  <ButtonForm
                    handdleClick={() => setEnviar(true)}
                    type="submit"
                    className="bg-[#693CBA] text-white"
                  >
                    Cancelar Suscripcion
                  </ButtonForm>

                  {/* <button
                onClick={() => setEnviar(true)}
                
                className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center bg-[#693CBA] text-white rounded-full"
              ></button> */}
                  {/*
				           <div className="flex pl-0 space-x-1 sm:pl-2">
				               <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
				                   <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
				                   <span className="sr-only">Attach file</span>
				               </button>
				               <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
				                   <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
				                   <span className="sr-only">Set location</span>
				               </button>
				               <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
				                   <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
				                   <span className="sr-only">Upload image</span>
				               </button>
				           </div>
				       */}
                </div>
              </div>
              {enviar && opciones === false ? (
                <div className="flex items-center my-6">
                  <p className="text-red-600 text-sm">
                    Debe selecionar una opcion
                  </p>
                </div>
              ) : null}
            </form>
          </div>
        </section>
      </div>
    </StepsQuestions>
  );
};

export default SeccionDeNotificacion;
