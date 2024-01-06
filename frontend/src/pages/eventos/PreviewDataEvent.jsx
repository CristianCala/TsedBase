import React from "react";
import { GraySection } from "../../components/admin/parent/GraySection";
import { ButtonForm } from "../../components/form/ButtonForm";
import { Admin } from "../../components/layout/Admin";

export const PreviewDataEvent = () => {
  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl ">Evento</h2>
          <p>Chequeo de informacion ingresada</p>
        </div>
        <div className="flex flex-wrap max-w-[600px] m-auto mb-8">
          <div className="p-3 w-full">
            <div className="md:w-1/3 w-full m-auto">
              <label htmlFor="" className="font-bold mb-2 block">
                Evento Deportivo
              </label>
              <p>carrerta 10K canada</p>
            </div>
          </div>

          <div className="p-1 w-full md:w-1/3">
            <label htmlFor="" className="font-bold mb-2 block">
              Fecha de Salida
            </label>
            <p>10/28/12</p>
          </div>

          <div className="p-1 w-full md:w-1/3">
            <label htmlFor="" className="font-bold mb-2 block">
              Fecha de llegada
            </label>
            <p>9/23/16</p>
          </div>

          <div className="p-1 w-full md:w-1/3">
            <label htmlFor="" className="font-bold mb-2 block">
              Fecha de Retorno
            </label>
            <p>12/10/13</p>
          </div>

          <div className="p-1 w-full md:w-1/3">
            <label htmlFor="" className="font-bold mb-2 block">
              Número de Vuelo
            </label>
            <p>1212312</p>
          </div>

          <div className="p-1 w-full md:w-1/3">
            <label htmlFor="" className="font-bold mb-2 block">
              Pais de Procedencia
            </label>
            <p>Venezuela</p>
          </div>

          <div className="p-1 w-full md:w-1/3">
            <label htmlFor="" className="font-bold mb-2 block">
              País de Destino
            </label>
            <p>Canada</p>
          </div>
        </div>

        <div className="">
          <table class="text-center w-full text-sm  font-bold ">
            <thead class="text-xs uppercase bg-[#693CBA] text-white">
              <tr>
                <th scope="col" class="py-4 px-6">
                  Nombre y Apellido
                </th>
                <th scope="col" class="py-4 px-6">
                  N. Pasaporte
                </th>
                <th scope="col" class="py-4 px-6">
                  Ven. pasaporte
                </th>
                <th scope="col" class="py-4 px-6">
                  Categoria de Usuario
                </th>
                <th scope="col" class="py-4 px-6">
                  Tipo de Actividad deportiva
                </th>
                <th scope="col" class="py-4 px-6">
                  Cedula de indentidad representante/propia
                </th>
              </tr>
            </thead>
            <tbody class="[&>*:nth-child(even)]:bg-[#EBDFFF]">
              <tr class="text-gray-400 border-b-2 border-[#693CBA] border-solid ">
                <th class="py-4 px-6 font-medium  whitespace-nowrap ">
                  Armando Graterol
                </th>
                <td class="py-4 px-6">31231231231</td>
                <td class="py-4 px-6">5/7/16</td>
                <td class="py-4 px-6">espalda</td>
                <td class="py-4 px-6">Natación</td>
                <td class="py-4 px-6">232332232</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-2">
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
      </GraySection>
    </Admin>
  );
};
