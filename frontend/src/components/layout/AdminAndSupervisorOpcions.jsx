import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const AdminAndSupervisorOpcions = () => {
  const [showUsuario, setShowUsuario] = useState(false);
  const [showReportes, setShowReportes] = useState(false);
  const [regData, setRegData] = useState(false);
  const [consultas, setConsultas] = useState(false);

  return (
    <nav className=" px-2 sm:px-4 py-1.5 sm:py-2 fixed w-full z-40 top-0 left-0 background-nv z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto div-nv">
        <a href="./index.html" className="flex p-2 items-center">
          <img src={Logo} className="mr-3 h-12 py-1 px-1" alt="Atletas Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Menú</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className=" flex flex-col p-4 mt-4 bg-[#141414] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#141414] ">
            <li>
              <a
                href="#nosotros"
                className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150"
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="#galeria"
                className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150"
              >
                Galería
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 "
              >
                Contactos
              </a>
            </li>
            <li>
              {/*<button type="button" onClick={e => setShowUsuario(!showUsuario)} className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 transition ease-in-out delay-150" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                              <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="true">some</span>
                        </button>
                            <select id="dropdown-example" className={`${show ? `visible` : `hidden py-2 space-y-2`}`}>
                              <option value="EditarPerfil">Editar Perfil</option>
                              <option value="CambiarContrasenia">Cambiar Contrasenia</option>
                            </select>
                            <ul id="dropdown-example" className={`${showUsuario ? `visible` : `hidden py-2 space-y-2`}`}>
                              
                              <li>
                                   <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Editar Perfil</a>
                                </li>
                                <li>
                                   <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Cambiar Contrasenia</a>
                                </li>

                                <li>
                                   <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Cerrar Sesion</a>
                                </li>
                                   
                            </ul>*/}

              <div
                onClick={() => setShowUsuario(!showUsuario)}
                className="overflow-hidden block py-2 pr-8 pl-7 font-medium text-white rounded 
                            hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 hover:cursor-pointer"
              >
                Some
              </div>

              <div
                className={`${
                  showUsuario
                    ? `top-full opacity-100 visible`
                    : "top-[110%] invisible opacity-0"
                } absolute z-40 mt-2  rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}
              >
                {/*
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group 
                                   hover:bg-btnSecondaryAndHoverBackground text-white 
                                   hover:bg-btnSecondaryAndHoverBackground">Editar Perfil</a>
                            */}
                <a
                  href=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Editar Perfil
                </a>
                <Link
                  to="/changePassword"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Cambiar Contrasenia
                </Link>
                <a
                  href=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Cerrar Sesion
                </a>
              </div>
            </li>
            <li>
              <div
                onClick={() => setRegData(!regData)}
                className="overflow-hidden block py-2 pr-8 pl-7 font-medium text-white rounded 
                            hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 hover:cursor-pointer"
              >
                Registrar Datos Atletas
              </div>

              <div
                className={`${
                  regData
                    ? `top-full opacity-100 visible`
                    : "top-[110%] invisible opacity-0"
                } absolute z-40 mt-2  rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}
              >
                {/*
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group 
                                   hover:bg-btnSecondaryAndHoverBackground text-white 
                                   hover:bg-btnSecondaryAndHoverBackground">Editar Perfil</a>
                            */}
                <Link
                  to="/register"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Datos Personales
                </Link>
                <Link
                  to="/completeData"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Caracteristicas
                </Link>
              </div>
              {/*<a href="./src/register-login/iniciar-sesion.html" className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 transition ease-in-out delay-150" >*/}

              {/*<button type="button" onClick={e => setShowReportes(!showReportes)} className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 transition ease-in-out delay-150" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                              <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="true">Registrar Datos Atletas</span>
                        </button>
                            
                            <ul id="dropdown-example" className={`${showReportes ? `visible` : `hidden py-2 space-y-2`}`}>
                              
                              <li>
                                <Link to="/reporteAtletasPorDisciplinas" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas Por Disciplina</Link>
                              </li>
                                <li>
                                   <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas con datos por confimar por su representante deportivo</a>
                                </li>
                                <li>
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas por rango de edades</a>
                              </li>
                                <li>
                                   <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas por tipo de vestimenta y talla</a>
                                </li>
                                <li>
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas cons pasaporte vigente</a>
                              </li>
                                <li>
                                   <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas cons pasaporte vencido</a>
                                </li>
                                <li>
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas con pasaporte menor o igual a 6 meses por vencer</a>
                              </li>
                                <li>
                                   <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Representas deportivos por diciplina</a>
                                </li>
                                <li>
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas por representantes deportivos</a>
                              </li>
                                <li>
                                   <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas por genero</a>
                                </li>
                                <li>
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Atletas vacunados COVID 19</a>
                              </li>
                                
                                   
                            </ul>
                        </a>*/}
            </li>
            <li>
              <a
                href="./src/register-login/iniciar-sesion.html"
                className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150"
              >
                Notificaciones
              </a>
            </li>
            <li>
              <div
                onClick={() => setShowReportes(!showReportes)}
                className="block py-2 pr-8 pl-7 font-medium text-white rounded 
                            hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 hover:cursor-pointer"
              >
                Reportes
              </div>

              <div
                className={`${
                  showReportes
                    ? `top-full opacity-100 visible`
                    : "top-[110%] invisible opacity-0"
                } absolute z-40 mt-2  rounded border-[.5px] border-light bg-white py-5 -mx-24 shadow-card transition-all`}
              >
                {/*
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group 
                                   hover:bg-btnSecondaryAndHoverBackground text-white 
                                   hover:bg-btnSecondaryAndHoverBackground">Editar Perfil</a>
                            */}
                <Link
                  to="/reporteAtletasPorDisciplinas"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas Por Disciplina
                </Link>
                <Link
                  to="/atletasConDatosPorConfirmarPorSuRepresentanteReportivo"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas con datos por confimar por su representante deportivo
                </Link>
                <Link
                  to="/requerimientoReporteAtletasRangoEdades"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas por rango de edades
                </Link>
                <a
                  href="/reporteIndumentariaAtletas"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas por tipo de vestimenta y talla
                </a>
                <Link
                  to="/estatusDeVigenciaPasaportesAtletas"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas cons pasaporte vigente
                </Link>
                <Link
                  to=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas cons pasaporte vencido
                </Link>
                <Link
                  to=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas con pasaporte menor o igual a 6 meses por vencer
                </Link>
                <Link
                  to="/reporteAtletasPorDisciplinas"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Representas deportivos por diciplina
                </Link>
                <Link
                  to="/representanteDeportivo"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas por representantes deportivos
                </Link>
                <a
                  href=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas por genero
                </a>
                <Link
                  to="/ReporteAtletasVacunadosCovid19"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas vacunados COVID 19
                </Link>
              </div>
            </li>
            <li>
              <div
                onClick={() => setConsultas(!consultas)}
                className="block py-2 pr-8 pl-7 font-medium text-white rounded 
                            hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 hover:cursor-pointer"
              >
                Consultas
              </div>

              <div
                className={`${
                  consultas
                    ? `top-full opacity-100 visible`
                    : "top-[110%] invisible opacity-0"
                } absolute z-40 mt-2 mr-3 rounded border-[.5px] border-light bg-white py-3 -mx-48 shadow-card transition-all`}
              >
                {/*
                                <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
                                   text-menuAndButtonsTextBackground rounded-lg transition duration-75 group 
                                   hover:bg-btnSecondaryAndHoverBackground text-white 
                                   hover:bg-btnSecondaryAndHoverBackground">Editar Perfil</a>
                            */}
                <Link
                  to="/reporteAtletasPorDisciplinas"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas Por Disciplina
                </Link>
                <Link
                  to="/atletasConDatosPorConfirmarPorSuRepresentanteReportivo"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas con datos por confimar por su representante deportivo
                </Link>
                <Link
                  to="/requerimientoReporteAtletasRangoEdades"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas por rango de edades
                </Link>
                <a
                  href=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas por tipo de vestimenta y talla
                </a>
                <Link
                  to="/estatusDeVigenciaPasaportesAtletas"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas cons pasaporte vigente
                </Link>
                <Link
                  to=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas cons pasaporte vencido
                </Link>
                <Link
                  to=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas con pasaporte menor o igual a 6 meses por vencer
                </Link>
                <Link
                  to="/reporteAtletasPorDisciplinas"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Representas deportivos por diciplina
                </Link>
                <Link
                  to="/representanteDeportivo"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas por representantes deportivos
                </Link>
                <a
                  href=""
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas por genero
                </a>
                <Link
                  to="/ReporteAtletasVacunadosCovid19"
                  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                >
                  Atletas vacunados COVID 19
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminAndSupervisorOpcions;
