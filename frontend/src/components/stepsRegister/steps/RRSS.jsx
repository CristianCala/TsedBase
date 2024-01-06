import React, { Fragment, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterStep3 } from '../../../redux/features/registerStepsSlice';
import Spinner from '../../loadingComponents/Spinner';
import ValidatorRegisterFinalStep from '../../../utils/validators/ValidatorRegisterFinalStep';
import { useNavigate } from 'react-router-dom';
import { ButtonForm } from '../../form/ButtonForm';

export default function SocialNetworks({
  handleClick,
  currentStep,
  steps,
  dataRegister,
  setDataRegister,
  enviar,
  setEnviar,
}) {
  // const [enviar, setEnviar] = useState(false);
  // const dispatch = useDispatch();

  const initialValues = { ...dataRegister.socialMedia };

  /*const validationSchema = Yup.object().shape({

    })*/
  const navigate = useNavigate();
  const handleSubmit = (valores) => {
    setEnviar(true);
    // dispatch(RegisterStep3(valores));
    setDataRegister({ ...dataRegister, socialMedia: valores });
    handleClick('next');
  };

  return (
    <Fragment>
      {enviar ? (
        <ValidatorRegisterFinalStep />
      ) : (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className="w-full h-full">
              <div className="w-full flex flex-col justify-center items-center gap-10  m-auto">
                <div className="text-center">
                  <h3 className=" text-md  text-[#00D3E0] ">Paso 3 de 3</h3>

                  <h2 className="text-3xl font-semibold text-white ">
                    Redes sociales
                  </h2>
                </div>
                <div
                  className="w-full max-w-[400px] flex flex-col gap-5"
                  id="socialNetworkAccounts"
                >
                  <div className="">
                    <Field
                      type="text"
                      id="instagram"
                      name="instagram"
                      className="w-full transition-all block p-2 text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-semibold icon-placeholder-rrss instagram"
                      placeholder=" "
                    />
                  </div>
                  <div className="">
                    <Field
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      className="w-full transition-all block p-2 text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-semibold icon-placeholder-rrss linkedin"
                      placeholder=" "
                    />
                  </div>
                  <div className="">
                    <Field
                      type="text"
                      id="twiter"
                      name="twiter"
                      className="w-full transition-all block p-2 text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-semibold icon-placeholder-rrss twitter"
                      placeholder=" "
                    />
                  </div>
                  <div className="">
                    <Field
                      type="text"
                      id="facebook"
                      name="facebook"
                      className="w-full transition-all block p-2 text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-semibold icon-placeholder-rrss facebook"
                      placeholder=" "
                    />
                  </div>
                  <div className="">
                    <Field
                      type="text"
                      id="youtube"
                      name="youtube"
                      className="w-full transition-all block p-2 text-[#4E4B4B] rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-semibold icon-placeholder-rrss youtube"
                      placeholder=" "
                    />
                  </div>
                </div>
                <div className="max-w-[400px] lg:max-w-full w-full">
                  <div className="gap-6 flex justify-center flex-wrap">
                    <div className="w-full lg:max-w-[250px]">
                      <ButtonForm
                        handdleClick={() => handleClick()}
                        className="bg-white w-full text-black"
                      >
                        Atrás
                      </ButtonForm>
                    </div>
                    <div className="w-full lg:max-w-[250px]">
                      <ButtonForm
                        type="submit"
                        className="bg-[#693CBA] text-white w-full"
                      >
                        {currentStep === steps.length - 1
                          ? 'Registrar'
                          : 'Siguiente'}
                      </ButtonForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      )}
    </Fragment>
  );
}

/*
socialNetworkId="1"
socialNetworkId="2"
socialNetworkId="3"
socialNetworkId="4"
socialNetworkId="5"


*/
