import React from "react";
import { GraySection } from "../components/admin/parent/GraySection";
import { Admin } from "../components/layout/Admin";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GoBack } from "../components/parents/GoBack";
import { ButtonForm } from "../components/form/ButtonForm";
import { InputIcon } from "../components/form/InputIcon";

export const ChangePasswordUserLog = () => {
  const initialValues = {
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("el password es obligatorio")
      .min(8, "el password debe tener al menos 6 caracteres"),
    passwordConfirmation: Yup.string()
      .required("re inserta el password")
      .min(8, "el password debe tener al menos 6 caracteres")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const handleSubmit = (values) => {
    //e.preventDefault();
    console.log(values);
    /*axios
            .post(' http://18.222.226.76/api/auth/login', {
                email: values.email,
                password: values.pass,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err.response.data);
            });*/
  };
  return (
    <Admin>
      <GraySection bg="bg-[#222332]">
        <div className="text-white text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl mb-1">Cambiar contraseña</h2>
        </div>

        <div className="">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="mb-8 mt-6  font-bold  leading-loose">
              <div className="max-w-[400px] w-full m-auto mb-[50px]">
                <div className="w-full mb-5">
                  <div className="mb-3">
                    <Field name="password">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputIcon
                            field={field}
                            type="password"
                            labelClass="font-bold text-white"
                            label="Nueva Contrasenia"
                            id="password"
                            placeholder="Ejem: *******"
                          />
                        );
                      }}
                    </Field>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div className="w-full mb-5">
                  <div className="mb-3">
                    <Field name="passwordConfirmation">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <InputIcon
                            field={field}
                            type="password"
                            labelClass="font-bold text-white"
                            label="Confirmar Contrasenia"
                            id="passwordConfirmation"
                            placeholder="Ejem: *******"
                          />
                        );
                      }}
                    </Field>
                  </div>
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                {/* <div>
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div> */}

                <p className="text-xs text-center text-white">
                  La contrasenia debe contener 8 caracteres con una letra
                  mayuscula y un caracter especial
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-[20px] max-w-[700px] w-full m-auto">
                <div className="">
                  <ButtonForm
                    className="bg-[#693CBA] text-white rounded-full w-full"
                    type="submit"
                  >
                    Aceptar
                  </ButtonForm>
                </div>
                <div className="">
                  <GoBack>
                    <ButtonForm className="bg-white text-black rounded-full w-full">
                      Cerrar
                    </ButtonForm>
                  </GoBack>
                </div>
                {/* 
                  <Link
                    to="/"
                    className="text-white w-1/2 bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Cerrar
                  </Link> */}
              </div>
            </Form>
          </Formik>
        </div>
      </GraySection>
    </Admin>
  );
};
