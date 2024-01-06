import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Images from "../../utils/images/images";
import { AlertIcon } from "../alertsMessages/AlertIcon";
import { ButtonForm } from "../form/ButtonForm";
import { PublicSteps } from "../layout/PublicSteps";
import { StepsQuestions } from "../parents/StepsQuestions";

export default function SuccessfullLoginInformation({
  handleClick,
  currentStep,
  steps,
}) {
  return (
    // <StepsQuestions>
    //   <div className="h-full w-full flex flex-col justify-center items-center">
    //     <h3 className=" text-md sm:text- text-[#00D3E0] mt-6 sm:pt-2 pt-12">
    //       Paso 3 de 3
    //     </h3>
    //     <h2 className="text-3xl font-semibold text-white pt-6 pb-4">
    //       Registro Exitoso
    //     </h2>

    //     <div className="my-8 pb-3 w-full justify-center flex mb-4">
    //       <div className="w-4/6 flex justify-center">
    //         <div className="w-4/6 mx-8">
    //           <Link
    //             className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7]
    //                         hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium
    //                         rounded-full text-sm px-14 py-5 text-center mb-2"
    //             to="/login"
    //           >
    //             {" "}
    //             Aceptar
    //           </Link>
    //         </div>
    //         <div className="w-4/6 mx-8">
    //           <Link
    //             className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7]
    //                     hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium
    //                     rounded-full text-sm px-14 py-5 text-center mb-2"
    //             to="/login"
    //           >
    //             {" "}
    //             Cerrar
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </StepsQuestions>
    <PublicSteps bgImg={Images.voleibol_2}>
      <AlertIcon
        icon={<FontAwesomeIcon icon={faCircleCheck} className="text-5xl" />}
        // buttons={[
        //   { text: "Aceptar", link: "/dashboard" },
        //   { text: "Cerrar", link: "/dashboard" },
        // ]}
      >
        <h1 className="mb-10 ">Su registro ha sido realizado con éxito.</h1>
        {/* <p className="mb-10">
          Sigue el enlace enviado por correo electrónico para validar tu inicio
          de sesión
        </p> */}
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="">
            <Link to="/dashboard">
              <ButtonForm className="bg-[#693CBA] text-white w-full">
                Aceptar
              </ButtonForm>
            </Link>
          </div>
          <div className="">
            <Link to="/dashboard">
              <ButtonForm className="bg-white text-black w-full">
                Cerrar
              </ButtonForm>
            </Link>
          </div>
        </div>
      </AlertIcon>
    </PublicSteps>
  );
}
