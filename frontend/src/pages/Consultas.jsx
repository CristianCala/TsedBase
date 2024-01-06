import React, { useState } from "react";
import { GraySection } from "../components/admin/parent/GraySection";
import { DatosAtleta } from "../components/form/DatosAtleta";
import { Admin } from "../components/layout/Admin";

import { ConsultaForm } from "./consultas/ConsultaForm";
import { ContainerForm } from "../components/parents/ContainerForm";
import { ConsultaShowEdit } from "./consultas/ConsultaShowEdit";

export const Consultas = () => {
  const [optionsChecked, setOptionsChecked] = useState({
    yup_validation: null,
    values_edit: null,
    options_checked: [],
  });
  // console.log(optionsChecked);
  const [cedulaActive, setCedulaActive] = useState(false);

  return (
    <Admin>
      {cedulaActive ? (
        <ConsultaShowEdit cedula={cedulaActive} />
      ) : (
        <ConsultaForm
          handdleOptionsChecked={setOptionsChecked}
          optionsChecked={optionsChecked}
          handdleSubmitRecord={setCedulaActive}
        />
      )}
    </Admin>
  );
};
