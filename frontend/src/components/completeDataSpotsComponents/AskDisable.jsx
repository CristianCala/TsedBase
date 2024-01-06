import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StepsQuestions } from "../parents/StepsQuestions";
import Images from "../../utils/images/images";
import { ButtonForm } from "../form/ButtonForm";

export default function AskDisable({ handleClick, currentStep, steps }) {
  return (
    <StepsQuestions bgImg={Images.cancha_basket}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <a href="./../../index.html" className="flex p-2 items-center">
          <img
            src={logo}
            className="mr-3 sm:h-16 h-12 py-1 px-1"
            alt="Atletas Logo"
          ></img>
        </a>

        <div className="w-full h-full">
          <div className="h-full w-full flex flex-col justify-center items-center max-w-[500px] lg:max-w-[700px] m-auto">
            <h3 className=" text-md text-[#00D3E0]">
              <FontAwesomeIcon
                onClick={() => handleClick("back")}
                icon={faArrowLeft}
                className="text-white inline-block mr-3"
              />
              Paso 8 de 8
            </h3>
            <h2 className="sm:text-3xl text-xl font-semibold text-white p-1 sm:py-3">
              Posee algun tipo de discapacidad?
            </h2>

            <div className="pt-8 grid grid-cols-2 gap-5 max-w-[500px] w-full">
              <ButtonForm
                handdleClick={() => handleClick("next")}
                className="bg-[#693CBA] rounded-full w-full text-white"
              >
                {currentStep === steps.length - 1 ? "Confirmar" : "Si"}
              </ButtonForm>
              <ButtonForm
                handdleClick={() => handleClick("next1")}
                className="bg-white rounded-full w-full text-black"
              >
                No
              </ButtonForm>
            </div>
          </div>
        </div>
      </div>
    </StepsQuestions>
  );
}
