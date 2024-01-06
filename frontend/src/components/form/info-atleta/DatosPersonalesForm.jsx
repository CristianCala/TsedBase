import React from "react";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputIcon } from "../../../components/form/InputIcon";
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import "react-phone-number-input/style.css";
import { ButtonForm } from "../ButtonForm";

export const DatosPersonalesForm = ({
  initialValues,
  validationSchema,
  handdleSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handdleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="">
            <div className=" sm:flex mb-10 flex-wrap text-white">
              <div className="sm:w-1/2 p-3">
                <Field name="primer_nombre">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <InputIcon
                        field={field}
                        label="Primer Nombre"
                        id="name_data"
                        placeholder="Nombre"
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </InputIcon>
                    );
                  }}
                </Field>

                {errors.primer_nombre && touched.primer_nombre ? (
                  <ErrorMessageInput msg={errors.primer_nombre} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <Field name="segundo_nombre">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <InputIcon
                        field={field}
                        label="Segundo Nombre"
                        id="secondname_data"
                        placeholder="Segundo Nombre"
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </InputIcon>
                    );
                  }}
                </Field>

                {errors.segundo_nombre && touched.segundo_nombre ? (
                  <ErrorMessageInput msg={errors.segundo_nombre} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <Field name="primer_apellido">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <InputIcon
                        field={field}
                        label="Primer Apellido"
                        id="surname_data"
                        placeholder="Primer Apellido"
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </InputIcon>
                    );
                  }}
                </Field>

                {errors.primer_apellido && touched.primer_apellido ? (
                  <ErrorMessageInput msg={errors.primer_apellido} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <Field name="segundo_apellido">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <InputIcon
                        field={field}
                        label="Segundo Apellido"
                        id="second_surname_data"
                        placeholder="Segundo Apellido"
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </InputIcon>
                    );
                  }}
                </Field>

                {errors.segundo_apellido && touched.segundo_apellido ? (
                  <ErrorMessageInput msg={errors.segundo_apellido} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <Field name="email">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <InputIcon
                        field={field}
                        label="Correo electrónico"
                        id="email_data"
                        placeholder="Correo electrónico"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputIcon>
                    );
                  }}
                </Field>

                {errors.email && touched.email ? (
                  <ErrorMessageInput msg={errors.email} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <Field name="email_confirm">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <InputIcon
                        field={field}
                        label="Confirmar Correo electrónico"
                        id="confirm_email_data"
                        placeholder="Confirmar Correo electrónico"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputIcon>
                    );
                  }}
                </Field>

                {errors.email_confirm && touched.email_confirm ? (
                  <ErrorMessageInput msg={errors.email_confirm} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <label htmlFor="phone_data" className={`mb-2 block `}>
                  Telefono
                </label>

                <Field name="telefono">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form,
                    meta,
                  }) => {
                    return (
                      <>
                        <PhoneInput
                          type="tel"
                          id="phone_data"
                          placeholder="Telefono"
                          name={field.name}
                          international
                          defaultCountry="VE"
                          className="h-[35px] overflow-hidden rounded-lg text-sm text-[#4E4B4B] font-semibold"
                          value={form.values[field.name]}
                          onChange={(e) => form.setFieldValue(field.name, e)}
                          onBlur={form.handleBlur(field.name)}
                        />
                        <div>
                          {!isValidPhoneNumber(
                            form.values[field.name] || "0"
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

                {errors.telefono && touched.telefono ? (
                  <ErrorMessageInput msg={errors.telefono} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <label htmlFor="phone_data_confirm" className={`mb-2 block `}>
                  Confirmar Telefono
                </label>

                <Field name="telefono_confitrm">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form,
                    meta,
                  }) => {
                    return (
                      <>
                        <PhoneInput
                          type="tel"
                          id="phone_data_confirm"
                          placeholder="Telefono"
                          name={field.name}
                          international
                          defaultCountry="VE"
                          className="h-[35px] overflow-hidden rounded-lg text-sm text-[#4E4B4B] font-semibold"
                          value={form.values[field.name]}
                          onChange={(e) => form.setFieldValue(field.name, e)}
                          onBlur={form.handleBlur(field.name)}
                        />
                        <div>
                          {!isValidPhoneNumber(
                            form.values[field.name] || "0"
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

                {errors.telefono_confitrm && touched.telefono_confitrm ? (
                  <ErrorMessageInput msg={errors.telefono_confitrm} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <Field name="contraseña">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <InputIcon
                        field={field}
                        type="password"
                        label="Contraseña"
                        id="password_data"
                        placeholder="Contraseña"
                      >
                        <FontAwesomeIcon icon={faLock} />
                      </InputIcon>
                    );
                  }}
                </Field>

                {errors.contraseña && touched.contraseña ? (
                  <ErrorMessageInput msg={errors.contraseña} />
                ) : null}
              </div>
              <div className="sm:w-1/2 p-3">
                <Field name="contraseña_confirm">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }) => {
                    return (
                      <InputIcon
                        field={field}
                        type="password"
                        label="Confirmar Contraseña"
                        id="confirm_password_data"
                        placeholder="Confirmar Contraseña"
                      >
                        <FontAwesomeIcon icon={faLock} />
                      </InputIcon>
                    );
                  }}
                </Field>

                {errors.contraseña_confirm && touched.contraseña_confirm ? (
                  <ErrorMessageInput msg={errors.contraseña_confirm} />
                ) : null}
              </div>
            </div>
          </div>

          <div className="md:w-[100%] p-3 flex flex-wrap justify-center">
            <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
              <ButtonForm
                type="submit"
                className="bg-[#693CBA] text-white  w-[100%] "
              >
                Guardar
              </ButtonForm>
            </div>
            <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
              <ButtonForm className="bg-white text-black  w-[100%]">
                Cancelar
              </ButtonForm>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
