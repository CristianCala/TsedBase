import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GraySection } from "../components/admin/parent/GraySection";
import { Admin } from "../components/layout/Admin";
import { SelectList } from "../components/form/SelectList";
import { ContainerForm } from "../components/parents/ContainerForm";
import { ErrorMessageInput } from "../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createArrayRand } from "../utils/helpers/selectsData";
import { useNavigate } from "react-router-dom";
import { ButtonForm } from "../components/form/ButtonForm";
import { GoBack } from "../components/parents/GoBack";

export const Caracteristicas = () => {
  const optionsSelect = createArrayRand();

  const formSchema = Yup.object().shape({
    estatura: Yup.string().required("El campo es obligatorio."),
    peso_corporal: Yup.string().required("El campo es obligatorio."),
    talla_franela: Yup.string().required("El campo es obligatorio."),
    talla_chaqueta: Yup.string().required("El campo es obligatorio."),
    talla_zapato: Yup.string().required("El campo es obligatorio."),
    talla_pantalon: Yup.string().required("El campo es obligatorio."),
    tipo_actividad: Yup.string().required("El campo es obligatorio."),
    disciplina: Yup.string().required("El campo es obligatorio."),
    categoria: Yup.string().required("El campo es obligatorio."),
    nivel: Yup.string().required("El campo es obligatorio."),
    otra_actividad_deportiva: Yup.string().required("El campo es obligatorio."),
    avatar: Yup.mixed().required("El campo es obligatorio."),
  });

  const handdleSubmit = (e) => {
    // navigate("/caracteristcas");
    alert("Formulario enviado correctamente.");
  };
  return (
    <Admin>
      <GraySection bg="bg-[#222332]">
        <div className="text-white text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl mb-1">Características</h2>
        </div>

        <Formik
          initialValues={{
            estatura: "",
            peso_corporal: "",
            talla_franela: "",
            talla_chaqueta: "",
            talla_zapato: "",
            talla_pantalon: "",
            tipo_actividad: "",
            disciplina: "",
            categoria: "",
            nivel: "",
            otra_actividad_deportiva: "",
            avatar: "",
          }}
          validationSchema={formSchema}
          onSubmit={handdleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <ContainerForm>
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
                            <option value="">
                              Talla pantalón, modo o short
                            </option>
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
                            <option value="">
                              Tipo de actividad deportiva
                            </option>
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
                          <SelectList
                            field={field}
                            label="Nivel"
                            id="nivel_caract"
                          >
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
                      <ErrorMessageInput
                        msg={errors.otra_actividad_deportiva}
                      />
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
                      Consultar
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
              </ContainerForm>
            </Form>
          )}
        </Formik>
      </GraySection>
    </Admin>
  );
};
