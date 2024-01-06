import React, { useState, Fragment } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from './../assets/Logo.png';
import Spinner from '../components/loadingComponents/Spinner';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import {
  userLoginGoogle,
  userLoginFacebook,
  addUser,
} from '../redux/features/userSlice';
import userServices from '../services/userServices.js';
import { StepsQuestions } from '../components/parents/StepsQuestions';
import { AuthGoogle } from '../components/buttons/AuthGoogle';
import { ButtonForm } from '../components/form/ButtonForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
  // useGoogleOneTapLogin({
  //   onSuccess: (credentialResponse) => {
  //     console.log(credentialResponse);
  //   },
  //   onError: () => {
  //     console.log("Login Failed");
  //   },
  // });

  //Login
  const [enviar, setEnviar] = useState(false);
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('el email no es valido')
      .required('el email es requerido'),
    password: Yup.string()
      .required('el password es obligatorio')
      .min(6, 'el password debe tener al menos 6 caracteres'),
  });

  const handleSubmit = async (valores) => {
    setMessage(false);
    const dataPost = {
      nicknameOrEmail: valores.email,
      password: valores.password,
    };

    setEnviar(true);

    try {
      const resp = await userServices.userLogin(dataPost);
      console.log(resp);
      const { token } = resp.data;
      dispatch(addUser({ token, user: resp.data.user }));
      navigate('/dashboard');
    } catch (error) {
      const msgError = error.response.data.message;
      console.log(msgError);
      setMessage(msgError);
    }
    setEnviar(false);
  };

  //GOOGLE API
  const responseGoogle = (response) => {
    console.log(response, 'respuesta google');
    dispatch(userLoginGoogle(response));
    setTimeout(() => {
      if (user.status === 200 || user.status === 201) {
        setMessage(false);
        user.completeData ? navigate('/') : navigate('/completeData');
      } else {
        //const {Message} = user
        setMessage('Error');
        //setMessage(Message)
        //console.log(Message)
      }
    }, 2000);
  };

  // login Facebook
  const responseFacebook = (response) => {
    dispatch(userLoginFacebook(response));
    setTimeout(() => {
      if (user.status === 200 || user.status === 201) {
        setMessage(false);
        user.completeData ? navigate('/') : navigate('/completeData');
      } else {
        //const {Message} = user
        setMessage('Error');
        //setMessage(Message)
        //console.log(Message)
      }
    }, 2000);
  };

  const IconFacebook = () => (
    <svg
      style={{ marginRight: '1rem' }}
      enableBackground="new 0 0 32 32"
      height="20px"
      id="Layer_1"
      version="1.0"
      viewBox="0 0 32 32"
      width="20px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
          fill="#FFFFFF"
        />
        <path
          d="M22,32V20h4l1-5h-5v-2c0-2,1.002-3,3-3h2V5c-1,0-2.24,0-4,0c-3.675,0-6,2.881-6,7v3h-4v5h4v12H22z"
          fill="#2672CB"
          id="f"
        />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );

  return (
    <StepsQuestions>
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

        <p className="text-3xl font-semibold text-white py-6">Bienvenido</p>

        <div className="sm:w-2/5 w-2/3  flex flex-col gap-4 text-center">
          {/* TODO:  pendiente acomodar google*/}
          <GoogleOAuthProvider clientId={process.env.REACT_APP_ID_GOOGLE}>
            <AuthGoogle />
          </GoogleOAuthProvider>

          <FacebookLogin
            appId={process.env.REACT_APP_ID_FACEBOOK}
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="rounded-lg items-center bg-[#2672CB] transition-all flex  w-full
                              min-h-[50px] text-white hover:bg-[#2672CB]/80 focus:ring-2 focus:outline-none
                              focus:ring-white font-medium sm:text-sm text-xs sm:px-5 sm:px-3 px-[3px]
                              sm:py-2 py-1 justify-center sm:justify-start"
            icon={<IconFacebook />}
          />

          {/* <a
            href="#"
            className="rounded-lg items-center bg-[#4FC4FF] transition-all w-full min-h-[50px] text-white 
                              hover:bg-[#4FC4FF]/80 focus:ring-2 focus:outline-none focus:ring-white font-medium sm:text-sm 
                              text-xs sm:px-5 sm:px-3 px-[3px] sm:py-2 py-1 text-center flex justify-center sm:justify-start"
          >
            <svg
              style={{ marginRight: '1rem' }}
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
            >
              <path d="M56 56h400v400H56z" fill="none"></path>
              <path
                d="M161.014 464.013c193.208 0 298.885-160.071 298.885-298.885 0-4.546 0-9.072-.307-13.578A213.737 
                                  213.737 0 0 0 512 97.176a209.705 209.705 0 0 1-60.334 16.527 105.426 105.426 0 0 0 46.182-58.102 
                                  210.548 210.548 0 0 1-66.703 25.498 105.184 105.184 0 0 0-76.593-33.112c-57.682 
                                  0-105.145 47.464-105.145 105.144 0 8.002.914 15.979 2.722 
                                  23.773-84.418-4.231-163.18-44.161-216.494-109.752-27.724 47.726-13.379 109.576 32.522 
                                  140.226A104.258 104.258 0 0 1 20.48 194.23v1.331c.014 49.814 35.447 93.111 84.275 102.974a104.898 
                                  104.898 0 0 1-47.431 1.802c13.727 42.685 53.311 72.108 98.14 72.95a210.83 210.83 0 0 1-130.458 
                                  45.056A213.688 213.688 0 0 1 0 416.827a297.42 297.42 0 0 0 161.014 47.104"
                fill="#ffffff"
                fillRule="nonzero"
                className="fill-1da1f2"
              ></path>
            </svg>
            Iniciar sesión con Twitter
          </a> */}
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full flex-col flex items-center ">
            <div className="sm:w-4/6 w-5/6 flex  py-5 justify-around flex-wrap ">
              <div className="w-[100%] md:w-1/2 p-2">
                <label
                  htmlFor="email"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1 text-center"
                >
                  Correo electrónico
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mb-1 px-3 transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] 
                                      sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm 
                                      focus:outline-none focus:shadow-outline font-semibold"
                  placeholder="ejemplo@gmail.com"
                  autoComplete="email"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              <div className="w-[100%] md:w-1/2 p-2">
                <label
                  htmlFor="password"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1 text-center"
                >
                  Contraseña
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  className="mb-1 px-3 transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] 
                                    sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-lock shadow-sm 
                                    focus:outline-none focus:shadow-outline font-semibold"
                  placeholder="Contraseña"
                  autoComplete="password"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm"
                />
                {/* <span className="absolute right-1 top-[30px] opacity-50 hover:opacity-100 z-30 cursor-pointer"></span> */}
              </div>
            </div>
            {/* <div className="w-full flex-col flex items-center">
              <div className="sm:w-4/6 w-5/6 flex text-center  justify-around">
                <div></div>

                <div>
                  
                </div>
              </div>
            </div> */}

            <div className="w-full flex-col flex items-center">
              <div className="sm:w-4/6 w-5/6 flex text-center  justify-center">
                {message ? (
                  <p className="text-red-600 text-sm">{message}</p>
                ) : null}
              </div>
            </div>

            <div className="flex-col flex w-3/5 justify-center py-2 items-center">
              <Link
                to="/forgatPassword"
                className="text-white text-sm text-center hover:text-blue-700 transition-all"
              >
                Olvide mi contraseña
              </Link>
              <Link
                to="/olvidoDatos"
                className="text-white text-sm text-center hover:text-blue-700 transition-all"
              >
                Olvide mis datos
              </Link>
            </div>
            <div className="flex sm:w-1/3 w-1/2 justify-center py-2 mb-3">
              <ButtonForm
                disabled={enviar}
                type="submit"
                className={`bg-[#693CBA] text-white w-full`}
              >
                {enviar ? 'Iniciando...' : 'Iniciar Sesión'}
              </ButtonForm>
            </div>
            <div className="sm:w-1/3 w-4/6 flex text-center justify-between">
              <p className="text-sm sm:text-md text-white">
                ¿No tienes cuenta?
              </p>
              <Link
                to="/register"
                className="text-[#0091FF] font-semibold hover:text-white text-sm sm:text-md"
              >
                Regístrate
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </StepsQuestions>
  );
}

