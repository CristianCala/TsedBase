import {
  faAngleLeft,
  faFileExcel,
  faFilePdf,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraySection } from "../../../components/admin/parent/GraySection";
import { ButtonForm } from "../../../components/form/ButtonForm";
import { Dropdown } from "../../../components/form/Dropdown";
import { Admin } from "../../../components/layout/Admin";
import { PaginationBtn } from "../../../components/PaginationBtn";
import { GoBack } from "../../../components/parents/GoBack";
import { documents } from "../../../utils/documents/documents";
import { add_aditional_data_fake } from "../../../utils/helpers/dataFakeRecord";

export const ReporteAtletaVacunadosInfo = () => {
  const dataTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const info_table = add_aditional_data_fake().slice(0, 9);

  return (
    <Admin>
      <GraySection>
        <div className="flex flex-col sm:flex-row gap-[15px] items-center justify-between mb-10">
          <Link to="/reportes/reporte-atletas-vacunados">
            <ButtonForm
              type="submit"
              className="bg-[#693CBA] text-white w-[100%] sm:w-auto"
            >
              Realizar otra consulta
            </ButtonForm>
          </Link>

          <Dropdown
            containerClassName="w-[100%] sm:w-auto"
            className="flex justify-center items-center bg-[#693CBA] text-white w-[100%] sm:w-auto"
          >
            <a
              download
              href={documents.reporte_table}
              className="font-bold cursor-pointer text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 transition-all flex items-center"
            >
              <div className="w-[30px] h-[30px] rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <FontAwesomeIcon
                  icon={faFileExcel}
                  className="text-green-600 text-lg"
                />
              </div>
              Formato excel
            </a>
            <div className="font-bold cursor-pointer text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 transition-all flex items-center">
              <div className="w-[30px] h-[30px] rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="text-red-600 text-lg"
                />
              </div>
              Formato pdf
            </div>
          </Dropdown>
        </div>

        <div className=" text-[#693CBA] font-extrabold flex items-center mb-10 gap-[20px]">
          <div className="">
            <GoBack className="cursor-pointer flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#693CBA] text-white">
              <FontAwesomeIcon icon={faAngleLeft} />
            </GoBack>
          </div>

          <h2 className=" lg:text-3xl text-2xl">
            Reporte Atleta Vacunados Covid 19
          </h2>
        </div>

        <div className="">
          <div
            class="overflow-x-auto relative shadow-md sm:rounded-lg bg-white border-[#693CBA] border-solid"
            style={{ borderWidth: "1px" }}
          >
            <table class="text-center w-full text-sm  font-bold ">
              <thead class="text-xs uppercase bg-[#693CBA] text-white">
                <tr>
                  <th scope="col" class="py-4 px-6">
                    Actividad deportiva
                  </th>
                  <th scope="col" class="py-4 px-6">
                    Disciplina
                  </th>
                  <th scope="col" class="py-4 px-6">
                    Cédula o Nùmero de certificado de nacimiento
                  </th>
                  <th scope="col" class="py-4 px-6">
                    Primer nombre
                  </th>
                  <th scope="col" class="py-4 px-6">
                    Primer apellido
                  </th>
                  <th scope="col" class="py-4 px-6">
                    Vacunado
                  </th>
                  <th scope="col" class="py-4 px-6">
                    Número de Dosis
                  </th>
                </tr>
              </thead>
              <tbody class="[&>*:nth-child(even)]:bg-[#EBDFFF]">
                {info_table.map((data, i) => (
                  <tr class="text-gray-600 border-b-2 border-[#693CBA] border-solid ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium  whitespace-nowrap text-gray-600"
                    >
                      {data.deporte}
                    </th>
                    <td class="py-4 px-6">{data.disciplina}</td>
                    <td class="py-4 px-6">{data.num_cedula}</td>
                    <td class="py-4 px-6">{data.nombre}</td>
                    <td class="py-4 px-6">{data.apellido}</td>
                    <td class="py-4 px-6">{data.vacunado}</td>
                    <td class="py-4 px-6">{data.num_vacunas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-[15px] mt-10 flex-wrap">
            <PaginationBtn text={1} active={true} />
          </div>
        </div>
      </GraySection>
    </Admin>
  );
};
