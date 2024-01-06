import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userRegister } from '../../redux/features/userSlice';
import { clearStateRegister } from '../../redux/features/registerStepsSlice';
import Spinner from '../../components/loadingComponents/Spinner';

const ValidatorRegisterFinalStep = () => {
  const [enviar, setEnviar] = useState(true);
  //   const [message, setMessage] = useState('');
  //   const dispatch = useDispatch();
  //   const data = useSelector((state) => state);

  
  // ! funcionalidad anterior
	/*   const handleValidator = () => {
    const { tipe } = data.registerUser.registerSteps.step1;
    const {
      firstName,
      secondName,
      surname,
      secondSurname,
      email,
      emailconfirmation,
      mobilePhoneNumber,
      PhoneNumberConfirmation,
      password,
      passwordConfirmation,
    } = data.registerUser.registerSteps.step2;

    const { instagram, linkedin, twiter, facebook, youtube } =
      data.registerUser.registerSteps.step3;

    const valores = {
      tipe,
      firstName,
      secondName,
      surname,
      secondSurname,
      email,
      emailconfirmation,
      mobilePhoneNumber,
      PhoneNumberConfirmation,
      password,
      passwordConfirmation,
      instagram,
      linkedin,
      twiter,
      facebook,
      youtube,
    };

    dispatch(userRegister(valores));
    setTimeout(() => {
      if (data.user.status !== 200 || data.user.status !== 201) {
        setMessage('Error');
      } else {
        dispatch(clearStateRegister());
      }
      setEnviar(false);
    }, 2000);
  };

  useEffect(() => {
    handleValidator();
  }, []);
 */

  return (
    <Fragment>
      {enviar ? <Spinner /> : null}
      {/* {message ? (
        <Fragment>
          <p className="text-red-600 text-sm">{message}</p>
          <div className="flex sm:w-1/3 w-1/2 justify-center py-2">
            <Link
              to="/register"
              className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm py-2 text-center mb-2"
            >
              Registrar De Nuevo Los Datos
            </Link>
          </div>
        </Fragment>
      ) : null} */}
    </Fragment>
  );
};

export default ValidatorRegisterFinalStep;
