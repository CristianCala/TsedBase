import React from "react";
import { Link } from "react-router-dom";

import { GraySection } from "../components/admin/parent/GraySection";

import { Admin } from "../components/layout/Admin";

import Images from "../utils/images/images";

export const DisiplinasPrincipales = () => {
  return (
    <Admin>
      <GraySection>
        <div className="text-[#693CBA] text-center font-extrabold">
          <h2 className=" lg:text-3xl text-2xl mb-1">
            Principales Disciplinas
          </h2>
          <p className="">Noticias deportivas</p>
        </div>

        <div className="max-w-[800px] m-auto mt-10  md:columns-2 lg:columns-3 revers">
          <Link to="/noticias-deportivas" className="flex p-3 justify-center">
            <img
              className="max-w-[150px] w-[100%]"
              src={Images.futbol}
              alt=""
            />
          </Link>
          <Link to="/noticias-deportivas" className="flex p-3 justify-center">
            <img
              className="max-w-[150px] w-[100%]"
              src={Images.ciclismo}
              alt=""
            />
          </Link>
          <Link to="/noticias-deportivas" className="flex p-3 justify-center">
            <img className="max-w-[150px] w-[100%]" src={Images.balet} alt="" />
          </Link>
          <Link to="/noticias-deportivas" className="flex p-3 justify-center">
            <img
              className="max-w-[150px] w-[100%]"
              src={Images.esgrima}
              alt=""
            />
          </Link>
          <Link to="/noticias-deportivas" className="flex p-3 justify-center">
            <img
              className="max-w-[150px] w-[100%]"
              src={Images.basketbol}
              alt=""
            />
          </Link>
          <Link to="/noticias-deportivas" className="flex p-3 justify-center">
            <img
              className="max-w-[150px] w-[100%]"
              src={Images.atletismo}
              alt=""
            />
          </Link>
        </div>
      </GraySection>
    </Admin>
  );
};
