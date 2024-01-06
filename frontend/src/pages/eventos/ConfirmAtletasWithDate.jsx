import React from "react";
import { ItemAtletaEvent } from "../../components/admin/ItemAtletaEvent";
import { GraySection } from "../../components/admin/parent/GraySection";
import { ButtonForm } from "../../components/form/ButtonForm";
import { Admin } from "../../components/layout/Admin";
import Images from "../../utils/images/images";

export const ConfirmAtletasWithDate = ({
  countCi,
  handdleStep,
  stepActual,
}) => {
  const data_atletas = [
    {
      ci: "3232322",
      name: "Samuel Graterol",
      passport_num: "323232323",
      passport_ven: "20/12/2023",
      user_category: "Espalda",
      activitie_sport: "Natación",
      img: Images.representanteDeportivo,
      invalid: true,
    },
    {
      ci: "3442322",
      name: "Armando Graterol",
      passport_num: "323323323",
      passport_ven: "20/12/2023",
      user_category: "Espalda",
      activitie_sport: "Natación",
      img: Images.representante,
    },
  ];

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl ">Evento</h2>
          <p className=" ">Crear nuevo evento</p>
        </div>

        <div className="p-2">
          <div className="md:w-[100%] p-3 ">
            <div className="mb-3">
              <label htmlFor="" className="font-bold mb-2 block">
                Cantidad de atletas
              </label>
              <p>{countCi}</p>
            </div>

            <div className="flex gap-2 flex-col">
              {data_atletas.map((atleta, i) => (
                <ItemAtletaEvent
                  handdleDelete={() => {}}
                  img={atleta.img}
                  ci={atleta.ci}
                  name={atleta.name}
                  passport_num={atleta.passport_num}
                  passport_ven={atleta.passport_ven}
                  user_category={atleta.user_category}
                  activitie_sport={atleta.activitie_sport}
                  invalid={atleta.invalid}
                />
              ))}
            </div>

            <div className="md:w-[100%] p-3 flex flex-wrap justify-center">
              <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                <ButtonForm
                  handdleClick={() => handdleStep(stepActual + 1)}
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
        </div>
      </GraySection>
    </Admin>
  );
};
