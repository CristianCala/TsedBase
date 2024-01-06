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

export const CaracteristicasForm = ({
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
          <div className="sm:flex mb-10 flex-wrap text-white ">
            {/* * Estatura */}
            <div className="sm:w-1/2 p-3">
              <Field name="estatura">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Estatura"
                      id="estatura_caract"
                    >
                      <option value="">Estatura</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.estatura && touched.estatura ? (
                <ErrorMessageInput msg={errors.estatura} />
              ) : null}
            </div>

            {/* * Peso corporal */}
            <div className="sm:w-1/2 p-3">
              <Field name="peso_corporal">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Peso corporal"
                      id="peso_corporal_caract"
                    >
                      <option value="">Peso corporal</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.peso_corporal && touched.peso_corporal ? (
                <ErrorMessageInput msg={errors.peso_corporal} />
              ) : null}
            </div>

            {/* * Talla franela */}
            <div className="sm:w-1/2 p-3">
              <Field name="talla_franela">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Talla franela"
                      id="talla_franela_caract"
                    >
                      <option value="">Talla franela</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.talla_franela && touched.talla_franela ? (
                <ErrorMessageInput msg={errors.talla_franela} />
              ) : null}
            </div>

            {/* * Talla chaqueta */}
            <div className="sm:w-1/2 p-3">
              <Field name="talla_chaqueta">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Talla chaqueta"
                      id="talla_chaqueta_caract"
                    >
                      <option value="">Talla chaqueta</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.talla_chaqueta && touched.talla_chaqueta ? (
                <ErrorMessageInput msg={errors.talla_chaqueta} />
              ) : null}
            </div>

            {/* * Talla pantalón, modo o short */}
            <div className="sm:w-1/2 p-3">
              <Field name="talla_pantalon">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Talla pantalón, modo o short"
                      id="talla_pantalon_caract"
                    >
                      <option value="">Talla pantalón, modo o short</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.talla_pantalon && touched.talla_pantalon ? (
                <ErrorMessageInput msg={errors.talla_pantalon} />
              ) : null}
            </div>

            {/* * Talla zapato */}
            <div className="sm:w-1/2 p-3">
              <Field name="talla_zapato">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => {
                  return (
                    <SelectList
                      field={field}
                      label="Talla zapato"
                      id="talla_zapato_caract"
                    >
                      <option value="">Talla chaqueta</option>
                      {optionsSelect.map((opt) => {
                        return <option value={opt}>Opción {opt} </option>;
                      })}
                    </SelectList>
                  );
                }}
              </Field>

              {errors.talla_zapato && touched.talla_zapato ? (
                <ErrorMessageInput msg={errors.talla_zapato} />
              ) : null}
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
