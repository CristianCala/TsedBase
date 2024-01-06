import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userForgotData } from "../redux/features/userSlice";
import Spinner from "../components/loadingComponents/Spinner";
import { StepsQuestions } from "../components/parents/StepsQuestions";
import Images from "../utils/images/images";
import { ButtonForm } from "../components/form/ButtonForm";

export default function OlvidoDatos() {
  const [enviar, setEnviar] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const initialValues = {
    phoneNumber: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  ///^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("ingrese un numero de telephone")
      .matches(phoneRegExp, "Phone number is not valid"),
  });

  const handleSubmit = (valores) => {
    //e.preventDefault();
    console.log(valores);
    setEnviar(true);
    dispatch(userForgotData(valores));
    setTimeout(() => {
      if (user.status === 200 || user.status === 201) {
        setEnviar(false);
        setMessage(false);
        //setConfirmarCorreo(true)
        //user.completeData ? navigate("/") : navigate("/completeData")
      } else {
        setEnviar(false);
        //const {Message} = user
        setMessage("Error");
        //setMessage(Message)
        //console.log(Message)
      }
    }, 2000);
    /*axios
            .post(' http://18.222.226.76/api/forget-user', {
                telephone: values.telephone,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err.response.data);
            });*/
  };

  return (
    <StepsQuestions className="justify-center" bgImg={Images.voleibol_3}>
      <div className="flex-col flex  justify-center items-center  h-full">
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
        {enviar ? (
          <Spinner />
        ) : (
          <div className="flex flex-col text-center w-full max-w-[400px]">
            <h2 className="text-2xl mb-4 text-white text-center font-bold">
              ¡No recuerdo mis datos!
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className=" w-full font-bold  text-center leading-loose">
                <div className="w-full items-center flex-col flex pt-4">
                  <label
                    htmlFor="telephone"
                    className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                  >
                    Número De Teléfono
                    <mark className="bg-transparent text-red-600">*</mark>
                  </label>
                  <Field
                    type="tel"
                    name="phoneNumber"
                    className="my-3 py-3 px-0 transition-all  block  w-full text-[11px] sm:text-sm text-xs text-[#4E4B4B] rounded-lg  text-center icon-placeholder-phone shadow-sm focus:outline-none focus:shadow-outline font-semibold"
                    placeholder="Ingrese su número telefónico"
                    autoComplete="phoneNumber"
                    required
                  />
                </div>

                <div>
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

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
                    <Link to="/">
                      <ButtonForm className="bg-white text-black rounded-full w-full">
                        Cerrar
                      </ButtonForm>
                    </Link>
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
        )}
      </div>
    </StepsQuestions>
  );
}

/*

<div className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
            <div className="w-full h-full">
                <div className="w-full h-5/6 items-center flex">
                    <div className="h-full w-full flex flex-col justify-center items-center rounded-lg">
                        <div className="p-10 flex flex-col w-5/6 items-center justify-center">
                            <h2 className="text-2xl mb-4 text-white text-center font-bold">
                                ¡No recuerdo mis datos!
                            </h2>
                            <form onSubmit={handleSubmit}
                                className="mb-8 mt-6 sm:w-4/6 w-full font-bold text-xl text-center leading-loose"
                            >
                                <div className="w-full items-center flex-col flex pt-4">
                                    <label
                                        for="telephone"
                                        className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                                    >Número De Teléfono
                                        <mark className="bg-transparent text-red-600">*</mark></label
                                    >
                                    <input
                                        type="tel"
                                        onChange={(e) => setValues({ ...values, telephone: e.target.value })}
                                        className="transition-all w-[80%] block py-2 px-0 w-full text-[11px] sm:text-sm text-xs text-[#4E4B4B] rounded-lg icon-placeholder-phone shadow-sm focus:outline-none focus:shadow-outline font-semibold"
                                        placeholder="Ingrese su número telefónico"
                                        required
                                    />
                                </div>
                            </form>
                            <div
                                className="inline-flex w-5/6 items-center pt-8 justify-between"
                            >
                                <button
                                    type="submit"
                                    className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Aceptar
                                </button>
                                <Link
                                    to="/IniciarSesion"
                                    className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Cerrar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

*/
