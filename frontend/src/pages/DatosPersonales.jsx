import React, { useState } from "react";
import {
  faCalendar,
  faCalendarAlt,
  faCalendarXmark,
  faEnvelope,
  faIdCard,
  faLock,
  faMailBulk,
  faPassport,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GraySection } from "../components/admin/parent/GraySection";
import { InputIcon } from "../components/form/InputIcon";
import { Admin } from "../components/layout/Admin";
import { limit } from "../utils/helpers/words";
import Images from "../utils/images/images";
import { ContainerForm } from "../components/parents/ContainerForm";
import { ButtonForm } from "../components/form/ButtonForm";
import { GoBack } from "../components/parents/GoBack";
import { ErrorMessageInput } from "../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createArrayRand } from "../utils/helpers/selectsData";
import { phoneRegExp } from "../utils/helpers/regExpre";
import { SelectList } from "../components/form/SelectList";
import { useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-number-input";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";

import "react-phone-number-input/style.css";
import { InputWithSelect } from "../components/form/InputWithSelect";
import formSchemaDataPersonal from "../utils/validators/validateDataPersonal";

export const DatosPersonales = () => {
  const navigate = useNavigate();

  const [documentCedula, setDocumentCedula] = useState(null);
  const [documentPasaporte, setDocumentPasaporte] = useState(null);
  const [carnetVacunacion, setCarnetVacunacion] = useState(null);
  const [partidaNacimiento, setPartidaNacimiento] = useState(null);

  const optionsSelect = createArrayRand();

  const formSchema = Yup.object().shape(formSchemaDataPersonal);

  const handdleSubmit = (e) => {
    navigate("/caracteristcas");
  };

  return (
    <Admin>
      <GraySection bg="bg-[#222332]">
        <div className="text-white text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl mb-1">Datos personales</h2>
        </div>

        <ContainerForm>
          <Formik
            initialValues={{
              primer_nombre: "",
              segundo_nombre: "",
              primer_apellido: "",
              segundo_apellido: "",
              email: "",
              email_confirm: "",
              telefono: "",
              telefono_confitrm: "",
              contraseña: "",
              contraseña_confirm: "",

              // * datos personales
              fecha_nacimiento: "",
              edad: "",
              genero: "",
              lugar_nacimiento: "",
              estado: "",
              ciudad: "",
              municipio: "",
              parroquia: "",

              cedula_num: "",
              cedula_doc: "",

              pasaporte_num: "",
              pasaporte_emision: "",
              pasaporte_vensimiento: "",
              pasaporte_doc: "",

              primera_dosis: "",
              segunda_dosis: "",
              tercera_dosis: "",
              cuarta_dosis: "",
              carnet_vacunacion: "",

              certificado_nacimiento_num: "",
              certificado_nacimiento_doc: "",
            }}
            validationSchema={formSchema}
            onSubmit={handdleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="">
                  {/* * datps principales */}
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
                          console.log(form.values[field.name]);
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
                                onChange={(e) =>
                                  form.setFieldValue(field.name, e)
                                }
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

                            // <InputIcon
                            //   field={field}
                            //   type="number"
                            //   label="Telefono"
                            //   id="phone_data"
                            //   placeholder="Telefono"
                            // >
                            //   <FontAwesomeIcon icon={faPhone} />
                            // </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.telefono && touched.telefono ? (
                        <ErrorMessageInput msg={errors.telefono} />
                      ) : null}
                    </div>
                    <div className="sm:w-1/2 p-3">
                      <label
                        htmlFor="phone_data_confirm"
                        className={`mb-2 block `}
                      >
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
                                onChange={(e) =>
                                  form.setFieldValue(field.name, e)
                                }
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

                            // <InputIcon
                            //   field={field}
                            //   type="number"
                            //   label="Telefono"
                            //   id="phone_data"
                            //   placeholder="Telefono"
                            // >
                            //   <FontAwesomeIcon icon={faPhone} />
                            // </InputIcon>
                          );
                        }}
                      </Field>

                      {/* <Field name="telefono_confitrm">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              label="Confirmar Telefono"
                              id="confirm_phone_data"
                              placeholder="Confirmar Telefono"
                            >
                              <FontAwesomeIcon icon={faPhone} />
                            </InputIcon>
                          );
                        }}
                      </Field> */}

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

                      {errors.contraseña_confirm &&
                      touched.contraseña_confirm ? (
                        <ErrorMessageInput msg={errors.contraseña_confirm} />
                      ) : null}
                    </div>
                  </div>

                  {/* * redes sociales */}
                  <div className="">
                    <div className="mt-3 sm:flex flex-wrap text-white  m-auto">
                      <div className="sm:w-1/2 p-3 m-auto">
                        <InputIcon placeholder="Instagram">
                          {/* <FontAwesomeIcon icon={faLock}  /> */}
                          <img
                            src={Images.instagram}
                            alt=""
                            className="w-[18px]"
                          />
                        </InputIcon>
                      </div>
                    </div>
                    <div className="mt-3 sm:flex flex-wrap text-white  m-auto">
                      <div className="sm:w-1/2 p-3 m-auto">
                        <InputIcon placeholder="LinkedIn">
                          {/* <FontAwesomeIcon icon={faLock}  /> */}
                          <img
                            src={Images.linkedin}
                            alt=""
                            className="w-[18px]"
                          />
                        </InputIcon>
                      </div>
                    </div>
                    <div className="mt-3 sm:flex flex-wrap text-white  m-auto">
                      <div className="sm:w-1/2 p-3 m-auto">
                        <InputIcon placeholder="twitter">
                          <img
                            src={Images.twitter}
                            alt=""
                            className="w-[18px]"
                          />
                          {/* <FontAwesomeIcon icon={faLock}  /> */}
                        </InputIcon>
                      </div>
                    </div>
                    <div className="mt-3 sm:flex flex-wrap text-white  m-auto">
                      <div className="sm:w-1/2 p-3 m-auto">
                        <InputIcon placeholder="Facebook">
                          {/* <FontAwesomeIcon icon={faLock}  /> */}
                          <img
                            src={Images.facebookIcon}
                            alt=""
                            className="w-[20px]"
                          />
                        </InputIcon>
                      </div>
                    </div>
                    <div className="mt-3 mb-10 sm:flex flex-wrap text-white  m-auto">
                      <div className="sm:w-1/2 p-3 m-auto">
                        <InputIcon placeholder="YouTube">
                          <img
                            src={Images.youtube}
                            alt=""
                            className="w-[18px]"
                          />
                          {/* <FontAwesomeIcon icon={faLock}  /> */}
                        </InputIcon>
                      </div>
                    </div>
                  </div>

                  {/* * datos biologicos */}
                  <div className="mb-10 sm:flex flex-wrap text-white  m-auto">
                    {/* * fechas de nacimiento */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="fecha_nacimiento">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              label="Fecha de Nacimiento"
                              id="date_data"
                              placeholder="Fecha de Nacimiento"
                              type="date"
                            >
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.fecha_nacimiento && touched.fecha_nacimiento ? (
                        <ErrorMessageInput msg={errors.fecha_nacimiento} />
                      ) : null}
                    </div>
                    {/* * edad */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="edad">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              type="number"
                              label="Edad"
                              id="age_data"
                              placeholder="Edad"
                            >
                              <FontAwesomeIcon icon={faUser} />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.edad && touched.edad ? (
                        <ErrorMessageInput msg={errors.edad} />
                      ) : null}
                    </div>
                    {/* * genero */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="genero">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <SelectList
                              field={field}
                              labelClass="font-bold"
                              label="Género"
                              id="genero_data"
                            >
                              <option value="">Seleccionar género</option>
                              <option value="1">Masculino</option>
                              <option value="2">Femenino</option>
                            </SelectList>
                          );
                        }}
                      </Field>

                      {errors.genero && touched.genero ? (
                        <ErrorMessageInput msg={errors.genero} />
                      ) : null}
                    </div>
                    {/* * Lugar de nacimiento */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="lugar_nacimiento">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <SelectList
                              field={field}
                              labelClass="font-bold"
                              label="Lugar de nacimiento"
                              id="nacimiento_data"
                            >
                              <option value="">
                                Seleccionar Lugar de nacimiento
                              </option>
                              {optionsSelect.map((opt) => {
                                return (
                                  <option value={opt}>Opción {opt} </option>
                                );
                              })}
                            </SelectList>
                          );
                        }}
                      </Field>

                      {errors.lugar_nacimiento && touched.lugar_nacimiento ? (
                        <ErrorMessageInput msg={errors.lugar_nacimiento} />
                      ) : null}
                    </div>
                    {/* * Estado */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="estado">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <SelectList
                              field={field}
                              labelClass="font-bold"
                              label="Estado"
                              id="estado_data"
                            >
                              <option value="">Seleccionar Estado</option>
                              {optionsSelect.map((opt) => {
                                return (
                                  <option value={opt}>Opción {opt} </option>
                                );
                              })}
                            </SelectList>
                          );
                        }}
                      </Field>

                      {errors.estado && touched.estado ? (
                        <ErrorMessageInput msg={errors.estado} />
                      ) : null}
                    </div>
                    {/* * Ciudad */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="ciudad">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <SelectList
                              field={field}
                              labelClass="font-bold"
                              label="Ciudad"
                              id="estado_data"
                            >
                              <option value="">Seleccionar Ciudad</option>
                              {optionsSelect.map((opt) => {
                                return (
                                  <option value={opt}>Opción {opt} </option>
                                );
                              })}
                            </SelectList>
                          );
                        }}
                      </Field>

                      {errors.ciudad && touched.ciudad ? (
                        <ErrorMessageInput msg={errors.ciudad} />
                      ) : null}
                    </div>
                    {/* * Municipio */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="municipio">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <SelectList
                              field={field}
                              labelClass="font-bold"
                              label="Municipio"
                              id="estado_data"
                            >
                              <option value="">Seleccionar Municipio</option>
                              {optionsSelect.map((opt) => {
                                return (
                                  <option value={opt}>Opción {opt} </option>
                                );
                              })}
                            </SelectList>
                          );
                        }}
                      </Field>

                      {errors.municipio && touched.municipio ? (
                        <ErrorMessageInput msg={errors.municipio} />
                      ) : null}
                    </div>
                    {/* * Parroquia */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="parroquia">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <SelectList
                              field={field}
                              labelClass="font-bold"
                              label="Parroquia"
                              id="parroquia_data"
                            >
                              <option value="">Seleccionar Parroquia</option>
                              {optionsSelect.map((opt) => {
                                return (
                                  <option value={opt}>Opción {opt} </option>
                                );
                              })}
                            </SelectList>
                          );
                        }}
                      </Field>

                      {errors.parroquia && touched.parroquia ? (
                        <ErrorMessageInput msg={errors.parroquia} />
                      ) : null}
                    </div>
                  </div>

                  {/* * documentos personales */}
                  <div className="mb-10 sm:flex flex-wrap text-white  m-auto">
                    {/* * Numero de cedula  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="cedula_num">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputWithSelect
                              // labelClass="font-bold"
                              // label="C.I atleta a representar:"
                              id="cedula_art_asig"
                              placeholder="ejemplo: 10747247"
                              type="number"
                              field={field}
                              label="Numero de cedula"
                              dataDrop={[
                                { label: "V", value: "V", selected: true },
                                { label: "E", value: "E" },
                                { label: "J", value: "J" },
                                { label: "G", value: "G" },
                              ]}
                            ></InputWithSelect>
                          );
                        }}
                      </Field>

                      {errors.cedula_num && touched.cedula_num ? (
                        <ErrorMessageInput msg={errors.cedula_num} />
                      ) : null}
                    </div>
                    {/* * imagen del documento */}
                    <div className="sm:w-1/2 p-3">
                      <label htmlFor="" className="block mb-2">
                        Adjuntar cedula de identidad
                      </label>

                      <label
                        htmlFor="document_dni_data"
                        className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                      >
                        {limit(documentCedula?.name, 30) ||
                          "Adjuntar cedula de identidad"}
                      </label>
                      <Field name="cedula_doc">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <input
                              {...field}
                              onChange={(e) => {
                                setDocumentCedula(e.target.files[0]);
                                field.onChange(e);
                              }}
                              className="hidden"
                              id="document_dni_data"
                              type="file"
                            />
                          );
                        }}
                      </Field>

                      {errors.cedula_doc && touched.cedula_doc ? (
                        <ErrorMessageInput msg={errors.cedula_doc} />
                      ) : null}
                    </div>
                  </div>

                  {/* * Datos del pasaporte */}
                  <div className="mb-10 sm:flex flex-wrap text-white  m-auto">
                    {/* * Numero de pasaporte  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="pasaporte_num">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              type="number"
                              label="Numero de pasaporte"
                              id="passport_number_data"
                              placeholder="Numero de pasaporte"
                            >
                              <FontAwesomeIcon icon={faPassport} border />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.pasaporte_num && touched.pasaporte_num ? (
                        <ErrorMessageInput msg={errors.pasaporte_num} />
                      ) : null}
                    </div>
                    {/* * fecha de emision del pasaporte  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="pasaporte_emision">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              type="date"
                              label="Fecha de emisión del pasaporte"
                              id="date_emision_passport_number_data"
                              placeholder="Fecha de emisión del pasaporte"
                            >
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.pasaporte_emision && touched.pasaporte_emision ? (
                        <ErrorMessageInput msg={errors.pasaporte_emision} />
                      ) : null}
                    </div>
                    {/* * fecha de vencimiento del pasaporte  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="pasaporte_vensimiento">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              type="date"
                              label="Fecha de vencimiento del pasaporte"
                              id="date_vencimiento_passport_number_data"
                              placeholder="Fecha de vencimiento del pasaporte"
                            >
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.pasaporte_vensimiento &&
                      touched.pasaporte_vensimiento ? (
                        <ErrorMessageInput msg={errors.pasaporte_vensimiento} />
                      ) : null}
                    </div>

                    {/* * imagen del documento pasaporte */}
                    <div className="sm:w-1/2 p-3">
                      <label
                        htmlFor="document_passport_data"
                        className="block mb-2"
                      >
                        Adjuntar pasaporte
                      </label>
                      <label
                        htmlFor="document_passport_data"
                        className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                      >
                        {limit(documentPasaporte?.name, 30) ||
                          "Adjuntar pasaporte"}
                      </label>

                      <Field name="pasaporte_doc">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <input
                              {...field}
                              onChange={(e) => {
                                setDocumentPasaporte(e.target.files[0]);
                                field.onChange(e);
                              }}
                              className="hidden"
                              id="document_passport_data"
                              type="file"
                            />
                          );
                        }}
                      </Field>

                      {errors.pasaporte_doc && touched.pasaporte_doc ? (
                        <ErrorMessageInput msg={errors.pasaporte_doc} />
                      ) : null}
                    </div>
                  </div>

                  {/* * Datos de vacunacion */}
                  <div className="mb-10 sm:flex flex-wrap text-white  m-auto">
                    {/* * fecha de primera dosis  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="primera_dosis">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              type="date"
                              field={field}
                              label="primera dosis"
                              id="primera_dosis_data"
                              placeholder="primera dosis"
                            >
                              <FontAwesomeIcon icon={faCalendarAlt} border />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.primera_dosis && touched.primera_dosis ? (
                        <ErrorMessageInput msg={errors.primera_dosis} />
                      ) : null}
                    </div>

                    {/* * fecha de segunda dosis  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="segunda_dosis">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              type="date"
                              label="Segunda dosis"
                              id="segunda_dosis_data"
                              placeholder="Segunda dosis"
                            >
                              <FontAwesomeIcon icon={faCalendarAlt} border />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.segunda_dosis && touched.segunda_dosis ? (
                        <ErrorMessageInput msg={errors.segunda_dosis} />
                      ) : null}
                    </div>

                    {/* * fecha de tercera dosis  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="tercera_dosis">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              type="date"
                              label="Tercera dosis"
                              id="tercera_dosis_data"
                              placeholder="Tercera dosis"
                            >
                              <FontAwesomeIcon icon={faCalendarAlt} border />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.tercera_dosis && touched.tercera_dosis ? (
                        <ErrorMessageInput msg={errors.tercera_dosis} />
                      ) : null}
                    </div>

                    {/* * fecha de Cuarta dosis  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="cuarta_dosis">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              type="date"
                              label="Cuarta dosis"
                              id="cuarta_dosis_data"
                              placeholder="Cuarta dosis"
                            >
                              <FontAwesomeIcon icon={faCalendarAlt} border />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.cuarta_dosis && touched.cuarta_dosis ? (
                        <ErrorMessageInput msg={errors.cuarta_dosis} />
                      ) : null}
                    </div>

                    <div className="sm:w-1/2 p-3">
                      <label
                        htmlFor="carnet_vacunacion_data"
                        className="block mb-2"
                      >
                        Imagen de carnet de vacunación
                      </label>
                      <label
                        htmlFor="carnet_vacunacion_data"
                        className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                      >
                        {limit(carnetVacunacion?.name, 30) ||
                          "Imagen de carnet de vacunación"}
                      </label>

                      <Field name="carnet_vacunacion">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <input
                              {...field}
                              onChange={(e) => {
                                setCarnetVacunacion(e.target.files[0]);
                                field.onChange(e);
                              }}
                              className="hidden"
                              id="carnet_vacunacion_data"
                              type="file"
                            />
                          );
                        }}
                      </Field>

                      {errors.carnet_vacunacion && touched.carnet_vacunacion ? (
                        <ErrorMessageInput msg={errors.carnet_vacunacion} />
                      ) : null}
                    </div>
                  </div>

                  {/* * Datos de nacimiento */}
                  <div className="mb-10 sm:flex flex-wrap text-white  m-auto">
                    {/* * Numero de certificado de nacimiento  */}
                    <div className="sm:w-1/2 p-3">
                      <Field name="certificado_nacimiento_num">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              field={field}
                              type="number"
                              label="Número de certificado de nacimiento"
                              id="certificado_nacimiento_data"
                              placeholder="Número de certificado de nacimiento"
                            >
                              <FontAwesomeIcon icon={faIdCard} />
                            </InputIcon>
                          );
                        }}
                      </Field>

                      {errors.certificado_nacimiento_num &&
                      touched.certificado_nacimiento_num ? (
                        <ErrorMessageInput
                          msg={errors.certificado_nacimiento_num}
                        />
                      ) : null}
                    </div>

                    <div className="sm:w-1/2 p-3">
                      <label
                        htmlFor="partida_nacimiento_data"
                        className="block mb-2"
                      >
                        Adjuntar partida de nacimiento
                      </label>
                      <label
                        htmlFor="partida_nacimiento_data"
                        className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                      >
                        {limit(partidaNacimiento?.name, 30) ||
                          "Adjuntar partida de nacimiento"}
                      </label>
                      <Field name="certificado_nacimiento_doc">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <input
                              {...field}
                              onChange={(e) => {
                                setPartidaNacimiento(e.target.files[0]);
                                field.onChange(e);
                              }}
                              className="hidden"
                              id="partida_nacimiento_data"
                              type="file"
                            />
                          );
                        }}
                      </Field>

                      {errors.certificado_nacimiento_doc &&
                      touched.certificado_nacimiento_doc ? (
                        <ErrorMessageInput
                          msg={errors.certificado_nacimiento_doc}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div className="md:w-[100%] p-3 flex flex-wrap justify-center">
                    <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                      <ButtonForm
                        type="submit"
                        className="bg-[#693CBA] text-white  w-[100%] "
                      >
                        Registrar
                      </ButtonForm>
                    </div>
                    <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                      <GoBack>
                        <ButtonForm className="bg-white text-black  w-[100%]">
                          Cancelar
                        </ButtonForm>
                      </GoBack>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </ContainerForm>
      </GraySection>
    </Admin>
  );
};
