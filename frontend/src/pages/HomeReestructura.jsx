import React from 'react';
import '../styles/landing-reestructura.css';
import Images from '../utils/images/images';
import { Link } from 'react-router-dom';

export const HomeReestructura = () => {
  return (
    <div className="scroll-smooth">
      <header>
        <nav className="bg-nav">
          <div className="container px-10  mx-auto gap-20 lg:px-10 flex justify-between items-center">
            <a href="#" className="inline-block w-40 py-5">
              <img src={Images.logo} alt="logo" className="" />
            </a>

            <button className="cursor-pointer md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>

            <ul className="list-none hidden md:flex md:gap-10">
              <li>
                <a href="#" className="text-white">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Calendario 2022
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Galería
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contactos
                </a>
              </li>
              <li>
                <Link to="/login" className="text-white">
                  <span className="mr-2">Iniciar Sesión </span>
                </Link>
                <Link to="/register" className="text-white">
                  <span>Regístrarse</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section>
          <div className="">
            <div className="">
              <div className="bg-right bg-cover bg-no-repeat bg-slider-1">
                <div className="container px-10 max-h-[700px] h-screen w-full flex  md:justify-end md:items-end">
                  <div className="md:pb-44">
                    <h3 className="lg:text-3xl pt-10 md:pt-0 md:pr-8 md:max-w-md  text-2xl text-white font-semibold mb-5">
                      Yulimar Andrea Rojas Rodríguez es una atleta venezolana
                      campeona olímpica en 2021 en triple salto
                    </h3>

                    <div className="translate-y-10- pl-8-">
                      <a
                        href="#"
                        className="block bg-[#F26F63] transition-colors focus:shadow-[#bd5e56]
                               hover:bg-[#bd5e56] px-6 py-3 rounded-md text-white tracking-wide text-center w-fit"
                      >
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden">
              <div className="bg-right bg-cover bg-no-repeat bg-slider-2">
                <div className="container px-10 max-h-[700px] h-screen w-full flex  md:justify-end md:items-end">
                  <div className="md:pb-44">
                    <h3 className="lg:text-3xl pt-10 md:pt-0 md:pr-8 md:max-w-md text-2xl text-white font-semibold mb-5">
                      Los futbolistas venezolanos en diferentes ligas del mundo
                      han contribuido a afianzar
                      <br /> el interés por el más universal <br /> de los
                      deportes.
                    </h3>

                    <div className="translate-y-10- pl-8-">
                      <a
                        href="#"
                        className="block bg-[#F26F63] transition-colors focus:shadow-[#bd5e56]
                               hover:bg-[#bd5e56] px-6 py-3 rounded-md text-white tracking-wide text-center w-fit"
                      >
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden">
              <div className="bg-right bg-cover bg-no-repeat bg-slider-3">
                <div className="container px-10  max-h-[700px] h-screen w-full flex  md:justify-end md:items-end">
                  <div className="md:pb-44">
                    <h3 className="lg:text-3xl md:pr-8 md:max-w-md pt-10 md:pt-0 text-2xl text-white font-semibold mb-5">
                      En 1925 se organiza en Caracas la divisa pionera del país,
                      Ávila Tenis Club que funcionaba en el sector capitalino
                    </h3>

                    <div className="translate-y-10- pl-8-">
                      <a
                        href="#"
                        className="block bg-[#F26F63] transition-colors focus:shadow-[#bd5e56]
                               hover:bg-[#bd5e56] px-6 py-3 rounded-md text-white tracking-wide text-center w-fit"
                      >
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden bg-right bg-cover bg-no-repeat bg-slider-4">
              <div className="container px-10 max-h-[700px] h-screen w-full flex  md:justify-end md:items-end">
                <div className="md:pb-44">
                  <h3 className="lg:text-3xl pt-10 md:pt-0 md:pr-8 md:max-w-md  text-2xl text-white font-semibold mb-5">
                    La natación es un deporte cuya competencia se centra en el
                    tiempo, batir récords y distancias.
                  </h3>

                  <div className="translate-y-10- pl-8-">
                    <a
                      href="#"
                      className="block bg-[#F26F63] transition-colors focus:shadow-[#bd5e56]
                                 hover:bg-[#bd5e56] px-6 py-3 rounded-md text-white tracking-wide text-center w-fit"
                    >
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="bg-[#F7F7F7]">
        <section className="container px-10 lg:px-4- mx-auto py-28 ">
          <div className="lg:flex ">
            <div className="lg:w-2/4 ">
              <div className="grid grid-cols-2  gap-x-7 gap-y-7 ">
                <div className="grid grid-cols-1  gap-7">
                  <div className=" md:h-80- ">
                    <img
                      src={Images.Nosotros1}
                      alt="partido de basket"
                      className="w-full rounded-xl h-full object-cover"
                    />
                  </div>

                  <div className="pl-14 pb-14 md:-translate-y-8- lg:pt-9-">
                    <img
                      src={Images.Nosotros3}
                      alt="la vinotinto"
                      className="w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-7 ">
                  <div className="lg:-translate-y-10- md:pr-8">
                    <img
                      src={Images.Nosotros2}
                      alt="cancha de atletismo y la bandera de Venezuela"
                      className="w-full rounded-xl h-full md:h-52- object-cover"
                    />
                  </div>

                  <div className="md:-translate-y-36- lg:-translate-y-40- lg:pt-2-">
                    <img
                      src={Images.Nosotros4}
                      alt="alzando la bandera de Venezuela"
                      className="w-full rounded-xl h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-2/4 lg:pl-10">
              <h6 className="uppercase tracking-widest text-orange-500 mb-4 text-lg text-center md:text-left">
                SOBRE NOSOTROS
              </h6>

              <h1 className="capitalize text-5xl text-slate-800 mb-12 text-center md:text-left">
                Atletas de venezuela
              </h1>

              <ul className="list-none mb-12 lg:pr-14 xl:pr-20">
                <li className="mb-7 flex items-center gap-5">
                  <div className="rotate-[268deg] bg-orange-200 rounded-full w-6 h-6 flex justify-center items-center p-2">
                    <div className="">
                      <i className="fa fa-chevron-down  text-black"></i>
                    </div>
                  </div>
                  <p>
                    El portal Atletas de Venezuela permite realizar el registro
                    para el análisis de datos del sector deportivo.
                  </p>
                </li>

                <li className="mb-7 flex items-center gap-5">
                  <div className="rotate-[268deg] bg-orange-200 rounded-full w-6 h-6 flex justify-center items-center p-2">
                    <div className="">
                      <i className="fa fa-chevron-down  text-black"></i>
                    </div>
                  </div>
                  <p>
                    Gracias al tratamiento de grandes volúmenes de información
                    que manejamos, de nuestros atletas, podemos organizar,
                    clasificar y facilitar la logística para mejorar la toma de
                    decisiones en terrenos deportivos.
                  </p>
                </li>

                <li className="mb-7 flex items-center gap-5">
                  <div className="rotate-[268deg] bg-orange-200 rounded-full w-6 h-6 flex justify-center items-center p-2">
                    <div className="">
                      <i className="fa fa-chevron-down  text-black"></i>
                    </div>
                  </div>
                  <p>
                    Te invitamos estimado atleta a que te registres o actualices
                    tus datos para que seas parte de la gran plataforma
                    tecnológica realizada para ti.
                  </p>
                </li>
              </ul>

              <div className="pl-10">
                <a
                  href="#"
                  className="uppercase  bg-[#F26F63] transition-colors focus:shadow-[#bd5e56]
                         hover:bg-[#bd5e56] px-4 py-3 rounded-md text-white tracking-wide"
                >
                  registrarse
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-10 lg:px-5- mx-auto mt-14 lg:mt-0">
          <center className="lg:px-2">
            <h2 className="capitalize text-5xl text-slate-800 mb-4">
              calendario 2022/23
            </h2>
            <h6 className="text-3xl text-slate-800 mb-10">
              Filtro según deporte
            </h6>

            <ul className="list-none text-lg flex justify-between lg:justify-start gap-6 lg:gap-16 mb-10">
              <li className="font-semibold text-zinc-700">Basket</li>
              <li className="font-semibold text-zinc-700 relative before:absolute before:border-b-4 before:border-yellow-400 before:w-full  before:h-3  before:bottom-[-5px] before:right-0">
                Fútbol
              </li>
              <li className="font-semibold text-zinc-700">Tenis</li>
              <li className="font-semibold text-zinc-700">Natación</li>
            </ul>

            <div className="bg-[#ebebeb] mb-12 shadow-md grid md:grid-cols-[80px_1fr_200px]">
              <a
                className="flex justify-center md:items-center py-4 lg:py-0 lg:pl-3"
                href="#"
                id="seccion_01"
              >
                <div className="">
                  <img
                    src={Images.icon_down}
                    alt="flecha hacia bajo"
                    className=""
                  />
                </div>
              </a>

              <div className="pt-8 bg-white md:py-4 bg-calendar hidden md:block">
                <div className="md:flex md:h-full md:px-4 md:items-center lg:max-w-[600px] lg:justify-between lg:justify-evenly- lg:px-0">
                  <div className="flex justify-center items-center gap-5">
                    <div className="">
                      <div className="w-12 mb-2 md:w-10 lg:w-12">
                        <img
                          src={Images.CaraboboFc}
                          alt="escudo del equipo de futbol del estado carabobo"
                          className="w-full"
                        />
                      </div>

                      <p className="text-[#495057] text-xs uppercase">
                        carabobo fc
                      </p>
                    </div>

                    <p className="text-[#495057]">VS</p>

                    <div className="">
                      <div className="w-16 mb-2 md:w-14 lg:w-16">
                        <img
                          src={Images.Portuguesa}
                          alt="escudo del equipo de Portuguesa carabobo"
                          className="w-full"
                        />
                      </div>

                      <p className="text-[#495057] text-xs uppercase">
                        portuguesa fc
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 md:mt-0">
                    <p className="uppercase text-sm font-semibold text-[#495057] md:text-xs lg:text-sm">
                      copa nacional - clasificatoria
                    </p>
                    <p className="uppercase text-xl font-semibold text-[#495057] md:text-base lg:text-xl">
                      25 agosto 2022 / 7:30pm
                    </p>
                  </div>
                </div>

                <div className="bg-[#ebebeb] mt-5 md:hidden">
                  <div className="py-5">
                    <p className="uppercase text-xs font-semibold text-[#495057] mb-2">
                      lugar
                    </p>
                    <p className="text-lg font-semibold text-[#495057] leading-5">
                      Estadio Olímpico de la UCV
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 hidden md:block lg:pr-4">
                <p className="uppercase text-xs font-semibold text-[#495057] mb-2">
                  lugar
                </p>
                <p className="text-lg font-semibold text-[#495057] leading-5">
                  Estadio Olímpico de la UCV
                </p>
              </div>
            </div>

            <div className="bg-[#ebebeb] mb-12 shadow-md grid md:grid-cols-[80px_1fr_210px]">
              <a
                className="flex justify-center md:items-center py-4 lg:py-0 lg:pl-3"
                href="#"
                id="seccion_01"
              >
                <div className="">
                  <img
                    src={Images.icon_down}
                    alt="flecha hacia bajo"
                    className=""
                  />
                </div>
              </a>

              <div className="pt-8 bg-white md:py-4 bg-calendar hidden md:block">
                <div className="md:flex md:h-full md:px-4 md:items-center lg:max-w-[600px] lg:justify-between lg:justify-evenly- lg:px-0">
                  <div className="flex justify-center items-center gap-5">
                    <div className="">
                      <div className="w-12 mb-2 md:w-10 lg:w-12">
                        <img
                          src={Images.Monagas}
                          alt="escudo del equipo de Monagas"
                          className="w-full"
                        />
                      </div>

                      <p className="text-[#495057] text-xs uppercase">
                        Monagas sc
                      </p>
                    </div>

                    <p className="text-[#495057]">VS</p>

                    <div className="">
                      <div className="w-12 mb-2 md:w-10 lg:w-12">
                        <img
                          src={Images.CaraboboFc}
                          alt="escudo del equipo de Caracas"
                          className="w-full"
                        />
                      </div>

                      <p className="text-[#495057] text-xs uppercase">
                        Caracas fc
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 md:mt-0">
                    <p className="uppercase text-sm font-semibold text-[#495057] md:text-xs lg:text-sm">
                      copa nacional - clasificatoria
                    </p>
                    <p className="uppercase text-xl font-semibold text-[#495057] md:text-base lg:text-xl">
                      27 agosto 2022 / 5:30pm
                    </p>
                  </div>
                </div>

                <div className="bg-[#ebebeb] mt-5 md:hidden">
                  <div className="py-5">
                    <p className="uppercase text-xs font-semibold text-[#495057] mb-2">
                      lugar
                    </p>
                    <p className="text-lg font-semibold text-[#495057] leading-5">
                      Estadio de Fútbol Metropolitano de Caracas
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 hidden md:block lg:pr-4">
                <p className="uppercase text-xs font-semibold text-[#495057] mb-2">
                  lugar
                </p>
                <p className="text-lg font-semibold text-[#495057] leading-5">
                  Estadio de Fútbol Metropolitano de Caracas
                </p>
              </div>
            </div>

            <div className="bg-[#ebebeb] mb-12 shadow-md grid md:grid-cols-[80px_1fr_210px]">
              <a
                className="flex justify-center md:items-center py-4 lg:py-0 lg:pl-3"
                href="#"
                id="seccion_01"
              >
                <div className="">
                  <img
                    src={Images.icon_down}
                    alt="flecha hacia bajo"
                    className=""
                  />
                </div>
              </a>

              <div className="pt-8 bg-white md:py-4 bg-calendar hidden md:block">
                <div className="md:flex md:h-full md:px-4 md:items-center lg:max-w-[600px] lg:justify-between lg:justify-evenly- lg:px-0">
                  <div className="flex justify-center items-center gap-5">
                    <div className="">
                      <div className="w-12 mb-2 md:w-10 lg:w-12">
                        <img
                          src={Images.DeportivoLara}
                          alt="escudo del equipo de Lara"
                          className="w-full"
                        />
                      </div>

                      <p className="text-[#495057] text-xs uppercase">
                        Deportivo Lara
                      </p>
                    </div>

                    <p className="text-[#495057]">VS</p>

                    <div className="">
                      <div className="w-16 mb-2 md:w-14 lg:w-16">
                        <img
                          src={Images.Aragua}
                          alt="escudo del equipo de Aragua"
                          className="w-full"
                        />
                      </div>

                      <p className="text-[#495057] text-xs uppercase">
                        Aragua Fc
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 md:mt-0">
                    <p className="uppercase text-sm font-semibold text-[#495057] md:text-xs lg:text-sm">
                      copa nacional - clasificatoria
                    </p>
                    <p className="uppercase text-xl font-semibold text-[#495057] md:text-base lg:text-xl">
                      29 agosto 2022 / 2:30pm
                    </p>
                  </div>
                </div>

                <div className="bg-[#ebebeb] mt-5 md:hidden">
                  <div className="py-5">
                    <p className="uppercase text-xs font-semibold text-[#495057] mb-2">
                      lugar
                    </p>
                    <p className="text-lg font-semibold text-[#495057] leading-5">
                      Estadio <br /> Metropolitano de Lara
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 hidden md:block lg:pr-4">
                <p className="uppercase text-xs font-semibold text-[#495057] mb-2">
                  lugar
                </p>
                <p className="text-lg font-semibold text-[#495057] leading-5">
                  Estadio <br /> Metropolitano de Lara
                </p>
              </div>
            </div>

            <div className="bg-[#ebebeb] shadow-md grid md:grid-cols-[80px_1fr_210px]">
              <a
                className="flex justify-center md:items-center py-4 lg:py-0 lg:pl-3"
                href="#"
                id="seccion_01"
              >
                <div className="">
                  <img
                    src={Images.icon_down}
                    alt="flecha hacia bajo"
                    className=""
                  />
                </div>
              </a>

              <div className="pt-8 bg-white md:py-4 bg-calendar hidden md:block">
                <div className="md:flex h-full md:px-4 md:items-center lg:justify-evenly- justify-between lg:max-w-[600px] lg:px-0">
                  <div className="flex justify-center items-center gap-5">
                    <div className="">
                      <div className="w-12 mb-2 md:w-10 lg:w-16">
                        <img
                          src={Images.DeportivoLaGuaira}
                          alt="escudo del equipo de la Guaira"
                          className="w-full"
                        />
                      </div>

                      <p className="text-[#495057] text-xs uppercase">
                        Deportivo la guaira
                      </p>
                    </div>

                    <p className="text-[#495057]">VS</p>

                    <div className="">
                      <div className="w-16 mb-2 md:w-14">
                        <img
                          src={Images.DeportivoTáchira}
                          alt="escudo del equipo deportivo tachira"
                          className="w-full"
                        />
                      </div>

                      <p className="text-[#495057] text-xs uppercase">
                        Deportivo Tachira
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 md:mt-0">
                    <p className="uppercase text-sm font-semibold text-[#495057] md:text-xs lg:text-sm">
                      copa nacional - clasificatoria
                    </p>
                    <p className="uppercase text-xl font-semibold text-[#495057] md:text-base lg:text-xl">
                      01 septiembre 2022 / 6:00pm
                    </p>
                  </div>
                </div>

                <div className="bg-[#ebebeb] mt-5 md:hidden">
                  <div className="py-5">
                    <p className="uppercase text-xs font-semibold text-[#495057] mb-2">
                      lugar
                    </p>
                    <p className="text-lg font-semibold text-[#495057] leading-5">
                      Estadio Brígido Iriarte
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 hidden md:block lg:pr-4">
                <p className="uppercase text-xs font-semibold text-[#495057] mb-2">
                  lugar
                </p>
                <p className="text-lg font-semibold text-[#495057] leading-5">
                  Estadio Brígido Iriarte
                </p>
              </div>
            </div>
          </center>
        </section>

        <section className="container px-10 lg:px-4- mx-auto">
          <h2 className="text-5xl text-slate-800 mb-12 text-center mt-24">
            Galería de imágenes
          </h2>

          <div className="md:flex md:flex-wrap">
            <div className="md:w-1/2 md:pr-3 lg:pr-3">
              <div className="mb-7 ">
                <img
                  src={Images.Galeria}
                  alt="juego de basket"
                  className="h-full md:h-60 md:w-full lg:object-cover lg:object-top"
                />
              </div>

              <div className="md:flex md:gap-6 lg:gap-3">
                <div className="mb-6 md:mb-0 lg:pr-2">
                  <img
                    src={Images.Galeria2}
                    alt="atletismo"
                    className="h-full md:h-60 md:w-full md:object-cover"
                  />
                </div>

                <div className="mb-6 md:mb-0 lg:pl-2 ">
                  <img
                    src={Images.Galeria3}
                    alt="equio de basket"
                    className="h-full md:h-60 md:w-full md:object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-3 lg:pl-4 lg:flex">
              <div className="mb-6 lg:mb-0 lg:w-full lg:pr-3 ">
                <img
                  src={Images.Galeria4}
                  alt="foto de yulimar rojas"
                  className="lg:h-full lg:object-center h-full md:h-60 md:w-full lg:object-cover"
                />
              </div>

              <div className="md:flex md:gap-6 lg:pl-4 lg:flex-col lg:w-full lg:justify-between">
                <div className="mb-6 md:mb-0">
                  <img
                    src={Images.Galeria5}
                    alt="natacion"
                    className="h-full md:h-60 md:w-full md:object-cover"
                  />
                </div>

                <div>
                  <img
                    src={Images.Galeria6}
                    alt="celebracion"
                    className="h-full md:h-60 md:w-full md:object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-linear-gradient-yellow py-4 mt-24">
          <div className="container px-10 lg:px-4- mx-auto">
            <h2 className="capitalize text-5xl text-slate-800 text-center font-bold">
              contacto
            </h2>
          </div>
        </section>

        <div className="container px-10 lg:px-4- mx-auto">
          <div className="mt-20 md:flex md:items-center md:gap-8">
            <div className="mb-16 md:w-1/2">
              <h2 className="uppercase text-2xl text-slate-800 text-center font-bold">
                ¿preguntas? ¿sugerencias?
              </h2>

              <p className="text-[#495057] text-lg text-center mt-4">
                Llene el formulario y nos pondremos <br /> en contacto con usted
              </p>

              <div className="w-60 mx-auto">
                <img src={Images.LogoBlack} alt="logo" />
                <p className="text-[#495057]">info@atletasdevenezuela.com</p>
              </div>
            </div>

            <div className="md:w-1/2">
              <form>
                <div className="flex gap-7">
                  <div className="mb-6 w-1/2">
                    <label
                      htmlFor="name"
                      className="cursor-pointer text-[#6a7075] block mb-2"
                    >
                      Nombre
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="name"
                      placeholder="Nombre"
                      className="block w-full h-7 p-4
                                     text-[#495057] border-0 border-none borde-[#ced4da] bg-white focus:shadow focus:outline-0"
                    />
                  </div>

                  <div className="mb-6 w-1/2">
                    <label
                      htmlFor="surname"
                      className="cursor-pointer text-[#6a7075] block mb-2"
                    >
                      Apellido <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="apellido"
                      id="surname"
                      placeholder="Apellido"
                      className="block w-full h-7 p-4 text-[#495057] border-0 border-none borde-[#ced4da] bg-white focus:shadow focus:outline-0"
                    />
                  </div>
                </div>

                <div className="flex gap-7">
                  <div className="w-1/2 mb-6">
                    <label
                      htmlFor="emails"
                      className="cursor-pointer whitespace-nowrap text-[#6a7075] block mb-2"
                    >
                      Correo electrónico <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="Correo electronico"
                      id="emails"
                      placeholder="Correo electronico"
                      className="block w-full h-7 p-4 text-[#495057] border-0 border-none borde-[#ced4da] bg-white focus:shadow focus:outline-0"
                    />
                  </div>

                  <div className="w-1/2 mb-6">
                    <label
                      htmlFor="phone"
                      className="cursor-pointer text-[#6a7075] block mb-2"
                    >
                      Teléfono <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      id="phone"
                      placeholder="Telefono"
                      className="block w-full h-7 p-4 text-[#495057] border-0 border-none borde-[#ced4da] bg-white focus:shadow focus:outline-0"
                    />
                  </div>
                </div>

                <div className="mb-6 w-1/2 pr-3">
                  <label
                    htmlFor="business"
                    className="cursor-pointer text-[#6a7075] block mb-2"
                  >
                    Asunto <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="asunto"
                    id="business"
                    placeholder="Asunto"
                    className="block w-full h-7 p-4 text-[#495057] border-0 border-none borde-[#ced4da] bg-white focus:shadow focus:outline-0"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="messenge"
                    className="cursor-pointer text-[#6a7075] block"
                  >
                    Tu mensaje <span className="text-red-600">*</span>
                    <textarea
                      name="mensaje"
                      id="messenge"
                      rows="3"
                      placeholder="Mensaje"
                      className="block w-full p-4 text-[#495057] border-0 border-none borde-[#ced4da] bg-white focus:shadow focus:outline-0 mt-2"
                    ></textarea>
                  </label>
                </div>

                <p className="text-[#495057] mb-6">
                  Utilizamos sus datos exclusivamente para propósitos
                  relacionados con el procesamiento y repuesta de su consulta.
                </p>

                <label className="text-[#495057] text-sm">
                  <input
                    type="checkbox"
                    id="cbox1"
                    value="first_checkbox"
                    className="mr-2"
                  />
                  He leído la política de privacidad, incluidas todas las
                  informaciones referentes al manejo de datos personales.
                </label>
                <br />

                <div className="w-full mt-6 bg-[#ffbb00] transition-colors focus:shadow-[#ffa200] text-center hover:bg-[#ffa200] rounded-lg p-2 focus:outline focus:outline-[#ffbb00] cursor-pointer">
                  <a
                    href="#"
                    className="uppercase tracking-wide text-[#495057]"
                  >
                    enviar
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-24 pb-24 px-10 lg:px-14- ">
          <div className="container">
            <div className="item  justify-center grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              <div className="">
                <img
                  src={Images.Aragua}
                  alt="escudo de aragua"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <div className="">
                <img
                  src={Images.Portuguesa}
                  alt="escudo de portuguesa"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <div className="">
                <img
                  src={Images.DeportivoPetare}
                  alt="escudo deportivo petare"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <div className="">
                <img
                  src={Images.DeportivoTáchira}
                  alt="escudo de tachira"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <div className="hidden md:block">
                <img
                  src={Images.DeportivoLaGuaira}
                  alt="escudo la guaira"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <div className=" hidden md:block text-center">
                <img
                  src={Images.DeportivoLara}
                  alt="deportivo lara"
                  className="w-16 mx-auto h-16 object-contain"
                />
              </div>
              <div className="hidden lg:block">
                <img
                  src={Images.CaraboboFc}
                  alt="deportivo carabobo"
                  className="w-16 h-16 mx-auto object-contain"
                />
              </div>
              <div className="hidden lg:block">
                <img
                  src={Images.Monagas}
                  alt="deportivo monagas"
                  className="w-16 h-16 mx-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#ebebeb] ">
        <div className="container- px-10- lg:px-4- mx-auto ">
          <div className="flex justify-between">
            <p className="uppercase hidden lg:block h-full  bg-linear-gradient-yellow-revers py-3 pl-8 pr-16">
              Noticia de última hora
            </p>

            <p className="capitalize hidden lg:block py-3">
              copyright © 2022. Reservados todos los derechos
            </p>

            <ul className="list-none text-center md:flex md:gap-4 mx-auto lg:mx-0 py-3 pr-8">
              <li>
                <a href="#">Aviso legal</a>
              </li>

              <li>
                <a href="#">Protección de datos</a>
              </li>

              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
