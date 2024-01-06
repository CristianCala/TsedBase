import React, { Fragment, useState } from 'react';
// import Stepper from "../components/stepsRegister/Stepper";
// //import StepperControl from "../components/stepsRegister/StepsControl";
// import { useDispatch, useSelector } from "react-redux";
import GeneralInfo from '../components/stepsRegister/steps/GeneralInfo';
import SocialNetworks from '../components/stepsRegister/steps/RRSS';
import SuccessfulRegister from '../components/stepsRegister/steps/SuccessfulRegister';
import UserType from '../components/stepsRegister/steps/UserType';
import { StepsQuestions } from '../components/parents/StepsQuestions';
import Images from '../utils/images/images';
import userServices from '../services/userServices.js';
import { userRegister } from '../redux/features/userSlice';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { AlertIcon } from '../components/alertsMessages/AlertIcon';
import { Alert } from '../components/admin/modal/Alert';
import { ButtonForm } from '../components/form/ButtonForm';

const Register = () => {
  const [errorsValidation, setEerrorsValidation] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [enviar, setEnviar] = useState(false);
  // const [alertSuccess, setAlertSuccess] = useState(true);
  const [dataRegister, setDataRegister] = useState({
    generalInfo: {
      firstName: 'Samuel',
      secondName: 'david',
      surname: 'graterol',
      secondSurname: 'lobo',
      email: 'samuelgraterol12@gmail.com',
      emailconfirmation: 'samuelgraterol12@gmail.com',
      mobilePhoneNumber: '+584242934567',
      PhoneNumberConfirmation: '+584242934567',
      password: '11111111',
      passwordConfirmation: '11111111',
    },
    socialMedia: {
      instagram: '',
      linkedin: '',
      twiter: '',
      facebook: '',
      youtube: '',
    },
  });

  const navigate = useNavigate();

  const steps = [
    'Tipo de Usuario',
    'Información General',
    'Redes Sociales',
    'Completado',
  ];

  const displayStep = (step, handdleImage) => {
    switch (step) {
      case 1:
        // setImgBack(null);
        return (
          <StepsQuestions bgImg={Images.background2}>
            <UserType
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          </StepsQuestions>
        );
      case 2:
        return (
          <StepsQuestions bgImg={Images.chica_cardio}>
            <GeneralInfo
              handleClick={handleClick}
              currentStep={currentStep}
              dataRegister={dataRegister}
              setDataRegister={setDataRegister}
              steps={steps}
            />
          </StepsQuestions>
        );
      case 3:
        return (
          <StepsQuestions bgImg={Images.cancha_basket}>
            <SocialNetworks
              handleClick={handleClick}
              currentStep={currentStep}
              dataRegister={dataRegister}
              setDataRegister={setDataRegister}
              steps={steps}
              enviar={enviar}
              setEnviar={setEnviar}
            />
          </StepsQuestions>
        );
      case 4:
        return (
          <SuccessfulRegister
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      default:
    }
  };

  const handleClick = async (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    if (newStep >= steps.length) {
      const { generalInfo } = dataRegister;
      const dataSend = {
        email: generalInfo.email,
        nickname: generalInfo.firstName,
        password: generalInfo.password,
        phone: generalInfo.mobilePhoneNumber,
        img_profile: 'Mi imagen',
      };
      try {
        const response = await userServices.userRegister(dataSend);

        navigate('/registro-exitoso');
      } catch (error) {
        console.log(error);
        const messageErr = error?.response.data.message || 'Error';
        setEerrorsValidation(messageErr);
        setCurrentStep(1);
      }
      setEnviar(false);
    } else if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }

    // console.log(newStep);
  };

  return (
    <div className="relative">
      {displayStep(currentStep)}
      {/* <div className="fixed top-0 r-0 w-full h-full bg-gray-900/50 flex items-center"></div> */}
      <Alert
        icon={faCircleXmark}
        className="bg-red-600 text-white"
        show={!!errorsValidation}
        handdleShow={setEerrorsValidation}
      >
        <h2 className="font-bold text-4xl mb-5">{errorsValidation}</h2>
        <div className="flex justify-center">
          <ButtonForm
            handdleClick={() => {
              setEerrorsValidation(false);
            }}
            className="bg-[#222332] w-[100%] max-w-[300px]"
          >
            Entendido
          </ButtonForm>
        </div>
      </Alert>
    </div>
  );
};

export default Register;
