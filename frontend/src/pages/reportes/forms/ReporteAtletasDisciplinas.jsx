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
import { redirect, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { createArrayRand, orden } from "../../../utils/helpers/selectsData";

const formSchema = Yup.object().shape({
  tipo_actividad: Yup.number().required("El campo es obligatorio."),
  disciplina: Yup.number().required("El campo es obligatorio."),
  order: Yup.string().required("El campo es obligatorio."),
});

export const ReporteAtletasDisciplinas = () => {
  const navigate = useNavigate();

  const order_report = [
    { id: "order_10", value: 10 },
    { id: "order_20", value: 20 },
    { id: "order_30", value: 30 },
    { id: "order_50", value: 50 },
    { id: "order_100", value: 100 },
  ];
  const [countData, setCountData] = useState(order_report[0].value);

  function handdleSubmit(e) {
    navigate("/reportes/reporte-atletas-por-disciplinas/info");
  }

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold">
          <h2 className=" lg:text-3xl text-2xl mb-10">
            Reporte Atletas por disciplinas
          </h2>
        </div>
        <Formik
          initialValues={{
            tipo_actividad: "",
            disciplina: "",
            order: "",
          }}
          validationSchema={formSchema}
          onSubmit={handdleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                {/* Tipo de actividad deportiva */}
                <div className="md:w-1/2 p-3">
                  {/* {console.log(errors)} */}
                  <Field name="tipo_actividad">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => {
                      return (
                        <SelectList
                          labelClass="font-bold"
                          label="Tipo de actividad deportiva"
                          id="actividad_disciplina"
                          field={field}
                        >
                          <option value="">
                            Seleccionar Tipo de actividad deportiva
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
                          labelClass="font-bold"
                          label="Disciplina"
                          id="disciplina_disciplina"
                          field={field}
                        >
                          <option value="">Seleccionar Disciplina</option>
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

                {/* Ordenados por */}
                <div className="md:w-1/2 p-3">
                  <Field name="order">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => {
                      return (
                        <SelectList
                          labelClass="font-bold"
                          label="Ordenados por"
                          id="order_disciplina"
                          field={field}
                        >
                          <option value="">Seleccionar opcion</option>
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
                <div className="md:w-1/2 p-3 ">
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
                        type="submit"
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
      </GraySection>
    </Admin>
  );
};
