import React, { useState } from "react";
import { InputIcon } from "../../../components/form/InputIcon";
import { Field, Form, Formik } from "formik";
import { ButtonForm } from "../ButtonForm";
import Images from "../../../utils/images/images";

export const RedesSocialesForm = ({
  initialValues,
  validationSchema,
  handdleSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handdleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="">
            <div className="">
              <div className="mt-3 sm:flex flex-wrap text-white  m-auto">
                <div className="sm:w-1/2 p-3 m-auto">
                  <InputIcon placeholder="Instagram">
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                    <img src={Images.instagram} alt="" className="w-[18px]" />
                  </InputIcon>
                </div>
              </div>
              <div className="mt-3 sm:flex flex-wrap text-white  m-auto">
                <div className="sm:w-1/2 p-3 m-auto">
                  <InputIcon placeholder="LinkedIn">
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                    <img src={Images.linkedin} alt="" className="w-[18px]" />
                  </InputIcon>
                </div>
              </div>
              <div className="mt-3 sm:flex flex-wrap text-white  m-auto">
                <div className="sm:w-1/2 p-3 m-auto">
                  <InputIcon placeholder="twitter">
                    <img src={Images.twitter} alt="" className="w-[18px]" />
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                  </InputIcon>
                </div>
              </div>
              <div className="mt-3 sm:flex flex-wrap text-white  m-auto">
                <div className="sm:w-1/2 p-3 m-auto">
                  <InputIcon placeholder="Facebook">
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                    <img
                      src={Images.facebookIcon}
                      alt=""
                      className="w-[20px]"
                    />
                  </InputIcon>
                </div>
              </div>
              <div className="mt-3 mb-10 sm:flex flex-wrap text-white  m-auto">
                <div className="sm:w-1/2 p-3 m-auto">
                  <InputIcon placeholder="YouTube">
                    <img src={Images.youtube} alt="" className="w-[18px]" />
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                  </InputIcon>
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
                Guardar
              </ButtonForm>
            </div>
            <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
              <ButtonForm className="bg-white text-black  w-[100%]">
                Cancelar
              </ButtonForm>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
