import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { ReactComponent as IconHand } from "../../assets/mano.svg";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";
import { StepsQuestions } from "../parents/StepsQuestions";

const CompleteData = ({ handleClick, currentStep, steps }) => {
  return (
    <StepsQuestions bgImg={Images.juego_voleibol} className="justify-center">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <a href="./../../index.html" className="flex p-2 items-center">
          <img
            src={logo}
            className="mr-3 sm:h-16 h-12 py-1 px-1"
            alt="Atletas Logo"
          ></img>
        </a>
        <div className="flex p-2 items-center">
          <IconHand className="h-24  py-1 px-1" alt="Atletas Logo" />
        </div>
        <div className="flex flex-col  items-center justify-center">
          <h2 className="text-2xl mb-4 text-white text-center font-bold">
            Bienvenido
          </h2>
          <h2 className="text-2xl mb-4 text-white text-center font-bold">
            ¿Desea Completar tus datos ahora?
          </h2>
        </div>
        <div className=" w-full font-bold text-center leading-loose max-w-[500px]">
          <div className="pt-8 grid grid-cols-2 gap-5">
            {/* <div className=""> */}
            <ButtonForm
              className="bg-[#693CBA] text-white rounded-full"
              handdleClick={() => {
                handleClick("next");
              }}
            >
              {currentStep === steps.length - 1 ? "Confirmar" : "Si"}
            </ButtonForm>
            <Link to="/">
              <ButtonForm className="bg-white rounded-full w-full">
                No
              </ButtonForm>
            </Link>
            {/* </div> */}
            {/* <button
              onClick={() => }
              className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br 
                            focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 
                            py-2.5 text-center"
            ></button> */}
            {/* <a
              href="https://Atletasdevenezuela.com"
              className="text-white bg-gradient-to-bl from-[#9662F1] to-[#673AB7] 
                            hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 
                            font-medium rounded-full text-sm px-14 py-2.5 text-center"
            >
              No
            </a> */}
          </div>
        </div>
      </div>
    </StepsQuestions>
  );
};

export default CompleteData;

/*

<div className=" flex-col flex rounded-lg bg-[#222332]/80 justify-center items-center">
        <a href="./../../index.html" className="flex p-2 items-center">
            <img src={logo} className="mr-3 sm:h-16 h-12 py-1 px-1" alt="Atletas Logo"></img>
        </a>

        <div className="flex p-2 items-center">
            <IconHand className="sm:h-24 h-12 py-1 px-1" alt="Atletas Logo" />
        </div>
                    
        
    </div>

*/
