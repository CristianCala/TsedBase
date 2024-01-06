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
import { InputIcon } from "../../../components/form/InputIcon";
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { orden } from "../../../utils/helpers/selectsData";

export const ReporteAtletaEdades = () => {
  const navigate = useNavigate();

  const order_report = [
    { id: "order_10", value: 10 },
    { id: "order_20", value: 20 },
    { id: "order_30", value: 30 },
    { id: "order_50", value: 50 },
    { id: "order_100", value: 100 },
  ];
  const [countData, setCountData] = useState(order_report[0].value);

  const [desde, setDesde] = useState(0);

  const formSchema = Yup.object().shape({
    desde: Yup.number().required("El campo es obligatorio."),
    hasta: Yup.number()
      .moreThan(desde, "La edad debe ser mayor a " + desde)
      .required("El campo es obligatorio."),
    order: Yup.string().required("El campo es obligatorio."),
  });

  function handdleSubmit(e) {
    navigate("/reportes/reporte-atletas-por-edades/info");
  }

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold">
          <h2 className=" lg:text-3xl text-2xl mb-10">
            Reporte Atletas por rango de edades
          </h2>
        </div>
        <Formik
          initialValues={{
            desde: "",
            hasta: "",
            order: "",
          }}
          validationSchema={formSchema}
          onSubmit={handdleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                <div className="w-[100%]">
                  <h3 className="text-2xl mb-5 text-black font-extrabold text-center">
                    Reporte Atletas por rango de edades
                  </h3>
                </div>

                {/* Desde */}
                <div className="md:w-1/2 p-3">
                  {/* <SelectList labelClass="font-bold" label="Desde" id="desde_edad">
                <option value="">Seleccionar edad</option>
              </SelectList> */}
                  <Field name="desde">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => {
                      return (
                        <InputIcon
                          handdleChange={(e) => {
                            setDesde(e.target.value);
                            field.onChange(e);
                          }}
                          type="number"
                          field={field}
                          labelClass="font-bold"
                          label="Desde"
                          id="desde_edad"
                          placeholder="Desde"
                        />
                      );
                    }}
                  </Field>

                  {errors.desde && touched.desde ? (
                    <ErrorMessageInput msg={errors.desde} />
                  ) : null}
                </div>

                {/* Hasta */}
                <div className="md:w-1/2 p-3">
                  <Field name="hasta">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => {
                      return (
                        <InputIcon
                          type="number"
                          field={field}
                          labelClass="font-bold"
                          label="Hasta"
                          id="hasta_edad"
                          placeholder="Hasta"
                        />
                      );
                    }}
                  </Field>
                  {errors.hasta && touched.hasta ? (
                    <ErrorMessageInput msg={errors.hasta} />
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
                          field={field}
                          labelClass="font-bold"
                          label="Ordenados por"
                          id="orden_edad"
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
