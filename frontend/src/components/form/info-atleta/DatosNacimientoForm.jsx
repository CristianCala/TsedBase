import React from "react";
import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputIcon } from "../../../components/form/InputIcon";
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";
import { SelectList } from "../../../components/form/SelectList";
import { createArrayRand } from "../../../utils/helpers/selectsData";
// import { Field, Form, Formik } from "formik";
import { ButtonForm } from "../ButtonForm";

export const DatosNacimientoForm = ({
  initialValues,
  validationSchema,
  handdleSubmit,
}) => {
  const optionsSelect = createArrayRand();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handdleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="">
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
                        {optionsSelect.map((opt, i) => {
                          return (
                            <option key={i} value={opt}>
                              Opción {opt}{" "}
                            </option>
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
                        {optionsSelect.map((opt, i) => {
                          return (
                            <option key={i} value={opt}>
                              Opción {opt}{" "}
                            </option>
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
                        {optionsSelect.map((opt, i) => {
                          return (
                            <option key={i} value={opt}>
                              Opción {opt}{" "}
                            </option>
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
                        {optionsSelect.map((opt, i) => {
                          return (
                            <option key={i} value={opt}>
                              Opción {opt}{" "}
                            </option>
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
                        {optionsSelect.map((opt, i) => {
                          return (
                            <option key={i} value={opt}>
                              Opción {opt}{" "}
                            </option>
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
