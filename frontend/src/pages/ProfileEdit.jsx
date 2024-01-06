import { faCheckCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Alert } from "../components/admin/modal/Alert";
import { GraySection } from "../components/admin/parent/GraySection";
import { ButtonForm } from "../components/form/ButtonForm";
import { InputIcon } from "../components/form/InputIcon";
import { Admin } from "../components/layout/Admin";
import { ContainerForm } from "../components/parents/ContainerForm";
import { GoBack } from "../components/parents/GoBack";
import Images from "../utils/images/images";

export const ProfileEdit = () => {
  const [alertSuccess, setAlertSuccess] = useState(true);
  const handdleSubmit = (e) => {
    e.preventDefault();
    setAlertSuccess(true);
  };
  return (
    <Admin>
      <GraySection bg="bg-[#222332]">
        <div className="text-white text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl mb-1">Datos personales</h2>
        </div>

        <ContainerForm>
          <form
            onSubmit={handdleSubmit}
            className="flex flex-col md:flex-row flex-wrap "
          >
            <div className="md:w-1/2 p-5 flex justify-center md:justify-start items-center">
              <div className="w-full h-[250px] flex justify-center items-center  bg-white rounded-2xl text-center">
                <div className="">
                  <FontAwesomeIcon
                    className="text-[70px] mb-3"
                    icon={faUser}
                  ></FontAwesomeIcon>
                  <p className="font-extrabold">Editar perfil</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-5">
              <div className="flex flex-col gap-5 ">
                <div className="w-full">
                  <InputIcon placeholder="Instagram">
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                    <img src={Images.instagram} alt="" className="w-[18px]" />
                  </InputIcon>
                </div>
                <div className="w-full">
                  <InputIcon placeholder="LinkedIn">
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                    <img src={Images.linkedin} alt="" className="w-[18px]" />
                  </InputIcon>
                </div>
                <div className="w-full">
                  <InputIcon placeholder="twitter">
                    <img src={Images.twitter} alt="" className="w-[18px]" />
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                  </InputIcon>
                </div>
                <div className="w-full">
                  <InputIcon placeholder="Facebook">
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                    <img
                      src={Images.facebookIcon}
                      alt=""
                      className="w-[20px]"
                    />
                  </InputIcon>
                </div>
                <div className="w-full">
                  <InputIcon placeholder="YouTube">
                    <img src={Images.youtube} alt="" className="w-[18px]" />
                    {/* <FontAwesomeIcon icon={faLock}  /> */}
                  </InputIcon>
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
                <GoBack>
                  <ButtonForm className="bg-white text-black  w-[100%]">
                    Cancelar
                  </ButtonForm>
                </GoBack>
              </div>
            </div>
          </form>
        </ContainerForm>
      </GraySection>

      <Alert
        icon={faCheckCircle}
        className="bg-[#693CBA] text-white"
        show={alertSuccess}
        handdleShow={setAlertSuccess}
      >
        <h2 className="font-bold text-4xl mb-5">
          Datos actualizados con éxito
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
