import React, { useState } from "react";
import { faIdCard, faUser } from "@fortawesome/free-solid-svg-icons";
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
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createArrayRand, orden } from "../../../utils/helpers/selectsData";

const formEventoSchema = Yup.object().shape({
  event: Yup.number().required("El campo es obligatorio."),
  date_event: Yup.date().required("El campo es obligatorio."),
});

const formAtletaSchema = Yup.object().shape({
  ci_atleta: Yup.number().required("El campo es obligatorio."),
});

const formFechaSchema = Yup.object().shape({
  anio: Yup.number().positive().required("El campo es obligatorio."),
  actividad_deportiva: Yup.string().required("El campo es obligatorio."),
});

export const ReporteEventos = () => {
  const type_form = {
    por_evento: "por_evento",
    por_atleta: "por_atleta",
    por_fecha: "por_fecha",
  };

  const navigate = useNavigate();
  const [formActive, setFormActive] = useState(type_form.por_evento);

  const order_report = [
    { id: "order_10", value: 10 },
    { id: "order_20", value: 20 },
    { id: "order_30", value: 30 },
    { id: "order_50", value: 50 },
    { id: "order_100", value: 100 },
  ];
  const [countData, setCountData] = useState(order_report[0].value);

  function handdleSubmitEvento(e) {
    navigate("/reportes/eventos/info");
  }

  function handdleSubmitAtleta(e) {
    navigate("/reportes/eventos/info");
  }

  function handdleSubmitFecha(e) {
    navigate("/reportes/eventos/info");
  }

  function handdleChangeTypeForm(e, type) {
    setFormActive(type);
  }

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold">
          <h2 className=" lg:text-3xl text-2xl mb-10">Eventos</h2>
        </div>

        <div className="mb-10 flex flex-wrap max-w-[550px] m-auto">
          <div className="w-1/3">
            <ButtonForm
              handdleClick={(e) => {
                handdleChangeTypeForm(e, type_form.por_evento);
              }}
              className={`${
                formActive == type_form.por_evento
                  ? "bg-[#693CBA] text-white"
                  : "bg-gray-300 text-gray-600"
              }  w-[100%] py-3`}
            >
              Por evento
            </ButtonForm>
          </div>
          <div className="w-1/3">
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
              Por atleta
            </ButtonForm>
          </div>
          <div className="w-1/3">
            <ButtonForm
              handdleClick={(e) => {
                handdleChangeTypeForm(e, type_form.por_fecha);
              }}
              className={`${
                formActive == type_form.por_fecha
                  ? "bg-[#693CBA] text-white"
                  : "bg-gray-300 text-gray-600"
              }  w-[100%] py-3`}
            >
              Por fecha
            </ButtonForm>
          </div>
        </div>

        {formActive == type_form.por_evento && (
          <Formik
            initialValues={{
              event: "",
              date_event: "",
            }}
            validationSchema={formEventoSchema}
            onSubmit={handdleSubmitEvento}
          >
            {({ errors, touched }) => (
              <Form>
                {/* {console.log(errors, touched)} */}
                <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                  {/* Cédula del Atleta */}
                  <div className="md:w-1/2 p-3">
                    <Field name="event">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <SelectList
                            field={field}
                            labelClass="font-bold"
                            label="Seleccionar Evento"
                            id="event"
                          >
                            <option value="">Seleccionar Evento</option>
                            {createArrayRand().map((opt, i) => {
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

                    {errors.event && touched.event ? (
                      <ErrorMessageInput msg={errors.event} />
                    ) : null}
                  </div>

                  {/* Número de certificado de nacimiento */}
                  <div className="md:w-1/2 p-3">
                    <Field name="date_event">
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
                            label="Fecha del Evento"
                            id="numero_certificado_nacimiento"
                            placeholder="Fecha del Evento"
                          />
                        );
                      }}
                    </Field>

                    {errors.date_event && touched.date_event ? (
                      <ErrorMessageInput msg={errors.date_event} />
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

        {formActive == type_form.por_atleta && (
          <Formik
            initialValues={{
              ci_atleta: "",
            }}
            validationSchema={formAtletaSchema}
            onSubmit={handdleSubmitAtleta}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                  <div className="md:w-1/2 p-3 m-auto">
                    <Field name="ci_atleta">
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
                            id="ci_atleta"
                            placeholder="Cédula del Atleta"
                          >
                            <FontAwesomeIcon icon={faIdCard} />
                          </InputIcon>
                        );
                      }}
                    </Field>

                    {errors.ci_atleta && touched.ci_atleta ? (
                      <ErrorMessageInput msg={errors.ci_atleta} />
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

        {formActive == type_form.por_fecha && (
          <Formik
            initialValues={{
              anio: "",
              actividad_deportiva: "",
            }}
            validationSchema={formFechaSchema}
            onSubmit={handdleSubmitFecha}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                  <div className="md:w-1/2 p-3 m-auto">
                    <Field name="anio">
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
                            label="Año"
                            id="anio"
                            placeholder="Año"
                          />
                        );
                      }}
                    </Field>

                    {errors.anio && touched.anio ? (
                      <ErrorMessageInput msg={errors.anio} />
                    ) : null}
                  </div>

                  {/* Ordenados por */}
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
                            id="actividad_deportiva"
                          >
                            <option value="">
                              Seleccionar Actividad deportiva
                            </option>
                            {createArrayRand().map((data) => {
                              return (
                                <option key={data} value={data}>
                                  {data}
                                </option>
                              );
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

                  {/* ver registros */}
                  <div className="md:w-1/2 p-3 ">
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
