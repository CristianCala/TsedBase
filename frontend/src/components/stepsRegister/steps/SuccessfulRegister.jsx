import { Link } from "react-router-dom";

export default function SuccessfulRegister({
  handleClick,
  currentStep,
  steps,
}) {
  return (
    <div className="h-full w-full flex flex-col justify-center items-cente">
      <div className="text-center">
        <h3 className=" text-md sm:text- text-[#00D3E0] mt-6 sm:pt-2 pt-12 ">
          Paso 3 de 3
        </h3>
        <h2 className="text-3xl font-semibold text-white pt-6 pb-4">
          Registro Exitoso
        </h2>
      </div>

      <div className="my-8 pb-3 w-full justify-center flex">
        <div className="w-full flex justify-center flex-wrap gap-5">
          <div className="min-w-[250px]">
            <Link
              className="text-white  bg-gradient-to-bl from-[#9662F1] to-[#673AB7] 
                            hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm  py-2.5 text-center block"
              to="/login"
            >
              Aceptar
            </Link>
          </div>
          <div className="min-w-[250px]">
            <Link
              className="text-white  bg-gradient-to-bl from-[#9662F1] to-[#673AB7] 
                            hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm  py-2.5 text-center block"
              to="/login"
            >
              Cerrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
