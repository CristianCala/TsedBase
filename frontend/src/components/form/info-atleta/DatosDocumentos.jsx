import React, { useState } from "react";
import {
  faCalendarAlt,
  faIdCard,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputIcon } from "../../../components/form/InputIcon";
import { limit } from "../../../utils/helpers/words";
import { ButtonForm } from "../../../components/form/ButtonForm";
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";

import { createArrayRand } from "../../../utils/helpers/selectsData";
import { InputWithSelect } from "../../../components/form/InputWithSelect";

export const DatosDocumentos = ({
  initialValues,
  validationSchema,
  handdleSubmit,
}) => {
  const optionsSelect = createArrayRand();
  const [documentCedula, setDocumentCedula] = useState(null);
  const [documentPasaporte, setDocumentPasaporte] = useState(null);
  const [carnetVacunacion, setCarnetVacunacion] = useState(null);
  const [partidaNacimiento, setPartidaNacimiento] = useState(null);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handdleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="">
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
                <label htmlFor="document_passport_data" className="block mb-2">
                  Adjuntar pasaporte
                </label>
                <label
                  htmlFor="document_passport_data"
                  className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                >
                  {limit(documentPasaporte?.name, 30) || "Adjuntar pasaporte"}
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
                <label htmlFor="carnet_vacunacion_data" className="block mb-2">
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
                  <ErrorMessageInput msg={errors.certificado_nacimiento_num} />
                ) : null}
              </div>

              <div className="sm:w-1/2 p-3">
                <label htmlFor="partida_nacimiento_data" className="block mb-2">
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
                  <ErrorMessageInput msg={errors.certificado_nacimiento_doc} />
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
