import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GraySection } from "../../../components/admin/parent/GraySection";
import { Admin } from "../../../components/layout/Admin";
import { SelectList } from "../../../components/form/SelectList";
import { ReporteBtn } from "../../../components/admin/ReporteBtn";
import Images from "../../../utils/images/images";
import { RadioCircleCustom } from "../../../components/form/RadioCircleCustom";
import { ButtonForm } from "../../../components/form/ButtonForm";
import { GoBack } from "../../../components/parents/GoBack";
import { useNavigate } from "react-router-dom";
import { InputIcon } from "../../../components/form/InputIcon";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { createArrayRand, orden } from "../../../utils/helpers/selectsData";

const formAtletaSchema = Yup.object().shape({
  fecha_viaje: Yup.date().required(
    "El campo es obligatorio y debe ser una fecha valida."
  ),
  cedula_atleta: Yup.number().required("El campo es obligatorio."),
  certificado_nacimiento: Yup.number().required("El campo es obligatorio."),
});

const formDisciplinaSchema = Yup.object().shape({
  fecha_viaje: Yup.date().required(
    "El campo es obligatorio y debe ser una fecha valida."
  ),
  actividad_deportiva: Yup.number().required("El campo es obligatorio."),
  disciplina: Yup.number().required("El campo es obligatorio."),
  order: Yup.string().required("El campo es obligatorio."),
});

