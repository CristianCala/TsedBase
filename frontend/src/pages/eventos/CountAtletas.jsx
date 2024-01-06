import React from "react";
import { GraySection } from "../../components/admin/parent/GraySection";
import { ButtonForm } from "../../components/form/ButtonForm";
import { Admin } from "../../components/layout/Admin";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessageInput } from "../../components/form/ErrorMessageInput";
import { InputIcon } from "../../components/form/InputIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const CountAtletas = () => {
  const formSchema = Yup.object().shape({
    count_ci: Yup.number()
      .positive()
      .max(100)
      .required("El campo es obligatorio."),
  });
  const navigate = useNavigate();
  const handdleSubmit = (value) => {
    navigate("/eventos/cedula-de-atletas?count_ci=" + value.count_ci);
  };

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl ">Evento</h2>
          <p className=" ">Crear nuevo evento</p>
        </div>

        <Formik
          initialValues={{
            count_ci: "",
          }}
          validationSchema={formSchema}
          onSubmit={handdleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="bg-[#E8E8E8] p-2 md:p-5 m-auto max-w-[700px] md:flex flex-wrap">
                <div className="w-full md:w-1/2 m-auto">
                  <Field name="count_ci">
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
                          label="Cantidad de atletas"
                          id="count_atl"
                          placeholder="Cantidad de atletas"
                        >
                          <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon>
                        </InputIcon>
                      );
                    }}
                  </Field>
                  {errors.count_ci && touched.count_ci ? (
                    <ErrorMessageInput msg={errors.count_ci} />
                  ) : null}
                </div>

                <div className="md:w-[100%] p-3 flex flex-wrap justify-center">
                  <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                    <ButtonForm
                      type="submit"
                      className="bg-[#693CBA] text-white  w-[100%]"
                    >
                      Continuar
                    </ButtonForm>
                  </div>
                  <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                    <ButtonForm className="bg-[#222332] text-white  w-[100%]">
                      Cancelar
                    </ButtonForm>
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
