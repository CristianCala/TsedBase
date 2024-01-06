import React from "react";
import { CardNoticias } from "../components/admin/CardNoticias";
import { GraySection } from "../components/admin/parent/GraySection";
import { Admin } from "../components/layout/Admin";
import { GoBack } from "../components/parents/GoBack";
import Images from "../utils/images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useGoogleLogin } from "@react-oauth/google";

export const NoticiasDeportivas = () => {
  // const log = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse),
  // });
  const dataCards = {
    avatar: { img: Images.representante, name: "Armando Graterol" },
    img: Images.Galeria6,
    title: "Lorem ipsum dolor sit.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum quasi sapiente ratione vero, atque amet!",
  };

  const arrNoticias = [
    dataCards,
    dataCards,
    dataCards,
    dataCards,
    dataCards,
    dataCards,
  ].map((el) => {
    return { ...el };
  });

  return (
    <Admin>
      <GraySection>
        <GoBack className="cursor-pointer flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#693CBA] text-white">
          <FontAwesomeIcon icon={faAngleLeft} />
        </GoBack>

        <div className="text-[#693CBA] text-center font-extrabold mb-10">
          <h2 className=" lg:text-3xl text-2xl mb-1">Noticias deportivas</h2>
          <p className="">de último minuto</p>
        </div>

        <div className="md:columns-2 lg:columns-3 space-y-4">
          {arrNoticias.map((data, i) => {
            return (
              //   <div className="">
              <CardNoticias
                key={i}
                avatar={data.avatar}
                img={data.img}
                title={data.title}
                text={data.text}
              />
              //   </div>
            );
          })}
        </div>
        {/* <div className="md:flex flex-wrap mt-10 ">
          {arrNoticias.map((data, i) => {
            return (
              <div className="md:w-1/2 lg:w-1/3 p-3">
                <CardNoticias
                  key={i}
                  avatar={data.avatar}
                  img={data.img}
                  title={data.title}
                  text={data.text}
                />
              </div>
            );
          })}
        </div> */}
      </GraySection>
    </Admin>
  );
};
