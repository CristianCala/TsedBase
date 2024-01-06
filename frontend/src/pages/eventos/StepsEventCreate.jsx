import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AtletaSelected } from "./AtletaSelected";
import { CedulaAtletasEvent } from "./CedulaAtletasEvent";
import { ConfirmAtletasWithDate } from "./ConfirmAtletasWithDate";
import { InfoEvemt } from "./InfoEvemt";
import { PreviewDataEvent } from "./PreviewDataEvent";

export const StepsEventCreate = () => {
  const query = new URLSearchParams(useLocation().search);
  const count_ci = query.get("count_ci");
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  if (!count_ci) {
    // navigate("/eventos/cantidad-de-atletas");
    return <Navigate to="/eventos/cantidad-de-atletas" />;
    // < to="/somewhere/else" />
  }

  function stepsRender(stepActual) {
    switch (stepActual) {
      case 1:
        return (
          <CedulaAtletasEvent
            countCi={count_ci}
            handdleStep={setStep}
            stepActual={step}
          />
        );
        break;
      case 2:
        return (
          <ConfirmAtletasWithDate
            countCi={count_ci}
            handdleStep={setStep}
            stepActual={step}
          />
        );
        break;
      case 3:
        return (
          <AtletaSelected
            countCi={count_ci}
            handdleStep={setStep}
            stepActual={step}
          />
        );
        break;
      case 4:
        return (
          <InfoEvemt
            countCi={count_ci}
            handdleStep={setStep}
            stepActual={step}
          />
        );
        break;
      case 5:
        return (
          <PreviewDataEvent
          // countCi={count_ci}
          // handdleStep={setStep}
          // stepActual={step}
          />
        );
        break;
    }
  }

  return stepsRender(step);
};
