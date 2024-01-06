import {
  faImage,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraySection } from "../components/admin/parent/GraySection";
import { ButtonForm } from "../components/form/ButtonForm";
import { RadioCircleCustom } from "../components/form/RadioCircleCustom";
import { Admin } from "../components/layout/Admin";

export const Eventos = () => {
  const optionsCheck = { create_event: "create" };
  const [optionSelect, setOptionSelect] = useState(null);
  const navigate = useNavigate();

  const handdleChangeOption = (e) => {
    setOptionSelect(e.target.value);
  };

  const handdleClickContiue = (e) => {
    if (optionSelect) {
      switch (optionSelect) {
        case optionsCheck.create_event:
          navigate("/eventos/cantidad-de-atletas");
          break;
      }
    }
  };

  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold">
          <h2 className=" lg:text-3xl text-2xl mb-10">Eventos</h2>
        </div>

        <div className="flex justify-center mb-7">
          <RadioCircleCustom
            valueCheched={optionSelect}
            handdleChange={handdleChangeOption}
            // key={order.id}
            id="event_create"
            name="option"
            value={optionsCheck.create_event}
            className="p-4 rounded-lg w-[250px] h-[250px] bg-[#222332] text-white flex flex-col gap-3"
          >
            <FontAwesomeIcon
              className="text-5xl"
              icon={faPlusCircle}
            ></FontAwesomeIcon>
            <p className="text-xl">Crear evento</p>
          </RadioCircleCustom>
        </div>

        <div className="md:w-[100%] p-3 flex flex-wrap justify-center">
          <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
            <ButtonForm
              handdleClick={handdleClickContiue}
              disabled={!optionSelect}
              type="submit"
              className="bg-[#693CBA] text-white  w-[100%] "
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
      </GraySection>
    </Admin>
  );
};
