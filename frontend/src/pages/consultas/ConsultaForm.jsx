import {
  faCircleExclamation,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/admin/modal/Alert";
import { GraySection } from "../../components/admin/parent/GraySection";
import { ButtonForm } from "../../components/form/ButtonForm";
import { Admin } from "../../components/layout/Admin";
import { ContainerForm } from "../../components/parents/ContainerForm";
import { GoBack } from "../../components/parents/GoBack";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessageInput } from "../../components/form/ErrorMessageInput";
import { InputWithSelect } from "../../components/form/InputWithSelect";
import { InputIcon } from "../../components/form/InputIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RadioCircleCustom } from "../../components/form/RadioCircleCustom";

const formSchema = Yup.object().shape({
  ci_atleta: Yup.number().positive().required("El campo es obligatorio."),
});

export const ConsultaForm = ({
  data_selects,
  handdleOptionsChecked,
  optionsChecked,
  handdleSubmitRecord,
}) => {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [optionsSelect, setOptionsSelect] = useState([]);
  //   console.log(optionsSelect);
  function handdleSubmit(values) {
    // const dataChecked = data_selects.filter((opt) => {
    //   return optionsSelect.includes(opt.value);
    // });

    // let obj_validate = {};
    // let obj_values_edit = {};
    // dataChecked.forEach((item) => {
    //   obj_validate = { ...obj_validate, ...(item.yup_validate || {}) };
    //   obj_values_edit = { ...obj_values_edit, ...(item.values_edit || {}) };
    // });
    // handdleOptionsChecked({
    //   ...optionsChecked,
    //   options_checked: [...dataChecked],
    //   yup_validation: { ...obj_validate },
    //   values_edit: { ...obj_values_edit },
    // });
    handdleSubmitRecord(values.ci_atleta);

    // setAlertSuccess(true);
  }

  const handdleChangeCheck = (e) => {
    const value = e.target.value;
    setOptionsSelect(
      !optionsSelect.includes(
        value
      ) /* * si el valor del unput existe en el array */
        ? [...optionsSelect, Number(value)] /* * si no existe lo agregamos */
        : optionsSelect.filter(
            (opt) => opt != value /* * si existe lo quitamos */
          )
    );
  };

  return (
    <div>
      <GraySection>
        <div className="text-[#693CBA] font-extrabold mb-10 text-center">
          <h2 className=" lg:text-3xl text-2xl">Consultas</h2>
          {/* <p>Asignación de atletas</p> */}
        </div>

        <ContainerForm>
          <Formik
            initialValues={{
              ci_atleta: "",
            }}
            validationSchema={formSchema}
            onSubmit={handdleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-[#E8E8E8] p-2 md:p-5   md:flex flex-wrap">
                  <div className="p-3 flex justify-center w-full">
                    {/* C.I atleta a representar */}
                    <div className="md:w-1/2 ">
                      <Field name="ci_atleta">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => {
                          return (
                            <InputIcon
                              labelClass="font-bold"
                              label="C.I atleta a representar:"
                              id="cedula_art_asig"
                              placeholder="C.I atleta a representar:"
                              type="number"
                              field={field}
                            >
                              <FontAwesomeIcon
                                icon={faIdCard}
                              ></FontAwesomeIcon>
                            </InputIcon>
                          );
                        }}
                      </Field>
                      {errors.ci_atleta && touched.ci_atleta ? (
                        <ErrorMessageInput msg={errors.ci_atleta} />
                      ) : null}
                    </div>
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
        icon={faCircleExclamation}
        className="bg-[#693CBA] text-white"
        show={alertSuccess}
        handdleShow={setAlertSuccess}
      >
        <h2 className="font-bold text-4xl mb-5">
          Cedula de identidad no existe en la base de datos
        </h2>
        <div className="flex justify-center">
          <ButtonForm
            handdleClick={() => {
              setAlertSuccess(false);
            }}
            className="bg-[#222332] w-[100%] max-w-[300px]"
          >
            Cerrar
          </ButtonForm>
        </div>
      </Alert>
    </div>
  );
};
