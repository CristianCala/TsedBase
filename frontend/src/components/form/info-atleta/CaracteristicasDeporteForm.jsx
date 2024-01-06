import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectList } from "../../../components/form/SelectList";
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";
import { ButtonForm } from "../../../components/form/ButtonForm";
import { createArrayRand } from "../../../utils/helpers/selectsData";

export const CaracteristicasDeporteForm = ({
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
          <div className="sm:flex flex-wrap text-white">
            {/* * Tipo de actividad deportiva */}
            <div className="sm:w-1/2 p-3">
              <Field name="tipo_actividad">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Tipo de actividad deportiva"
                      id="actividad_deportiva_caract"
                    >
                      <option value="">Tipo de actividad deportiva</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.tipo_actividad && touched.tipo_actividad ? (
                <ErrorMessageInput msg={errors.tipo_actividad} />
              ) : null}
            </div>

            {/* * disciplina */}
            <div className="sm:w-1/2 p-3">
              <Field name="disciplina">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Disciplina"
                      id="disciplina_caract"
                    >
                      <option value="">Disciplina</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.disciplina && touched.disciplina ? (
                <ErrorMessageInput msg={errors.disciplina} />
              ) : null}
            </div>

            {/* * Categoría */}
            <div className="sm:w-1/2 p-3">
              <Field name="categoria">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Categoría"
                      id="categoria_caract"
                    >
                      <option value="">Categoría</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.categoria && touched.categoria ? (
                <ErrorMessageInput msg={errors.categoria} />
              ) : null}
            </div>

            {/* * Nivel */}
            <div className="sm:w-1/2 p-3">
              <Field name="nivel">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList field={field} label="Nivel" id="nivel_caract">
                      <option value="">Nivel</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.nivel && touched.nivel ? (
                <ErrorMessageInput msg={errors.nivel} />
              ) : null}
            </div>

            {/* * Otra actividad deportiva */}
            <div className="sm:w-1/2 p-3">
              <Field name="otra_actividad_deportiva">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Otra actividad deportiva"
                      id="otra_actividad_caract"
                    >
                      <option value="">Otra actividad deportiva</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.otra_actividad_deportiva &&
              touched.otra_actividad_deportiva ? (
                <ErrorMessageInput msg={errors.otra_actividad_deportiva} />
              ) : null}
            </div>

            {/* * adjuntar imagen */}
            <div className="w-[100%] p-3 sm:flex mt-4">
              <div className="pr-4">
                <div className="w-[120px] h-[120px] bg-white flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-300 text-6xl"
                  />
                </div>
              </div>

              <div className="flex items-center pt-3 sm:p-0">
                <div className="">
                  <p className="font-medium">Adjuntar fotografía</p>
                  <p className="font-medium mb-3">
                    (La imagen debe estar en .png o .jpg y máximo xxmb)
                  </p>

                  <label
                    htmlFor="imagen_caract"
                    className="cursor-pointer bg-white text-black rounded-lg overflow-hidden min-h-[35px] px-3 flex items-center"
                  >
                    Seleccionar archivo
                  </label>
                  <Field name="avatar">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => {
                      return (
                        <input
                          {...field}
                          className="hidden"
                          id="imagen_caract"
                          type="file"
                        />
                      );
                    }}
                  </Field>

                  {errors.avatar && touched.avatar ? (
                    <ErrorMessageInput msg={errors.avatar} />
                  ) : null}
                </div>
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
