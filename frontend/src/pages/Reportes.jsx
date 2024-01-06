import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GraySection } from "../components/admin/parent/GraySection";
import { Admin } from "../components/layout/Admin";
import { SelectList } from "../components/form/SelectList";
import { ReporteBtn } from "../components/admin/ReporteBtn";
import Images from "../utils/images/images";
import { Link } from "react-router-dom";

export const Reportes = () => {
  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold">
          <h2 className=" lg:text-3xl text-2xl mb-10">Reportes</h2>
        </div>

        <div className="mb-10">
          <Link to="/reportes/reporte-atletas-por-disciplinas">
            <ReporteBtn
              text="Atletas por disciplinas"
              iconImg={Images.atletaDisciplina}
            />
          </Link>
        </div>

        <div className="mb-10">
          <Link to="/reportes/reporte-atletas-por-edades">
            <ReporteBtn
              text="Atletas por rango de edades"
              iconImg={Images.correrCalendar}
            />
          </Link>
        </div>

        <div className="mb-10">
          <Link to="/reportes/reporte-atletas-estatus-pasaporte">
            <ReporteBtn
              text="Estatus pasaporte de atletas"
              iconImg={Images.passportReport}
            />
          </Link>
        </div>
        <div className="mb-10">
          <Link to="/reportes/reporte-atletas-por-confirmar/info">
            <ReporteBtn
              text="Atletas con datos por confirmar por su representante deportivo"
              iconImg={Images.atletaDatoConfirmar}
            />
          </Link>
        </div>
        <div className="mb-10">
          <Link to="/reportes/reporte-atletas-indumentaria">
            <ReporteBtn
              text="Tallas Indumentaria de Atletas"
              iconImg={Images.camisetaReport}
            />
          </Link>
        </div>
        <div className="mb-10">
          <Link to="/reportes/reporte-atletas-vacunados">
            <ReporteBtn
              text="Estatus de vacunaciòn Covid 19 de atletas"
              iconImg={Images.vacunasReport}
            />
          </Link>
        </div>
        <div className="mb-10">
          <Link to="/reportes/reporte-representante-disciplina">
            <ReporteBtn
              text="Representantes deportivos por disciplina"
              iconImg={Images.correrMedallas}
            />
          </Link>
        </div>
        <div className="mb-10">
          <Link to="/reportes/atletas-por-representantes-deportivos">
            <ReporteBtn
              text="Atletas por representantes deportivos"
              iconImg={Images.correrUser}
            />
          </Link>
        </div>
        <div className="mb-10">
          <Link to="/reportes/atletas-por-genero">
            <ReporteBtn text="Atletas por Género" iconImg={Images.gender} />
          </Link>
        </div>
        <div className="">
          <Link to="/reportes/eventos">
            <ReporteBtn text="Eventos" iconImg={Images.events} />
          </Link>
        </div>
      </GraySection>
    </Admin>
  );
};
