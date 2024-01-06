import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Alert } from "../../components/admin/modal/Alert";
import { GraySection } from "../../components/admin/parent/GraySection";
import { ButtonForm } from "../../components/form/ButtonForm";
import { InputIcon } from "../../components/form/InputIcon";
import { Admin } from "../../components/layout/Admin";

export const InfoEvemt = ({ countCi, handdleStep, stepActual }) => {
  const navigate = useNavigate();
  const [alertSuccess, setAlertSuccess] = useState(false);
  const handdleSubmit = (e) => {
    e.preventDefault();
    setAlertSuccess(true);
  };
  const redirectHide = () => {
    handdleStep(1 + stepActual);
    // alert("dsa");
    // navigate("/eventos/info-evento");
  };

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl ">Evento</h2>
          <p className=" ">Crear nuevo evento</p>
        </div>

        <div>
          <form action="" onSubmit={handdleSubmit}>
            <div className="md:w-[100%] p-3 flex flex-wrap">
              <div className="w-full p-3">
                <div className="m-auto md:w-1/3 ">
                  <InputIcon
                    labelClass="font-bold"
                    label="Evento Deportivo "
                    id="name_event"
                    placeholder="Evento Deportivo"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/3 p-3">
                <InputIcon
                  labelClass="font-bold"
                  label="Fecha de Salida"
                  id="date_salida"
                  type="date"
                  placeholder="Fecha de Salida"
                />
              </div>

              <div className="w-full md:w-1/3 p-3">
                <InputIcon
                  labelClass="font-bold"
                  label="Fecha de llegada "
                  id="date_llegada"
                  type="date"
                  placeholder="Fecha de llegada "
                />
              </div>

              <div className="w-full md:w-1/3 p-3">
                <InputIcon
                  labelClass="font-bold"
                  label="Fecha de Retorno"
                  id="date_retorno"
                  type="date"
                  placeholder="Fecha de Retorno"
                />
              </div>

              <div className="w-full md:w-1/3 p-3">
                <InputIcon
                  labelClass="font-bold"
                  label="Número de Vuelo"
                  id="num_vuelo"
                  type="number"
                  placeholder="Número de Vuelo"
                />
              </div>

              <div className="w-full md:w-1/3 p-3">
                <InputIcon
                  labelClass="font-bold"
                  label="Pais de Procedencoa"
                  id="country"
                  type="text"
                  placeholder="Pais de Procedencoa"
                />
              </div>

              <div className="w-full md:w-1/3 p-3">
                <InputIcon
                  labelClass="font-bold"
                  label="País de Destino"
                  id="country_destino"
                  type="text"
                  placeholder="País de Destino"
                />
              </div>

              <div className="w-full p-3 flex flex-wrap justify-center">
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
          </form>
        </div>
      </GraySection>

      <Alert
        redirectHide={redirectHide}
        icon={faCheckCircle}
        className="bg-[#693CBA] text-white"
        show={alertSuccess}
        handdleShow={setAlertSuccess}
      >
        <h2 className="font-bold text-4xl mb-5">
          Registro realizado con Éxito
        </h2>
        <div className="flex justify-center">
          <ButtonForm
            handdleClick={() => {
              setAlertSuccess(false);
              redirectHide();
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