/*

<a
                            href="#"
                            className="rounded-lg items-center bg-[#2672CB] transition-all flex mb-2 w-full h-[30%] 
                            text-white hover:bg-[#2672CB]/80 focus:ring-2 focus:outline-none focus:ring-white font-medium 
                            sm:text-sm text-xs sm:px-5 sm:px-3 px-[3px] sm:py-2 py-1 justify-center sm:justify-start"
                          >
                            <svg
                              style={{marginRight: '1rem'}}
                              enableBackground="new 0 0 32 32"
                              height="20px"
                              id="Layer_1"
                              version="1.0"
                              viewBox="0 0 32 32"
                              width="20px"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path
                                  d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
                                  fill="#FFFFFF"
                                />
                                <path
                                  d="M22,32V20h4l1-5h-5v-2c0-2,1.002-3,3-3h2V5c-1,0-2.24,0-4,0c-3.675,0-6,2.881-6,7v3h-4v5h4v12H22z"
                                  fill="#2672CB"
                                  id="f"
                                />
                              </g>
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                              <g />
                            </svg>
                            Iniciar sesión con Facebook
                          </a>

 <a
                            href="#"
                            className=""
                          >


                            <svg
                              style={{marginRight: '1rem'}}
                              viewBox="0 0 56.693 56.693"
                              xmlSpace="preserve"
                              height="20px"
                              width="20px"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M52.218 25.852h-7.512v-7.51c0-.573-.465-1.039-1.037-1.039H41.53a1.04 1.04 0 0 0-1.041 
                                1.039v7.51h-7.512c-.572 0-1.039.467-1.039 1.041v2.139a1.04 1.04 0 0 0 1.039 
                                1.039h7.512v7.514a1.04 1.04 0 0 0 1.041 1.039h2.139c.572 0 1.037-.465 
                                1.037-1.039V30.07h7.512a1.04 1.04 0 0 0 1.039-1.039v-2.139a1.04 1.04 0 0 0-1.039-1.04z"
                                fill="#ffffff"
                                className="fill-000000"
                              ></path>
                              <path
                                d="M26.974 32.438c-1.58-1.119-3.016-2.76-3.041-3.264 0-.918.082-1.357 2.141-2.961 
                                2.662-2.084 4.128-4.824 4.128-7.719 0-2.625-.802-4.957-2.167-6.595h1.059c.219 0 
                                .434-.068.609-.196l2.955-2.141c.367-.263.521-.732.381-1.161a1.042 1.042 0 0 
                                0-.988-.72H18.835c-1.446 0-2.915.255-4.357.751-4.816 1.661-8.184 5.765-8.184 9.978 0 
                                5.969 4.624 10.493 10.805 10.635a5.623 5.623 0 0 0-.182 1.396c0 .92.233 1.791.713 
                                2.633h-.17c-5.892 0-11.21 2.891-13.229 7.193-.526 1.119-.794 2.25-.794 3.367a6.33 6.33 
                                0 0 0 .826 3.113c1.269 2.27 3.994 4.031 7.677 4.961 1.901.48 3.944.725 6.065.725 1.906 
                                0 3.723-.246 5.403-.732 5.238-1.521 8.625-5.377 
                                8.625-9.828-.001-4.271-1.374-6.828-5.059-9.435zm-16.691 9.777c0-3.107 
                                3.947-5.832 8.446-5.832h.121c.979.012 1.934.156 2.834.432.309.213.607.416.893.611 2.084 
                                1.42 3.461 2.357 3.844 3.861.09.379.135.758.135 1.125 0 3.869-2.885 5.83-8.578 5.83-4.315 
                                0-7.695-2.646-7.695-6.027zm4.094-29.357c.703-.803 1.624-1.227 
                                2.658-1.227l.117.002c2.921.086 5.716 3.341 6.23 7.256.289 2.192-.199 
                                4.253-1.301 5.509-.705.805-1.613 
                                1.229-2.689 1.229h-.049c-2.861-.088-5.716-3.467-6.227-7.377-.287-2.186.173-4.151 1.261-5.392z"
                                fill="#ffffff"
                                className="fill-000000"
                              ></path>
                            </svg>
                            Iniciar sesión con Google
                          </a>

<div className="sm:w-2/5 w-2/3 md:h-1/4 h-1/5 flex flex-col text-center">
                            < GoogleOAuthProvider clientId="766969126814-pobe6ah6ftbgupc9vr8ekss2sakadhhr.apps.googleusercontent.com">
                                <GoogleLogin className="rounded-lg items-center bg-[#FC3850] transition-all mb-2 w-full h-[30%] 
                            text-white hover:bg-[#FC3850]/80 focus:ring-2 focus:outline-none focus:ring-white 
                            font-medium sm:text-sm text-xs sm:px-5 sm:px-3 px-[3px] sm:py-2 py-1 text-center flex 
                            justify-center sm:justify-start"
                                    theme='outline'
                                    width='250'
                                    // redirect_uri="/"
                                    logo_alignment='left'
                                    onSuccess={responseGoogle}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </GoogleOAuthProvider>
                            <a href="#" className="rounded-lg items-center bg-[#2672CB] transition-all flex my-2 w-full sm:w-5/6 h-1/4 text-white hover:bg-[#2672CB]/80 focus:ring-2 focus:outline-none focus:ring-white font-medium sm:text-sm text-xs sm:px-5 sm:px-3 px-[3px] sm:py-2 py-1 justify-center sm:justify-start" >
                                Iniciar sesión con Facebook
                            </a>
                            <a href="#" className="rounded-lg items-center bg-[#4FC4FF] transition-all mb-2 w-full sm:w-5/6 h-1/4 text-white hover:bg-[#4FC4FF]/80 focus:ring-2 focus:outline-none focus:ring-white font-medium sm:text-sm text-xs sm:px-5 sm:px-3 px-[3px] sm:py-2 py-1 text-center flex justify-center sm:justify-start" >
                                Iniciar sesión con Twitter
                            </a>
                        </div>



<div className="w-[90%] md:w-4/6 lg:w-1/2 h-5/6 md:h-[90%] flex-col flex rounded-lg bg-[#222332]/80 mx-8 justify-center items-center">
            <a href="./../../index.html" className="flex p-2 items-center">
            </a>
            <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
            <p className="text-3xl font-semibold text-white py-6">Bienvenido</p>
            <div className="sm:w-2/5 w-2/3 md:h-1/4 h-1/5 flex flex-col text-center">
                < GoogleOAuthProvider clientId="766969126814-pobe6ah6ftbgupc9vr8ekss2sakadhhr.apps.googleusercontent.com">
                    <GoogleLogin className="w-full h-[30%]"
                        theme='outline'
                        width='250'
                        // redirect_uri="/"
                        logo_alignment='left'
                        onSuccess={responseGoogle}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
                <a href="#" className="rounded-lg items-center bg-[#2672CB] transition-all flex my-2 w-full sm:w-5/6 h-1/4 text-white hover:bg-[#2672CB]/80 focus:ring-2 focus:outline-none focus:ring-white font-medium sm:text-sm text-xs sm:px-5 sm:px-3 px-[3px] sm:py-2 py-1 justify-center sm:justify-start" >
                    Iniciar sesión con Facebook
                </a>
                <a href="#" className="rounded-lg items-center bg-[#4FC4FF] transition-all mb-2 w-full sm:w-5/6 h-1/4 text-white hover:bg-[#4FC4FF]/80 focus:ring-2 focus:outline-none focus:ring-white font-medium sm:text-sm text-xs sm:px-5 sm:px-3 px-[3px] sm:py-2 py-1 text-center flex justify-center sm:justify-start" >
                    Iniciar sesión con Twitter
                </a>
            </div>
            <form onSubmit={handleSubmit} className="w-full flex-col flex items-center">
                <div className="sm:w-4/6 w-5/6 flex text-center py-5 justify-around">
                    <div className="w-1/2 mx-2">
                        <label
                            for="email"
                            className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                        >Correo electrónico
                            <mark class="bg-transparent text-red-600">*</mark></label
                        >
                        <input
                            type="email"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className="transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none focus:shadow-outline font-semibold"
                            placeholder="Usuario"
                            required
                        />
                    </div>
                    <div class="w-1/2 mx-2">
                        <label
                            for="password"
                            className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                        >Contraseña
                            <mark class="bg-transparent text-red-600">*</mark></label
                        >
                        <input
                            id="password"
                            type="password"
                            onChange={(e) => setValues({ ...values, pass: e.target.value })}
                            className="transition-all w-full block sm:py-2 py-1 px-0 w-full text-[11px] sm:text-sm text-[#4E4B4B] rounded-lg icon-placeholder-lock shadow-sm focus:outline-none focus:shadow-outline font-semibold"
                            placeholder="Contraseña"
                            required
                        />
                        <span
                            className="absolute right-1 top-[30px] opacity-50 hover:opacity-100 z-30 cursor-pointer"
                        ></span>
                    </div>
                </div>
                <div class="flex-col flex w-3/5 justify-center py-2 items-center">
                    <Link
                        to="/OlvidoDatos"
                        className="text-white text-sm text-center hover:text-blue-700 transition-all"
                    >Olvide mi contraseña</Link>
                    <Link
                        to="/OlvidoDatos"
                        className="text-white text-sm text-center hover:text-blue-700 transition-all"
                    >Olvide mis datos</Link>
                </div>
                <div class="flex sm:w-1/3 w-1/2 justify-center py-2">
                    <button
                        type="submit"
                        className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm py-2 text-center mb-2">
                        Iniciar Sesión
                    </button>
                </div>
                <div className="sm:w-1/3 w-4/6 flex text-center justify-between">
                    <p className="text-sm sm:text-md text-white">¿No tienes cuenta?</p>
                    <Link to="/Registro" class="text-[#0091FF] font-semibold hover:text-white text-sm sm:text-md">Regístrate</Link>
                </div>
            </form>

        </div>

*/
