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
import { ErrorMessageInput } from "../../../components/form/ErrorMessageInput";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createArrayRand } from "../../../utils/helpers/selectsData";

export const ReporteAtletasPorGenero = () => {
  const navigate = useNavigate();

  const order_report = [
    { id: "order_10", value: 10 },
    { id: "order_20", value: 20 },
    { id: "order_30", value: 30 },
    { id: "order_50", value: 50 },
    { id: "order_100", value: 100 },
  ];
  const [countData, setCountData] = useState(order_report[0].value);

  const formSchema = Yup.object().shape({
    genero: Yup.number().required("El campo es obligatorio."),
  });

  function handdleSubmit(e) {
    navigate("/reportes/atletas-por-genero/info");
  }

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold">
          <h2 className=" lg:text-3xl text-2xl mb-10">Atletas por Género</h2>
        </div>

        <Formik
          initialValues={{
            genero: "",
          }}
          validationSchema={formSchema}
          onSubmit={handdleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                {/* Género */}
                <div className="md:w-1/2 p-3">
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
                          id="genero"
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
                      <ButtonForm className="bg-[#222332] text-white  w-[100%]">
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
