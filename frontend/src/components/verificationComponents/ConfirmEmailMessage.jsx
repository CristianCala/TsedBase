import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import logo from '../../assets/Logo.png'
import SignoExclamacion from '../../assets/informacion.svg'

const ConfirmEmailMessage = () => {

    return (
        <div className="p-10 flex flex-col w-5/6 items-center justify-center">
            <a href="./../../index.html" className="flex p-2 items-center">
                <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
            </a>

            <div className="flex p-2 items-center">
                <img src={SignoExclamacion} className="sm:h-24 h-12 py-1 px-1" alt="Atletas Logo"></img>
            </div>
            
            <div className="p-10 flex flex-col w-5/6 items-center justify-center">
                <h2 className="text-2xl mb-4 text-white text-center font-bold">
                    Por favor confirmar tu cambio de contrasenia a travez del enlace que fue enviado a tu 
                    correo electronio
                </h2>

                    <div
                    className="mb-8 mt-6 sm:w-4/6 w-full font-bold text-xl text-center leading-loose"
                    >
                        
                        <div
                        className="inline-flex w-5/6 items-center pt-8 justify-between"
                        >
                            <Link
                                to="/login"
                                className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Aceptar
                            </Link>
                            <Link
                                to="/login"
                                className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Cerrar
                            </Link>
                        </div>

                    </div>
            </div>
        
        </div>

        
    )
};

export default ConfirmEmailMessage