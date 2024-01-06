import React, { useState } from "react";
import CompleteData from "../components/completeDataSpotsComponents/CompleteDataUserFirstLogin";
import GeneralDataAthlete from "../components/completeDataSpotsComponents/GeneralDataAthlete";
import AskId from "../components/completeDataSpotsComponents/AskId";
import PersonalDataAthlete from "../components/completeDataSpotsComponents/PersonalDataAthlete";
import AskPassport from "../components/completeDataSpotsComponents/AskPassport";
import DataPassport from "../components/completeDataSpotsComponents/DataPassport";
import MeasureAndSize from "../components/completeDataSpotsComponents/MeasureAndSize";
import AskVaccine from "../components/completeDataSpotsComponents/AskVaccine";
import RegisterVaccine from "../components/completeDataSpotsComponents/RegisterVaccine";
import AskDisable from "../components/completeDataSpotsComponents/AskDisable";
import RegisterInformation from "../components/completeDataSpotsComponents/RegisterInformation";
import SuccessfullLoginInformation from "../components/completeDataSpotsComponents/SuccessfullLoginInformation";
import { StepsQuestions } from "../components/parents/StepsQuestions";
//import CompleteData from '../components/completeDataSpotsComponents/CompleteDataUserFirstLogin'

const CompleteDataUserFirstLogin = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userStep, setUserStep] = useState(0);

  const steps = [
    "inicio",
    "Completa Tus Datos",
    "Posee Cedula De Identidad",
    "Datos Personales",
    "Posee Pasaporte",
    "Datos del Pasaporte",
    "Medidas Y tallas",
    "Vacunado COVID",
    "Registro de Vacunas",
    "Posee Alguna Discapacidad",
    "Registro de Informacion",
    "Su Registro se ha realizado con exito",
  ];

  console.log(steps.length);
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <CompleteData
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 2:
        return (
          <GeneralDataAthlete
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 3:
        return (
          <AskId
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 4:
        return (
          <PersonalDataAthlete
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 5:
        return (
          <AskPassport
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 6:
        return (
          <DataPassport
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 7:
        return (
          <MeasureAndSize
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 8:
        return (
          <AskVaccine
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 9:
        return (
          <RegisterVaccine
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 10:
        return (
          <AskDisable
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 11:
        return (
          <RegisterInformation
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 12:
        return (
          <SuccessfullLoginInformation
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );

      default:
    }
  };

  /*
		case 4:
                return <PersonalDataAthlete 
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />;
	
    */

  const handleClick = (direction) => {
    let newStep = currentStep;
    if (direction === "next") {
      direction = newStep++;
    } else if (direction === "next1") {
      direction = newStep += 2;
    } else if (direction === "back") {
      direction = newStep--;
    }

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    console.log(currentStep);
  };

  return <>{displayStep(currentStep)}</>;
};

export default CompleteDataUserFirstLogin;
