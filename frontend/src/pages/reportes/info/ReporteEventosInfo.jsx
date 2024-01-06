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
import { ModalDialog } from "../../../components/ModalDialog";
import { PaginationBtn } from "../../../components/PaginationBtn";
import { GoBack } from "../../../components/parents/GoBack";
import { ItemAtletaEvent } from "../../../components/admin/ItemAtletaEvent";
import { documents } from "../../../utils/documents/documents";
import { add_aditional_data_fake } from "../../../utils/helpers/dataFakeRecord";
import Images from "../../../utils/images/images";
import { SelectList } from "../../../components/form/SelectList";

export const ReporteEventosInfo = () => {
  const [modalShow, setModalShow] = useState(false);

  const info_table = add_aditional_data_fake().slice(0, 9);
  const info_event = {
    deporte: "AGUAS ABIERTAS",
    funcion: "ATLETA",
    nombre_apellido: "APONTE TERAN RUTHSELI GUADALUPE",
    sexo: "F",
    nacionalidad: "VENEZOLANA",
    num_pasaporte: "166626063",
    date_ven_pasaporte: "3/16/20325",
    pais_procedencia: "CARACAS",
    date_salida: "18/11/2022",
    num_vuelo: 232323232,
    hora_llegada: "18/11/2022 13:23 PM",
    date_retorno: "11/27/2022",
    cant_atletas: 3,
  };
  const data_atletas = [
    {
      ci: "3442322",
      name: "Armando Graterol",
      passport_num: "323323323",
      passport_ven: "20/12/2023",
      user_category: "Espalda",
      activitie_sport: "Natación",
      img: Images.representante,
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
        <div className="flex flex-col sm:flex-row gap-[15px] items-center justify-between mb-10">
          <Link to="/reportes/atletas-por-genero">
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

        <div className=" text-[#693CBA] font-extrabold flex items-center mb-5 gap-[20px]">
          <div className="">
            <GoBack className="cursor-pointer flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#693CBA] text-white">
              <FontAwesomeIcon icon={faAngleLeft} />
            </GoBack>
          </div>

          <h2 className=" lg:text-3xl text-2xl">Historial de eventos</h2>
        </div>

        <div className=" max-w-[300px] mb-5">
          <SelectList
            label="Eventos deportivos"
            id="actividad_deportiva_caract"
          >
            <option value="">Seleccionar evento</option>
            {/* {optionsSelect.map((opt) => {
              return <option value={opt}>Opción {opt} </option>;
            })} */}
          </SelectList>
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
                    #
                  </th>
                  <th scope="col" class="py-4 px-6">
                    DEPORTE
                  </th>
                  <th scope="col" class="py-4 px-6">
                    FUNCION
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[200px]">
                    APELLIDOS Y NOMBRES
                  </th>
                  <th scope="col" class="py-4 px-6">
                    SEXO
                  </th>
                  <th scope="col" class="py-4 px-6">
                    NACIONALIDAD
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[200px]">
                    NÚMERO DEL PASAPORTE
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[250px]">
                    FECHA VENCIMIENTO PASAPORTE
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[250px]">
                    LUGAR / PAIS DE PROCEDENCIA
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[200px]">
                    FECHA DE SALIDA
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[200px]">
                    NUMERO DE VUELO
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[200px]">
                    HORA DE LLEGADA
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[200px]">
                    FECHA DE RETORNO
                  </th>
                  <th scope="col" class="py-4 px-6 min-w-[200px]">
                    CANT. ATLETAS
                  </th>
                </tr>
              </thead>
              <tbody class="[&>*:nth-child(even)]:bg-[#EBDFFF]">
                {info_table.map((data, i) => (
                  <tr
                    key={i}
                    class="text-gray-600 border-b-2 border-[#693CBA] border-solid "
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium  whitespace-nowrap text-gray-600"
                    >
                      {i + 1}
                    </th>
                    <td class="py-4 px-6">{info_event.deporte}</td>
                    <td class="py-4 px-6">{info_event.funcion}</td>
                    <td class="py-4 px-6">{info_event.nombre_apellido}</td>
                    <td class="py-4 px-6">{info_event.sexo}</td>
                    <td class="py-4 px-6">{info_event.nacionalidad}</td>
                    <td class="py-4 px-6">{info_event.num_pasaporte}</td>
                    <td class="py-4 px-6">{info_event.date_ven_pasaporte}</td>
                    <td class="py-4 px-6">{info_event.pais_procedencia}</td>
                    <td class="py-4 px-6">{info_event.date_salida}</td>
                    <td class="py-4 px-6">{info_event.num_vuelo}</td>
                    <td class="py-4 px-6">{info_event.hora_llegada}</td>
                    <td class="py-4 px-6">{info_event.date_retorno}</td>
                    <td class="py-4 px-6">
                      <span
                        className="cursor-pointer"
                        onClick={() => setModalShow(true)}
                      >
                        {info_event.cant_atletas}
                      </span>
                    </td>
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

      <ModalDialog
        center={true}
        width="max-w-7xl"
        handdleShow={setModalShow}
        show={modalShow}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {data_atletas.map((atleta, i) => (
            <div className="">
              <ItemAtletaEvent
                disabledCi={true}
                img={atleta.img}
                ci={atleta.ci}
                name={atleta.name}
                passport_num={atleta.passport_num}
                passport_ven={atleta.passport_ven}
                user_category={atleta.user_category}
                activitie_sport={atleta.activitie_sport}
                invalid={atleta.invalid}
              />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <ButtonForm
            handdleClick={() => setModalShow(false)}
            className="bg-[#693CBA] text-white w-full max-w-[300px] m-auto"
          >
            Listo
          </ButtonForm>
        </div>
      </ModalDialog>
    </Admin>
  );
};
