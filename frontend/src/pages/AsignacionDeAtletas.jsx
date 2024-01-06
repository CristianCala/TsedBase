import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/admin/modal/Alert";
import { GraySection } from "../components/admin/parent/GraySection";
import { ButtonForm } from "../components/form/ButtonForm";
import { InputIcon } from "../components/form/InputIcon";
import { SelectList } from "../components/form/SelectList";
import { Admin } from "../components/layout/Admin";
import { ContainerForm } from "../components/parents/ContainerForm";
import { GoBack } from "../components/parents/GoBack";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessageInput } from "../components/form/ErrorMessageInput";
import { createArrayRand } from "../utils/helpers/selectsData";
import { InputWithSelect } from "../components/form/InputWithSelect";

const formSchema = Yup.object().shape({
  categoria_usuario: Yup.number().required("El campo es obligatorio."),
  ci_representante: Yup.number()
    .positive()
    .required("El campo es obligatorio."),
  tipo_actividad: Yup.number().required("El campo es obligatorio."),
  tipo_disciplina: Yup.number().required("El campo es obligatorio."),
  num_certificado: Yup.number().required("El campo es obligatorio."),
  ci_atleta: Yup.number().positive().required("El campo es obligatorio."),
});

export const AsignacionDeAtletas = () => {
  const navigate = useNavigate();
  const [alertSuccess, setAlertSuccess] = useState(false);
  function handdleSubmit(e) {
    setAlertSuccess(true);
  }

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] font-extrabold mb-10 text-center">
          <h2 className=" lg:text-3xl text-2xl">Asignación de atletas</h2>
          <p>Asignación de atletas</p>
        </div>

        <ContainerForm>
          <Formik
            initialValues={{
              categoria_usuario: "",
              ci_representante: "",
              tipo_actividad: "",
              tipo_disciplina: "",
              num_certificado: "",
              ci_atleta: "",
            }}
            validationSchema={formSchema}
            onSubmit={handdleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-[#E8E8E8] p-2 md:p-5   md:flex flex-wrap">
                  {/* Categoria de Usuario */}
                  <div className="md:w-1/2 p-3">
                    <Field name="categoria_usuario">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <SelectList
                            labelClass="font-bold"
                            label="Categoria de Usuario"
                            id="categoria_asig"
                            field={field}
                          >
                            <option value="">Seleccionar categoria</option>
                            {createArrayRand().map((opt) => {
                              return <option value={opt}>Opción {opt} </option>;
                            })}
                          </SelectList>
                        );
                      }}
                    </Field>

                    {errors.categoria_usuario && touched.categoria_usuario ? (
                      <ErrorMessageInput msg={errors.categoria_usuario} />
                    ) : null}
                  </div>

                  {/* C.I representante deportivo: */}
                  <div className="md:w-1/2 p-3">
                    <Field name="ci_representante">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputWithSelect
                            labelClass="font-bold"
                            label="C.I representante deportivo:"
                            id="cedula_asig"
                            placeholder="C.I representante deportivo:"
                            field={field}
                            type="number"
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
                    {errors.ci_representante && touched.ci_representante ? (
                      <ErrorMessageInput msg={errors.ci_representante} />
                    ) : null}
                  </div>

                  {/* Tipo de Actividad deportiva */}
                  <div className="md:w-1/2 p-3">
                    <Field name="tipo_actividad">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <SelectList
                            labelClass="font-bold"
                            label="Tipo de Actividad deportiva"
                            id="actividad_asig"
                            field={field}
                          >
                            <option value="">
                              Seleccionar Tipo de Actividad deportiva
                            </option>
                            {createArrayRand().map((opt) => {
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

                  {/* Tipo de Disciplina */}
                  <div className="md:w-1/2 p-3">
                    <Field name="tipo_disciplina">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <SelectList
                            labelClass="font-bold"
                            label="Tipo de Disciplina"
                            id="disciplina_asig"
                            name="tipo_disciplina"
                            field={field}
                          >
                            <option value="">
                              Seleccionar Tipo de Disciplina
                            </option>
                            {createArrayRand().map((opt) => {
                              return <option value={opt}>Opción {opt} </option>;
                            })}
                          </SelectList>
                        );
                      }}
                    </Field>

                    {errors.tipo_disciplina && touched.tipo_disciplina ? (
                      <ErrorMessageInput msg={errors.tipo_disciplina} />
                    ) : null}
                  </div>

                  {/* Número de certificado de nacimiento */}
                  <div className="md:w-1/2 p-3">
                    <Field name="num_certificado">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputIcon
                            labelClass="font-bold"
                            label="Número de certificado de nacimiento:"
                            id="certificado_asig"
                            placeholder="Número de certificado de nacimiento:"
                            type="number"
                            field={field}
                          />
                        );
                      }}
                    </Field>

                    {errors.num_certificado && touched.num_certificado ? (
                      <ErrorMessageInput msg={errors.num_certificado} />
                    ) : null}
                  </div>

                  {/* C.I atleta a representar */}
                  <div className="md:w-1/2 p-3">
                    <Field name="ci_atleta">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputWithSelect
                            labelClass="font-bold"
                            label="C.I atleta a representar:"
                            id="cedula_art_asig"
                            placeholder="C.I atleta a representar:"
                            type="number"
                            field={field}
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
                    {errors.ci_atleta && touched.ci_atleta ? (
                      <ErrorMessageInput msg={errors.ci_atleta} />
                    ) : null}
                  </div>

                  {/* * buttons */}
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
                        <ButtonForm
                          type="button"
                          className="bg-[#222332] text-white  w-[100%]"
                        >
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

      <Alert
        icon={faCheckCircle}
        className="bg-[#693CBA] text-white"
        show={alertSuccess}
        handdleShow={setAlertSuccess}
      >
        <h2 className="font-bold text-4xl mb-5">
          Registro realizado con Éxito
        </h2>
        <div className="flex justify-center">
          <ButtonForm
            handdleClick={() => {
              setAlertSuccess(false);
            }}
            className="bg-[#222332] w-[100%] max-w-[300px]"
          >
            Entendido
          </ButtonForm>
        </div>
      </Alert>
    </Admin>
  );
};
