import React, { Fragment, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterStep2 } from '../../../redux/features/registerStepsSlice';
import Spinner from '../../loadingComponents/Spinner';
import { ButtonForm } from '../../form/ButtonForm';
// import PhoneInput from "react-phone-number-input";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

export default function GeneralInfo({
  handleClick,
  currentStep,
  steps,
  dataRegister,
  setDataRegister,
}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const initialValues = { ...dataRegister.generalInfo };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  ///^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('type your firstName'),
    surname: Yup.string().required('type your surname'),
    email: Yup.string()
      .email('el email no es valido')
      .required('el email es requerido'),
    emailconfirmation: Yup.string()
      .email('el email no es valido')
      .required('el email es requerido')
      .oneOf([Yup.ref('email')], 'emails does not match'),
    mobilePhoneNumber: Yup.string().required('type your mobilePhoneNumber'),
    // .matches(phoneRegExp, "Phone number is not valid"),
    PhoneNumberConfirmation: Yup.string()
      .required('type your mobilePhoneNumber')
      // .matches(phoneRegExp, "Phone number is not valid")
      .oneOf(
        [Yup.ref('mobilePhoneNumber')],
        'mobilePhoneNumber does not match'
      ),
    password: Yup.string()
      .required('el password es obligatorio')
      .min(6, 'el password debe tener al menos 6 caracteres'),
    passwordConfirmation: Yup.string()
      .required('re inserta el password')
      .min(6, 'el password debe tener al menos 6 caracteres')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  });

  const handleSubmit = (valores) => {
    setDataRegister({ ...dataRegister, generalInfo: valores });
    handleClick('next');
  };

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="">
          <div className="flex flex-col justify-center items-center gap-10 max-w-[500px] lg:max-w-[700px] m-auto">
            <div className="text-center ">
              <h3 className="text-md text-[#00D3E0]">Paso 2 de 3</h3>
              <h2 className="sm:text-3xl text-xl font-semibold text-white ">
                Registro de información
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6  w-full ">
              <div className="">
                <label
                  htmlFor="firstName"
                  className="font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Primer Nombre{' '}
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>

                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="transition-all block p-2  w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                  autoComplete="firstName"
                  placeholder="Juan"
                />

                <div>
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div className=" ">
                <label
                  htmlFor="secondName"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Segundo Nombre
                </label>

                <Field
                  type="text"
                  id="secondName"
                  name="secondName"
                  className=" transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                  autoComplete="secondName"
                  placeholder="Ramón"
                />
              </div>

              <div className=" ">
                <label
                  htmlFor="surname"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Primer Apellido{' '}
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>

                <Field
                  type="text"
                  id="surname"
                  name="surname"
                  className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                  autoComplete="surname"
                  placeholder="Perez"
                />

                <div>
                  <ErrorMessage
                    name="surname"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="secondSsurname"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Segundo Apellido
                </label>

                <Field
                  type="text"
                  id="secondSurname"
                  name="secondSurname"
                  className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-user shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                  autoComplete="surname"
                  placeholder="Rodriguez"
                />
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Correo Electrónico{' '}
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>

                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-email shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                  autoComplete="email"
                  placeholder="juan33@ejemplo.com"
                />

                <div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="emailconfirmation"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Confirmar Correo Electrónico{' '}
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>

                <Field
                  type="email"
                  id="emailconfirmation"
                  name="emailconfirmation"
                  className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-email shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                  autoComplete="emailconfirmation"
                  placeholder="juan33@ejemplo.com"
                />

                <div>
                  <ErrorMessage
                    name="emailconfirmation"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="mobilePhoneNumber"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Teléfono{' '}
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>

                <Field name="mobilePhoneNumber">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <>
                        <PhoneInput
                          name={field.name}
                          // initialValueFormat="national"
                          international
                          defaultCountry="VE"
                          id="mobilePhoneNumber"
                          placeholder="Ingrese su número telefónico"
                          className="h-[38px] overflow-hidden rounded-lg text-sm text-[#4E4B4B] font-semibold"
                          value={form.values[field.name]}
                          onChange={(e) => form.setFieldValue(field.name, e)}
                          onBlur={form.handleBlur(field.name)}
                        />
                        <div>
                          {!isValidPhoneNumber(
                            form.values[field.name] || '0'
                          ) && (
                            <span className="text-red-600 text-sm">
                              El numero de telefono no es valido
                            </span>
                          )}
                        </div>
                      </>
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="mobilePhoneNumber"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              <div className="">
                <label
                  htmlFor="PhoneNumberConfirmation"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Confirmar Teléfono{' '}
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>

                <Field name="PhoneNumberConfirmation">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <>
                        <PhoneInput
                          name={field.name}
                          // initialValueFormat="national"
                          international
                          defaultCountry="VE"
                          // id="mobilePhoneNumber"
                          placeholder="Confirmar número telefónico"
                          className="h-[38px] overflow-hidden rounded-lg text-sm text-[#4E4B4B] font-semibold"
                          value={form.values[field.name]}
                          onChange={(e) => form.setFieldValue(field.name, e)}
                          onBlur={form.handleBlur(field.name)}
                        />
                        <div>
                          {!isValidPhoneNumber(
                            form.values[field.name] || '0'
                          ) && (
                            <span className="text-red-600 text-sm">
                              El numero de telefono no es valido
                            </span>
                          )}
                        </div>
                      </>
                    );
                  }}
                </Field>

                <div>
                  <ErrorMessage
                    name="PhoneNumberConfirmation"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="password"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Contraseña{' '}
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>

                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-lock shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                  autoComplete="password"
                  placeholder="Ingrese su contraseña"
                />

                <div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="passwordConfirmation"
                  className="font-medium font-semibold block text-xs sm:text-sm text-white mb-1"
                >
                  Confirmar Contraseña{' '}
                  <mark className="bg-transparent text-red-600">*</mark>
                </label>

                <Field
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  className="transition-all w-full block p-2 w-full text-[11px] sm:text-sm 
                                    text-[#4E4B4B] rounded-lg icon-placeholder-lock shadow-sm focus:outline-none 
                                    focus:shadow-outline font-semibold"
                  placeholder="Confirmar contraseña"
                />

                <div>
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="w-full ">
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
                      ? 'Confirmar'
                      : 'Siguiente'}
                  </ButtonForm>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );
}

/*
{/*onClick={() => handleClick()}*
{/*onClick={() => handleClick("next")}
*/