export const ReporteAtletaPasaporteEstatus = () => {
  const type_form = {
    por_atleta: "por_atleta",
    por_disciplina: "por_disciplina",
  };

  const navigate = useNavigate();
  const [formActive, setFormActive] = useState(type_form.por_atleta);

  const order_report = [
    { id: "order_10", value: 10 },
    { id: "order_20", value: 20 },
    { id: "order_30", value: 30 },
    { id: "order_50", value: 50 },
    { id: "order_100", value: 100 },
  ];
  const [countData, setCountData] = useState(order_report[0].value);

  function handdleSubmitAtleta(e) {
    navigate("/reportes/reporte-atletas-estatus-pasaporte/info");
  }

  function handdleSubmitDisciplina(e) {
    navigate("/reportes/reporte-disiplina-estatus-pasaporte/info");
  }

  function handdleChangeTypeForm(e, type) {
    setFormActive(type);
  }

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold">
          <h2 className=" lg:text-3xl text-2xl mb-10">
            Reporte Estatus de vigencia de pasaportes de Atletas
          </h2>
        </div>
        <div className="mb-10 flex flex-wrap max-w-[550px] m-auto">
          <div className="w-1/2 ">
            <ButtonForm
              handdleClick={(e) => {
                handdleChangeTypeForm(e, type_form.por_atleta);
              }}
              className={`${
                formActive == type_form.por_atleta
                  ? "bg-[#693CBA] text-white"
                  : "bg-gray-300 text-gray-600"
              }  w-[100%] py-3`}
            >
              Por Atleta
            </ButtonForm>
          </div>
          <div className="w-1/2 ">
            <ButtonForm
              handdleClick={(e) => {
                handdleChangeTypeForm(e, type_form.por_disciplina);
              }}
              className={`${
                formActive == type_form.por_disciplina
                  ? "bg-[#693CBA] text-white"
                  : "bg-gray-300 text-gray-600"
              }  w-[100%] py-3`}
            >
              Por disciplina
            </ButtonForm>
          </div>
        </div>

        {formActive == type_form.por_atleta && (
          <Formik
            initialValues={{
              fecha_viaje: "",
              cedula_atleta: "",
              certificado_nacimiento: "",
            }}
            validationSchema={formAtletaSchema}
            onSubmit={handdleSubmitAtleta}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                  {/* Fecha del viaje */}
                  <div className="md:w-1/2 p-3">
                    <Field name="fecha_viaje">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputIcon
                            field={field}
                            type="date"
                            labelClass="font-bold"
                            label="Fecha del viaje"
                            id="fecha_viaje_passport"
                            placeholder="Fecha del viaje"
                          />
                        );
                      }}
                    </Field>
                    {errors.fecha_viaje && touched.fecha_viaje ? (
                      <ErrorMessageInput msg={errors.fecha_viaje} />
                    ) : null}
                  </div>

                  {/* Cédula del Atleta */}
                  <div className="md:w-1/2 p-3">
                    <Field name="cedula_atleta">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputIcon
                            field={field}
                            type="number"
                            labelClass="font-bold"
                            label="Cédula del Atleta"
                            id="cedula_passport"
                            placeholder="Cédula del Atleta"
                          />
                        );
                      }}
                    </Field>
                    {errors.cedula_atleta && touched.cedula_atleta ? (
                      <ErrorMessageInput msg={errors.cedula_atleta} />
                    ) : null}
                  </div>

                  {/* Número de certificado de nacimiento */}
                  <div className="w-[100%] p-3">
                    <Field name="certificado_nacimiento">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputIcon
                            field={field}
                            type="number"
                            labelClass="font-bold"
                            label="Número de certificado de nacimiento"
                            id="certificado_passport"
                            placeholder="Número de certificado de nacimiento"
                          />
                        );
                      }}
                    </Field>
                    {errors.certificado_nacimiento &&
                    touched.certificado_nacimiento ? (
                      <ErrorMessageInput msg={errors.certificado_nacimiento} />
                    ) : null}
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
        )}

        {formActive == type_form.por_disciplina && (
          <Formik
            initialValues={{
              fecha_viaje: "",
              actividad_deportiva: "",
              disciplina: "",
              order: "",
            }}
            validationSchema={formDisciplinaSchema}
            onSubmit={handdleSubmitDisciplina}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                  {/* Fecha del viaje */}
                  <div className="md:w-1/2 p-3">
                    <Field name="fecha_viaje">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputIcon
                            field={field}
                            type="date"
                            labelClass="font-bold"
                            label="Fecha del viaje"
                            id="fecha_viaje_passport_dis"
                            placeholder="Fecha del viaje"
                          />
                        );
                      }}
                    </Field>
                    {errors.fecha_viaje && touched.fecha_viaje ? (
                      <ErrorMessageInput msg={errors.fecha_viaje} />
                    ) : null}
                  </div>

                  {/* Actividad deportiva */}
                  <div className="md:w-1/2 p-3">
                    <Field name="actividad_deportiva">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <SelectList
                            field={field}
                            labelClass="font-bold"
                            label="Actividad deportiva"
                            id="actividad_passport_dis"
                          >
                            <option value="">
                              Seleccionar Actividad deportiva
                            </option>
                            {createArrayRand().map((opt) => {
                              return <option value={opt}>Opción {opt} </option>;
                            })}
                          </SelectList>
                        );
                      }}
                    </Field>

                    {errors.actividad_deportiva &&
                    touched.actividad_deportiva ? (
                      <ErrorMessageInput msg={errors.actividad_deportiva} />
                    ) : null}
                  </div>

                  {/* Disciplina */}
                  <div className="md:w-1/2 p-3">
                    <Field name="disciplina">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <SelectList
                            field={field}
                            labelClass="font-bold"
                            label="Disciplina"
                            id="disciplina_passport_dis"
                          >
                            <option value="">Seleccionar disciplina</option>
                            {createArrayRand().map((opt) => {
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

                  {/* Ordenados por: */}
                  <div className="md:w-1/2 p-3">
                    <Field name="order">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <SelectList
                            field={field}
                            labelClass="font-bold"
                            label="Ordenados por:"
                            id="order_passport_dis"
                          >
                            <option value="">Seleccionar Ordenados por:</option>
                            {orden.map((orden) => {
                              return (
                                <option key={orden.label} value={orden.value}>
                                  {orden.label}
                                </option>
                              );
                            })}
                          </SelectList>
                        );
                      }}
                    </Field>

                    {errors.order && touched.order ? (
                      <ErrorMessageInput msg={errors.order} />
                    ) : null}
                  </div>

                  {/* ver registros */}
                  <div className="w-[100%] p-3 flex justify-center">
                    <div className="">
                      <label className={`font-bold mb-2 block`}>
                        ver registros
                      </label>
                      <div className="flex gap-[15px]">
                        {order_report.map((order, i) => {
                          return (
                            <RadioCircleCustom
                              valueCheched={countData}
                              handdleChange={(e) => {
                                // alert("object");
                                setCountData(e.target.value);
                              }}
                              key={order.id}
                              id={order.id}
                              name="count_data"
                              value={order.value}
                            >
                              {order.value}
                            </RadioCircleCustom>
                          );
                        })}
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
        )}
      </GraySection>
    </Admin>
  );
};
